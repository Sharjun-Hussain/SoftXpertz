import {
  Home,
  PanelTopClose,
  PersonStanding,
  ServerIcon,
  User2,
} from "lucide-react";
import Image from "next/image";

import software1 from "@/public/custom.webp";
import software2 from "@/public/custom2.webp";
import software3 from "@/public/custom3.webp";
import software4 from "@/public/custom4.webp";
import software5 from "@/public/mobile.webp";
import software6 from "@/public/it.webp";
import software7 from "@/public/software.webp";
import software8 from "@/public/software2.webp";
import software9 from "@/public/software3.webp";
import software10 from "@/public/software4.webp";
import software11 from "@/public/software5.webp";

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
    category: "Development",
    title: "Software Development",
    description:
      "We craft innovative and robust software solutions tailored to your unique business needs.  We leverage cutting-edge technologies and agile methodologies to deliver high-quality, scalable, and maintainable software that empowers your business to thrive in today's dynamic market.",

    src: software1,

    benefitsDescription:
      "Our team of experienced software developers possesses a diverse skillset and deep expertise across a wide range of technologies and platforms, including:",
    benefits: [
      "Web Application Development: We build responsive and user-friendly web applications using modern frameworks to deliver seamless user experiences across all devices.",
      "Cloud Computing Solutions: We leverage cloud platforms like AWS, Azure, and Google Cloud to build scalable and cost-effective cloud-native applications, migrating existing applications to the cloud, and managing cloud infrastructure.",
      "API Development and Integration: We design and develop RESTful APIs and integrate with third-party APIs to connect your systems and enable seamless data exchange.",
      "Software Testing and Quality Assurance: We employ rigorous testing methodologies, including unit testing, integration testing, and user acceptance testing, to ensure the1 quality and reliability of our software solutions.",
    ],
    title2: "Our Development Process:",
    description2:
      "We follow an agile and collaborative development process, ensuring transparency and continuous communication throughout the project lifecycle.",
    title3: "Why Choose Us?",
    pointstitle: "Why Choose us?",
    points: [
      "Experienced Team: Our team comprises highly skilled and experienced software developers with a proven track record.",
      "Client-Centric Approach: We prioritize client satisfaction and work closely with you to understand your needs and deliver tailored solutions.",
      "Agile Methodologies: We utilize agile methodologies to ensure flexibility, transparency, and continuous improvement throughout the development process.",
      "Quality Assurance: We are committed to delivering high-quality software solutions that meet your expectations and exceed industry standards.",
      "Quality Assurance: We are committed to delivering high-quality software solutions that meet your expectations and exceed industry standards.",
    ],
    title3: "Let's Build Your Vision:",
    description3:
      "Ready to transform your business with innovative software solutions? Contact us today to discuss your project and discover how we can help you achieve your goals. ",
  },
  {
    category: "Development",
    title: "Mobile App Development",
    description:
      "At SoftXpertz, we transform your ideas into engaging and impactful mobile experiences. We specialize in developing high-quality native and cross-platform mobile applications for iOS and Android platforms, empowering your business to connect with your target audience on the go.",
    src: software5,
    benefitsDescription:
      "Our team of experienced mobile app developers possesses a deep understanding of the mobile landscape and leverages the latest technologies to create innovative and user-friendly apps.  We offer a comprehensive suite of mobile app development services, including:",
    benefits: [
      "Ideation and Discovery",
      "Native Android & iOS Development",
      "Cross-Platform Development",
      "Hybrid App Development",
      "UI/UX Design",
      "Backend Development",
      "App Testing and Quality Assurance",
      "App Store Submission and Launch Support",
      "Maintenance and Support",
    ],
    pointstitle: "Why Choose Us?",
    points: [
      "Experienced Team: Our team comprises highly skilled and experienced mobile app developers with a proven track record.",
      "Client-Centric Approach: We prioritize client satisfaction and work closely with you to understand your needs and deliver tailored solutions.",
      "Latest Technologies: We leverage the latest technologies and frameworks to create cutting-edge mobile apps.",
      "Agile Methodologies: We utilize agile methodologies to ensure flexibility, transparency, and continuous improvement throughout the development process.",
      "Quality Assurance: We are committed to delivering high-quality mobile apps that meet your expectations and exceed industry standards.",
      "Competitive Pricing: We offer competitive pricing models to ensure you get the best value for your investment.",
    ],
    title3: "Bring Your App Idea to Life:",
    description3:
      "Ready to transform your vision into a successful mobile app? Contact us today to discuss your project and discover how we can help you achieve your mobile app goals. ",
  },
  {
    category: "Smart IoT Projects",
    title: "IoT Products Design & Development",
    description:
      "At SoftXpertz, we specialize in designing and developing cutting-edge Internet of Things (IoT) products that connect your world and drive innovation. From concept to deployment, we offer comprehensive solutions tailored to your specific needs, empowering you to harness the full potential of IoT.",
    src: software9,
    benefitsDescription:
      "We possess a deep understanding of the diverse landscape of IoT technologies and applications. Our team of experienced engineers, designers, and developers are proficient in:",
    benefits: [
      "Hardware Design: We craft robust and reliable hardware solutions, including sensor selection, microcontroller integration, communication modules (Wi-Fi, Bluetooth, etc.), and power management, ensuring optimal performance and longevity.",
      "Firmware Development: Our skilled firmware engineers develop efficient and secure embedded software that forms the core intelligence of your IoT devices, enabling seamless data acquisition, processing, and communication.",
      "Software Development: We build scalable and user-friendly software applications, including cloud platforms, mobile apps, and web dashboards, for data visualization, device management, and insightful analytics.",
      "Connectivity and Communication: We implement robust and secure communication protocols and infrastructure, ensuring seamless data transfer between devices and platforms.",
      "Cloud Integration: We leverage leading cloud platforms (AWS, Azure, Google Cloud, etc.) to provide secure data storage, processing, and management, enabling remote access and control of your IoT devices.",
      "Data Analytics: We extract valuable insights from the data generated by your IoT devices, providing you with actionable intelligence to optimize processes, improve efficiency, and make informed decisions.",
      "Security: We prioritize security at every stage of the development process, implementing robust measures to protect your data and devices from unauthorized access and cyber threats.",
      "Prototyping and Testing: We create functional prototypes for validation and testing, ensuring your product meets your requirements and performs reliably in real-world conditions.",
      "Manufacturing and Deployment: We assist with manufacturing and deployment, ensuring a smooth transition from prototype to production and a seamless rollout of your IoT solution.",
    ],
    title3: "Let's Connect:",
    description3:
      "Ready to bring your IoT vision to life? Contact us today to discuss your project and discover how we can help you create innovative and impactful IoT solutions. ",
  },
  {
    category: "IT Services",
    title: "Business Analysis & Project Management",
    description:
      "We provide business analysis services to align software with your specific business objectives and cover all gaps. This ensures your project runs smoothly and effectively meets business needs.",
    src: software6,
    benefitsDescription:
      "Our business analysis services offer structured documentation and clear communication to ensure successful project delivery.",
    benefits: [
      "Clear project requirements",
      "Detailed description of tasks",
      "Structured project documentation",
      "Clear communication between stakeholders and the development team",
    ],
  },

  // {
  //   category: "Software Development",
  //   title: "Software Application Modernization",
  //   description:
  //     "Advance performance and security of your system, migrate to cutting-edge technologies, and reduce hidden maintenance costs with application modernization.",
  //   src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   benefitsDescription:
  //     "Our software modernization services focus on improving system performance and eliminating outdated dependencies.",
  //   benefits: [
  //     "Legacy software migration",
  //     "Cloud migration",
  //     "Software extension",
  //     "System re-architecture",
  //     "UX/UI updates",
  //   ],
  // },
  // {
  //   category: "IT Services",
  //   title: "Remote Managed IT Services",
  //   description:
  //     "Get end-to-end IT support, system health checks, and management to keep your business running efficiently and securely.",
  //   src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   benefitsDescription:
  //     "Our managed IT services provide proactive support and maintenance to ensure smooth business operations.",
  //   benefits: [
  //     "Business Analysis",
  //     "Research and Development",
  //     "Proof of Concept or Minimum Viable Product",
  //     "Managed maintenance and support",
  //     "Remote project management",
  //     "System health check",
  //   ],
  // },
  {
    category: "Networking Services",
    title: "Networking & Smart Homing/Office",
    description:
      "Our experts analyze market trends and collected data to design future-proof solutions tailored to your needs. Build smarter, connected environments for homes or offices.",
    src: software11,
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
