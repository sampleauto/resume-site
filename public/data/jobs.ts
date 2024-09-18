export const jobs: {
  company: string;
  title: string;
  location: string;
  description: string;
  date: string;
  skills: { name: string; items: string[] }[];
}[] = [
  {
    company: "Jacobs",
    title: "Sr. Software Engineer",
    location: "Remote",
    description:
      "As a Senior Software Engineer, I lead the development of secure, scalable applications for government customers. I design and implement front-end and back-end systems to enhance\
      operational efficiency and public service delivery. My role involves collaborating with cross-functional teams to gather requirements, architect solutions, and ensure compliance.\
      I leverage modern web frameworks, cloud platforms, and DevOps practices to optimize performance. I also build and maintain databases, APIs, and microservices, emphasizing security best practices.\
      My experience in managing junior developers and understanding the software development life cycle ensures timely, quality software delivery.",
    date: "April 2023 - Present",
    skills: [
      {
        name: "Languages",
        items: ["C#", "JavaScript/TypeScript", "Java", "Node.js"],
      },
      {
        name: "Frameworks",
        items: ["Angular", "Vue", "Nuxt", "Spring Boot"],
      },
      {
        name: "Databases",
        items: ["SQL Server", "PostgreSQL"],
      },
      {
        name: "Tools",
        items: ["Git", "Azure DevOps", "Agile", "Docker"],
      },
    ],
  },
  {
    company: "CNF Technologies",
    title: "Jr. Software Engineer",
    location: "San Antonio, TX",
    description:
      "At CNF Technologies, I designed, developed, and maintained secure software solutions for government customers. I collaborated with cross-functional teams to build scalable applications that comply\
      with security protocols and industry standards. Leveraging cloud computing, microservices, and AI, I optimized performance and enhanced service delivery. I managed full software development life cycles\
      (SDLC) and ensured alignment with government policies. Adept at working in high-stakes environments, I delivered quality solutions on tight deadlines, meeting government procurement and compliance requirements.",
    date: "May 2020 - April 2023",
    skills: [
      {
        name: "Languages",
        items: ["C++", "Python", "Bash", "JavaScript/TypeScript"],
      },
      {
        name: "Frameworks",
        items: ["Angular", "Vue", "Django", "Flask"],
      },
      {
        name: "Databases",
        items: ["SQL Server", "MySQL", "MongoDB"],
      },
      {
        name: "Tools",
        items: ["Git", "Azure", "Agile", "Docker", "Kubernetes"],
      },
    ],
  },
  {
    company: "Layer7 Data Solutions",
    title: "Network Installer",
    location: "San Antonio, TX",
    description:
      "As a professional network installer, I designed, configured, and installed secure network infrastructures for residential and commercial environments. I set up wired and wireless networks, ensuring optimal performance\
      and scalability. Skilled in installing routers, switches, access points, and firewalls, I also ran and terminated network cables, optimized Wi-Fi coverage, and troubleshooted connectivity issues. I delivered cost-effective\
      solutions, adhering to industry standards and regulatory requirements. Using Bash and Python, I streamlined the configuration process. My precision, attention to detail, and customer service ensured timely project completion.",
    date: "September 2019 - May 2020",
    skills: [
      {
        name: "Languages",
        items: ["Python", "Bash"],
      },
      {
        name: "Technical Skills",
        items: [
          "Network Configuration",
          "Hardware Installation",
          "Troubleshooting",
          "Security",
          "Network Protocols",
        ],
      },
      {
        name: "Other Skills",
        items: [
          "Problem-Solving",
          "Communication",
          "Project Management",
          "Customer Service",
        ],
      },
    ],
  },
];
