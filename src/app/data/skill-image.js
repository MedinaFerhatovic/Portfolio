
import angular from '../../../public/skills/angular.svg';
import bootstrap from '../../../public/skills/bootstrap.svg';
import c from '../../../public/skills/c.svg';
import canva from '../../../public/skills/canva.svg';
import cplusplus from '../../../public/skills/cplusplus.svg';
import css from '../../../public/skills/css.svg';
import git from '../../../public/skills/git.svg';
import html from '../../../public/skills/html.svg';
import javascript from '../../../public/skills/javascript.svg';
import microsoftoffice from '../../../public/skills/microsoftoffice.svg';
import mongoDB from '../../../public/skills/mongoDB.svg';
import mysql from '../../../public/skills/mysql.svg';
import nextJS from '../../../public/skills/nextJS.svg';
import php from '../../../public/skills/php.svg';
import react from '../../../public/skills/react.svg';
import aspnet from '../../../public/skills/aspnet.svg';
import nodejs from '../../../public/skills/nodejs.svg';
import expressjs from '../../../public/skills/expressjs.svg';
import jira from '../../../public/skills/jira.svg';
import visualparadigm from '../../../public/skills/visualparadigm.svg';
import confluence from '../../../public/skills/confluence.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next.js':
      return nextJS;
    case 'react native expo':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'php':
      return php;
    case 'git':
      return git;
    case 'canva':
      return canva;
    case 'microsoft office':
      return microsoftoffice;
    case 'asp.net':
        return aspnet;
    case 'node.js':
        return nodejs;
    case 'express.js':
        return expressjs;
    case 'jira':
        return jira;
    case 'visual paradigm':
        return visualparadigm;
    case 'confluence':
        return confluence;
    default:
      break;
  }
}
