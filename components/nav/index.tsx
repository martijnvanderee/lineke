//style
import S from "./style";
import { LinkButton1 } from "../../blocks";

//hooks
import { useScroll } from "../../hooks/useScroll";

type Props = {};

export const Nav: React.FunctionComponent<Props> = () => {
  const { isScrollTop } = useScroll();

  return (
    <S isScrollTop={isScrollTop}>
      <S.Logo src="/logo.png"></S.Logo>
      <S.Navbar>
        <S.NavLinks>
          <S.Hover>
            <S.NavLink>Home</S.NavLink>
          </S.Hover>
          <S.Hover>
            <S.NavLink>About</S.NavLink>
          </S.Hover>
          <S.Hover>
            <S.NavLink>Experiences</S.NavLink>
          </S.Hover>
          <S.Hover>
            <S.NavLink>Projects</S.NavLink>
          </S.Hover>
        </S.NavLinks>
        <S.Hover>
          <LinkButton1>Contact</LinkButton1>
        </S.Hover>
        <S.Hover>
          <S.I className="fab fa-linkedin" />
        </S.Hover>
      </S.Navbar>
    </S>
  );
};
