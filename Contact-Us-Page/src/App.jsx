import "./App.css"
import Navbar from "./assets/components/Navbar/Navbar"
import ContactHeader from "./assets/components/Contact-Header/ContactHeader"
import ContactForm from "./assets/components/Form/ContactForm"

const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <ContactHeader/>
      <ContactForm/>
    </div>
  )
}

export default App
