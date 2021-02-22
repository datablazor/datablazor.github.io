module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://datablazor.github.io`,
    // Your Name
    name: 'Sunil Raj Thota',
    // Main Site Title
    title: `Sunil Raj Thota | Data Blazor`,
    // Description that goes under your name in main bio
    description: `Data Enthusiast | Actively looking for 2021 Summer/ Fall Internships/ Co-ops Opportunities!`,
    // Optional: Twitter account handle
    author: `@sunilraj17`,
    // Optional: Github account URL
    github: `https://github.com/datablazor`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sunilrajthota/`,
    // Content of the About Me section
    about: `I'm currently pursuing a Master's Degree in the fields of Data Analytics at Northeastern University, Boston | Will Graduate by Summer 2022`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Mechanisms of Actions Drug Prediction Algorithm',
        description:
          'Applied and built Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, XG Boost tests, and PCA. Led a team of 3 to predict drugs based on biological actions, and contact of medicines with body cells',
        link: 'https://www.google.com',
      },
      {
        name: 'US Super Store Global Sales',
        description:
          'Augmented an interactive, dynamic, and user-friendly Excel Dashboard using slicers, filters, pivot tables, and charts. Interpreted data to draw decisions for managerial actions, business strategies, operations, and performance',
        link: 'https://www.google.com',
      },
      {
        name: 'Stock Price Analysis',
        description:
          'Harvested data from Yahoo Finance and performed forecasting. Seen how stock price has changed over time. Examined index, open, close, high, low, volume, and adjusted values of stocks data in Python and R',
        link: 'https://www.google.com',
      },
	  {
        name: 'COVID 19 Dashboard',
        description:
          'Analyzed the Coronavirus COVID 19 Global Cases from John Hopkins University CSSE and generated a Console. Investigated, forecasted, and visualized pandemics after-effects and trends every day with real-time information',
        link: 'https://www.google.com',
      },
      {
        name: 'Smart Trash Can Monitoring System using IoT – Creating Solutions for Smart Cities',
        description:
          'Guided a team of 5 to track, analyze, and notify trash can levels to officials to perform necessary actions. Won 2nd prize in Bachelors Capstone and Published a paper with five co-authors in IRJET Journal, Vol. 5 - Issue. 3',
        link: 'https://www.google.com',
      },
      {
        name: 'Innovative Smart Farming Device',
        description:
          'Developed a Sensor Technology Product for Aquaculture Fields and won 1st prize in the Mad About Ideas Challenge. Classified at the Innovation Readiness Series with the IC2 Institute at the University of Texas at Austin (July 2017)',
		  link: 'https://www.google.com',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'MOURI Tech',
        description: 'Senior Software Developer, July 2018 - Sept 2020',
        link: 'https://www.mouritech.com',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, R, SQL, T-SQL, SAS, HTML, CSS, JavaScript (ES6+)',
      },
	  {
        name: 'Frameworks',
        description:
          'MS Excel, Tableau, Power BI, SPSS, R Shiny, Apache Superset, Bootstrap 4, Angular, React.js, Vue JS',
      },
      {
        name: 'Databases & Cloud' ,
        description: 'MongoDB, MySQL, MS Access, Amazon Web Services (AWS)',
      },
	  {
		  name: 'Machine Learning',
		  description: 'Linear Regression, Logistic Regression, Classification, PCA, SVM, Decision Tree, Random Forest, Gradient Boosting, XG Boost',
	  },
      {
        name: 'Other',
        description:
          'Git, JIRA, MS Word, npm, pip, MS PPT, Bitbucket, Agile, Scrum, Product Management, Lean, Six Sigma, Jupyter Notebook, Google CoLab',
      },
	  {
        name: 'Competencies ',
        description:
          'A/B Testing, Analytical, Communication, Problem-solving, Teamwork, Management, Entrepreneural',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `${__dirname}/content/blog`,
//         name: `blog`,
//       },
//     },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
