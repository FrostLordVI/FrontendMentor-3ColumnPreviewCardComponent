import React, { Component } from 'react'
import '../App.css';
import suvs from '../Nowy folder/3-column-preview-card-component-main/images/icon-suvs.svg'

class Card2 extends Component {
  render(){
      return (
        <div className='card card2'>
            
            <img src={suvs} alt="" aria-hidden="true"/>
         
            <h2>SUVS</h2>

            <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>

            <a>Learn More</a>
         
        </div>
      );
    }
  }
  export default Card2;
