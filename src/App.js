import './App.css';

const skills = [
  'C#',
  '.NET 8',
  'ASP.NET Core',
  'REST APIs',
  'Entity Framework Core',
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'SPFx',
  'HTML',
  'CSS',
  'Responsive UI',
  'SharePoint Online',
  'SQL Server',
  'Power Automate',
  'Microsoft Azure',
  'Azure DevOps',
  'CI/CD',
  'Power BI',
  'Python',
  'Pandas',
  'Open XML SDK',
];

const clientWork = [
  {
    name: 'Fennex',
    visibility: 'Internal client application',
    stack: 'SPFx, React, .NET 8, SQL Server, Power Automate',
    detail:
      'Built reusable SharePoint Framework and React components for an enterprise safety management solution, integrated APIs and SQL Server features, and resolved production issues directly with clients.',
  },
  {
    name: 'Khelangan',
    visibility: 'Public staging portal',
    url: 'https://khelanganportalfrontendstaging.azurewebsites.net/',
    stack: 'Next.js, React, C#, .NET 8, Entity Framework Core, SQL Server',
    detail:
      'Developed frontend features for an athlete management platform, built C#/.NET REST APIs and Entity Framework models, and worked across UI-to-database flows.',
  },
  {
    name: 'KidCare',
    visibility: 'Internal client application',
    stack: 'SPFx, React, ASP.NET Core, SQL Server',
    detail:
      'Built SharePoint Framework and React components, integrated ASP.NET Core APIs, and delivered SQL Server enhancements for business management features.',
  },
  {
    name: 'FloCard',
    visibility: 'Public product website',
    url: 'https://flocard.app/',
    stack: 'React, ASP.NET Core, SQL Server',
    detail:
      'Contributed to frontend and backend feature development, debugging, application enhancements, release support, and production maintenance.',
  },
];

const projects = [
  {
    title: 'Face Emotion Detector',
    stack: 'Python, OpenCV, TensorFlow, Keras, NumPy, CNN',
    url: 'https://github.com/NamanMadhogaria/Face-emotion-detecter',
    points: [
      'Built a real-time facial emotion detection system that processes webcam or image input and classifies expressions such as happy, sad, angry, surprised, neutral, fear, and disgust.',
      'Used OpenCV for face detection and a CNN-based TensorFlow/Keras model for emotion classification and prediction visualization.',
    ],
  },
  {
    title: 'Movie Discovery App',
    stack: 'TypeScript, React, API Integration, Responsive UI',
    url: 'https://github.com/NamanMadhogaria/movie-discovery-app',
    points: [
      'Built a responsive movie browsing experience focused on searchable content discovery and clean frontend structure.',
      'Organized reusable TypeScript UI logic for a polished, portfolio-ready frontend application.',
    ],
  },
  {
    title: 'LLD Practice Platform',
    stack: 'React, C#, .NET 10 API, Full-Stack Architecture',
    url: 'https://github.com/NamanMadhogaria/LLD-Practice-Platform',
    points: [
      'Created a full-stack practice platform for low-level design submissions, feedback workflows, and attempt history.',
      'Combined a React frontend with a .NET API to support structured design practice and rubric-based review.',
    ],
  },
  {
    title: 'GPS-Based Vehicle Tracking System',
    stack: 'Dart, Location Tracking, Mobile Application',
    url: 'https://github.com/NamanMadhogaria/GPS-based-vehicle-tracking-system',
    points: [
      'Built a GPS-based tracking project focused on vehicle location workflows and mobile application behavior.',
      'Explored real-time tracking concepts, route visibility, and practical mobile app structure.',
    ],
  },
  {
    title: 'Offshore Customer Data Management System',
    stack: 'SPFx, React, ASP.NET Core, SQL Server, Azure, OpenXML SDK, Power BI',
    url: 'https://github.com/NamanMadhogaria/ffshore-Customer-Data-Management-System-SPFx-.NET-Azure-Power-BI-',
    points: [
      'Built a SharePoint-to-Azure data management solution with an SPFx interface and ASP.NET Core backend APIs.',
      'Added Excel and Word exports with OpenXML SDK and designed Power BI dashboards for enterprise reporting.',
    ],
  },
  {
    title: 'Employee Performance & Attrition Analysis',
    stack: 'Python, Pandas, SQL, Power BI',
    points: [
      'Created an end-to-end analytics workflow to clean, transform, and analyze employee performance and attrition trends.',
      'Designed SQL queries and Power BI dashboards to identify attrition drivers and workforce trends.',
    ],
  },
  {
    title: 'Cricket Data Analytics',
    stack: 'Python, Web Scraping, Power BI',
    points: [
      'Collected and processed cricket statistics through web scraping and exploratory data analysis.',
      'Developed interactive dashboards to compare player and team performance for data-driven decisions.',
    ],
  },
];

