import React from "react";
import "./Portfolio.css";

import django1 from "../../Assets/django1.jpg";
import django2 from "../../Assets/django2.jpg";
import django3 from "../../Assets/django3.png";
import django4 from "../../Assets/django4.jpg";

import techleap1 from "../../Assets/techleap1.png";
import techleap2 from "../../Assets/techleap2.png";
import techleap3 from "../../Assets/techleap3.png";
import techleap4 from "../../Assets/techleap4.png";

import netflix1 from "../../Assets/netflix1.png";
import netflix2 from "../../Assets/netflix2.png";
import netflix3 from "../../Assets/netflix3.png";
import netflix4 from "../../Assets/netflix4.png";

import textutils1 from "../../Assets/textutils1.png";
import textutils2 from "../../Assets/textutils2.png";
import textutils3 from "../../Assets/textutils3.png";
import textutils4 from "../../Assets/textutils4.png";

import lumina1 from "../../Assets/lumina1.png";
import lumina2 from "../../Assets/lumina2.png";
import lumina3 from "../../Assets/lumina3.png";
import lumina4 from "../../Assets/lumina4.png";

import notes1 from "../../Assets/notes1.png";
import notes2 from "../../Assets/notes2.png";
import notes3 from "../../Assets/notes3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const data = [
    {
        id: 1,
        images: [django1, django2, django3, django4],
        title: "Django Blog App",
        description: "Full stack blog application with authentication system.",
        demo: "#",
        github: "https://github.com/therudra04/Django-blog.git",
    },

    {
        id: 2,
        images: [techleap1, techleap2, techleap3, techleap4],
        title: "TechLeap Institute Website",
        description: "Responsive website for TechLeap Institute, built with HTML, CSS and JavaScript.",
        demo: "https://therudra04.github.io/Tech-Leap-Institute/",
        github: "https://github.com/therudra04/Tech-Leap-Institute.git",
    },

    {
        id: 3,
        images: [netflix1, netflix2, netflix3, netflix4],
        title: "Netflix Clone",
        description: "Built a responsive Netflix clone using React with dynamic movie browsing and modern UI design.",
        demo: "#",
        github: "",
        classes: "hide",
    },

    {
        id: 4,
        images: [textutils1, textutils2, textutils3, textutils4],
        title: "TextUtils - Text Manipulation Tool",
        description: "Created a react app for text manipulation with feeatures like uppercase, lowercase, word count, and character count.",
        demo: "therudra04.github.io/TextUtils/",
        github: "https://github.com/therudra04/TextUtils.git",
    },

    {
        id: 5,
        images: [lumina1, lumina2, lumina3, lumina4],
        title: "Lumina Premium Beauty Store",
        description: "Built a responsive beauty store website with modern UI, product sections, and smooth user experience.",
        demo: "https://therudra04.github.io/Lumina---Beauty-Store/",
        github: "https://github.com/therudra04/Lumina---Beauty-Store.git",
    },

    {
        id: 6,
        images: [notes1, notes2, notes3],
        title: "Elegant Notes App",
        description: "created a responsive notes app with modern UI. Users can create, edit, delete and search notes.",
        demo: "https://therudra04.github.io/Elegant-Notes/",
        github: "https://github.com/therudra04/Elegant-Notes.git",
    },
];

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">Most recent works</span>

            <div className="projects_container container grid">
                {data.map(
                    ({ id, images, title, description, demo, github, classes }) => {
                        return (
                            <div className="projects_card" key={id}>
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    className="projects_swiper"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={img}
                                                alt=""
                                                className="projects_img"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <h3 className="projects_title">{title}</h3>

                                <p className="projects_description">
                                    {description}
                                </p>

                                <div className={`projects_buttons ${classes}`}>
                                    <a
                                        href={demo}
                                        className="projects_button"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Demo
                                    </a>

                                    <a
                                        href={github}
                                        className="projects_button"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </div>
                            </div>
                        );
                    },
                )}
            </div>
        </section>
    );
};

export default Projects;
