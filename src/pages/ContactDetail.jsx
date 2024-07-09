import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useContactApis from '../services/useContactApis';
import { useSelector } from 'react-redux';

const ContactDetail = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const  {getOneContact} = useContactApis()
  const oneContact = useSelector(state=> state.contacts.oneContact);
  useEffect(()=> {
    getOneContact(id);
  },[])
  return (
    <div className='contact-detail'>
      <h4>Contact Detail of {oneContact?.name}</h4>
      <div>
        <span>Name:</span>
        <span>{oneContact?.name}</span>
      </div>
      <div>
        <span>Email:</span>
        <span>{oneContact?.email}</span>
      </div>
      <div>
        <span>Phone:</span>
        <span>{oneContact?.phone}</span>
      </div>
      <div><button onClick={()=>navigate('/home')} >Back</button></div>
      </div>
  )
}

export default ContactDetail