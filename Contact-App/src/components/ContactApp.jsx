import { IoPersonAddOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import ContactCard from "./ContactCard";
import useModalFunc from "../hooks/useModalFunc";
import Modal from "./Modal";
import { ToastContainer } from "react-toastify";
import Empty from "./Empty";

const ContactApp = () => {

    const [contacts, setContacts] = useState([])

    const { onOpen, onClose, isOpen } = useModalFunc()


    useEffect(() => {
        try {
            const getContacts = async () => {
                const contactRef = collection(db, "contacts")
                // const contactsSnapshot = await getDocs(contactRef)

                onSnapshot(contactRef, (snapshot) => {
                    const contactsList = snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                    setContacts(contactsList)
                    return contactsList
                })
            }
            getContacts()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const searchContacts = (e) => {
        const value = e.target.value

        const contactRef = collection(db, "contacts")

        onSnapshot(contactRef, (snapshot) => {
            const contactsList = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })

            const filteredContacts = contactsList.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase()))

            setContacts(filteredContacts)
            return filteredContacts
        })

    }


    return (<>
        <header>
            <h1 className="h-[60px] flex justify-center items-center border border-black rounded-md text-2xl font-bold mt-2">Contact App</h1>
            <div className="h-[60px] flex justify-between items-center">
                <div className="w-[325px] h-[40px] flex justify-between items-center border border-black rounded-lg p-2">
                    <CiSearch fontSize={24} />
                    <input className="w-full p-1 focus:outline-none" onChange={searchContacts} type="text" />
                </div>
                <IoPersonAddOutline onClick={onOpen} className="cursor-pointer" fontSize={24} />
            </div>
        </header>
        <main>
            {contacts.length <= 0 ? <Empty /> : contacts.map((contact) => (<ContactCard key={contact.id} contact={contact} />))}
        </main>

        <Modal isOpen={isOpen} onClose={onClose} />
        <ToastContainer position="top-center" />
    </>)
}

export default ContactApp
