import styled from "styled-components";

//helpers
import { StyledNesting } from "../../../helpers/styledNesting";

const Container = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Essentialflex = styled.div`
  margin-bottom: 5rem;
  @media (min-width: 600px) {
    padding: 0 var(--spacingS);
  }
  @media (min-width: 993px) {
    flex-basis: 50%;
    padding: 0 var(--spacingL);
  }
`;

export default StyledNesting(Container, {
  Essentialflex
});
