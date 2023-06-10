import "../css/Button.css"

function Button( {children, className="", type="button", visual="button", ariaLabel="", onClick, disabled=false} ) {
    let buttonClass = "button"
    if (visual === "link") {
        buttonClass = "button-link"
    }

    return (
        <button 
            className={`${className} ${buttonClass}`}
            type={type}
            aria-label={ariaLabel}
            onClick={onClick}
            disabled={disabled}
        >
            { children }
        </button>
    )
}

export default Button