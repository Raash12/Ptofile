import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Home Component
export const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <img
          src="/profile.jpeg" // Ensure this path is correct and the image exists in the public folder
          alt="Raash"
          className="hero-image"
        />
        <h1 className="hero-title">Hello, I'm Raash</h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <a href="/contact" className="button">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

// About Component
export const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2 className="hero-title">About Me</h2>
        <div className="about-content">
          <p>
            Hello! My name is Abdirashiid Bile Mohamed, and I am a dedicated full-stack developer with a passion for
            crafting dynamic and engaging web applications. I specialize in creating seamless user experiences through
            innovative design and robust development practices. With a strong commitment to continuous learning, I
            actively keep up with the latest trends and technologies in the field, ensuring that my skills remain sharp
            and relevant. I thrive on challenges and take pride in my ability to solve complex problems effectively. I
            believe in the power of collaboration and am eager to contribute to projects that make a meaningful impact.
            <br />
            🌍 I am currently based in Mogadishu, Somalia.
          </p>
          <img
            src="/profile.jpeg" // Ensure this path is correct and the image exists in the public folder
            alt="Abdirashiid Bile Mohamed"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

// Projects Component
export const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform built with React.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['React', 'Firebase'],
    },
    {
      title: 'Task Manager',
      description: 'A productivity app for managing daily tasks and projects.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      tags: ['React', 'Redux', 'Firebase'],
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my work.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        <h2 className="hero-title">My Projects</h2>
        <p className="hero-subtitle">Here are some of my recent works</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Component
export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'service_2rbjaao', // Replace with your actual service ID
        'template_9ai0xdr', // Replace with the correct Template ID
        formData,
        'ADkfEG9bLsqhR36gn' // Ensure this is your correct public key
      );

      console.log('Email sent successfully!', response.status, response.text);
      setSuccessMessage('Your message has been sent successfully!');
      setErrorMessage('');
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to send email. Error:', err);
      setErrorMessage('Failed to send your message. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <p className="hero-subtitle">Feel free to reach out to me</p>

        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {!isSubmitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        ) : (
          <div className="confirmation-message">
            <h2>Thank You!</h2>
            <p>Your message has been received. We will get back to you shortly.</p>
            <button onClick={() => setIsSubmitted(false)} className="button">
              Send Another Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};