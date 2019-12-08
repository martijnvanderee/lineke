import styled from "styled-components";
import { H2, Text } from "../../blocks";

const Container = styled.div`
  position: relative;
  height: 22rem;
  border-radius: var(--borderRadiusM);
  text-align: center;
  background-color: var(--bgColor);
  box-shadow: var(--basicBoxShadow);
`;

const LogoContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  width: calc(7rem);
  height: calc(7rem * 0.645);
  background-color: white;
  border-radius: calc(7rem * 0.1);
  box-shadow: rgba(97, 4, 95, 0.07) 0px 10px 40px 0px,
    rgba(62, 57, 107, 0.06) 0px 2px 9px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: inherit;
    height: inherit;
    background-image: inherit;
    border-radius: inherit;
    background-color: white;
  }
  &:before {
    transform: rotate(60deg);
  }
  &:after {
    transform: rotate(-60deg);
  }

  > i {
    position: relative;
    z-index: 1;
    font-size: 4rem;
    color: var(--logoColor);
    background: -moz-linear-gradient(top, #eccf13 0%, #1abebd 100%);
    background: -webkit-linear-gradient(top, #eccf13 0%, #1abebd 100%);
    background: linear-gradient(to bottom, #eccf13 0%, #1abebd 100%);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const H2Style = styled.h2`
  color: var(--color3);
  margin: 0;
  font-weight: 700;
`;

const Content = styled.div`
  padding: 4rem var(--spacingM);
`;

type Props = { logo: string; title: string; className?: string };

export const Card1: React.FunctionComponent<Props> = ({
  logo,
  title,
  children,
  className
}: any) => (
  <Container className={className}>
    <LogoContainer>
      <i className="material-icons">{logo}</i>
    </LogoContainer>
    <Content>
      <H2Style>{title}</H2Style>
      <Text>{children}</Text>
    </Content>
  </Container>
);
