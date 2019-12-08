import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 4rem;
  margin: var(--spacingM);
`;

const Span = styled.span`
  content: "";
  display: block;
  position: absolute;
  height: 100%;
  width: 0;
  bottom: 0;
  left: 0;
  border-bottom: 0.1rem solid var(--color);
  -webkit-transition: var(--basicTransition);
  transition: var(--basicTransition);
`;

const I = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  -webkit-transition: var(--basicTransition);
  transition: var(--basicTransition);
  color: var(--color);
  font-size: var(--fontsizeS);
`;

const InputStyle = styled.input`
  border: none;
  font-size: var(--fontsizeS);
  width: 100%;
  height: 100%;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  color: var(--color);
  background-color: transparent;
  padding-left: 3rem;
  &::-webkit-input-placeholder {
    color: var(--color);
  }
  :active {
    outline: none !important;
  }
  :focus {
    color: var(--color);
    outline: none !important;
    padding-left: 0;
  }
  &:focus::placeholder {
    opacity: 0;
  }
  &:focus ~ ${Span} {
    width: 100%;
  }
  &:focus ~ ${I} {
    top: 10%;
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
  type: string;
  name: string;
  placeholder: string;
  icon: string;
  className?: string;
};

export const Input: React.FunctionComponent<Props> = ({
  type,
  name,
  placeholder,
  icon,
  className
}) => (
  <Container className={className}>
    <label htmlFor={name}></label>
    <InputStyle type={type} name={name} placeholder={placeholder} required />
    <Span />
    <I className="material-icons">{icon}</I>
  </Container>
);
