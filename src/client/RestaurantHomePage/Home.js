import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import ReservationForm from './Booking';
import Menu from './Menu';
import Review from './Review';
import Order from './Order';
import Footer from './Footer';
import Dessert from './Dessert';
import { Button } from '@mui/material';
import DrinksAndCoffee from './Drinks&Coffee';
import Meat from './Meat';
import Pizza from './Pizza';
import Pasta from './Pasta';

const Home = () => {
    

    return (
        <div>
          <Navbar />
          <main>
            <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('../client/img/hero.jpg')] bg-cover bg-no-repeat">
              <div className="w-full lg:w-2/3 space-y-5">
                <h1 className="text-backgroundColor font-semibold text-6xl">
                  Elevate Your Inner Foodie with Every Bite.
                </h1>
                <p className="text-backgroundColor">
                Welcome to our restaurant, where flavors come alive and every dish tells a story.
      Join us on a culinary journey filled with passion and authenticity.
                </p>
                <br/>
                <Link to="/order">
                <Button variant="contained" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'white' }}>Order Now</Button>
              </Link>
    
              </div>
        </div>
      
        <div id="menu">
          <Menu/>
        </div>

        <div id ="dessert">
         <Dessert/>
        </div>
         
         <div id="drinks&coffee">
        <DrinksAndCoffee/>
         </div>

         <div id="meat">
         <Meat/>
         </div>

         <div id = "pizza">
          <Pizza/>
         </div>

         <div id = "pasta">
         <Pasta/>
         </div>
       
        <div id="about">
          <About />
        </div>

        <div id="booking">
          <ReservationForm />
        </div>

        <br/>
        <br/>
        <br />
        <br />
        <br />
        <br />

        <div id = "order">
        <Order/>
        </div>

        <div id="review">
          <Review />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
