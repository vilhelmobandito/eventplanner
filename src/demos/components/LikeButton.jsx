import { useState } from "react";

function LikeButton() {
  const [check, setCheck] = useState(false);
  return (
    <button onClick={() => setCheck(!check)}>
      {check ? "Gefällt mir" : "Gefällt mir ✓"}
    </button>
  );
}

export default LikeButton;
