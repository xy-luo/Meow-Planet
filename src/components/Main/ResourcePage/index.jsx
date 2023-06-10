import resourceLeftMenuList from "./resourceLeftMenuList";
import Subpage from "./Subpage";
import AccordionSection from "../../AccordionSection";
import Button from "../../Button";

import "../../../css/ResourcePage.css"

import { useState } from "react";


function ResourcePage() {
    const [subpage, setSubpage] = useState("Ways to get a cat")

    // left menu (accordion)
    const leftMenuList = resourceLeftMenuList.map((item) => {
        return (
            <AccordionSection title={item.menuItem}>
                <ul className="left-submenu">
                    {item.subMenuList.map((subItem) => {
                        return (
                            <li className={`left-submenu-item ${subpage === subItem ? "selected" : ""}`}>
                                <Button className="left-submenu-button" ariaLabel="click to see the corresponding subpage" onClick={() => setSubpage(subItem)}>
                                    {subItem}
                                </Button>
                            </li>)
                    })}
                </ul>
            </AccordionSection>
        );
    })

    // render the page
    return (
        <div className="resource-page">
            {/* left part: accordion menu*/}
            <div className="resource-left-container">
                <div className="left-menu">
                    {leftMenuList}
                </div>
            </div>
            {/* right part: subpage */}
            <div className="resource-subpage">
                <Subpage subpage={subpage} />
            </div>

        </div>
    )
}

export default ResourcePage;