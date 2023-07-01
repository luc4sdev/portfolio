import { ActionAreaCard } from "./ActionAreaCard/ActionAreaCard";

import projeto1 from '../../../assets/projeto1.png'
import projeto2 from '../../../assets/projeto2.png'
import projeto3 from '../../../assets/projeto3.png'
import projeto4 from '../../../assets/projeto4.png'
import projeto5 from '../../../assets/projeto5.jpg'
import projeto6 from '../../../assets/projeto6.png'
import projeto7 from '../../../assets/projeto7.png'
import projeto8 from '../../../assets/projeto8.png'

interface Project {
    id: number;
    title: string;
    description: string;
    src: string;
    url: string;
  }

const projects:Project[] = [
    {
        id: 1,
        title: 'Volvo Page',
        description: 'The objective of the project is to create a Volvo page with design for desktop and mobile, making it responsive and accessible. The project was created with NextJS and MUI.',
        src: projeto8,
        url: 'https://volvo-test-5b1656q6p-luc4sdev.vercel.app/'
    },
    {
        id: 2,
        title: 'API-Displacement',
        description: 'The objective of the project is to create a CRUD (Create, Read, Update, Delete) application with the Displacement API and connect it to the Front-End developed with NextJS and MUI.',
        src: projeto7,
        url: 'https://api-deslocamento-gtz3m2vkb-luc4sdev.vercel.app/'
    },
    {
        id: 3,
        title: 'Proffy',
        description: 'The project\'s proposal is an application that can connect those who want to learn with those who want to teach. You can find students for what you teach, or find the teacher for that subject you\'ve always wanted to learn more about! No area limitations!',
        src: projeto1,
        url: 'https://github.com/luc4sdev/Next-Level-Week-2'
    },
    {
        id: 4,
        title: 'Feedback Widget',
        description: 'The project consists of building the feedback functionality that is used on several web pages, so that the user can evaluate the service, clear up doubts or report an error, if any.',
        src: projeto2,
        url: 'https://github.com/luc4sdev/nlw-return-web-frontend'
    },
    {
        id: 5,
        title: 'CRUD NodeJS',
        description: 'The objective of the project is to create a CRUD (Create, Read, Update, Delete), using NodeJS and Express, making an APIRest with the Star Wars API, where you can search for information, such as how many planets there are, information for each one, Sort the list of planets by diameter.',
        src: projeto3,
        url: 'https://github.com/luc4sdev/crud-nodejs'
    },
    {
        id: 6,
        title: 'World Trip',
        description: 'The objective of the project is to create an interface for a travel website using (ReactJS, NextJs, ChakraUI).',
        src: projeto4,
        url: 'https://github.com/luc4sdev/interface-chakraui'
    },
    {
        id: 7,
        title: 'API REST NodeJS',
        description: 'The objective of the project is to create a RESTful API in Node.js connected to the SQlite database and with e2e tests in the entire application, for challenge 02 of Ignite Node.js. It\'s a transaction API, which contains all routes and functionality.',
        src: projeto5,
        url: 'https://github.com/luc4sdev/02-api-rest-nodejs'
    },
    {
        id: 8,
        title: 'Dashgo',
        description: 'The project proposal is an application that manages users of a platform, being able to do CRUD. The project was made with ReactJS, NextJS, ReactQuery, Chakra-ui.',
        src: projeto6,
        url: 'https://github.com/luc4sdev/dashgo'
    },
]

export function Projects() {
    return (
        <div className="mt-96 w-10/12 flex flex-col gap-8 justify-center items-center">
            <h1 className="text-slate-50 text-xl md:text-6xl font-semibold transition duration-500 hover:text-indigo-800">PROJECTS</h1>
            <p className="text-slate-50 text-lg md:text-xl text-center font-semibold">Some of my personal projects, you can find more in my github repository
          <a href="https://www.github.com/luc4sdev" target="_blank" rel="external"><i className="ms-2 text-2xl devicon-github-original"></i></a>.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <ActionAreaCard projects={projects}/>
            </div>
        </div>
    )
}