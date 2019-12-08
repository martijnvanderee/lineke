import styled from "styled-components";
import { useState } from "react";

import { H1, H3, H4, H5, Text, Checkbox1 } from "../../blocks";

const JobTitle = styled(H4)`
  font-weight: 900;
  font-size: 2rem;
  margin-right: 1rem;
  margin-left: 1rem;
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
  cursor: pointer;
`;

const ContainerJob = styled.div`
  margin-top: 2rem;
`;

type PropsContent = { isOpen: boolean };
const Content = styled.div<PropsContent>`
  display: ${props => (props.isOpen ? "block" : "none")};
`;

export const JobDescription: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <ContainerJob>
      <ContainerJobTitle>
        <Checkbox1 handleChange={() => setIsOpen(!isOpen)} status={isOpen} />
        <JobTitle>Plant Manager</JobTitle>
        <Date>Mar 2014 - May 2014</Date>
      </ContainerJobTitle>
      <Content isOpen={isOpen}>
        <SmallDiscription>Course - Gamification (course)</SmallDiscription>
        <LargeDiscription>
          Gamification is the application of game elements and digital game
          design techniques to non-game problems, such as business and social
          impact challenges. This course thought me about the mechanisms of
          gamification, why it has such tremendous potential, and how to use it
          effectively
        </LargeDiscription>
        <Place>BBIO, Bilthoven</Place>
      </Content>
    </ContainerJob>
  );
};
