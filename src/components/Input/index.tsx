/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, useEffect, useState } from "react";
import { InputContainer } from "./styles";
import {
  maskCPF,
  maskDate,
  maskFloat,
  maskInteger,
  maskPercent,
} from "./utils";

type Props = {
  id: string;
  label: string;
  mask: string;
  value: string;
  valueChanger: Dispatch<string>;
  regex?: RegExp;
};

export const Input = React.forwardRef(function Input(
  { id, label, mask, value, valueChanger, regex }: Props,
  ref
) {
  const [float, setFloat] = useState(false);

  function handleWrite(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement;
    const key = e.key;

    switch (mask) {
      case "integer":
        valueChanger(maskInteger(target.value));
        break;
      case "float":
        valueChanger(maskFloat(target.value));
        break;
      case "date":
        valueChanger(maskDate(target.value));
        break;
      case "cpf":
        valueChanger(maskCPF(target.value));
        break;
      case "percent":
        if (key === "Backspace") valueChanger(maskPercent(value.slice(0, -1)));
        else if (value === "% 10.00" && key === "0") valueChanger("% 100");
        else valueChanger(maskPercent(value + key));
        break;
      default:
        valueChanger(target.value);
    }
  }

  useEffect(() => {
    if (value !== "") setFloat(true);
  }, []);

  if (mask === "percent")
    return (
      <InputContainer float={float}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="text"
          value={value}
          onKeyUp={(e) => handleWrite(e as unknown as KeyboardEvent)}
          onFocus={() => setFloat(true)}
          onBlur={() => setFloat(false)}
        />
      </InputContainer>
    );
  else
    return (
      <InputContainer float={float}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => handleWrite(e as unknown as KeyboardEvent)}
          onFocus={() => setFloat(true)}
          onBlur={() => setFloat(false)}
        />
      </InputContainer>
    );
});
