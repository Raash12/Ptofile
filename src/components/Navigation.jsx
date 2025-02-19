import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Portfolio</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <a href="https://github.com/Raash12" className="nav-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '5px' }} />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;