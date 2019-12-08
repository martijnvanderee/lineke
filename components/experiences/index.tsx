import styled from "styled-components";
import { lighten } from "polished";

import { H1, H3, H4, H5, Text } from "../../blocks";

import { JobDescription } from "./jobDescription";

export const Experiences: React.FunctionComponent<Props> = () => (
  <Container>
    <ContentContainer>
      <TitleContainer>
        <Title>Experiences</Title>
        <Quote>
          “Protons give an atom its identity, electrons its personality.”
        </Quote>
        <Quote>- Bill Bryson, A short history of nearly everything</Quote>
        <Span />
      </TitleContainer>
      <Education>
        <SubTitle>Education</SubTitle>
        <JobDescription />
        <JobDescription />
        <JobDescription />
      </Education>
      <Span />
      <Education>
        <SubTitle>Professional Experience</SubTitle>
        <div>
          <JobTitle>Plant Manager</JobTitle>
          <Date>2015-2018</Date>
          <SmallDiscription>Course - Gamification (course)</SmallDiscription>
          <LargeDiscription>
            Gamification is the application of game elements and digital game
            design techniques to non-game problems, such as business and social
            impact challenges. This course thought me about the mechanisms of
            gamification, why it has such tremendous potential, and how to use
            it effectively
          </LargeDiscription>
          <Place>BBIO, Bilthoven</Place>
        </div>
      </Education>
    </ContentContainer>
  </Container>
);

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Container = styled.div`
  background-color: ${lighten(0.4, "#eccf13")};
  padding: 5rem 3rem;
`;

const Quote = styled(Text)`
  font-size: 1.2em;
  line-height: 0.5;
`;

const Title = styled(H1)`
  color: var(--color3);
  font-size: 5rem;
  font-weight: 300;
`;

const TitleContainer = styled.div`
  margin: auto 0;
  text-align: center;
`;

const Span = styled.div`
  margin: 3rem 0;
  border-bottom: 1px solid #727878;
  opacity: 0.2;
`;

const Education = styled.div``;

const SubTitle = styled(H3)`
  color: var(--color3);
  font-size: 3rem;
  font-weight: 300;
`;

const JobTitle = styled(H4)`
  font-weight: 900;
  font-size: 2rem;
  margin-right: 1rem;
`;

const Date = styled(Text)``;

const SmallDiscription = styled(H5)`
  font-weight: 900;
  font-size: 1.5rem;
`;

const LargeDiscription = styled(Text)`
  margin-bottom: 0;
`;

const Place = styled(Text)`
  margin: 0;
  color: var(--color3);
`;

const ContainerJobTitle = styled.div`
  display: flex;
`;

const ContainerJob = styled.div`
  margin-top: 2rem;
`;

type Props = {};
