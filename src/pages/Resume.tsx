
import Header from "../components/Header";
import SummarySection from "../components/SummarySection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import CertificationsSection from "../components/CertificationsSection";
import { ArrowTopRightIcon } from "lucide-react";

const Resume = () => {
  // Data
  const profileData = {
    profileImage: "/lovable-uploads/59f772fa-8b2f-4ac3-8721-f17518186296.png",
    name: "Jerquin Bayudo",
    title: "Full-Stack and Shopify Developer",
    quote: "Stay afraid but do it anyway.",
    quoteAuthor: "Carrie Fisher",
    email: "jerquinbayudo@gmail.com",
    phone: "(+63)(951)-989-8211",
    address: "Cagayan de Oro, Philippines",
    socialLinks: {
      facebook: "fb/id=100019476193809",
      linkedin: "linkedin/jerquin-bayudo-834970203",
      portfolio: "jerquin-bayudo.com",
    },
  };

  const summary = "Creative and detail-oriented Full-Stack Developer with specialized expertise in Shopify development. Passionate about designing intuitive user experiences and solving complex technical challenges. Known for transforming client visions into elegant, functional digital solutions while maintaining a strong focus on design thinking principles. Committed to continuous learning and pushing the boundaries of web development.";

  const experiences = [
    {
      period: "Oct 2021 - Present",
      location: "Cagayan de Oro",
      company: "Filgro Software Inc.",
      title: "Full-Stack Developer",
      description: [
        "Created web application system using React, jQuery, JavaScript, CSS, Tailwind (Frontend), MySQL, MongoDB, OpenAI (Database) and Laravel (Backend).",
        "Worked with HRIS system: Leaving Management System; eCommerce projects with WooCommerce, PrestaShop, BigCommerce and Shopify; Landing Page (Static) Pages with WordPress.",
        "Maintain over 30 WordPress sites, 3 Shopify Stores, and actively working with custom software development.",
        "Created Figma for Prototypes for better Frontend implementation.",
      ],
      logo: "/placeholder.svg",
    },
    {
      period: "Nov 2019 - June 2021",
      location: "Cagayan de Oro",
      company: "T-Mobile",
      title: "Technical Support",
      description: [
        "Provides technical support to clients about their connectivity issues.",
        "Additional value on company's services to boost satisfaction to client to increase profit and revenue.",
        "Check source documents for accuracy, verifying when necessary.",
        "Follow all internal security procedures to assure accordance with policy.",
        "Adhere to company policies while having fun at work.",
      ],
      logo: "/placeholder.svg",
    },
    {
      period: "June 2017 - August 2019",
      location: "Davao PH",
      company: "AT&T",
      title: "Billing/Sales Representative",
      description: [
        "Compiled, prioritized, sorted, and processed customer orders into company's database.",
        "Provides support to billing and technical questions involving product and services.",
        "Follow all internal security procedures to assure accordance with policy.",
      ],
      logo: "/placeholder.svg",
    },
  ];

  const projects = [
    {
      title: "HRIS Management System",
      subtitle: "HRIS System including request (payroll, attendance...), tracking (time in/out), compliance, employee request(s), information dissemination",
      description: "A comprehensive HRIS management system with multiple modules for employee management and HR operations.",
      image: "/placeholder.svg",
      link: "hris.filgro.com",
    },
    {
      title: "Leasing Management Software",
      subtitle: "Leasing management software including dashboard (agent, landlord and admin), asset management, real-time tracking",
      description: "Advanced leasing management platform for property management companies and landlords.",
      image: "/placeholder.svg",
      link: "www.spekapps.com",
    },
    {
      title: "Shopify Website",
      subtitle: "Ecommerce Shopify site - created a custom checkout for finding the right fit for client through creating a Shopify App",
      description: "Custom Shopify implementation with specialized checkout flow and product pages.",
      image: "/placeholder.svg",
      link: "sway-co.com",
    },
    {
      title: "Shopify Website",
      subtitle: "Ecommerce Shopify site - created a custom checkout for finding the right fit for client through creating a Shopify App",
      description: "Another Shopify implementation with similar custom features but for a different client.",
      image: "/placeholder.svg",
      link: "solo-inc.com",
    },
  ];

  const educations = [
    {
      school: "University of Science and Technology in Southern Philippines",
      logo: "/placeholder.svg",
      degree: "Bachelor of Science",
      fieldOfStudy: "Environmental Engineering",
      period: "2013-2017",
    },
    {
      school: "Regional Training Center - X (Tagoloan)",
      logo: "/placeholder.svg",
      degree: "Computer Hardware/ Software System",
      fieldOfStudy: "Tesda NC 2 certificate",
      period: "2019",
    },
  ];

  const skills = [
    {
      category: "Design",
      items: ["User Experience", "Design System", "Web Design", "Mobile Design", "Wireframing", "Prototyping", "Figma"],
    },
    {
      category: "Frontend Development",
      items: ["React JS", "Next JS", "HTML5", "CSS3", "JavaScript", "jQuery", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "Backend Development",
      items: ["Laravel/PHP", "MySQL", "MongoDB", "REST API", "Node.js", "Express"],
    },
    {
      category: "eCommerce",
      items: ["Shopify", "WooCommerce", "PrestaShop", "BigCommerce", "Custom Solutions", "Payment Gateways"],
    },
    {
      category: "Tools & Methods",
      items: ["Git", "VS Code", "Docker", "CI/CD", "Agile", "Scrum", "Jira", "Trello"],
    },
    {
      category: "Other Skills",
      items: ["Chakra UI", "Material UI", "Framer", "SEO", "OpenAI Integration", "WordPress"],
    },
  ];

  const certifications = [
    {
      title: "TESDA NC 2 Certificate",
      issuer: "Regional Training Center - X",
      date: "2019",
      description: "Computer Hardware/Software System Certification"
    }
  ];

  return (
    <div className="min-h-screen bg-resume-dark">
      <Header {...profileData} />
      
      <main>
        <SummarySection summary={summary} />
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <EducationSection educations={educations} />
        <CertificationsSection certifications={certifications} />
      </main>

      <footer className="bg-resume-dark py-8 border-t border-resume-primary/20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} Jerquin Bayudo. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-500">
            This resume was designed to showcase both professional experience and creative design abilities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
