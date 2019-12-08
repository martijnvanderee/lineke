import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 10rem;
  margin: var(--spacingM);
  > label {
    color: white;
  }
`;

const TextAreaStyle = styled.textarea`
  border: none;
  font-size: var(--fontsizeS);
  width: 100%;
  height: 100%;
  color: var(--color);
  background-color: rgba(255, 255, 255, 0.24);
  padding-left: 1rem;
  padding-top: 1rem;
  border-radius: var(--borderRadiusS);
  margin-top: var(--spacingXL);
  :active {
    outline: none !important;
  }
  :focus {
    color: var(--color);
    outline: none !important;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

type Props = {
  className?: string;
  name: string;
};

export const TextArea: React.FunctionComponent<Props> = ({
  name,
  className
}) => (
  <Container>
    <label htmlFor="Please share details about your project">
      Please share details about your project:
    </label>
    <TextAreaStyle name={name} className={className}></TextAreaStyle>
  </Container>
);
