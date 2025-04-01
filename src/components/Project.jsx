import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;

      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Bakers Villa",
      description:
        "A responsive personal portfolio website built using HTML and CSS, showcasing projects, skills, and experience.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.9XiIm656Ioon22K1Km846QHaED&pid=Api&P=0&h=180",
      tags: ["React", "Tailwind CSS"],
      liveLink: "https://bakers-villa-zeta.vercel.app/",
      githubLink: "https://github.com/Jagut07/Bakers_villa",
    },
    {
      title: "Cake_shop",
      description:
        "A modern real estate platform built using React.js and Tailwind CSS, allowing users to search and filter property listings.",
      image: "https://img.freepik.com/premium-vector/sweet-cake-bakery-shop-logo_807399-1051.jpg?w=2000",
      tags: ["Html", " CSS", "JavaScript"],
      liveLink: "https://jagut07.github.io/cake_shop/",
      githubLink: "https://github.com/Jagut07/cake_shop",
    },
    {
      title: "Library management system",
      description:
        "An interactive and responsive landing page for Cashify, developed with React.js and Tailwind CSS.",
      image:"http://www.sourcecodester.com/sites/default/files/images/RajLovesAshi/snapshot_5.png",
      tags: ["Java", "Html"," CSS", "JavaScript"],
      liveLink: "https://shashirajraja.github.io/onlinebookstore/",
      githubLink: "https://github.com/Jagut07/Library",
    },
    // {
    //   title: "Web Music Player",
    //   description:
    //     "A fully functional web-based music player created using HTML, CSS, and JavaScript, supporting playlist management and audio visualization.",
    //   image:
    //     "https://www.shutterstock.com/image-vector/web-music-shop-background-website-260nw-1655895268.jpg",
    //   tags: ["HTML", "CSS", "JavaScript"],
    //   liveLink: "https://suraj722004.github.io/musicplayer/",
    //   githubLink: "https://github.com/Suraj722004/musicplayer",
    // },
    // {
    //   title: "CHAT-BOT",
    //   description:
    //     "An AI-powered chatbot landing page, built with React.js and Tailwind CSS for a modern and user-friendly experience.",
    //   image:
    //     "https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg",
    //   tags: ["React.js",  "Tailwind CSS"],
    //   liveLink: "https://chatbot-gbkejyblq-suraj-baghels-projects.vercel.app",
    //   githubLink: "https://github.com/Suraj722004/chatbot",
    // },
    // {
    //   title: "To-do List",
    //   description:
    //     "A simple and efficient to-do list application developed using HTML, CSS, and JavaScript, featuring task organization and reminders.",
    //   image:
    //     "https://previews.123rf.com/images/wangsinawang/wangsinawang2004/wangsinawang200400476/144573050-to-do-list-template-icon-logo-vector-illustration.jpg",
    //   tags: ["HTML", "CSS", "JavaScript"],
    //   liveLink: "https://suraj722004.github.io/HexSoftware_Todolist/",
    //   githubLink: "https://github.com/Suraj722004/HexSoftware_Todolist",
    // },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-8 reveal">
          <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-slate/10 text-blue-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="text-highlight hover:text-navy transition-colors flex items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-highlight hover:text-navy transition-colors flex items-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={16} className="mr-1" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;