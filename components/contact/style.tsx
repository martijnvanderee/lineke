import styled from "styled-components";
import { lighten } from "polished";

//helpers
import { StyledNesting } from "../../helpers/styledNesting";

const Container = styled.div`
  background-color: ${lighten(0.4, "#e6b81c")};
  padding: 5rem var(--spacingM);
`;

const ContainerForm = styled.div``;

const Form = styled.form`
  border-radius: var(--borderRadiusS);
  background-color: var(--color1);
  width: 40rem;
  padding: var(--spacingS);
  margin: 0 auto 2em auto;
`;

export default StyledNesting(Container, {
  ContainerForm,
  Form
});
