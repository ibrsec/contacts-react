
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFetchFail, loginFetchStart, loginSuccess, logoutSuccess, registerSuccess } from '../features/loginSlice';
import { toastErrorNotify, toastSuccessNotify } from '../helper/Toastify';

const useLoginApis = () => {

  const BASE_URL = process.env.REACT_APP_BASE_URL; 
const navigate = useNavigate();
const dispatch = useDispatch();

    const loginApi = async (body) => {
        const options = {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        };
        const url = BASE_URL + "/users/login";
        console.log(BASE_URL);
        console.log(url);
        dispatch(loginFetchStart());
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          console.log('login = ',response);
          const data = await response.json();
          // const accessToken = data?.accessToken;
          console.log(data);
          // console.log(accessToken);
        //   process.env.accessToken = accessToken;
        dispatch(loginSuccess(data))
        toastSuccessNotify("Logined Succefull!y!")
      navigate('/home');
        } catch (error) {
          dispatch(loginFetchFail)
          console.log(error);
          toastErrorNotify("Login is Failed!")
        }
      };

      const registerApi = async (body) => {
        const options = {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        };
        const url = BASE_URL + "/users/register";
        dispatch(loginFetchStart());
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          console.log('register =',response);
        dispatch(registerSuccess())
        toastSuccessNotify("Registered Succefully!!")
      navigate('/login');
        } catch (error) {
          dispatch(loginFetchFail)
          console.log(error);
          toastErrorNotify("Register is Failed!")
        }
      };

      const logoutApi = async () => {
        dispatch(logoutSuccess())
        toastSuccessNotify("Logged out Succefully!!")
        navigate('/login');
        

      };



  return {loginApi,registerApi,logoutApi,}
}

export default useLoginApis