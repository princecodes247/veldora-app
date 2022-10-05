import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const isActive = (path, pos = 1) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  if (path !== "/" && location.pathname.split("/")[1] === path) {
    return setIsActive(true);
  } else {
    return setIsActive(false);
  }

  return isActive;
};

export default {
  isActive,
};
