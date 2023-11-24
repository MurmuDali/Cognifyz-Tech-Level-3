import React from 'react';
import './Home.css';



const Home = () => {
  

  const handleShowForm = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf00AjPhbqp-aD3Zcg5XwDVejs8EsJGHU3DKpSjW8cMSJbVpQ/viewform' ;
  };

  const handleLearnMore = () => {
    window.location.href = 'https://www.cognifyz.com/' ;
  };

  return (
    <>
     
      <h1 className='heading'>Web Developer Internship Opportunities<br/> at Cognifyz Technologies </h1> 
      <p>Join Our Internship Program To Gain Real-world Experience</p>
      <p className='page1'><strong>Duration:</strong> 1 Months</p>
      <p className='page2'><strong>Qualifications:</strong></p>
      <ul>
        <li>Pursing or recently completed a degree in Computer Science, Information Technology, or a related field.</li>
        <li>Familarity with HTML, CSS and JavaScript.</li>
        <li>Strong problem solving skills.</li>
        <li>Effective communication skills.</li>
        <li>Ability to work collaboratively in a team environment.</li>
      </ul>
      <button className='apply-btn' onClick={handleShowForm} >Apply Now</button>
      <button className='learn-more-btn' onClick={handleLearnMore} >Learn More</button>
    </>
  )
}

export default Home;