import projeto2 from '../assets/projeto2.png'
import projeto7 from '../assets/projeto7.png'
import projeto8 from '../assets/projeto8.png'
import projeto9 from '../assets/projeto9.png'
import projeto10 from '../assets/projeto10.png'
import projeto11 from '../assets/projeto11.png'
import projeto12 from '../assets/projeto12.png'
import projeto13 from '../assets/projeto13.png'


interface Project {
    id: number;
    title: string;
    description: string;
    src: string;
    url: string;
    live?: boolean;
}
export const projects: Project[] = [
    {
        id: 1,
        title: 'SaaS (RBAC) - NextJS',
        description: 'A SaaS application built with Next.js and Node.js, featuring Role-Based Access Control (RBAC). This platform allows the creation of companies and projects, where each company manages its own projects and users. It includes JWT authentication and GitHub login for secure access management.',
        src: projeto12,
        url: 'https://next-saas-rbac-web-one.vercel.app/',
        live: true,
    },
    {
        id: 2,
        title: 'Support App',
        description: 'A full-stack customer support and management application built with Next.js, Node.js, and Fastify. The front-end uses React.js, TailwindCSS, Radix UI, and TanStack Query, ensuring a responsive and optimized UI/UX. The back-end is powered by Prisma ORM with a Dockerized database, JWT authentication, and Swagger documentation. Following SOLID, DDD, and TDD principles, the project includes unit and E2E tests integrated into a CI/CD pipeline. The application is deployed on Vercel (front-end) and Render (back-end) for full functionality.',
        src: projeto12,
        url: 'https://support-app-neon.vercel.app/',
        live: true,
    },
    {
        id: 3,
        title: 'Routers App',
        description: 'A full-stack customer and router management application built with Next.js, Node.js, and Fastify. The front-end leverages React.js, TailwindCSS, Radix UI, and TanStack Query, ensuring a responsive and well-structured UI/UX. The back-end utilizes Prisma ORM and Elasticsearch for data storage, running in a Dockerized environment. Authentication is handled via JWT, and the Elasticsearch API is documented with Swagger. The project follows SOLID, DDD, and TDD principles, with unit and E2E tests integrated into a CI/CD pipeline. The application is deployed on Vercel (front-end) and Render (back-end) for full functionality.',
        src: projeto12,
        url: 'https://routers-app-eta.vercel.app/',
        live: true,
    },
    {
        id: 4,
        title: 'PUBG Stats',
        description: 'An application in ReactJS and NextJS that communicates with the PUBG API, in this application the player can consult their data in the game, such as K/D, longest kill distance, number of wins, among others and it is also possible to consult the ranking of the best players on South American servers.',
        src: projeto12,
        url: 'https://pubg-app-omega.vercel.app/',
        live: true,
    },
    {
        id: 5,
        title: 'Dev Store',
        description: 'It is a front-end project for an e-commerce made with NextJS 14, using all the framework\'s new features, such as server components, SSR streaming, client components, routing, Suspense API, Data fetching, Cache & Memoization.',
        src: projeto13,
        url: 'https://devstore-delta.vercel.app/',
        live: true,
    },
    {
        id: 6,
        title: 'Ignite Shop',
        description: 'A modern e-commerce application built with Next.js 14 and React.js, leveraging the latest framework features like server components, SSR streaming, client components, Suspense API, and advanced data fetching. The project includes product listing, checkout integration with Stripe, and a success page, ensuring a seamless shopping experience. Styling is handled with Stitches, and API communication is managed using Axios. Deployed on Vercel for high performance and scalability.',
        src: projeto13,
        url: 'https://ignite-shop-iota-dun.vercel.app/',
        live: true,
    },
    {
        id: 7,
        title: 'Dashboard - Tailwindcss',
        description: 'A responsive dashboard built with Next.js and TailwindCSS, featuring light and dark mode for an optimized user experience. This project focuses on modern styling techniques, ensuring a clean and adaptable UI across different devices. It demonstrates the power of TailwindCSS for rapid styling and Next.js for seamless performance.',
        src: projeto13,
        url: 'https://dashboard-tailwind-navy.vercel.app/',
        live: true,
    },
    {
        id: 8,
        title: 'Upload AI',
        description: 'Upload AI is an innovative platform built with Next.js on the front-end and Node.js with Fastify on the back-end. This project allows users to upload videos, which are then transcribed, and with the help of ChatGPT, automatic titles or descriptions can be generated. The platform features a responsive dashboard, built using ShadCNUI for a sleek user interface and TailwindCSS for styling, ensuring an efficient and high-performance experience.',
        src: projeto13,
        url: 'https://upload-ai-web-eight.vercel.app/',
        live: true,
    },
    {
        id: 9,
        title: 'Pass In',
        description: 'A complete event management platform built with Next.js on the front-end and Node.js with Fastify on the back-end. This project allows users to create events, register participants, and manage attendance efficiently. It features a responsive UI, built with TailwindCSS, and ensures high performance with Fastify.',
        src: projeto13,
        url: 'https://pass-in-web-alpha.vercel.app/',
        live: true,
    },
    {
        id: 10,
        title: 'Video Player',
        description: 'Video Player is a front-end project built with Vite, focusing on improving state management skills using Zustand and Redux. This platform provides a responsive and efficient video player experience, with features like video playback and user interactions. The UI is styled with TailwindCSS, ensuring a smooth and modern design, and the project emphasizes state management techniques for optimal performance.',
        src: projeto13,
        url: 'https://react-redux-zustand-roan.vercel.app/',
        live: true,
    },
    {
        id: 11,
        title: 'Design System',
        description: 'Design System is a front-end project built with Vite and Storybook, focused on creating a scalable and reusable set of UI components. This project helps standardize the design process, ensuring consistency across applications. The system allows developers to easily preview and test components in isolation using Storybook, facilitating efficient UI development and maintaining a cohesive design.',
        src: projeto13,
        url: 'https://luc4sdev.github.io/design-system/',
        live: true,
    },
    {
        id: 12,
        title: 'App Feed',
        description: 'The project\'s objective is to implement a feed screen with data from the Giphy API, returning the top trending gifs. The application was developed using ReactJS and NextJS. Unit tests were also performed with Jest and React Testing Library.',
        src: projeto11,
        url: 'https://appfeed.vercel.app/',
        live: true,
    },
    {
        id: 13,
        title: 'Clima App',
        description: 'The objective of the project is to create an application that connects with the weather API and fetches the current weather of the user\'s city based on their location, it also has a page that searches for the address using the street name via the addresses API. The project was created with NextJS and TailwindCSS.',
        src: projeto9,
        url: 'https://clima-app-rouge.vercel.app/',
        live: true,
    },
    {
        id: 14,
        title: 'Timer',
        description: 'The objective of the project is to create a Timer application to control the user\'s activity time. The project was created with ReactJS, React Hook Form and Styled Components.',
        src: projeto10,
        url: 'https://ignite-timer-three-ashy.vercel.app/',
        live: true,
    },
    {
        id: 15,
        title: 'Volvo Page',
        description: 'The objective of the project is to create a Volvo page with design for desktop and mobile, making it responsive and accessible. The project was created with NextJS and MUI.',
        src: projeto8,
        url: 'https://volvo-test-5b1656q6p-luc4sdev.vercel.app/',
        live: true,
    },
    {
        id: 16,
        title: 'API-Displacement',
        description: 'The objective of the project is to create a CRUD (Create, Read, Update, Delete) application with the Displacement API and connect it to the Front-End developed with NextJS and MUI.',
        src: projeto7,
        url: 'https://api-deslocamento-gtz3m2vkb-luc4sdev.vercel.app/',
        live: true,
    },
    {
        id: 17,
        title: 'Feedback Widget',
        description: 'The project consists of building the feedback functionality that is used on several web pages, so that the user can evaluate the service, clear up doubts or report an error, if any.',
        src: projeto2,
        url: 'http://nlw-return-web-frontend.vercel.app/',
        live: true,

    },
]