import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaJava,
  FaLinux
} from "react-icons/fa";

import {RiOpenaiFill} from "react-icons/ri";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql, BiLogoGmail } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiPowerapps,
  SiPowerautomate,
  SiPowerbi,
  SiPowervirtualagents,
  SiPowerpages
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  // { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Artificial Intelligence",
    icon: RiOpenaiFill,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
];

export const skillsData = [
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Linux",
    icon: FaLinux,
  },

  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MySQL",
    icon: GrMysql,
  },
  {
    name: "Power Apps",
    icon: SiPowerapps,
  },
  {
    name: "Power Automate",
    icon: SiPowerautomate,
  },
  {
    name: "Power BI",
    icon: SiPowerbi,
  },
  {
    name: "Power Virtual Agents",
    icon: SiPowervirtualagents,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: RiOpenaiFill,
  },
];

export const workData = [
  {
    company: "Zelarsoft Private Limited",
    designation: "Software Engineer",
    duration: "June 2023 - Present",
    companyImg: "zelarsoft.jpg",
    description: (
      <>
        <ul>
          <li>
            Specialized in designing and developing user-friendly interfaces. Expert in low-code application development and workflow automation.
          </li>
          <li>
            Proficient in data visualization, data source management, and
            integrating AI solutions for project improvement
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "TechDimension IT Solutions LLP",
    designation: "Associate Software Engineer",
    duration: "August 2022 - May 2023",
    companyImg: "techd.jpg",
    description: (
      <>
        <ul>
          <li>
            Developing Portal for students to access the Recordings and managing
            the student&apos;s List. Contributed to writing Blogs on SQL server and
            Power Platform
          </li>
          <li>
            Gained hands-on experience in Power Apps, Power Automate, Dataverse,
            SharePoint, React JS
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  // {
  //   type: "WEB-APP",
  //   title: "M365 Dashboard",
  //   image: "m365Dashboard",
  //   link: null,
  //   source: "https://github.com/SaiVittal/M365-Health-Report",
  // },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-site-image",
    link: "https://portfolio-website-saivittal.vercel.app/",
    source: "https://github.com/SaiVittal/portfolio-website",
  },
  {
    type: "WEB-APP",
    title: "Social Media Application",
    image: "sociomedia-app",
    link: 'https://mern-frontend-sociomedia.onrender.com/',
    source: "https://github.com/SaiVittal/mern-social-media",
  },
  {
    type: "WEB-APP",
    title: "Sell Cars",
    image: "buzzcars-homepage",
    link: 'https://front-end-buzzcars.onrender.com/',
    source: "https://github.com/SaiVittal/Buzzcars",
  },

  {
    type: "WEB-APP",
    title: "Dental Care",
    image: "DentalCare",
    link: "https://saivittal.github.io/DentalCare/",
    source: "https://github.com/SaiVittal/DentalCare",
  },
  {
    type: "WEB-APP",
    title: "Airbnb Clone",
    image: "Airbnb",
    link: "https://airbnb-webclone-sai.netlify.app/",
    source: "https://github.com/SaiVittal/Airbnb-Clone2",
  },
  {
    type: "PROJECT",
    title: "Dice Game",
    image: "DiceGame",
    link: "https://saivittal.github.io/DiceGame/",
    source: "https://github.com/SaiVittal/DiceGame",
  },
  {
    type: "PROJECT",
    title: "Drum Rolls Game",
    image: "DrumRollsGame",
    link: "https://saivittal.github.io/Drums-Rolls/",
    source: "https://github.com/SaiVittal/Drums-Rolls",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/SaiVittal",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/sai-vittal-0201/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://twitter.com/vittal18918",
    icon: FaTwitter,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  {
    href: "mailto:vickysaivittal@gmail.com",
    icon: BiLogoGmail,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
