import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} DUVVURI SANJANA REDDY. Built with passion and code.</p>
      </div>
    </footer>
  );
};

export default Footer;