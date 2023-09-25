import React from 'react';
import "./Home.css";




const Home = () => {
  return (
    <div>
      
      <>
      {/* top section */}
      <div className='top'>
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" />
        <h1>Zomato</h1>
        <h2>Find the best restaurants, cafés and bars in India</h2>
      </div>
    
      {/* location section */}
      <div className='locations'>
        <h1>Popular Location in <span><img id="flag" src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_640.png" alt="indian flag" /></span>India</h1>
      </div>
      <div className='para'>
        <p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
      </div>

      <div className='grid'>
        <div><a href="">Agra Restraunts</a></div>
        <div><a href="">Ahemdebad Restraunts</a></div>
        <div><a href="">Ajmer Restraunts</a></div>
        <div><a href="">Allapuzzha Restraunts</a></div>
        <div><a href="">Allahabad Restraunts</a></div>
        <div><a href="">Amravati Restraunts</a></div>
        <div><a href="">Bengaluru Restraunts</a></div>
        <div><a href="">Bhopal Restraunts</a></div>
        <div><a href="">Bhuvaneshwar Restraunts</a></div>
        <div><a href="">Chandigarh Restraunts</a></div>
        <div><a href="">Goa Restraunts</a></div>
        <div><a href="">Delhi NCR Restraunts</a></div>
        <div><a href="">Chennai Restraunts</a></div>
        <div><a href="">Cuttack Restraunts</a></div>
        <div><a href="">Dehradun Restraunts</a></div>
      </div>

      <div className='countries'>
        <div><img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png" alt="" /></div>
        <div><img src="https://flagicons.lipis.dev/flags/4x3/ax.svg" alt="" /></div>
        <div><img src="https://flagicons.lipis.dev/flags/4x3/al.svg" alt="" /></div>
        <div><img src="https://flagicons.lipis.dev/flags/4x3/ai.svg" alt="" /></div>
        <div><img src="https://flagicons.lipis.dev/flags/4x3/ao.svg" alt="" /></div>
        <div><img src="https://flagicons.lipis.dev/flags/4x3/ad.svg" alt="" /></div>
        <div><img src="https://flagicons.lipis.dev/flags/4x3/aw.svg" alt="" /></div>
        <div><img src="https://flagicons.lipis.dev/flags/4x3/au.svg" alt="" /></div>
        <div><img src="https://flagicons.lipis.dev/flags/4x3/at.svg" alt="" /></div>
        
      </div>
      </>
    </div>
  )
}

export default Home