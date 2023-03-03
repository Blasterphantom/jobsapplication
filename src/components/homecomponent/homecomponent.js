import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarFunction from '../navbar/navbar';
import AboutMeFunction from '../aboutme/aboutme';
import FooterFunction from '../footer/footer';
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function HomeComponent() {
  return (
    <div>
        <AboutMeFunction></AboutMeFunction>
    </div>
  );
}