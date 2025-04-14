import logo2 from '../assets/img/cat_theme/Simran Karamchandani.svg';
import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-content">
        <div className="footer-logo">
          <img src={logo2} alt="Logo" />
        </div>
        <div className="social-icons">
          <a href="mailto:simbkaramchandani@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a href="https://github.com/simranbk" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/simran-karamchandani-32030a2a3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Simran Karamchandani. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};
