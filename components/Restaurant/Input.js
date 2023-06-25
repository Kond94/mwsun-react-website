import React, { useContext } from "react";

import { Context } from "../../hooks/Context";

export default function Input({ type, name, index }) {
  const [items, updateItem] = useContext(Context);

  return (
    <input
      type='text'
      placeholder=''
      inputMode='numeric'
      pattern='[0-9]*'
      onChange={({ target }) => updateItem(type, index, target.value)}
      name={name.replace(" ", "-").toLowerCase()}
    />
  );
}
