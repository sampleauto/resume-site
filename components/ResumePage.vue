<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const jobs: {
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
      "As a Senior Full Stack Developer, I assist leading the development of secure, scalable, and high-performance applications that meet the unique needs of our government customers and the\
      supporting government agencies. With expertise across the full technology stack, I design and implement front-end interfaces and back-end systems that drive operational\
      efficiency and enhance public service delivery. My role involves collaborating with cross-functional teams, including project managers, analysts, and QA teams, to gather requirements,\
      architect solutions, and ensure compliance with contract requirements. I have a deep understanding of modern web development frameworks, cloud platforms, and DevOps practices, which I use\
      to streamline development cycles and optimize system performance. In addition to writing clean, maintainable code, I am experienced in building and maintaining databases, APIs, and microservices,\
      ensuring seamless integration between various systems. I place a strong emphasis on security, implementing best practices such as encryption, secure authentication, and vulnerability\
      testing to protect sensitive data. My ability to manage and mentor junior developers, combined with a strong understanding of the software development life-cycle processes and technology\
      standards, allows me to deliver quality, compliant software solutions on time and within budget.",
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
      "At CNF Technologies, I specialized in software engineering, I designed, developed, and maintained secure and efficient software solutions for CNF's government customers.\
      My role involved collaborating with cross-functional teams to build scalable applications that comply with stringent security protocols and industry standards. I ensure seamless\
      integration of systems, leveraging modern technologies such as cloud computing, microservices, and AI to optimize performance and enhance service delivery. With a focus on\
      problem-solving and innovation, I translate complex requirements into functional, user-centric software solutions. My experience includes managing full software development\
      life cycles (SDLC), from planning and architecture to testing and deployment, while ensuring alignment with government policies and regulatory frameworks. I am adept at working\
      in high-stakes environments where precision, confidentiality, and reliability are paramount. My ability to meet tight deadlines, combined with a strong understanding of government\
      procurement processes and compliance requirements, allows me to deliver quality solutions that meet the needs of the public sector.",
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
      "As a professional network installer, I designed, configured, and installed reliable and secure network infrastructures for both residential and commercial environments.\
      My role involved setting up wired and wireless networks, ensuring optimal performance, security, and scalability to meet the unique needs of each client. I am skilled in installing and\
      configuring routers, switches, access points, firewalls, and other networking hardware. My experience extends to running and terminating network cables, optimizing Wi-Fi coverage,\
      and troubleshooting connectivity issues to ensure smooth operation. Whether installing new systems or upgrading existing ones, I focused on delivering efficient, cost-effective\
      solutions that enhance communication and data flow. With a deep understanding of network protocols and security best practices, I ensured that all installations adhere to industry\
      standards, protecting clients’ data and ensuring compliance with regulatory requirements. I utilized scripting languages like Bash and Python to speed up the configuration process.\
      My commitment to precision, attention to detail, and exceptional customer service helped ensure that every project is completed on time and within scope.",
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
</script>

<template>
  <div class="container mt-8 mb-8">
    <Card class="min-w-full">
      <CardHeader>
        <CardTitle> Experience </CardTitle>
        <CardDescription> Non-internship job experience </CardDescription>
      </CardHeader>
      <CardContent v-for="job in jobs">
        <Card class="w-full mb-5">
          <CardHeader>
            <CardTitle>
              {{ job.company }}
            </CardTitle>
            <CardDescription class="flex">
              <div>
                {{ job.title }}
              </div>
              <div class="ml-auto">
                {{ job.date }}
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent class="flex">
            <Card class="w-2/3">
              <CardHeader>
                <CardTitle> Description </CardTitle>
              </CardHeader>
              <CardContent>
                {{ job.description }}
              </CardContent>
            </Card>
            <Card class="w-1/3 ml-4">
              <CardHeader>
                <CardTitle> Skills </CardTitle>
              </CardHeader>
              <CardContent>
                <div v-for="skill in job.skills" class="mt-2">
                  <strong>{{ skill.name }}:</strong>
                  {{ skill.items.join(", ") }}
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
</template>
