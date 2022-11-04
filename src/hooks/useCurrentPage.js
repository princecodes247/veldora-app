// import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useCurrentPage = (pos = 1) => {
  //   const [currentPage, setCurrentPage] = useState(null);
  const location = useLocation();
  //   useEffect(() => {
  //     setCurrentPage(location.pathname.split("/")[pos]);
  //   }, []);
  //   console.log(currentPage);
  return location.pathname.split("/")[pos];
  //   if (path !== "/" && location.pathname.split("/")[1] === path) {
  //     return setIsActive(true);
  //   } else {
  //     return setIsActive(false);
  //   }

  //   return isActive;
};

export default useCurrentPage;
