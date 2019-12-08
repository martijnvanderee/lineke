//components
import { Essentials } from "./essentials";
import { Title } from "../title";

//style
import S from "./style";

type Props = {};

export const About: React.FunctionComponent<Props> = () => (
  <S>
    <S.ContentContainer>
      <Title title="About Me"> I am a fantastic engineer and super woman</Title>
      <Me />
      <Essentials />
    </S.ContentContainer>
  </S>
);

const Me = () => (
  <S.MeContainer>
    <S.Photo src="/lineke.jpg"></S.Photo>
    <S.StoryAboutMe>
      Lineke Pelleboer MSc. | In 2000 I obtained my master’s degree in
      bioprocess engineering and after graduation I have been mainly working in
      the vaccine industry. I held different positions in several companies with
      a strong focus on drug substance manufacturing processes on the interface
      between development and manufacturing. I executed but also led technology
      transfers, process optimisation studies, validation projects and
      troubleshooting activities. In addition, I became an experienced project
      manager and was a CMC leader at Solvay Pharmaceuticals and a project
      manager at Xendo Manufacturing.
    </S.StoryAboutMe>
  </S.MeContainer>
);
