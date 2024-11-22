import {AiOutlineAndroid} from 'react-icons/ai'
import { SiAzuredevops } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { BsCodeSlash, BsGit, BsFillDatabaseFill } from "react-icons/bs";
import { firebase, flutter, pnCliqueStreaming, pnClique, mongodb, nodejs, postgres, project03, project04, project06, react, pnCliqueCoworking, typescript, aws, php, pnCliqueCar } from "@/assets";

export const servicesData = [
    {
      id: Math.random(),
      icon: <SiAzuredevops size={56} className="icon" />,
      title: "Cloud Engineer",
      content: "I have extensive knowledge and proven experience working with linux servers, server management and docker.",
    },
    {
      id: Math.random(),
      icon: <BsCodeSlash size={56} className="icon" />,
      title: "WEB DEVELOPMENT",
      content:
        "I create beautiful interfaces with simple HTML, CSS, & JavaScript and also frameworks like ReactJS and NextJS.",
    },
    {
      id: Math.random(),
      icon: <AiOutlineAndroid size={56} className="icon" />,
      title: "MOBILE DEVELOPMENT",
      content: 'I have advanced knowledge of mobile development. I can build mobile applications with Flutter.'
    },
    {
      id: Math.random(),
      icon: <BsGit size={56} className="icon" />,
      title: "VERSION CONTROL",
      content:
        "I can use version control systems well, and Git is my go-to tool.",
    },
    {
      id: Math.random(),
      icon: <TbBrandJavascript size={56} className="icon" />,
      title: "NPM AND NODEJS",
      content:
        "I have core knowledge of NPM and am an expert in back-end development. I also build general-purpose applications using NodeJS.",
    },
    {
      id: Math.random(),
      icon: <BsFillDatabaseFill size={56} className="icon" />,
      title: "WEB SCRAPING",
      content:
        "I can collect content and data from the internet then manipulate and analyze as needed.",
    },
  ];

export const stacksData = [
    {
        id: Math.random(),
        image: nodejs,
    },
    {
        id: Math.random(),
        image: mongodb,
    },
    {
        id: Math.random(),
        image: postgres,
    },
    {
        id: Math.random(),
        image: aws,
    },
    {
        id: Math.random(),
        image: flutter,
    },
    {
        id: Math.random(),
        image: typescript,
    },
    {
        id: Math.random(),
        image: react,
    },
    {
        id: Math.random(),
        image: php,
    },
    {
        id: Math.random(),
        image: firebase,
    },
]

export const ProjectsData = [
    {
        id: Math.random(),
        image: pnCliqueCoworking,
        title: 'PN Clique Coworking',
        content: 'This project is a website for booking coworking rooms, and its main functions include the payment method using multicaixa express and booking notifications by e-mail.',
        stacks: ['TypeScript', 'NodeJs', 'ReactJS', 'PostgreSql'],
        url: 'https://coworking.pnclique.com/booking',
        github: '#'
    },
    {
        id: Math.random(),
        image: pnClique,
        title: 'PN Clique',
        content: 'This project is a beautiful institutional website, which serves to present the company, its services and its employees.',
        stacks: ['JavaScript', 'SASS', 'ReactJS', 'Gsap'],
        url: 'https://www.pnclique.com',
        github: '#'
    },
    {
        id: Math.random(),
        image: pnCliqueCar,
        title: 'PN Clique Car',
        content: 'Online car rental and booking site where you can rent a car without leaving your home.',
        stacks: ['NextJS' , 'TailwindCSS'],
        url: 'https://car.pnclique.com',
        github: '#'
    },
    {
        id: Math.random(),
        image: pnCliqueStreaming,
        title: 'PN Clique Streaming',
        content: 'An online store that allows you to buy and sell streaming services online, where any visitor can buy and receive the service completely online...',
        stacks: ['NextJS' , 'NodeJS', 'MongoDB', 'Firebase'],
        url: 'https://streaming.pnclique.com',
        github: '#'
    },
    {
        id: Math.random(),
        image: project03,
        title: 'My Portifolio',
        content: 'This is my portfolio project, my website, where I introduce myself and the services I offer and the technologies I use.',
        stacks: ['HTML' , 'Css', 'JavaScript', 'NextJS'],
        url: '#',
        github: 'https://github.com/EduardoPembeleAfonso/My-portfolio'
    },
    {
        id: Math.random(),
        image: project04,
        title: 'Password Manager',
        content: 'This project is a password management and analysis app with a beautiful, modern interface and a wide range of features.',
        stacks: ['Dart' , 'Flutter',],
        url: '#',
        github: 'https://github.com/EduardoPembeleAfonso/password-manager'
    },
    {
        id: Math.random(),
        image: project06,
        title: 'Clone Zap On',
        content: 'This project is a clone of the interface of the Zap app, the famous Zap On, the clone is fully animated and responsive.',
        stacks: ['Dart' , 'Flutter',],
        url: '#',
        github: 'https://github.com/EduardoPembeleAfonso/Clone-Zap-On'
    },
]