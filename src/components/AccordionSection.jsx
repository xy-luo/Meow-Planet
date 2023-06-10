import Button from "./Button";
import "../css/AccordionSection.css";

import { useState } from "react";

function AccordionSection({ title, className, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`accordion-section ${className}`}>
            <Button
                className={`accordion-title ${isOpen ? "open" : "" }`}
                ariaLabel="click to show or hide the subcontent"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </Button>


            {isOpen && (
                <div className={`accordion-content ${className}`}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default AccordionSection;