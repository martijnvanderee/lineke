import styled from "styled-components";

const ButtonStyle = styled.button`
  position: relative;
  background-color: var(--bgColor);
  color: var(--color);
  border-radius: var(--radius);
  padding: var(--padding);
  cursor: pointer;
  border: none;
  -webkit-transition: background-color var(--basicTransition);
  -moz-transition: background-color var(--basicTransition);
  -o-transition: background-color var(--basicTransition);
  transition: background-color var(--basicTransition);
  :hover {
    transform: translateY(-0.4rem);
  }
`;

type Props = { value: string; className?: string };

export const SubmitButton: React.FunctionComponent<Props> = ({
  children,
  className,
  value
}) => (
  <ButtonStyle value={value} type="submit" className={className}>
    {children}
  </ButtonStyle>
);
