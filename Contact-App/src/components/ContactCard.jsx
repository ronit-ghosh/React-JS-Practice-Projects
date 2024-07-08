import { RiContactsFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useModalFunc from "../hooks/useModalFunc";
import Modal from "./Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactCard = ({ contact }) => {

    const { onOpen, onClose, isOpen } = useModalFunc()

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id))
            toast.success("Contact Deleted!")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="mb-3 w-full h-[72px] border border-black rounded-lg grid grid-cols-[50px_242px_34px_34px] grid-rows-4">
            <div className="row-span-4 flex justify-center items-center"><RiContactsFill fontSize={24} /></div>
            <div className="row-span-4 grid grid-rows-[26px_22px_22px]">
                <h2 className="text-sm flex items-end font-bold">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
                <p className="text-sm flex items-start">{contact.phone}</p>
            </div>
            <div className="row-span-4 flex justify-center items-center"><FaRegEdit className="cursor-pointer" onClick={onOpen} fontSize={22} /></div>
            <div className="row-span-4 flex justify-center items-center"><RiDeleteBin7Line className="cursor-pointer" onClick={() => deleteContact(contact.id)} fontSize={22} /></div>
            <Modal contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
        </div>
    )
}

export default ContactCard
