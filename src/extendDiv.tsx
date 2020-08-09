import { useState } from "react";

const ExpandMenu = () => {
  const [isDivExtended, setIsDivExtended] = useState(false);
  const extendDivToggle = () => setIsDivExtended(!isDivExtended);

  return { isDivExtended, extendDivToggle };
};

export default ExpandMenu;
