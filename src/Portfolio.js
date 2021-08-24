import React, { useState } from 'react'
import Content from './Content';
import Navigation from './Navigation';
import Footer from './Footer';
import Form from './Form';
import FirstPhoto from './images/TS.png'
import SecondPhoto from './images/Tech.png'
import ThirdPhoto from './images/Dwight.jpg'
import FourthPhoto from './images/Ballfinder.png'
import FifthPhoto from './images/Gyp.png'
import SixthPhoto from './images/Pass.png'








export default function Portfolio() {
  const [active, setActive] = useState("Card")

  const projects = [
    { title: 'Trip Scavenger', body: 'Find Popular SightSeeing Locations By Country, Build Your Own Vacation List!', img: FirstPhoto, id: 1 },
    { title: 'Tech Blog', body: 'Leave A Post On Our Wall Today!', img: SecondPhoto, id: 2 },
    { title: 'Dwights EMS', body: 'Employee Management System', img: ThirdPhoto, id: 3 },
    { title: 'Ballfinder', body: 'Search Up Scheduled Sporting Events', img: FourthPhoto, id: 4 },
    { title: 'Gyparody', body: 'Quiz Show Game!', img: FifthPhoto, id: 5 },
    { title: 'Password-O-Tron', body: 'Generate Random Password Strings!', img: SixthPhoto, id: 6 },

  ];

  // const names = projects.map(name => name);




  const renderContent = () => {
    console.log("RENDER CONTENT");
    setActive("Card");
  }

  const renderForm = () => {
    console.log("RENDER FORM");
    setActive("Form");
  }

  return (
    <div className="portfolio">
      <Navigation
        renderContent={renderContent}
        renderForm={renderForm}>
      </Navigation>
      <div className="content-container">
        {active === "Card" && projects.map((name) => (<Content
          key={name.id}
          title={name.title}
          img={name.img}
          body={name.body}

        />))}
        {active === "Form" && <Form />}


      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>)
}



