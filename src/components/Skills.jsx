import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
      title: 'Backend Development',
      skills: ['Python', 'Java', 'Node.js (Learning)', 'RESTful APIs (Learning)', 'API Integration']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git & GitHub', 'MCP (Model Context Protocol)', 'AI Integration', 'VS Code']
    },
    {
      title: 'Currently Learning',
      skills: ['Node.js', 'RESTful API Design', 'Express.js', 'MongoDB']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;