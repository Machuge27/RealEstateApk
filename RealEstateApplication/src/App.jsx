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
import Navbar from './Components/Navbar';
import ContactPage from './Pages/ContactUs';


export default function App(){
 

  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<Homepage/>}/>
      <Route path={'/property'} element={<PropertyListings/>}/>
      <Route path={'/service'} element={<ServicesSection/>}/>
      <Route path={'/SpecialServices'} element={<SpecializedServices/>}/>
      <Route path={'/AboutUs'} element={<AboutUs/>}/>
      <Route path={'/Testimonials'} element={<TestimonialsPage/>}/>
      <Route path={'/Banner'} element={<CTABanner/>}/>
      <Route path={'/Resources'} element={<BlogResourceCenter/>}/>
      <Route path={'/contact'} element={<ContactPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

