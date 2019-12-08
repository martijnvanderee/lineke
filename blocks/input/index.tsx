import styled from "styled-components";
import { Checkbox } from "./checkbox";

//component
import { Input } from "./input";
import { TextArea } from "./textArea";

export const Input1Style = styled(Input)`
  --color: white;
`;

export const TextArea1Style = styled(TextArea)`
  --color: white;
`;

type Props = {
  type: string;
  name: string;
  placeholder: string;
};

export const Input1: React.FunctionComponent<Props> = props => (
  <Input1Style {...props} icon="person" />
);

type PropsTextArea1 = {
  name: string;
};

export const TextArea1: React.FunctionComponent<PropsTextArea1> = props => (
  <TextArea1Style {...props} />
);

type PropsTypeCheckbox = {
  handleChange: any;
  status: boolean;
};

const CheckboxStyle = styled(Checkbox)`
  margin: auto 0;
`;

export const Checkbox1: React.FunctionComponent<PropsTypeCheckbox> = props => (
  <CheckboxStyle icon="\f00c" {...props} />
);
