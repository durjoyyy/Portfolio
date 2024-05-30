import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Admin Dashboard',
        description: `Developed features like charts, calendars, tables, Kanban Trello board, Todo apps, and Material tables. 
                      Key libraries like Chart.js and Material-UI tables were used to enhance user interaction and data analysis within the dashboard. 
                      Features such as data filtering, sorting, and drag-and-drop functionality within the Kanban board were integrated to enrich the user experience.`,
        tools: ['React', 'Chart.js', 'Material-UI', 'Bootstrap'],
        role: 'FrontEnd Developer',
        code: 'Project Link',
        demo: '',
        image: '',  // Add image reference if available
    },
    {
        id: 2,
        name: 'Conversia-AI',
        description: `Developed a Generative AI Chatbot with the integration of Gemini API. 
                      Ensured adding typing effects, responsive design, and used styled components.`,
        tools: ['React', 'Gemini API', 'Styled Components'],
        role: 'FrontEnd Developer',
        code: 'Project Link',
        demo: '',
        image: '',  // Add image reference if available
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },