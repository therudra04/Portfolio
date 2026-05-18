import React from "react";

import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaPython,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiJavascript,
    SiDjango,
    SiMysql,
    SiSqlite,
    SiGithub,
    SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import "./skills.css";

const skillsData = [
    {
        title: "Frontend",
        skills: [
            {
                name: "HTML",
                icon: <FaHtml5 color="#E34F26" />,
            },
            {
                name: "CSS",
                icon: <FaCss3Alt color="#1572B6" />,
            },
            {
                name: "JS",
                icon: <SiJavascript color="#F7DF1E" />,
            },
            {
                name: "React",
                icon: <FaReact color="#61DBFB" />,
            },
        ],
    },

    {
        title: "Backend",
        skills: [
            {
                name: "Python",
                icon: <FaPython color="#3776AB" />,
            },
            {
                name: "Django",
                icon: <SiDjango color="#0C4B33" />,
            },
            {
                name: "DRF",
                icon: <SiDjango color="#C80036" />,
            },
        ],
    },

    {
        title: "Database",
        skills: [
            {
                name: "SQL",
                icon: <SiMysql color="#4479A1" />,
            },
            {
                name: "SQLite",
                icon: <SiSqlite color="#003B57" />,
            },
        ],
    },

    {
        title: "Tools",
        skills: [
            {
                name: "Git",
                icon: <FaGitAlt color="#F05032" />,
            },
            {
                name: "VS Code",
                icon: <VscVscode color="#007ACC" />,
            },
            {
                name: "Postman",
                icon: <SiPostman color="#FF6C37" />,
            },
        ],
    },
];

const qualificationData = [
    {
        year: "2026",
        title: "Python & Django Developer",
        subtitle: "Backend Development",
    },

    {
        year: "2025",
        title: "JS & React Developer",
        subtitle: "Frontend Development",
    },

    {
        year: "2022-2025",
        title: "Computere Science Student",
        subtitle: "Bachelor's Degree",
    },

];

const Skills = () => {
    return (
        <section className="skills section" id="skills">

            <h2 className="section_title">
                Skills & Qualifications
            </h2>

            <span className="section_subtitle">
                My technical level
            </span>

            <div className="skills_container">

                <div className="skills_wrapper">

                    {/* LEFT SIDE */}

                    <div className="skills_left">

                        {skillsData.map((category, index) => (
                            <div className="skills_category" key={index}>

                                <h3 className="category_title">
                                    {category.title}
                                </h3>

                                <div className="skills_grid">

                                    {category.skills.map((skill, idx) => (
                                        <div className="" key={idx}>
                                            <div className="skill_card">
                                                <div className="skill_icon">
                                                    {skill.icon}
                                                </div>
                                            </div>

                                            <h4>{skill.name}</h4>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        ))}

                    </div>


                    {/* CENTER DIVIDER */}

                    <div className="skills_divider"></div>


                    {/* RIGHT SIDE */}

                    <div className="qualification_right">

                        {qualificationData.map((item, index) => (
                            <div className="qualification_item" key={index}>

                                <span className="qualification_year">
                                    {item.year}
                                </span>

                                <div className="qualification_content">

                                    <h3>{item.title}</h3>

                                    <p>{item.subtitle}</p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Skills;