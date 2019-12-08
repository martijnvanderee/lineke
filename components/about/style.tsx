import styled from "styled-components";

//style
import { lighten } from "polished";

//helpers
import { StyledNesting } from "../../helpers/styledNesting";

const Container = styled.div`
  padding: 5rem var(--spacingM);
  text-align: center;
  background-color: ${lighten(0.47, "#eccf13")};
`;

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  @media (min-width: 993px) {
    max-width: 1000px;
  }
`;
const MeContainer = styled.div`
  padding: 0 2rem;
  @media (min-width: 993px) {
    display: flex;
    margin-bottom: var(--spacingL);
  }
`;

const Photo = styled.img`
  background-color: blue;
  width: 400px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: var(--spacingL);
  @media (min-width: 600px) {
    margin-right: var(--spacingL);
  }
`;

const StoryAboutMe = styled.div`
  position: relative;
  margin-bottom: 6rem;
  padding-bottom: 3rem;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #727878;
    opacity: 0.2;
  }
`;

export default StyledNesting(Container, {
  ContentContainer,
  MeContainer,
  Photo,
  StoryAboutMe
});
