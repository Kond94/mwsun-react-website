import { AppContext } from "../context/AllContext";
import { useContext } from "react";

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
