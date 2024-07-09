import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const token = useSelector(state=> state.login.token);
  return token ? <Outlet /> : <Navigate to="/login"/>
}

export default PrivateRouter