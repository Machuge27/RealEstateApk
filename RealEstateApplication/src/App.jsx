import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import Homepage from './Pages/Home';
import PropertyListings from './Pages/PropertyListing'
import ServicesSection from './Pages/Services';
import SpecializedServices from './Pages/SpecializedServices';
import AboutUs from './Pages/AboutUs';
import CTABanner from './Pages/ActionBanners';
import TestimonialsPage from './Pages/Testimonials';
import BlogResourceCenter from './Pages/Resources';
import Navbar from './Pages/Navbar';


export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
  )
}

