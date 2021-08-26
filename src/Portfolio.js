import React, { useState, useEffect } from 'react'
import Content from './Content';
import Navigation from './Navigation';
import Footer from './Footer';
import Form from './Form';
import FirstPhoto from './images/TS.png'
import SecondPhoto from './images/Tech.png'
import ThirdPhoto from './images/Dwight.png'
import FourthPhoto from './images/Ballfinder.png'
import FifthPhoto from './images/Gyp.png'
import SixthPhoto from './images/Pass.png'
import Aboutme from './Aboutme';








export default function Portfolio() {
  const [active, setActive] = useState("")

  const projects = [
    { title: 'Trip Scavenger', body: 'Find Popular SightSeeing Locations By Country, Build Your Own Vacation List!', img: FirstPhoto, id: 1, url:'https://vtripscav.herokuapp.com/', repo:'https://github.com/Vidfinnx/TripScav2' },
    { title: 'Tech Blog', body: 'Leave A Post On Our Wall Today!', img: SecondPhoto, id: 2, url:'https://vtechblog.herokuapp.com/', repo:'https://github.com/Vidfinnx/Techblog' },
    { title: 'Dwights EMS', body: 'Employee Management System', img: ThirdPhoto, id: 3, url:'https://github.com/Vidfinnx/EMsystem', repo:'https://github.com/Vidfinnx/EMsystem' },
    { title: 'Ballfinder', body: 'Search Up Scheduled Sporting Events', img: FourthPhoto, id: 4, url:'https://ayadalshaikhli.github.io/apiproject/', repo:'https://github.com/ayadalshaikhli/apiproject' },
    { title: 'Gyparody', body: 'Americas Second Favorite Quiz Show Game!', img: FifthPhoto, id: 5, url:'https://vidfinnx.github.io/Gyparody/', repo:'https://github.com/Vidfinnx/Gyparody' },
    { title: 'Password-O-Tron', body: 'Generate Random Password Strings!', img: SixthPhoto, id: 6, url:'https://vidfinnx.github.io/PasswordGen/', repo:'https://github.com/Vidfinnx/PasswordGen' },

  ];


  useEffect(() => {
    renderAboutme();
  },[]);
  
  const renderAboutme = () => {
    console.log("RENDER ABOUTME");
    setActive("Me");
  }
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
        renderForm={renderForm}
        renderAboutme={renderAboutme}>
      </Navigation> 
      {active === "Me" && <Aboutme/>}
      <div className="content-container">
        {active === "Card" && projects.map((name) => (<Content
          key={name.id}
          title={name.title}
          img={name.img}
          body={name.body}
          url={name.url}
          repo={name.repo}

        />))}
        {active === "Form" && <Form />}


      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>)
}



