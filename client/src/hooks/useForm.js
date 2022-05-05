import { useState } from "react";

export default function useForm(initialState) {
  const [fields, setFields] = useState(initialState);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.id]: e.target.value });
  };

  return [fields, handleChange];
}
