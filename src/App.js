//Marcel Rodriguez
//03/03/23
//5 Jobs That Interest You
//Description - You are to create a website in React about five places that you want to work at
//Peer Review By Brandon Le: I liked how he had the fixed background with all the divs on the page moving over it.  I thought that was a really nice effect and made the page look very dynamic and intriguing to use.  All of the companies he researched were also great companies, but also very big names that I wouldn't be brave enough to apply for myself. I Also really liked the little logo he made to go with his project. 10/10 good job!

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import HomeComponent from './components/homecomponent/homecomponent';
import NavbarFunction from './components/navbar/navbar';
import FooterFunction from './components/footer/footer';
import JobOneomponent from './components/jobone/jobone';
import JobTwoComponent from './components/jobtwo/jobtwo';
import JobThreeComponent from './components/jobthree/jobthree';
import JobFourComponent from './components/jobfour/jobfour';
import JobFiveComponent from './components/jobfive/jobfive';

function App() {
  return (
    <BrowserRouter>
      <div id='startPage' className='App'>
        <NavbarFunction/>
        <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="JobOne" element={<JobOneomponent />} />
              <Route path="JobTwo" element={<JobTwoComponent />} />
              <Route path="JobThree" element={<JobThreeComponent />} />
              <Route path="JobFour" element={<JobFourComponent />} />
              <Route path="JobFive" element={<JobFiveComponent />} />
        </Routes>
        <FooterFunction/>
      </div>
    </BrowserRouter>
  );
}

export default App;
