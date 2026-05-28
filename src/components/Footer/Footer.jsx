import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Rudra</h1>
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.linkedin.com/in/rudra-modi-271384285/" target="_blank" rel="noreferrer" className="footer_social-link">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a href="https://www.instagram.com/rudra.modi_05/" target="_blank" rel="noreferrer" className="footer_social-link">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://x.com/Rudramodi05" target="_blank" rel="noreferrer" className="footer_social-link">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                </div>

                <span className="footer_copy">&copy; Rudra. All rights reserved. </span>
            </div>
        </footer>
    )
}

export default Footer

