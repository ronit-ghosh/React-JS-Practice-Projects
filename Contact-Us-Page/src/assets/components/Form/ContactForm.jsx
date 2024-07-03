import styles from "./ContactForm.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setName(e.target[0].value)
    setEmail(e.target[1].value)
    setText(e.target[2].value)
  }

  return (
    <div className={styles.container}>

      <div className={styles.left}>

        <div className={styles.buttons}>

          <div className={styles.top_buttons}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24} />} />
            <Button text="VIA CALL" icon={<IoCall fontSize={24} />} />
          </div>

          <Button isOutlined={true} text="VIA EMAIL FORM" icon={<MdMessage fontSize={24} />} />

        </div>

        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="" />
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" id="" />
          <label htmlFor="text">Text</label>
          <textarea name="text" id=""></textarea>

          <div className={styles.submit_button}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>

      <div>{name + " " + email + " " + text}</div>

      <div className={styles.right}></div>
      <img src="src\assets\Images/girl.svg" alt="image" />
    </div>
  )
}

export default ContactForm
