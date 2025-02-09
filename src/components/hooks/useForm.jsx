import { useState } from "react";

export const useForm = (formulario) => {
  const [state, setState] = useState(
    // {
    // email: "test@test.com",
    // password: "123456",
    // }
    formulario
  );

  const onChange = (value, campo) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return {
    ...state,
    formulario: state,
    onChange,
  };
};
