"use client";

import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Header from '../components/Header';

export default function Home() {
  useEffect(() => {
    // Configure ScrollReveal settings
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
    });

    // Apply ScrollReveal to elements
    sr.reveal(".reveal", {
      interval: 200, // Delay between animations
    });
  }, []);
  return (
    <div>
      <Header />

      <main className="l-main">
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">Hi,<br />I’am <span className="home__title-color">Hamad</span><br /> Web Developer</h1>

            <a href="#contact" className="button">Contact</a>
          </div>

          <div className="home__social">
            <a href="" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
            <a href="" className="home__social-icon"><i className='bx bxl-behance' ></i></a>
            <a href="" className="home__social-icon"><i className='bx bxl-github' ></i></a>
          </div>

          <div className="home__img">
            <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                <image className="home__blob-img" x="" y="1" href="images/prefil.png" />
              </g>
            </svg>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="section-title">About</h2>

          <div className="about__container bd-grid reveal">
            <div className="about__img">
              <img src="images/about.jpeg" alt="" />
            </div>

            <div>
              <h2 className="about__subtitle">I’am Hamad</h2>
              <p className="about__text">As a Frontend Developer, I specialize in crafting user-friendly, visually engaging interfaces that bridge design and functionality. With experience in HTML, CSS, JavaScript, and Next.js, I excel at building responsive, user-centric applications that align with business goals.

                Collaboration is at the heart of my approach. I enjoy working with cross-functional teams to turn ideas into impactful solutions while prioritizing clean code, performance optimization, and accessibility. Staying current with the latest web trends fuels my creativity and passion for delivering exceptional results.

                Let’s connect and create something extraordinary!</p>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills__container bd-grid reveal">
            <div>
              <h2 className="skills__subtitle">Profesional Skills</h2>
              <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-html5 skills__icon'></i>
                  <span className="skills__name">HTML5</span>
                </div>
                <div className="skills__bar skills__html">

                </div>
                <div>
                  <span className="skills__percentage">95%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-css3 skills__icon'></i>
                  <span className="skills__name">CSS3</span>
                </div>
                <div className="skills__bar skills__css">

                </div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxl-javascript skills__icon' ></i>
                  <span className="skills__name">TYPESCRIPT</span>
                </div>
                <div className="skills__bar skills__js">

                </div>
                <div>
                  <span className="skills__percentage">65%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className='bx bxs-paint skills__icon'></i>
                  <span className="skills__name">NEXT.JS</span>
                </div>
                <div className="skills__bar skills__ux">

                </div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>
            </div>

            <div>
              <img src="images/work3.jpg" alt="" className="skills__img" />
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>

          <div className="work__container bd-grid reveal">
            <a href="" className="work__img">
              <img src="images/work1.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <img src="images/work2.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <img src="images/work3.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <img src="images/work4.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <img src="images/work5.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <img src="images/work6.jpg" alt="" />
            </a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>

          <div className="contact__container bd-grid reveal">
            <form action="" className="contact__form">
              <input type="text" placeholder="Name" className="contact__input" />
              <input type="mail" placeholder="Email" className="contact__input" />
              <textarea name="" id="" cols={0} rows={10} className="contact__input"></textarea>
              <input type="button" value="Submit" className="contact__button button" />
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__title">Hamad</p>
        <div className="footer__social">
          <a href="#" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
          <a href="#" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
          <a href="#" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
        </div>
        <p className="footer__copy">&#169; Hamad. All rigths reserved</p>
      </footer>
    </div>
  );
}
