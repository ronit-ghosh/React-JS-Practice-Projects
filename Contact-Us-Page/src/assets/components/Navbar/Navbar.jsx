import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div>
            <div className={styles.container}>
                <h2>Contact Us</h2>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
