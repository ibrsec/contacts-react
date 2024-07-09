import { useState } from "react";
import ContactsList from "../components/ContactsList";
import ContactForm from "../components/ContactForm";


const Home = () => {
  
  const [editModal,setEditModal] = useState({
    open:false,item:{}
  })
  return (
    <div className="wrapper">
      <h4 className="form-header">Contacts</h4>
      <ContactForm editModal={editModal} setEditModal={setEditModal}/>
      <ContactsList editModal={editModal} setEditModal={setEditModal}/>
    </div>
  );
};

export default Home;
