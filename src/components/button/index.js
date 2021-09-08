import react from "react"
import "./styles.css"

export const Button = ({ title }) => {
    return (
        <button className="button">
            {title}
        </button>
    )
}