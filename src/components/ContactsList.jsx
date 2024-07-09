import { useEffect } from "react";
import useContactApis from "../services/useContactApis";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ContactsList = ({editModal,setEditModal}) => {
  const { getContacts,deleteContact, } = useContactApis();
  const contacts = useSelector((state) => state.contacts.contacts);
  const navigate = useNavigate();
  useEffect(() => {
    getContacts();
  }, []);
  const handleGoDetailPage = (id) => {
    navigate("detail/"+id)
  }

  return (
    <div className="contacts">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Acts</th>
          </tr>
          {contacts.length > 0 ? (
            contacts?.map((item) => (
              <tr  key={item?._id}>
                <td onClick={()=>handleGoDetailPage(item?._id)}>{item?.name}</td>
                <td onClick={()=>handleGoDetailPage(item?._id)}>{item?.email}</td>
                <td onClick={()=>handleGoDetailPage(item?._id)}>{item?.phone}</td>
                <td style={{
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"flex-end",
                  gap:"5px",
                  maxWidth:"50px",
                }}>
                  <span onClick={()=>setEditModal({open:!editModal.open,item})}>📝</span>
                  <span onClick={()=>deleteContact(item?._id)}>❎</span>
                </td>
              </tr>
            ))
          ) : (
            <p className="no-contact">No Contacts!!!</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
