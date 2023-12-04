import { useNavigate } from "react-router-dom";
import useUserDetails from "../Custom hook/useUserDetails";
import { useEffect } from "react";

const Authenticated = ({ children }) => {
  const { service } = useUserDetails();
  const navigate = useNavigate();

  useEffect(() => {
    if (service.isLoading) return () => {};
    if (service.status == "error") {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [service.status, service.isLoading]);

  if (service.isLoading) {
    return <>Loading...</>;
  }
  return <>{children}</>;
};

export default Authenticated;
