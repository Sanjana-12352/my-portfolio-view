import './Education.css';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      title: 'Bchelor Of Technology',
      institution: 'Rishi M.S Institute Of Engineering and Technology For Women affliated to JNTUH',
      date: '2022 - 2026',
      description: '[Data Structures,Algorithms,OOPS,DBMS,OS,CN or 7.5/10 if impressive. Developed a site for show-casing the projects that are done by students in the college.]'
    },
    {
      id: 2,
      title: 'Courses',
      description: '[Learnt every course from youtube.]'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {educationItems.map((item) => (
            <div key={item.id} className="timeline-item">
              <h3>{item.title}</h3>
              <div className="date">
                {item.institution} | {item.date}
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;