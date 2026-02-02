import './Hero.css';

const Hero = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-tag">// FULL STACK DEVELOPER</div>
          <h1>DUVVURI SANJANA</h1>
          <p className="subtitle">
            Building production-ready applications with modern tech stacks. 
            Specializing in AI-powered solutions and scalable architectures.
          </p>
          <div className="cta-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => handleScrollToSection('#projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => handleScrollToSection('#contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;