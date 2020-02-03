import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Body = ({ name, contact, summary, education, experience, technologies }) => (
  <section className={styles.Body}>
    <p>{name}</p>
    <p>{contact}</p>
    <p>{summary}</p>
    <p>{education}</p>
    <p>{experience}</p>
    <p>{technologies}</p>
  </section>
);

Body.propTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.any.isRequired,
  summary: PropTypes.string.isRequired,
  education: PropTypes.any.isRequired,
  experience: PropTypes.any.isRequired,
  technologies: PropTypes.array.isRequired
};

export default Body;
