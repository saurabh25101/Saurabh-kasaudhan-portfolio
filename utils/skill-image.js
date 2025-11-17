 // Import all required SVGs
import aws from '../app/assets/svg/skills/aws.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import css from '../app/assets/svg/skills/css.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nodeJS from '../app/assets/svg/skills/nodejs.svg';
import nodemailer from '../app/assets/svg/skills/nodemailer.svg';
import react from '../app/assets/svg/skills/react.svg';
import restfulAPI from '../app/assets/svg/skills/restful-api.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';

// Skills array
export const skillsData = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'React',
  'Next JS',
 
  'MongoDB',
  'MySQL',
  'Node Mailer',
  'Git',
  'Bootstrap',
  'Node JS',
  'RESTful API'
];

// Function to get corresponding icon
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html': return html;
    case 'css': return css;
    case 'javascript': return javascript;
    
    case 'react': return react;
    case 'next js': return nextJS;
    case 'tailwind': return tailwind;
    case 'mongodb': return mongoDB;
    case 'mysql': return mysql;
    case 'git': return git;
    case 'bootstrap': return bootstrap;
    case 'node js': return nodeJS;
    case 'node mailer': return nodemailer;
    case 'restful api': return restfulAPI;
    case 'aws': return aws;
   
    default: return null;
  }
}
