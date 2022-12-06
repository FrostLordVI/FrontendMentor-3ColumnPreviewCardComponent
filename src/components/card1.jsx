import React, { Component } from 'react'
import '../App.css';
import sedans from '../Nowy folder/3-column-preview-card-component-main/images/icon-sedans.svg'

class Card1 extends Component {
  render(){
      return (
        <div className='card card1'>
            
            <img src={sedans} alt="" aria-hidden="true"/>

            <h2>SEDANS</h2>

            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or an your next road trip.</p>

            <a>Learn More</a>
         
        </div>
      );
    }
  }
  export default Card1;
