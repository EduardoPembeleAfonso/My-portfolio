import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";

// icons
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { CiLocationOn, CiViewTimeline } from "react-icons/ci";

// components
import Collapse from "@/components/collapse";
import CollapseRight from "@/components/collapseRight";
import ShadowEffect from "@/components/shadowEffect";
import Animation from "@/components/Animation";

import logo from "@/assets/logo.svg";
import loading from "@/assets/loading.gif";
import eduardo from "@/assets/eduardo.jpg";
import { facebook, github, githubGray, link, linkdln } from "@/assets";
import { ProjectsData, servicesData, stacksData } from "@/api/data";

export default function Document() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverH1, setIsOverH1] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const form = useRef();

  const updatePosition = (event) => {
    const x = event.clientX;
    const y = event.clientY + window.scrollY;
    setPosition({ x, y });

    const elementUnderCursor = document.elementFromPoint(x, y - window.scrollY);
    setIsOverH1(elementUnderCursor && elementUnderCursor.tagName === "SPAN");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_xbwruic",
        "template_uwmg4um",
        form.current,
        "nwHnlgnT9whd-MdeG"
      )
      .then(
        (result) => {
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          form.current.reset();
          setIsLoading(false);
        }
      );
  };

  const _isMobile = () => {
    return window.innerWidth <= 768;
  };

  useEffect(() => {
    if (_isMobile()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <main style={{ height: "100%", width: "100%" }}>
      <div
        className={`ball-follow-cursor ${isOverH1 ? "over-h1" : ""}`}
        style={{ top: position.y, left: position.x }}
      />

      <header className="header">
        <div>
          <Image alt="logo" src={logo} />
        </div>
        <ul>
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#tech"}>Tech Stack</Link>
          </li>
          <li>
            <Link href={"#project"}>Projects</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </header>
      <section className="first-section">
        <Collapse />
        <section className="first-section-content">
          <div className="first-section-content-image">
            <div className="first-section-content-image-border">
              <Image
                className="first-section-content-image-image"
                alt="eduardo profile"
                src={eduardo}
              />
            </div>
          </div>
          <div className="first-section-content-description" id="quoto">
            <span>Hi 👋,</span>
            <span>
              My name is <span className="my-name">Eduardo P. Afonso</span>
            </span>
            <span>I build things for web & mobile</span>
            <nav>
              <Link
                href="https://github.com/EduardoPembeleAfonso"
                target="_blanc"
              >
                <AiOutlineGithub className="icon-link" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/eduardo-pembele-afonso-b789441a7/"
                target="_blanc"
              >
                <AiOutlineLinkedin className="icon-link" />
              </Link>
            </nav>
          </div>
        </section>
      </section>
      <secyion className="second-section" id="about">
        <div>
          <h3>About</h3>
          <p>
            Hi, I{`'`}m Eduardo P. Afonso, a programmer with a passion for web
            and mobile development. I have more than 1 year{`'`}s proven
            experience in software development. My goal as a programmer is to
            bring your ideas or businesses to life, whether web or mobile,
            guaranteeing maximum efficiency and quality.
          </p>
        </div>
        <CollapseRight />
      </secyion>
      <section className="work-section">
        <h3 className="title">Work Experience</h3>
        <Animation
          position="fade-right"
          positionOffset="300"
          positionEasing="ease-in-sine"
        >
          <div className="work-section-content">
            <div>
              <h3>Full Stack Developer</h3>
              <div className="full_time">
                <span>Full time</span>
              </div>
            </div>
            <div className="work-section-content-description">
              <div>
                <HiOutlineBuildingOffice className="work-section-content-description-icon" />{" "}
                <span>PN Clique</span>
              </div>
              <div>
                <CiLocationOn />
                <span>Luanda </span>
              </div>
              <div>
                <CiViewTimeline />
                <span>Jul 2022 - Present</span>
              </div>
            </div>
          </div>
        </Animation>
        <Animation
          position="fade-right"
          positionOffset="300"
          positionEasing="ease-in-sine"
        >
          <div className="work-section-line"></div>
        </Animation>
        <Animation
          position="fade-right"
          positionOffset="300"
          positionEasing="ease-in-sine"
        >
          <div className="work-section-content">
            <div>
              <h3>Intern</h3>
              <div className="full_time">
                <span>Full time</span>
              </div>
            </div>
            <div className="work-section-content-description">
              <div>
                <HiOutlineBuildingOffice className="work-section-content-description-icon" />{" "}
                <span>Quianni Soft</span>
              </div>
              <div>
                <CiLocationOn />
                <span>Luanda </span>
              </div>
              <div>
                <CiViewTimeline />
                <span>Marc 2020 - Jul 2020</span>
              </div>
            </div>
          </div>
        </Animation>
        <Animation
          position="fade-right"
          positionOffset="300"
          positionEasing="ease-in-sine"
        >
          <div className="work-section-line"></div>
        </Animation>
      </section>
      <section className="section-the-service-i-offer">
        <ShadowEffect positionLeft="" positionRight="70%" />
        <div className="section-the-service-i-offer-container">
          <h3>The service i offer</h3>
          <div className="section-the-service-card-container grid md:grid-template-2">
            {servicesData.map((services) => (
              <Animation
                key={services.id}
                className="section-the-service-card"
                position={isMobile ? "zoom-in-left" : "zoom-out-up"}
              >
                {services.icon}
                <h4>{services.title}</h4>
                <p>{services.content}</p>
              </Animation>
            ))}
          </div>
        </div>
      </section>

      <section className="my-stacks" id="tech">
        <div className="my-stacks-container">
          <header>
            <h3>My Tech Stack</h3>
            <p>Technologies I’ve been working with recently</p>
          </header>
          <div>
            {stacksData.map((stack) => (
              <Animation
                key={stack.id}
                position={isMobile ? "fade-right" : "fade-up"}
                positionOffset={isMobile && "300"}
                positionEasing={isMobile && "ease-in-sine"}
                positionDuration={isMobile && "3000"}
              >
                <Image
                  src={stack.image}
                  alt={stack.image || "Stack"}
                  width={140}
                  height={140}
                  className="icon"
                />
              </Animation>
            ))}
          </div>
        </div>
      </section>

      <section className="my-projects" id="project">
        <ShadowEffect positionLeft={"70%"} positionRight={""} />
        <div className="my-projects-container">
          <header>
            <h3>Projects</h3>
            <p>Things I’ve built so far</p>
          </header>
          <div className="my-projects-container-cards">
            {ProjectsData.map((project) => (
              <Animation
                key={project.id}
                className="card"
                position={isMobile ? "flip-left" : "fade-up"}
                positionAnchorPlacement={!isMobile && "center-bottom"}
                positionEasing={isMobile && "ease-out-cubic"}
                positionDuration={isMobile && "2000"}
              >
                <figure>
                  <Image
                    src={project.image}
                    alt="Project 01"
                    width={375}
                    height={250}
                    className="max-w-[375px] w-full"
                  />
                </figure>
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.content}</p>
                  <span>
                    Tech stack :{" "}
                    {project.stacks.map((i, key) => (
                      <span key={key}>{i}</span>
                    ))}
                  </span>
                  <div className="card-footer">
                    <span className="flex gap-2 ">
                      <Image src={link} alt="Link" width={20} height={20} />{" "}
                      <Link
                        href={project.url}
                        className="underline text-zinc-200"
                      >
                        Live Preview
                      </Link>
                    </span>

                    <span className="flex gap-2 ">
                      <Image src={github} alt="Github" width={20} height={20} />{" "}
                      <Link
                        href={project.github}
                        className="underline text-zinc-200"
                      >
                        Live Preview
                      </Link>
                    </span>
                  </div>
                </div>
              </Animation>
            ))}
          </div>
        </div>
      </section>

      <section className="connect-with-me" id="contact">
        <ShadowEffect positionLeft={""} positionRight={"70%"} />
        <div className="connect-with-me-container">
          <header>
            <h4>Connect with me:</h4>
            <p>Satisfied with me? Please contact me</p>
            <div>
              <Link
                href={"https://github.com/EduardoPembeleAfonso"}
                target="_blanc"
              >
                <Image src={githubGray} alt="Github" width={30} height={30} />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/eduardo-pembele-afonso-b789441a7/"
                }
                target="_blanc"
              >
                <Image src={linkdln} alt="Github" width={30} height={30} />
              </Link>
              <Link href={"https://web.facebook.com/eduardo.afonsohda"}>
                <Image src={facebook} alt="Github" width={30} height={30} />
              </Link>
            </div>
          </header>
          <form ref={form} onSubmit={sendEmail}>
            <span>Contact me, let’s make magic together</span>
            <input type="text" name="name" placeholder="Name:" required />
            <input type="email" name="email" placeholder="E-mail:" required />
            <textarea name="message" placeholder="Message:"></textarea>
            <button type="submit" className="button_send_email">
              {isLoading ? <Image src={loading} alt="loading" /> : "Send"}
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div>
            <Image src={logo} alt="Logo" />
            <div>
              <span>+244 952 574 322</span>
              <span>eduardopembeleafonso@gmail.com</span>
            </div>
          </div>
          <div>
            <nav>
              <Link href={"#"}>Home</Link>
              <Link href={"#about"}>About</Link>
              <Link href={"#tech"}>Technologies</Link>
              <Link href={"#project"}>Projects</Link>
              <Link href={"#contact"}>Contact</Link>
            </nav>
            <span>
              Designed by{" "}
              <Link
                href={"https://www.linkedin.com/in/osvaldocariege/"}
                target="_blanc"
              >
                Edvaldo Cariege
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
