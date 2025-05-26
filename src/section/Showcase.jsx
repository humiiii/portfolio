import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=120",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left  */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/portfolio/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides made Simple with a Powerful, User-Friendly app
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
          {/* Right  */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/portfolio/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img src="/portfolio/images/project3.png" alt="YC Directory" />
              </div>
              <h2>YC Directory - A Startup showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
