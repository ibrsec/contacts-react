import React, { useEffect, useState } from "react";
import useContactApis from "../services/useContactApis";
import { toastWarnNotify } from "../helper/Toastify";

const ContactForm = ({ editModal, setEditModal }) => {
  const { createNewContact,updateContact } = useContactApis();
  const [fields, setFields] = useState({
    name: editModal.open ? editModal.item.name : "",
    email: editModal.open ? editModal.item.email : "",
    phone: editModal.open ? editModal.item.phone : "",
  });
  useEffect(()=>{
    setFields({
      name: editModal.open ? editModal.item.name : "",
      email: editModal.open ? editModal.item.email : "",
      phone: editModal.open ? editModal.item.phone : "",
    })
  },[editModal])
  const changeHandle = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
    if (!fields.name || !fields.email || !fields.phone) {
      toastWarnNotify("All fields are mandatory!");
      return;
    }
    if (
      fields.name.length > 20 ||
      fields.email.length > 20 ||
      fields.phone.length > 20
    ) {
      toastWarnNotify("Field lengths cant be longer than 20 character!");
      return;
    }
    createNewContact(fields);
    setFields({
      name: "",
      email: "",
      phone: "",
    });
  };
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
    if (!fields.name || !fields.email || !fields.phone) {
      toastWarnNotify("All fields are mandatory!");
      return;
    }
    if (
      fields.name.length > 20 ||
      fields.email.length > 20 ||
      fields.phone.length > 20
    ) {
      toastWarnNotify("Field lengths cant be longer than 20 character!");
      return;
    }
    updateContact(editModal.item._id,fields);
    setEditModal({open:false,item:{}})
    setFields({
      name: "",
      email: "",
      phone: "",
    });
  };
  return (
    <form className="box" onSubmit={editModal.open ? handleUpdateSubmit : handleCreateSubmit}>
      <div className="input-box">
        <label htmlFor="name">Name</label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Name"
          value={fields.name}
          onChange={changeHandle}
        />
      </div>
      <div className="input-box">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={fields.email}
          onChange={changeHandle}
        />
      </div>
      <div className="input-box">
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={fields.phone}
          onChange={changeHandle}
        />
      </div>

      <div>
      {editModal.open ? 
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"}}>
      <button className="form-submit" style={{flexBasis:"50%"}} type="submit">Update</button>
      <button className="form-submit" style={{flexBasis:"50%"}} type="button" onClick={()=>setEditModal({open:false,item:{}})} >Cancel</button>
      </div>
      :
      <button className="form-submit" type="submit" style={{width:"100%"}}>
        Create new
      </button>
      }
      </div>
    </form>
  );
};

export default ContactForm;
