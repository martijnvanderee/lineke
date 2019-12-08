import styled from "styled-components";
import { lighten } from "polished";

//helpers
import { StyledNesting } from "../../helpers/styledNesting";

type PropsContainer = { isScrollTop: boolean };

const Container = styled.nav<PropsContainer>`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  padding: var(--spacingXS) 3rem;
  z-index: 10;
  transition: padding var(--basicTransition);
  @media (min-width: 600px) {
    padding: ${({ isScrollTop }) =>
      isScrollTop ? `var(--spacingXS) 3rem` : `3rem 3rem`};
  }
  ${({ isScrollTop }) =>
    isScrollTop
      ? ` box-shadow:var(--basicBoxShadow);
      background-color:${lighten(0.05, `#11817d`)};`
      : `background-color:"transparent"`}
`;

const Logo = styled.img`
  height: 5rem;
`;

const Navbar = styled.div`
  display: flex;
`;

const NavLinks = styled.div`
  display: flex;
  margin: auto 0;
`;

const NavLink = styled.a`
  margin: 0 var(--spacingXS);
  font-size: 0.75em;
  cursor: pointer;
  color: rgb(211, 211, 211);
  @media (min-width: 600px) {
    margin: 0 var(--spacingS);
    font-size: var(--fontsizeS);
  }
`;

const Hover = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0;
  :hover {
    > * {
      margin-bottom: 4px;
    }
  }
`;

const I = styled.i`
  position: relative;
  height: 4rem;
  width: 4rem;
  text-align: center;
  padding: 1rem;
  margin-left: var(--spacingM);
  font-size: 1.5em;
  background-color: var(--color2);
  border-radius: var(--borderRadiusS);
  color: white;
  cursor: pointer;
  box-shadow: var(--basicBoxShadow);
  @media (min-width: 600px) {
    height: 4.5rem;
    width: 4.5rem;
  }
`;

export default StyledNesting(Container, {
  Logo,
  Navbar,
  NavLinks,
  NavLink,
  Hover,
  I
});
