import styled from "styled-components";

//component
import { Card1 } from "./card1";

export const EssentialStyle = styled(Card1)`
  --bgColor: white;
`;

type Props = { title: string };

export const Essential1: React.FunctionComponent<Props> = props => (
  <EssentialStyle logo="card_travel" {...props} />
);
export const Essential2: React.FunctionComponent<Props> = props => (
  <EssentialStyle logo="chat" {...props} />
);

export const Essential3: React.FunctionComponent<Props> = props => (
  <EssentialStyle logo="create" {...props} />
);

export const Essential4: React.FunctionComponent<Props> = props => (
  <EssentialStyle logo="battery_charging_full" {...props} />
);
