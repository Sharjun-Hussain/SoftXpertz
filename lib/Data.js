import {
  Home,
  PanelTopClose,
  PersonStanding,
  ServerIcon,
  User2,
} from "lucide-react";
import Image from "next/image";

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export const testimonials = [
  {
    quote:
      "SoftXpertz provided an outstanding software solution for our company. Their expertise in development and UI/UX design has helped us streamline our business operations effectively.",
    name: "Mohamed Sarafath",
    title: "Co-Founder, Inzeedo",
  },
  {
    quote:
      "The team at SoftXpertz delivered a top-notch CRM system for us. Their attention to detail and commitment to meeting deadlines exceeded our expectations.",
    name: "Mohamed Rizmi",
    title: "Director, The Study (PVT) Ltd",
  },
  {
    quote:
      "SoftXpertz helped us launch a cutting-edge e-commerce platform. Their innovative approach and problem-solving skills made a huge difference.",
    name: "Kasun Jayasuriya",
    title: "CEO, LankaTech Solutions",
  },
  {
    quote:
      "We partnered with SoftXpertz for a complete digital transformation. Their expertise in cloud solutions and API integrations was exactly what we needed.",
    name: "Tharindu Fernando",
    title: "CTO, Ceylon Logistics",
  },
  {
    quote:
      "SoftXpertz designed an elegant and modern website for our company. Their creativity and attention to branding helped us establish a strong online presence.",
    name: "Nihal Perera",
    title: "Marketing Manager, Bethel Kitches",
  },
];

export const services = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export const links = [
  {
    title: "Home",
    icon: <Home className="h-full w-full text-white" />,
    href: "#home",
  },

  {
    title: "Services",
    icon: <ServerIcon className="h-full w-full text-white" />,
    href: "#services",
  },
  {
    title: "Products",
    icon: <PanelTopClose className="h-full w-full text-white" />,
    href: "#products",
  },

  {
    title: "Career",
    icon: <PersonStanding className="h-full w-full text-white" />,
    href: "#about",
  },

  {
    title: "Contact",
    icon: <User2 className="h-full w-full text-white" />,
    href: "#contact",
  },
];

export const Services = [
  {
    category: "IT Services",
    title: "Business Analysis & Project Management",
    description:
      "We provide business analysis services to align software with your specific business objectives and cover all gaps. This ensures your project runs smoothly and effectively meets business needs.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefitsDescription:
      "Our business analysis services offer structured documentation and clear communication to ensure successful project delivery.",
    benefits: [
      "Clear project requirements",
      "Detailed description of tasks",
      "Structured project documentation",
      "Clear communication between stakeholders and the development team",
    ],
  },
  {
    category: "Software Development",
    title: "Mobile App (Android & iOS) Development",
    description:
      "Make your business work from wherever you are with a smart mobile application. Boost your online presence and business opportunities with profit-driven and internal corporate mobile solutions.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefitsDescription:
      "Our mobile app development services enhance your business accessibility and user experience across multiple platforms.",
    benefits: [
      "Android mobile app development",
      "iOS mobile app development",
      "Cross-platform app development",
      "Seamless user experience on modern portable devices",
    ],
  },
  {
    category: "Software Development",
    title: "Software Application Modernization",
    description:
      "Advance performance and security of your system, migrate to cutting-edge technologies, and reduce hidden maintenance costs with application modernization.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefitsDescription:
      "Our software modernization services focus on improving system performance and eliminating outdated dependencies.",
    benefits: [
      "Legacy software migration",
      "Cloud migration",
      "Software extension",
      "System re-architecture",
      "UX/UI updates",
    ],
  },
  {
    category: "IT Services",
    title: "Remote Managed IT Services",
    description:
      "Get end-to-end IT support, system health checks, and management to keep your business running efficiently and securely.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefitsDescription:
      "Our managed IT services provide proactive support and maintenance to ensure smooth business operations.",
    benefits: [
      "Business Analysis",
      "Research and Development",
      "Proof of Concept or Minimum Viable Product",
      "Managed maintenance and support",
      "Remote project management",
      "System health check",
    ],
  },
  {
    category: "Networking Services",
    title: "Networking & Smart Homing/Office",
    description:
      "Our experts analyze market trends and collected data to design future-proof solutions tailored to your needs. Build smarter, connected environments for homes or offices.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefitsDescription:
      "We offer integrated networking solutions to optimize connectivity and ensure your home or office is future-ready.",
    benefits: [
      "Thorough data analysis",
      "Market research insights",
      "Comprehensive documentation preparation",
      "Smart home and office integration",
    ],
  },
];
