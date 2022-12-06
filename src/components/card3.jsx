import React, { Component } from 'react'
import '../App.css';
import luxury from '../Nowy folder/3-column-preview-card-component-main/images/icon-luxury.svg'

class Card3 extends Component {
  render(){
      return (
        <div className='card card3'>
            
            <img src={luxury} alt="" aria-hidden=true/>
         
            <h1>LUXURY</h1>

            <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>

            <button>Learn More</button>
         
        </div>
      );
    }
  }
  export default Card3;
