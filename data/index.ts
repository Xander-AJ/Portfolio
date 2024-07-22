export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a SaaS library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Hospital System Application",
    des: "Streamlined hospital management processes by 40% by developing a CLI application in Python to manage patient records, appointments, and billing",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.hospital.com",
  },
  {
    id: 3,
    title: "Knowledge Sharing Platform (Blog) Project",
    des: "Accomplished the development of a full-stack web application used by over 200 students, enhancing knowledge sharing by 30%, by designing and implementing a Flask backend and React frontend system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.knowhub.com",
  },
  {
    id: 4,
    title: "DevOps Capstone Project",
    des: "Enhanced application scalability and reliability by 35% through the deployment of containerized applications using Docker and Kubernetes",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.oopsdev.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with John-Alexander was a game-changer for our project. His ability to solve complex problems and deliver outstanding results exceeded our expectations. His commitment to excellence is unmatched.",
    name: "Johnson Thompson",
    title: "CEO of Innovatech Solutions",
  },
  {
    quote:
      "John-Alexander's attention to detail and expertise in development significantly improved our workflow. His proactive approach and dedication to our project's success were truly impressive.",
    name: "David Brown",
    title: "CTO of NexGen Technologies",
  },
  {
    quote:
      "Collaborating with John-Alexander brought our vision to life. His creativity and technical skills are top-notch, making him an invaluable asset to any team. We couldn't have asked for a better partner.",
    name: "Jeff Williams",
    title: "Founder of Creative Minds Studio",
  },
  {
    quote:
      "John-Alexander's professionalism and expertise were evident from day one. His ability to deliver high-quality results under tight deadlines was remarkable. We highly recommend his services.",
    name: "James Taylor",
    title: "Project Manager at TechWave Solutions",
  },
  {
    quote:
      "John-Alexander's innovative approach and dedication to our project were truly inspiring. His technical prowess and problem-solving skills played a crucial role in our project's success.",
    name: "James Martinez",
    title: "Director of Operations at BrightFuture Inc.",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "KnowledgeHub Platform",
    desc: "Developed a full-stack knowledge sharing platform where users can create and share articles, comment on articles, and follow authors, using React and Flask.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Hospital CLI App",
    desc: "Built a command-line interface application to manage hospital operations, including patient records and appointment scheduling, using Python.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "SaaS Application Ideas",
    desc: "Collaborated on brainstorming and conceptualizing innovative SaaS applications, focusing on market analysis, feature set design, and potential implementation strategies.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "KnowledgeHub Lead Developer",
    desc: "Led the development and maintenance of the KnowledgeHub platform, ensuring smooth user experience and feature enhancements using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
