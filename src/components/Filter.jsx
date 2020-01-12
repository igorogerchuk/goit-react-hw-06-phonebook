import React from "react";

export default function Filter({ filter, changeFilter }) {
  return <input type="text" value={filter} onChange={changeFilter} />;
}
