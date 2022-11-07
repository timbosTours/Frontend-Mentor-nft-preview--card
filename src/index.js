import React from 'react'
import ReactDOM from 'react-dom';

// CSS
import './index.css'

// Images
import equil from './image-equilibrium.jpg'
import avatar from './image-avatar.png'
import eth from './icon-ethereum.svg'
import clock from './icon-clock.svg'
import view from './icon-view.svg'

function App() {
  return <body>
    

  <main>
    <Card />
    </main>
    
    <footer>
      <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" >Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/timbosTours">Timothy Fawcett</a>.
  </div>
    </footer>
  </body> 
}

const Card = () => {
  return <div className='card-container'>
    <img className='nft-image' src={equil} alt="equilibrium number 3429" />
    <img className='hover-image' src={view} alt="" />
    <h1 className='nft-title'>Equilibrium #3429</h1>
    <p className='nft-description'>Our Equilibrium collection promotes balance and calm.</p>
    <div className='auction-details'>
    <span className='nft-price'>
      <img src={eth} alt="ethereum icon" className='eth-icon'/>
      <h2 className='price-in-eth'>0.041 ETH</h2>
      </span>
      <span className='time-left'>
        <img src={clock} alt="clock" className='clock-image'/>
      <h3 className='nft-auction-time-left'>3 days left</h3>
      </span>
    </div>
    <div className='creator-details'>
    <img className='creator-avatar' src={avatar} alt="avatar" />
      <h4 className='creation-of'>Creation of</h4>
      <p className='creator-name'>Jules Wyvern</p>
    </div>
  </div >
};


ReactDOM.render(<App />, document.getElementById('root'));