import React from 'react'
import MultiplePizzas from '../asserts/foodlogo.png'
import '../styles/About.css'

function  About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${ MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>About US</h1>
            <p>
            Welcome to SAM PIZZA SHOP, where innovation meets dedication. We are committed to delivering exceptional products and services that cater to the diverse needs of our valued customers. Our journey began with a vision to create meaningful solutions, and today, we proudly stand as a trusted name in the industry.

Our team of passionate professionals works tirelessly to ensure quality, innovation, and customer satisfaction are at the heart of everything we do. Whether it’s crafting cutting-edge technology, providing reliable services, or building strong relationships, we aim to exceed expectations at every step.

Join us as we continue to grow, inspire, and make a positive impact on the world. Together, we can achieve greatness.


            </p>
        </div>
    </div>
  )
}

export default  About