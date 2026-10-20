export type Resource = {
  id: string
  name: string
  category: string
  description: string
  url: string
  tag?: string
}

export const categories = [
  'All resources',
  'AI Tools',
  'Career & Interviews',
  'MCA & Study',
  'Projects & Code',
  'Free Learning',
  'Developer Toolkit',
  'Data & Analytics',
  'Web Development',
  'Cloud & DevOps',
  'Coding Practice',
  'Creator Resources',
]

export const resources: Resource[] = [
  { id: 'chatgpt', name: 'ChatGPT', category: 'AI Tools', description: 'Brainstorm, learn, write and solve problems with an AI assistant.', url: 'https://chatgpt.com/', tag: 'Popular' },
  { id: 'gemini', name: 'Google Gemini', category: 'AI Tools', description: 'Explore Google’s AI assistant for ideas, learning and everyday tasks.', url: 'https://gemini.google.com/' },
  { id: 'claude', name: 'Claude', category: 'AI Tools', description: 'An AI assistant for writing, analysis, coding and learning.', url: 'https://claude.ai/' },
  { id: 'huggingface', name: 'Hugging Face', category: 'AI Tools', description: 'Explore open machine learning models, datasets and demos.', url: 'https://huggingface.co/' },
  { id: 'roadmap', name: 'roadmap.sh', category: 'Career & Interviews', description: 'Visual roadmaps for developers and technology careers.', url: 'https://roadmap.sh/', tag: 'Start here' },
  { id: 'leetcode', name: 'LeetCode', category: 'Coding Practice', description: 'Practice coding and prepare for technical interviews.', url: 'https://leetcode.com/' },
  { id: 'hackerrank', name: 'HackerRank', category: 'Coding Practice', description: 'Build programming skills with practical challenges.', url: 'https://www.hackerrank.com/' },
  { id: 'githubskills', name: 'GitHub Skills', category: 'Career & Interviews', description: 'Learn GitHub through short, practical exercises.', url: 'https://skills.github.com/' },
  { id: 'nptel', name: 'NPTEL', category: 'MCA & Study', description: 'Access courses from Indian institutes across technical subjects.', url: 'https://nptel.ac.in/' },
  { id: 'mitocw', name: 'MIT OpenCourseWare', category: 'MCA & Study', description: 'Explore course materials shared by MIT.', url: 'https://ocw.mit.edu/' },
  { id: 'cs50', name: 'CS50 by Harvard', category: 'MCA & Study', description: 'A well-known introduction to computer science and programming.', url: 'https://cs50.harvard.edu/' },
  { id: 'sqlbolt', name: 'SQLBolt', category: 'Data & Analytics', description: 'Learn SQL basics through interactive lessons.', url: 'https://sqlbolt.com/' },
  { id: 'githubexplore', name: 'GitHub Explore', category: 'Projects & Code', description: 'Discover open-source projects and developer communities.', url: 'https://github.com/explore/' },
  { id: 'freecodecamp', name: 'freeCodeCamp', category: 'Free Learning', description: 'Learn coding through free lessons and projects.', url: 'https://www.freecodecamp.org/' },
  { id: 'kaggle', name: 'Kaggle', category: 'Data & Analytics', description: 'Find datasets, notebooks, competitions and data science learning.', url: 'https://www.kaggle.com/' },
  { id: 'python', name: 'Python Documentation', category: 'Free Learning', description: 'The official Python language documentation and tutorial.', url: 'https://docs.python.org/3/' },
  { id: 'mdn', name: 'MDN Web Docs', category: 'Web Development', description: 'Reference guides and tutorials for web technologies.', url: 'https://developer.mozilla.org/' },
  { id: 'microsoftlearn', name: 'Microsoft Learn', category: 'Cloud & DevOps', description: 'Learn Microsoft technologies with guided modules and paths.', url: 'https://learn.microsoft.com/' },
  { id: 'vscode', name: 'Visual Studio Code', category: 'Developer Toolkit', description: 'A popular code editor with extensions and debugging tools.', url: 'https://code.visualstudio.com/' },
  { id: 'git', name: 'Git', category: 'Developer Toolkit', description: 'Learn and download the distributed version control system.', url: 'https://git-scm.com/' },
  { id: 'postman', name: 'Postman', category: 'Developer Toolkit', description: 'Build, test and document APIs with Postman resources.', url: 'https://www.postman.com/' },
  { id: 'react', name: 'React', category: 'Web Development', description: 'Learn React from its official documentation.', url: 'https://react.dev/' },
  { id: 'angular', name: 'Angular', category: 'Web Development', description: 'Explore the official Angular framework documentation.', url: 'https://angular.dev/' },
  { id: 'node', name: 'Node.js', category: 'Web Development', description: 'Learn about JavaScript on the server with Node.js.', url: 'https://nodejs.org/' },
  { id: 'powerbi', name: 'Power BI Learning', category: 'Data & Analytics', description: 'Training resources for reports, dashboards and data analysis.', url: 'https://learn.microsoft.com/en-us/training/powerplatform/power-bi/' },
  { id: 'pandas', name: 'pandas Documentation', category: 'Data & Analytics', description: 'Learn Python tools for working with tabular data.', url: 'https://pandas.pydata.org/docs/' },
  { id: 'tableau', name: 'Tableau Training', category: 'Data & Analytics', description: 'Explore training resources for data visualization.', url: 'https://www.tableau.com/learn/training' },
  { id: 'aws', name: 'AWS Skill Builder', category: 'Cloud & DevOps', description: 'Explore cloud learning paths and digital training.', url: 'https://skillbuilder.aws/' },
  { id: 'googlecloud', name: 'Google Cloud Training', category: 'Cloud & DevOps', description: 'Build cloud knowledge with Google Cloud training resources.', url: 'https://cloud.google.com/learn/training' },
  { id: 'kubernetes', name: 'Kubernetes Docs', category: 'Cloud & DevOps', description: 'Official documentation for Kubernetes concepts and tasks.', url: 'https://kubernetes.io/docs/' },
  { id: 'exercism', name: 'Exercism', category: 'Coding Practice', description: 'Practice programming with exercises and mentoring resources.', url: 'https://exercism.org/' },
  { id: 'codewars', name: 'Codewars', category: 'Coding Practice', description: 'Sharpen coding skills through community-created challenges.', url: 'https://www.codewars.com/' },
  { id: 'khan', name: 'Khan Academy', category: 'Free Learning', description: 'Free learning resources across math, computing and more.', url: 'https://www.khanacademy.org/' },
  { id: 'youtubecreators', name: 'YouTube Creators', category: 'Creator Resources', description: 'Official guidance and inspiration for YouTube creators.', url: 'https://www.youtube.com/creators/' },
  { id: 'instagramcreators', name: 'Instagram Creators', category: 'Creator Resources', description: 'Official updates, tips and resources for Instagram creators.', url: 'https://creators.instagram.com/' },
  { id: 'canva', name: 'Canva Design School', category: 'Creator Resources', description: 'Learn design skills and improve your visual content.', url: 'https://www.canva.com/designschool/' },
  { id: 'capcut', name: 'CapCut', category: 'Creator Resources', description: 'Explore video editing tools and creator resources.', url: 'https://www.capcut.com/' },
]
