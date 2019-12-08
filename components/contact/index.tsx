//components
import { Form } from "./form";

//style
import S from "./style";
import { Title } from "../title";

import styled from "styled-components";

type Props = {};

export const Contact: React.FunctionComponent<Props> = () => (
  <S>
    <ContentContainer>
      <Title title="Contact">
        do you have any questions? Interested if GraphCMS is the right choice
        for your project or do you want to know how to become a partner? Just
        fill out the form to make things happen!
      </Title>
      <FormContact>
        <Form />
        <ContactInformation>
          <Telefoon>
            <I className="material-icons">call</I>
            06-12027229
          </Telefoon>
          <Telefoon>
            <I className="material-icons">email</I>
            IkBenEenLekkerding@gmail.com
          </Telefoon>
          <Telefoon>
            <I className="fab fa-linkedin" /> https://www.linkedin.com/
          </Telefoon>
        </ContactInformation>
      </FormContact>
    </ContentContainer>
  </S>
);

const FormContact = styled.div`
  @media (min-width: 993px) {
    display: flex;
  }
`;

const ContactInformation = styled.div`
  width: 40rem;
  margin: 0 auto;
  position: relative;
  padding: 1rem 0;
  @media (max-width: 993px) {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #727878;
      border-top: 1px solid #727878;
      opacity: 0.2;
    }
  }

  @media (min-width: 993px) {
    margin-left: 3rem;
  }
`;

const Telefoon = styled.div`
  margin: 1rem 0;
`;

const I = styled.i`
  position: relative;
  height: 4rem;
  width: 4rem;
  text-align: center;
  padding: 1rem;
  margin-right: var(--spacingM);
  font-size: 1.5em;
  background-color: var(--color3);
  border-radius: var(--borderRadiusS);
  color: white;
  cursor: pointer;
  box-shadow: var(--basicBoxShadow);
  @media (min-width: 600px) {
    height: 4.5rem;
    width: 4.5rem;
  }

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

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  @media (min-width: 993px) {
    max-width: 800px;
  }
`;
