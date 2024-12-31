import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(children, document.body);
};

export default Portal;
