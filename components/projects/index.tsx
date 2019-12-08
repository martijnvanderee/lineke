import styled from "styled-components";

//style
import { lighten } from "polished";
import { H1, Text } from "../../blocks";

const Container = styled.section`
  padding: 5rem var(--spacingM);
  background-color: ${lighten(0.47, "#eccf13")};
`;

type Props = {};

export const Projects: React.FunctionComponent<Props> = () => (
  <Container>
    <ContentContainer>
      <TitleContainer>
        <Title>Projects</Title>
        <Quote>“You can do anything you set your mind to.”</Quote>
        <Quote>- Benjamin Franklin</Quote>
        <Span />
      </TitleContainer>
      <Flex />
    </ContentContainer>
  </Container>
);

export const Flex: React.FunctionComponent = () => (
  <FlexContainer>
    <Essentialflex>
      <Essential1></Essential1>
    </Essentialflex>
    <Essentialflex>
      <Essential1></Essential1>
    </Essentialflex>
    <Essentialflex>
      <Essential1></Essential1>
    </Essentialflex>
    <Essentialflex>
      <Essential1></Essential1>
    </Essentialflex>
  </FlexContainer>
);

const Essential1 = styled.div`
  position: relative;
  background-image: url("/picture1.jpg");
  height: 22rem;
  width: 100%;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  box-shadow: var(--basicBoxShadow);
  border-radius: var(--borderRadiusL);
  cursor: pointer;
  &:hover {
    border: 1px solid white;

    &:before {
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;

      border-radius: var(--borderRadiusL);
      background: linear-gradient(
        40deg,
        rgba(26, 190, 189, 0.8),
        rgba(236, 207, 19, 0.8)
      );
    }
  }

  &:after {
    content: "";
    top: 0.5rem;
    left: 0.5rem;
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
    position: absolute;
    border: 1px solid white;
    border-radius: var(--borderRadiusL);
  }
`;
const FlexContainer = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Essentialflex = styled.div`
  position: relative;
  margin-bottom: 5rem;
  flex-basis: 100%;
  @media (min-width: 600px) {
    padding: 0 var(--spacingS);
  }
  @media (min-width: 993px) {
    flex-basis: 50%;
    padding: 0 var(--spacingL);
  }
`;

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  @media (min-width: 600px) {
    max-width: 600px;
  }
  @media (min-width: 993px) {
    max-width: 1000px;
  }
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

const Quote = styled(Text)`
  font-size: 1.2em;
  line-height: 0.5;
`;
