import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivtedRoutd = ({ children }) => {
  const { user, lodings } = useContext(AuthContext);
  const location = useLocation();
  if (lodings) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (!user) {
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivtedRoutd;
