import Button from "./Button"
import List from "./List";

import headerLogo from "../img/logo.png";

import { useState } from "react";


function Header({ setPage }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const menuData = [{ id: "HomePage", text: "Home" }, { id: "ResourcePage", text: "Resources" }, { id: "ShopPage", text: "Shop" }, { id: "AdoptPage", text: "Adopt" }]
    function renderMenuList(listData) {
        const menuList = listData.map(item => {
            return (<a
                className="menu-item-link"
                href={`./${item.text}.html`}
                onClick={(e) => {
                    e.preventDefault();
                    setPage(item.id);
                    setIsNavOpen(false);
                }}
            >
                {item.text}
            </a>);
        })
        return (
            <List
                list={menuList}
                wrapperClassName={`nav-menu ${isNavOpen ? "open" : ""}`}
                itemClassName="menu-item"
            ></List>
        )
    }

    // render header
    return (
        <div className="header">
            <a className="skip-to-content-link" href="#main">Skip to content</a>
            <div className="head-line">
                <a
                    href="./Home.html"
                    onClick={(e) => {
                        e.preventDefault();
                        setPage("HomePage");
                    }}
                >
                    <img className="header-logo" src={headerLogo} alt="a siamese kitten as a log" />
                </a>
                <h1 className="header-title">Meow Planet</h1>
            </div>

            <nav className="header-nav">
                <Button
                    className="nav-button"
                    visual="button"
                    ariaLabel="Click to show/hide the menu"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    <i className="gg-menu" aria-label="Click to show/hide the menu"></i>
                </Button>
                {renderMenuList(menuData)}
            </nav>
        </div>
    )
}

export default Header;