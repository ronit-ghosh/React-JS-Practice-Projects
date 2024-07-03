import styles from "./Button.module.css"

const Button = (props) => {
    
    const {isOutlined, icon, text, ...rest} = props

    return (
        <div className={styles.container}>
            <button {...rest} className={isOutlined ? styles.outlined : styles.black_button}>
                {icon}
                {text}
            </button>
        </div>
    )
}

export default Button
