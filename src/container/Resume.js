import React from 'react';
import resume from '../data/resume.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import styles from './Resume.css';

export default class Resume extends React.Component {
  state = {
    name: resume.name,
    contact: resume.contact,
    summary: resume.summary,
    education: resume.education,
    experience: resume.experience,
    technologies: resume.technologies
  }

  render() {
    const { ...data } = this.state;
    return (
      <main className={styles.Resume}>
        <Header />
        <Body props={data}/>
        <Footer />
      </main>
    );
  }
}
