import styled from "styled-components";

type Props = {};

const Container = styled.footer`
  background-color: blue;
  padding: 1rem var(--spacingM);
`;

export const Footer: React.FunctionComponent<Props> = () => (
  <Container>
    <h1>title</h1>
  </Container>
);
