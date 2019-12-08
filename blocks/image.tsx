import styled from "styled-components";

type PropsStyle = {
  width: string;
};

const Container = styled.img<PropsStyle>`
  height: ${props => props.width};
  width: auto;
`;

type Props = {
  className?: string;
  image: string;
  width: string;
};

export const Image: React.FunctionComponent<Props> = ({
  className,
  image,
  width
}) => {
  return (
    <Container className={className} alt="" src={`/${image}`} width={width} />
  );
};
