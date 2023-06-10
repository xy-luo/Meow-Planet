import HomePage from "./HomePage";
import ResourcePage from "./ResourcePage";
import ShopPage from "./ShopPage";
import AdoptPage from "./AdoptPage";

import Button from "../Button";

import { useRef, useState } from "react";



function Main({ page }) {
    const modeRef = useRef();
    const [darkMode, setDarkMode] = useState(false);

    const darkColor = "#011936";
    const lightColor = "#FFF7ED";
    const darkGreen = "#00816D";
    const lightGreen = "#2EC4B6";

    return (
        <div id="main" className="main" ref={modeRef}>
            { page === "HomePage" && <HomePage/> }
            { page === "ResourcePage" && <ResourcePage/> }
            { page === "ShopPage" && <ShopPage/> }
            { page === "AdoptPage" && <AdoptPage/> }

            <Button 
                className="mode-switch-button" 
                ariaLabel="Click to switch the dark and light mode"
                onClick={ () => {
                    if (darkMode) {
                        modeRef.current?.style.setProperty("--bg-color-default", lightColor);
                        modeRef.current?.style.setProperty("--text-color-default", darkColor);
                        modeRef.current?.style.setProperty("--border-color", darkColor);
                        modeRef.current?.style.setProperty("--text-color-title", darkGreen);
                    }
                    else {
                        modeRef.current?.style.setProperty("--bg-color-default", darkColor);
                        modeRef.current?.style.setProperty("--text-color-default", lightColor);
                        modeRef.current?.style.setProperty("--border-color", lightColor);
                        modeRef.current?.style.setProperty("--text-color-title", lightGreen);
                    };
                    setDarkMode(!darkMode);
                }}
            >
                {darkMode ? <i className="gg-sun"></i> : <i className="gg-moon"></i>}
            </Button>
        </div>
    )
}

export default Main;