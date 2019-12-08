import styled from "styled-components";

//components
import { Nav } from "./nav";

//style
import { H1, H4 } from "../blocks";

const Container = styled.header`
  position: relative;
  height: 50vh;
  display: flex;
  @media (min-width: 993px) {
    height: 100vh;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const H1style = styled(H1)`
  font-size: 3rem;
  letter-spacing: 0.2rem;
  font-weight: 900;
  @media (min-width: 993px) {
    font-size: 6rem;
  }
`;

const Span = styled.div`
  border: 1px rgba(255, 255, 255, 0.35) solid;
`;

const Content = styled.div`
  margin: auto;
  width: 400px;
  height: 100px;
  text-align: center;
  color: white;
  @media (min-width: 993px) {
    width: 600px;
  }
`;

type Props = {};

export const Header: React.FunctionComponent<Props> = () => (
  <Container>
    <Img src="/picture1.jpg" alt="background photo" />
    <Nav />
    <Content>
      <H1style>Lineke Pelleboer </H1style>
      <Span></Span>
      <H4>Our expert in Bioprocess Technology </H4>
    </Content>
  </Container>
);
