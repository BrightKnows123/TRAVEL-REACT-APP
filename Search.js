import React from 'react'
import './SearchStyles.css'
import Gold from '../../assets/gold.png'

function Search() {
  return (
    <div name='book' className='search'>
   <div className="container">
   <div className="left">
        <h2 style={{fontFamily: 'cursive'}}>LUXURY INCLUDED VACATIONS</h2>
        <p> Escape to Paradise!
Are you ready for a break from the hustle and bustle of everyday life? Look no further! We invite you to indulge in a relaxing getaway to a tropical paradise, where crystal-clear waters, powdery white sand beaches, and lush green landscapes await.
-Unwind in style
-Unwind in luxurious accommodations
-Rejuvenate with spa treatments and wellness programs
-Savor delicious local cuisine and refreshing cocktails
-Explore vibrant markets and rich cultural heritage
-Adventure Awaits!
-Snorkel or dive among vibrant coral reefs
-Take a sunset cruise or sailing trip
-Go on a thrilling jungle trek or ziplining adventure
-Discover hidden waterfalls and secluded beaches
Book now and get ready to relax, recharge, and create unforgettable memories!
</p>
<div className="search-col-2">
    <div className="box" style={{paddingBottom:'2rem'}}>
        <img src={Gold} alt="/"/>
        <h3>WORLD'S LEADING</h3>
        <p>All-INCLUSIVE COMPANY FOR TWENTY YEARS IN A ROW</p>
    </div>
    <div className="box" style={{top:'5rem'}}>
            <h3>SPECIAL OFFERS</h3>
            <p>All-INCLUSIVE COMPANY FOR TWENTY YEARS IN A ROW AND COUNTING</p>
            <button>View Packages</button> 
    </div>
</div>
     </div>
     <div className="right">
        <div className="promo">
            
                <h4 className="save"> GET AN ADDITIONAL 10% OFF</h4> 
                <p className="timer">24 HOURS LEFT</p>
                <p className="offers">VIEW ALL CURRENT OFFERS</p>
            
        </div>
        <div className="input-wrap">
        <form >
            <label>Destinations</label>
            <select>
                <option value="1">Anze Lazio</option>
                <option value="1">Keywest</option>
                <option value="1">Nama-bay</option>
                <option value="1">Shelabeach</option>
                <option value="1">trou-aux-biche</option>
                <option value="1">bigajos</option>
                <option value="1">Grande Antiqua</option>
                <option value="1">Grande Antiqua</option>
            </select>
        </form>
        </div>
        <div className="date">
            <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
            </div>
            <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
            </div>
        </div>
        <button>Rates & Availibilities</button>

     </div>
    </div>
   </div>
     
  )
}

export default Search