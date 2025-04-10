
export const skillsIcon = (skill) => {
  const iconMap = {
    "JavaScript": <i className="fab fa-js-square text-yellow-400 text-5xl"></i>,
    "Express.js": <i className="fas fa-server text-green-600 text-5xl"></i>,
    "Angular": <i className="fab fa-angular text-red-600 text-5xl"></i>,
    "C++": <div className="text-blue-600 text-3xl font-bold border border-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
    C++
   </div>,
  
    "ASP.NET": <i className="fas fa-window-restore text-purple-600 text-5xl"></i>,
    "Python": <i className="fab fa-python text-blue-400 text-5xl"></i>,
    "PHP": <i className="fab fa-php text-indigo-500 text-5xl"></i>,
    "Node.js": <i className="fab fa-node-js text-green-500 text-5xl"></i>,
    "HTML": <i className="fab fa-html5 text-orange-500 text-5xl"></i>,
    "CSS": <i className="fab fa-css3-alt text-blue-500 text-5xl"></i>,
    "MySQL": <i className="fas fa-database text-blue-700 text-5xl"></i>,
    "MongoDB": <i className="fas fa-leaf text-green-600 text-5xl"></i>,
    "React Native Expo": <i className="fab fa-react text-cyan-400 text-5xl"></i>,
    "Next.js": <i className="fas fa-forward text-white text-5xl"></i>,
    "Git": <i className="fab fa-git-alt text-orange-400 text-5xl"></i>,
    "Jira": <i className="fab fa-jira text-blue-500 text-5xl"></i>,
    "Confluence": <i className="fas fa-project-diagram text-blue-600 text-5xl"></i>,
    "Visual Paradigm": <i className="fas fa-sitemap text-purple-400 text-5xl"></i>,
    "Microsoft Office": <i className="fas fa-file-word text-red-500 text-5xl"></i>,
    "Canva": <i className="fas fa-palette text-blue-300 text-5xl"></i>,
  };

  return iconMap[skill] || <i className="fas fa-code text-gray-300 text-5xl"></i>;
};