function App() {
  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Naman Madhogaria home">
          NM
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Full-Stack Software Engineer</p>
          <h1>Naman Madhogaria</h1>
          <p className="intro">
            I build responsive web interfaces, reusable frontend components, REST APIs,
            and data-driven enterprise applications using React, Next.js, .NET, SQL
            Server, Azure, SharePoint, and Power BI.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:nmnmadho@gmail.com">
              Contact me
            </a>
            <a className="secondary-button" href="/NamanMadhogaria_Resume.pdf" download>
              Download resume
            </a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Profile highlights">
          <p className="panel-kicker">Recent role</p>
          <h2>366Pi Technologies</h2>
          <p>Software Engineer, Ranchi · October 2025 - August 2026</p>
          <dl className="stats-grid">
            <div>
              <dt>4</dt>
              <dd>Enterprise client projects</dd>
            </div>
            <div>
              <dt>.NET 8</dt>
              <dd>Backend APIs</dd>
            </div>
            <div>
              <dt>SPFx</dt>
              <dd>Microsoft 365 solutions</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="section-band" id="work">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Enterprise software with client-facing delivery</h2>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div>
              <p className="role-date">October 2025 - August 2026</p>
              <h3>Software Engineer</h3>
              <p className="muted">366Pi Technologies, Ranchi, India</p>
            </div>
            <p>
              Developed full-stack enterprise applications by building frontend
              components, integrating REST APIs, implementing database features, and
              supporting production releases. Worked across React, Next.js, SPFx, C#,
              .NET 8, ASP.NET Core, SQL Server, Power Automate, Azure, and Azure DevOps.
            </p>
          </article>
          <article className="timeline-item">
            <div>
              <p className="role-date">Oct 2024 - Nov 2024, Mar 2025 - Jun 2025</p>
              <h3>Product and Market Analyst Intern</h3>
              <p className="muted">MiliSu Infinity, Bengaluru, India</p>
            </div>
            <p>
              Conducted market research and user requirement analysis with Occupational
              Therapy centers, evaluated product requirements, and supported product
              development with cost-conscious material alternatives.
            </p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="client-work-title">
        <div className="section-heading">
          <p className="eyebrow">Client Work</p>
          <h2 id="client-work-title">Systems shipped across business domains</h2>
        </div>
        <div className="work-grid">
          {clientWork.map((item) => (
            <article className="work-card" key={item.name}>
              <div className="work-card-header">
                <div>
                  <p className="visibility">{item.visibility}</p>
                  <h3>{item.name}</h3>
                </div>
                {item.url && (
                  <a
                    className="visit-link"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${item.name}`}
                  >
                    Visit
                  </a>
                )}
              </div>
              <p className="stack">{item.stack}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Practical builds across enterprise data and analytics</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <p className="stack">{project.stack}</p>
                {project.url && (
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository
                  </a>
                )}
              </div>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <h2 className="eyebrow">Skills</h2>
          <h2>Tools I use to build, automate, and analyze</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
       
          <h2>Built with curiosity, refined through experience, and driven by purpose.
            Let’s build something useful.</h2>
        </div>
        <div className="contact-list">
          <h3>Contact</h3>
          <div className="contact-actions">
            <a href="mailto:nmnmadho@gmail.com">
              <span>Email</span>
              nmnmadho@gmail.com
            </a>
            <a href="tel:+917908560907">
              <span>Phone</span>
              +91 7908560907
            </a>
            <a href="https://www.linkedin.com/in/naman-madhogaria/" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              /in/naman-madhogaria
            </a>
            <a href="https://github.com/NamanMadhogaria" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              /NamanMadhogaria
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
