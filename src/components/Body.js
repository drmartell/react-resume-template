import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Body = ({ name, contact, summary, education, experience, technologies }) => {
  const educations = education.map((school, i) => (
    <li key={i}>{school.institution} - {school.credential} - {school.years}</li>
  ));

  const experiences = experience.map((gig, i) => (
    <li key={i}>{gig.company} - {gig.role} - {gig.years}</li>
  ));

  const technologiesArr = technologies.map((tech, i) => (
    <li key={i}>{tech}</li>
  ));

  return (
    <section className={styles.Body}>
      <p>name: {name}</p>
      <p>phone: {contact.phone}</p>
      <p>address1: {contact.address1}</p>
      <p>address2: {contact.address2}</p>
      <p>email: {contact.email}</p>
      <p>summary: {summary}</p>
      <p>education: <ul>{educations}</ul></p>
      <p>experience: <ul>{experiences}</ul></p>
      <p>technologies: <ol>{technologiesArr}</ol></p>
    </section>
  );};

Body.propTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  summary: PropTypes.string.isRequired,
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
  technologies: PropTypes.array.isRequired
};

export default Body;
