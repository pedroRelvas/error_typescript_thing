import React from "react";
import global from "../global";

export default function Filho() {
  return (
    <>
      <button onClick={(global as any).isDivExtended.extendDivToggle}>
        Aumentar
      </button>
    </>
  );
}
