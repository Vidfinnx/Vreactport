import React, { useState, useEffect } from 'react'
import Content from './Content';
import Navigation from './Navigation';
import Footer from './Footer';
import Aboutme from './Aboutme';
import Contactme from './Contactme'
import { projects } from './ProfileData'








export default function Portfolio() {
  const [active, setActive] = useState("")




  useEffect(() => {
    renderAboutme();
  },[]);
  
  const renderAboutme = () => {
    setActive("Me");
  }
  const renderContent = () => {
    setActive("Card");
  }

  const renderForm = () => {
    setActive("Form");
  }

  return (
    <div className="portfolio">
      <Navigation
        renderContent={renderContent}
        renderForm={renderForm}
        renderAboutme={renderAboutme}>
      </Navigation> 
      {active === "Me" && <Aboutme/>}
      <div className="content-container">
        {active === "Card" && projects.map((name) => (<Content
          key={name.id}
          title={name.title}
          tech={name.tech}
          img={name.img}
          body={name.body}
          url={name.url}
          repo={name.repo}

        />))}
        {active === "Form" && <Contactme />}


      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
    )
}



