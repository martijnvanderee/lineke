import React from "react";
import styled from "styled-components";

type PropsStyle = {
  icon: string;
};
const Styled = styled.div<PropsStyle>`
  width: 30px;
  height: 30px;

  > input {
    opacity: 0;
    position: absolute;

    &:focus + label {
      outline: -webkit-focus-ring-color auto 5px;
    }
  }
  > input + label {
    border-radius: var(--borderRadiusXS);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: var(--borderRadiusS);
    &:hover {
      background-color: black;
    }
    &:hover::after {
      color: white;
    }
    &:after {
      content: "\f00c";
      font-family: "FontAwesome";
      font-weight: 900;
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: 24px;
      color: grey;
      transition: all 0.2s cubic-bezier(0.5, 0, 0, 3);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--borderRadiusS);
    }
  }

  > input:not(:checked) + label {
    &:after {
      transform: scale(0.4);
    }
  }

  > input:checked + label {
    &:after {
      transform: scale(1);
      color: white;
    }
    &:after {
      background-color: #88c937;
    }
  }
`;

type Props = {
  icon: string;
  handleChange: any;
  status: boolean;
  className?: string;
};

export const Checkbox: React.FunctionComponent<Props> = ({
  icon,
  handleChange,
  status,
  className
}) => {
  return (
    <Styled
      onClick={handleChange}
      onKeyDown={handleChange}
      icon={icon}
      className={className}
    >
      <input type="checkbox" checked={status} onChange={() => {}} />
      <label></label>
    </Styled>
  );
};
