import React, { useState } from "react";

const useInput = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const handleChange = (updatedValue) => {
    setState(updatedValue);
  };
  return [state, setState, handleChange];
};

export default useInput;
