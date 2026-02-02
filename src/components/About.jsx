import './About.css';

const About = () => {
  const interests = [
    'AI/ML Integration',
    'Full Stack Development',
    'Real Estate Tech',
    'API Design',
    'Building production ready projects',
    'Open Source',
    'Problem solving',
    'Learning new skill'
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              [Aspiring Full-Stack Developer with hands-on experience building scalable web applications using React.js, Next.js,
and modern JavaScript frameworks. Proficient in developing responsive, user-centric solutions with expertise in
database design, API integration, and cloud deployment. Successfully delivered 3+ production-ready projects featuring real-time data synchronization, AI integration, and optimized performance. Seeking software development
opportunities to leverage technical skills and contribute to innovative web solutions.
Core Competencies: Full-Stack Development,React Ecosystem, Database Architecture, RESTful APIs , Responsive Design , Problem Solving]
            </p>
            <p>
              [AI enjoy solving problems by breaking complex challenges into simple, logical steps. I focus on understanding the root cause, thinking critically, and finding efficient, practical solutions..]
            </p>
            <p>
              Currently expanding my expertise into backend development with Node.js and 
              RESTful API design, while building AI-powered applications using cutting-edge 
              technologies.
            </p>
          </div>
          <div>
            <h3 className="interests-title">Interests</h3>
            <div className="interests">
              {interests.map((interest, index) => (
                <span key={index} className="interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;