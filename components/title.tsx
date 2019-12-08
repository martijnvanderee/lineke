import styled from "styled-components";

//styling
import { H1, Text } from "../blocks";

type props = {
  title: string;
};

export const Title: React.FunctionComponent<props> = ({ title, children }) => (
  <Container>
    <TitleStyle>{title}</TitleStyle>
    <Subtitle>{children}</Subtitle>
    <Span />
  </Container>
);

const Container = styled.div`
  margin: auto 0;
  text-align: center;
`;

const TitleStyle = styled(H1)`
  color: var(--color3);
  font-size: 5rem;
`;

const Subtitle = styled(Text)`
  font-size: 1.2em;
`;

const Span = styled.div`
  margin: 3rem 0;
  border-bottom: 1px solid #727878;
  opacity: 0.2;
`;
