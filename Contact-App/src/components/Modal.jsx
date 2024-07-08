import React from 'react'
import { createPortal } from 'react-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { db } from '../config/firebase'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

const contactValidation = Yup.object().shape
    ({
        name: Yup.string().required("Name is not Entered!"),
        email: Yup.string().email("This is not an Email").required("Email is not Entered!"),
        phone: Yup.string().matches(/^[0-9]{10}$/, "Contact Number must be exactly 10 digits").required("Contact Number is not Entered!")
    })

const Modal = ({ isOpen, onClose, isUpdate, contact }) => {

    const addContact = async (contactObject) => {
        try {
            const contactRef = collection(db, "contacts")
            await addDoc(contactRef, contactObject)
            onClose()
            toast.success("Contact Added!")
        } catch (error) {
            console.log(error)
        }
    }

    const upadateContact = async (contactObject, id) => {
        try {
            const contactRef = doc(db, "contacts", id)
            await updateDoc(contactRef, contactObject)
            onClose()
            toast.success("Contact Updated!")
        } catch (error) {
            console.log(error)
        }
    }

    return createPortal(<>
        {isOpen && <>
            <div className="w-full h-full absolute top-0 left-0 z-10 backdrop-blur-sm flex justify-center items-center">
                <div className="w-80 h-[345px] p-2 flex justify-center items-center bg-white border rounded-lg shadow-[0_10px_20px_gray] fixed">
                    <IoIosCloseCircleOutline onClick={onClose} fontSize={24} className="cursor-pointer absolute right-2 top-2 z-50" />
                    <Formik
                        validationSchema={contactValidation}
                        initialValues={isUpdate ?
                            {
                                name: contact.name,
                                email: contact.email,
                                phone: contact.phone
                            } :
                            {
                                name: "",
                                email: "",
                                phone: null
                            }}
                        onSubmit={(value) => isUpdate ? upadateContact(value, contact.id) : addContact(value)} >
                        {/* --Or it can be done like this when object's keys name are different-- 
                            onSubmit={() => addContact({
                            name: contact.name,
                            email: contact.email,
                            phone: contact.phone
                         })} */}
                        <Form>
                            <div className="flex flex-col gap-3 w-[280px]">
                                <div className="flex items-center gap-3"><label htmlFor="name" className='font-semibold'>Name:</label><div className="text-[12px] text-red-600"><ErrorMessage name="name" /></div></div>
                                <Field name="name" type="text" id="name" placeholder="Full Name" className="p-1 border border-black rounded" />

                                <div className="flex items-center gap-3"><label htmlFor="email" className='font-semibold'>E-mail:</label><div className="text-[12px] text-red-600"><ErrorMessage name="email" /></div></div>
                                <Field name="email" type="email" id="email" placeholder="someone@gmail.com" className="p-1 border border-black rounded" />

                                <div className="flex items-center gap-3"><label htmlFor="phone" className='font-semibold'>Number:</label><div className="text-[12px] text-red-600"><ErrorMessage name="phone" /></div></div>
                                <Field name="phone" type="tel" pattern="[0-9]{10}" minLength="10" maxLength="10" id="phone" placeholder="+91-123456789" className="p-1 border border-black rounded" />

                                <div>
                                    <button type='submit' className='w-[100px] bg-black text-white rounded mx-auto my-4 p-1'>{isUpdate ? "Update" : "Add"}</button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>}
    </>, document.getElementById("modal"))
}

export default Modal
