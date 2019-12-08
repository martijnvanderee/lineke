import styled from "styled-components";

const ButtonStyle = styled.button`
  position: relative;
  background-color: var(--bgColor);
  color: var(--color);
  border-radius: var(--radius);
  cursor: pointer;
  border: none;
  -webkit-transition: background-color var(--basicTransition);
  -moz-transition: background-color var(--basicTransition);
  -o-transition: background-color var(--basicTransition);
  transition: background-color var(--basicTransition);
`;

type Props = { link: string; className?: string };

export const LinkButton: React.FunctionComponent<Props> = ({
  children,
  link,
  className
}) => <ButtonStyle className={className}>{children}</ButtonStyle>;
