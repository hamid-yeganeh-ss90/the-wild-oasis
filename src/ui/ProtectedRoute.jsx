import PropTypes from "prop-types";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load authenticated user
  const { isLoading, isAuthenticated } = useUser();
  //2. check if is not Authenicated redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);
  //3. Get loading spinner while user is loading...
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4. if is not any problem, return app
  if (isAuthenticated) return <>{children}</>;
}

export default ProtectedRoute;
