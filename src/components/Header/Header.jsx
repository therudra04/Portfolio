import React from "react";
import "./Header.css";
import { useState } from "react";

const Header = () => {
    // Change Background Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // When the scroll is higher than 200 viewport height, add the scroll-header class to the a tag with the header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
    // Toggle Menu
    const [toggle, showMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")
    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav_logo">Rudra.Dev</a>

                    <div className={toggle? "nav_menu show_menu" : "nav_menu"}>
                        <ul className="nav_list grid">
                            <li className="nav_items">
                                <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav_link  active_link" : "nav_link"}>
                                    <i className="uil uil-estate nav_icon"></i> Home
                                </a>
                            </li>

                            <li className="nav_items">
                                <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav_link  active_link" : "nav_link"}>
                                    <i className="uil uil-user nav_icon"></i> About
                                </a>
                            </li>

                            <li className="nav_items">
                                <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav_link  active_link" : "nav_link"}>
                                    <i className="uil uil-file-alt nav_icon"></i> Skills
                                </a>
                            </li>
                            
                            <li className="nav_items">
                                <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav_link  active_link" : "nav_link"}>
                                    <i className="uil uil-folder nav_icon"></i> Portfolio
                                </a>
                            </li>

                            <li className="nav_items">
                                <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav_link  active_link" : "nav_link"}>
                                    <i className="uil uil-envelope nav_icon"></i> Contact
                                </a>
                            </li>
                        </ul>

                        <i className="uil uil-times nav_close" onClick={() => { showMenu(!toggle) }}></i>
                    </div>
                        <div className="nav_toggle" onClick={()=>{showMenu(!toggle)}}>
                            <i className="uil uil-apps"></i>
                        </div>
                </nav>
            </header>
        </>
    )
}

export default Header;