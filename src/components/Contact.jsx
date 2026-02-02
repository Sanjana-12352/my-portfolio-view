import './Contact.css';

const Contact = () => {
  const contacts = [
    {
      id: 1,
      label: 'sanjanaredduduvvuri7@gmail.com'
    },
    {
      id: 2,
      label: 'GitHub',
      link: 'https://github.com/Sanjana-12352'
    },
    {
      id: 3,
      icon: '💼',
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/yourusername'
    }
  ];

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <p>
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="contact-links">
            {contacts.map((contact) =>
              contact.link ? (
                // If link exists, render as clickable <a>
                <a
                  key={contact.id}
                  href={contact.link}
                  className="contact-link"
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="contact-icon">{contact.icon}</span>
                  <span>{contact.label}</span>
                </a>
              ) : (
                // If no link, render as plain <span>
                <span key={contact.id} className="contact-link disabled">
                  <span className="contact-icon">{contact.icon}</span>
                  <span>{contact.label}</span>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
