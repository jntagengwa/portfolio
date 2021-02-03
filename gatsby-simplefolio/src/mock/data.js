import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jean-Fidele Ntagengwa', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jean-Fidele Ntagengwa',
  subtitle: 'React Full-Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a full-stack Web developer with experience creating modern and responsive websites using the latest tools and technologies available. I am a self-driven, self-taught and detail-oriented developer, focused on quality and exceeding expectations set by my clients, along with excellent communication skills and a passion for delivering the best and fastest experience.',
  paragraphTwo:
    'Web development Skills: - React, React Hooks, Redux - JavaScript - CSS, SASS, Material-UI, Bootstrap - GraphQL, Express, Node JS - MYSQL, MongoDB',
  paragraphThree:
    'Availability is the best ability and I strive to give clients as much of my time as they need. I have experience in collaborating with the team members using version control(Git). I work best with clear milestones with well-defined task flows. I am looking forward to working with you.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'umunara_logo.png',
    title: 'Umunara Inc,',
    info:
      'Complete redesign (from scratch) of the front-end for this non-profit organization. Also gave them an overhauled backend with integrated database.',
    info2: '',
    url: 'https://umunara.org',
    repo: 'https://github.com/jntagengwa/umunara.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fountain.png',
    title: 'Fountain Church Kent',
    info:
      'Complete redesign of front-end to bring a more modern look and feel. Website currently under construction.',
    info2: '',
    url: 'https://fountainchurch.net',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Let me help you achieve your goals!',
  btn: '',
  email: 'jntagengwa@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jntagengwa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
