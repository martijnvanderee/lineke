import styled from "styled-components";

//style
import { Input1, TextArea1, FormSubmitButton } from "../../blocks/index";
import S from "./style";

const Container = styled.div``;

const FormStyle = styled.form`
  border-radius: var(--borderRadiusS);
  background-color: var(--color1);
  width: 40rem;
  padding: var(--spacingS);
`;

export const Form = () => {
  return (
    <S.ContainerForm>
      <S.Form
        action="https://mailthis.to/mrtjnvanderee@gmail.com"
        method="POST"
        encType="multipart/form-data"
      >
        <Input1 type="text" name="name" placeholder="Your name" />
        <Input1 type="text" name="lastName" placeholder="Last name" />
        <Input1 type="email" name="_replyto" placeholder="Your email" />
        <Input1 type="text" name="phoneNumber" placeholder="Your phonenumber" />
        <TextArea1 name="message"></TextArea1>
        <FormSubmitButton value="Send">Submit</FormSubmitButton>
      </S.Form>
    </S.ContainerForm>
  );
};
