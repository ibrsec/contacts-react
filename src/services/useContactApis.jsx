

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contactsFetchFail, contactsFetchStart, contactsSuccessWithoutPayload, getContactsSuccess, getOneContactSuccess } from '../features/contactSlice';
import { toastErrorNotify, toastSuccessNotify } from '../helper/Toastify';
import { useNavigate } from 'react-router-dom';
import useLoginApis from './useLoginApis';

const useContactApis = () => {
const BASE_URL = process.env.REACT_APP_BASE_URL;
const CONTACTS_ENDPOINT = "contacts";
const url = `${BASE_URL}/${CONTACTS_ENDPOINT}`

const dispatch = useDispatch();
const navigate = useNavigate();
const {logoutApi} = useLoginApis();
const token = 'Bearer '+ useSelector(state => state.login.token);


const getContacts = async() => {
    const options = {
        method:"GET",
        headers:{
            Authorization: token,
        }
    }
    dispatch(contactsFetchStart());
    try {
        const response = await fetch(url,options)
        if(!response.ok){
            console.log(response.statusText); //?????????
            if(response.statusText === "Unauthorized"){
                logoutApi();
                throw new Error('Session has expired!')
            }
            throw new Error('Something went wrong!')
        }
        console.log('getContacts response =', response)
        const data = await response.json();
        console.log(data);
        dispatch(getContactsSuccess(data));
    } catch (error) {
        dispatch(contactsFetchFail())
        toastErrorNotify('Get Contacts is Failed! : ',error.message)
    }

}
const getOneContact = async(id) => {
    const options = {
        method:"GET",
        headers:{
            Authorization: token,
        }
    }
    dispatch(contactsFetchStart());
    try {
        const response = await fetch(url+"/"+id,options)
        if(!response.ok){
            console.log(response.statusText); //?????????
            if(response.statusText === "Unauthorized"){
                logoutApi();
                throw new Error('Session has expired!')
            }
            throw new Error('Something went wrong!')
        }
        console.log('get One Contact response =', response)
        const data = await response.json();
        console.log(data);
        dispatch(getOneContactSuccess(data));
    } catch (error) {
        dispatch(contactsFetchFail())
        toastErrorNotify('Get One Contact is Failed! : ',error.message)
    }

}
const createNewContact = async(body) => {
    const options = {
        method:"POST",
        headers:{
            Authorization: token,
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body)
    }
    dispatch(contactsFetchStart());
    try {
        const response = await fetch(url,options)
        if(!response.ok){
            console.log(response.statusText);
            if(response.statusText === "Unauthorized"){
                logoutApi();
                throw new Error('Session has expired!')
            }
            throw new Error('Something went wrong!')
        }
        console.log('postContact response =', response)
        getContacts();
        dispatch(contactsSuccessWithoutPayload());
        toastSuccessNotify('New contact is created!')
    } catch (error) {
        dispatch(contactsFetchFail())
        toastErrorNotify('Post new Contact is Failed! : ',error.message)
    }

}
const deleteContact = async(id) => {
    const options = {
        method:"DELETE",
        headers:{
            Authorization: token,
        }
    }
    dispatch(contactsFetchStart());
    try {
        const response = await fetch(url+"/"+id,options)
        if(!response.ok){
            console.log(response.statusText); //?????????
            if(response.statusText === "Unauthorized"){
                logoutApi();
                throw new Error('Session has expired!')
            }
            throw new Error('Something went wrong!')
        }
        console.log('delete Contact response =', response)
        dispatch(contactsSuccessWithoutPayload());
        getContacts();
        toastSuccessNotify("Contact is Deleted Successfully!")
    } catch (error) {
        dispatch(contactsFetchFail())
        toastErrorNotify('Delete Contact is Failed! : ',error.message)
    }

}


const updateContact = async(id,body) => {
    const options = {
        method:"PUT",
        headers:{
            Authorization: token,
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body)
    }
    dispatch(contactsFetchStart());
    try {
        const response = await fetch(url+"/"+id,options)
        if(!response.ok){
            console.log(response.statusText);
            if(response.statusText === "Unauthorized"){
                logoutApi();
                throw new Error('Session has expired!')
            }
            throw new Error('Something went wrong!')
        }
        console.log('updateContact response =', response)
        getContacts();
        dispatch(contactsSuccessWithoutPayload());
        toastSuccessNotify('Contact is updated!')
    } catch (error) {
        dispatch(contactsFetchFail())
        toastErrorNotify('Contact update is Failed! : ',error.message)
    }

}




  return {getContacts,createNewContact,getOneContact,deleteContact,updateContact,}
}

export default useContactApis