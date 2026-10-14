import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  function handleChange(event) {}
  return (
    <>
      <label htmlFor="name">Name</label>

      <input type="text" id="name" value={name} onChange={handleChange} />
    </>
  );
}
export default NameInput;
