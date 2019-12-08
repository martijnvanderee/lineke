import styled from "styled-components";

//component
import { LinkButton } from "./linkButton";

import { SubmitButton } from "./submitButton";

const LinkButtonStyle = styled(LinkButton)`
  --color: white;
  --bgColor: var(--color2);
  --radius: var(--borderRadiusS);
  margin: auto 0;
  box-shadow: var(--basicBoxShadow);
  height: 4rem;
  font-size: 0.75em;
  @media (min-width: 600px) {
    height: 4.5rem;
    font-size: var(--fontsizeS);
  }
`;

type Props = {};

export const LinkButton1: React.FunctionComponent<Props> = props => (
  <LinkButtonStyle link="#" {...props} />
);

const SubmitButtonStyle = styled(SubmitButton)`
  --color: white;
  --bgColor: var(--color3);
  --radius: var(--borderRadiusS);
  --padding: var(--spacingS) var(--spacingM);
  display: block;
  margin: 6rem auto 0 auto;
  &:after {
    content: "";
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: calc(100% - 0.4rem);
    height: calc(100% - 0.4rem);
    border: 1px solid white;
    border-radius: var(--borderRadiusS);
  }
`;

type PropsFormSubmitButton = {
  value: string;
};

export const FormSubmitButton: React.FunctionComponent<
  PropsFormSubmitButton
> = props => <SubmitButtonStyle {...props} />;
