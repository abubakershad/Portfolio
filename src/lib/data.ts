export interface Project {
  id: number;
  title: string;
  description: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "frontend" | "backend" | "ai" | "full stack" | "web";
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: [
      "A modern, full-stack personal portfolio built with Next.js to showcase my skills, projects, and development approach. Designed with a focus on performance, responsiveness, and clean UI, it features dynamic routing, reusable components, and optimized SEO for better visibility.",
      "The application highlights my ability to build scalable frontend interfaces while integrating backend logic where needed. Deployed on Vercel with attention to performance, accessibility, and maintainable architecture.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Resend Email",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/abubakershad/Portfolio",
    liveUrl: "https://abubakershad.vercel.app/",
    category: "ai",
    image: "/projects/portfolio.png",
  },
  {
    id: 2,
    title: "Portfolio Generator",
    description: [
      "A dynamic portfolio generator application designed to create customizable personal portfolios with ease. Built using HTML, CSS, JavaScript, and PHP, it allows users to input their information and instantly generate structured, responsive portfolio layouts in real time.",
      "The application focuses on usability and flexibility with form handling, dynamic content rendering, and backend processing. It demonstrates strong full-stack development skills by combining interactive frontend interfaces with efficient server-side logic while ensuring clean structure, responsiveness, and scalability.",
    ],
    technologies: ["HTML", "CSS", "JS", "PHP"],
    githubUrl: "#",
    liveUrl: "#",
    category: "ai",
    image: "/projects/p_generator.png",
  },
  {
    id: 3,
    title: "Age Calculator",
    description: [
      "A responsive and accessible Age Calculator built using HTML, CSS, and JavaScript. It calculates exact age in years, months, and days while handling real-world edge cases like leap years and month variations with accurate Date API logic.",
      "The project features a clean UI with dark mode support, form validation, and instant result rendering. It focuses on performance, usability, and modern frontend development practices, making it a solid example of real-world JavaScript application design.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Fonts",
      "Responsive Design",
      "Dark Mode UI",
      "DOM Manipulation",
      "Date API",
    ],
    githubUrl:
      "https://github.com/abubakershad/Internship-CodeAlpha/tree/main/Age-Calculator-Project",
    liveUrl: "https://age-calculator-jet-seven.vercel.app/",
    category: "web",
    image: "/projects/agecal.png",
  },
  {
    id: 4,
    title: "Music Player",
    description: [
      "This is a responsive web-based music player that allows users to play and manage music directly in the browser. It provides a clean and modern interface with features like playlist management, search, and local file upload. Users can control playback using play, pause, next, previous, shuffle, and repeat options. A mini-player is also included for easy control while navigating through the site.",
      "The main goal of this project is to deliver a smooth and interactive music experience using browser-based technologies. It focuses on a responsive layout, real-time audio control, and dynamic playlist rendering. The interface is designed to be simple yet engaging with smooth visual effects. Overall, it enhances the listening experience with a user-friendly and modern design.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Audio API",
      "File API",
      "DOM Manipulation",
      "Responsive Design",
      "Google Fonts",
    ],
    githubUrl:
      "https://github.com/abubakershad/Internship-CodeAlpha/tree/main/Music-Player-Project",
    liveUrl: "https://music-player-cyan-five.vercel.app/",
    category: "frontend",
    image: "/projects/musicplayer.png",
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces using React, Next.js, and Tailwind CSS with a focus on clean design and usability.",
    icon: "FaReact",
  },
  {
    id: "2",
    title: "Full Stack Applications",
    description:
      "Developing complete web applications with frontend, backend, APIs, and database integration using modern JavaScript technologies.",
    icon: "FaCode",
  },
  {
    id: "3",
    title: "API Integration",
    description:
      "Integrating REST APIs, authentication systems, and third-party services to create dynamic and functional applications.",
    icon: "FaServer",
  },
  {
    id: "4",
    title: "UI Implementation",
    description:
      "Converting designs into responsive, interactive, and pixel-perfect web interfaces with attention to detail and performance.",
    icon: "FaPaintBrush",
  },
  {
    id: "5",
    title: "AI Integration",
    description:
      "Integrating AI APIs and tools into web applications to enhance automation, user interaction, and functionality.",
    icon: "FaBrain",
  },
];

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "your.email@example.com",
};

export const personalInfo = {
  name: "Your Name",
  role: "Full Stack Developer & AI Engineer",
  location: "Your Location",
  email: "your.email@example.com",
  phone: "+1234567890",
  bio: "Passionate full-stack developer and AI engineer with expertise in building scalable, intelligent applications. Specialized in Next.js, React, AI integration, and cloud architecture.",
};

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Web Developer Intern",
    company: "CodeAlpha",
    duration: "Aug 2024 - Nov 2025",
    icon: "/icons/codealpha.png",
    description: [
      "Developed responsive and user-friendly web interfaces using modern HTML, CSS and JavaScript, ensuring seamless performance across devices & cross-browser compatibility.",
      "Built dynamic and interactive user experiences through efficient DOM manipulation and event-driven programming, enhancing usability and engagement.",
      "Focused on clean UI design, optimized performance, and smooth interactions while quickly resolving bugs to improve overall user experience.",
      "Followed best practices in code structure, debugging, and maintainability, leveraging version control systems and AI-assisted tools to streamline development workflows.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];
