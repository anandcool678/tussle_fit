import logo from './logo.png';
import './App.css';
import videoPlay from './tussle_video.mp4';
import React, {useState} from 'react';
import countryData from './country_code.json';

function App() {
  console.log(countryData[0])
  const [selectCountry,setSelectCountry] = useState(countryData[0].dial_code);
  return (
    
    <div className="App  container-fluid">
      <video autoPlay loop muted className="background-video">
        <source src={videoPlay} type="video/mp4" />
      </video>
     <div className="position-relative">
     <div className="heading">
        <img src={logo} className="logoImg" />
        <h1>
          Tussle Fit
        </h1>
      </div>
      <p>
        Become your best self.
      </p>
      <div className="d-flex justify-content-center mt-5">
      <div className="login p-3">
        <h6 className="d-flex justify-content-start mb-4">
          Log in
        </h6>
        <div className="d-flex justify-content-start mb-4 p-0">
        <select value={selectCountry} onChange={e=>setSelectCountry(e.currentTarget.value)} className="countryCode">
        {countryData.map(e =>(
            <option className='timeframe-option' value={e.dial_code}>
              {e.dial_code} {e.code}
            </option>
          ))}
        </select>
        <input type="tel" placeholder="Enter phone number" className="telephone"></input>
        </div>
        <div className="btn button">
          Log-In
        </div>
        <div className="p-0 m-0">
          <p className="contactSupport mt-4 d-flex justify-content-end">
            contact support
          </p>
        </div>
      </div>
      </div>
      <div className="p-3">
        <p>
          Tussle.fit is currently in closed Beta.
        </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center footer">
          <p className="mr-3">
            contact Support
          </p>
          <p className="mr-3">
            Terms of service
          </p>
          <p>Privacy Policy</p>
        </div>
     </div>
      
    </div>
  );
}

export default App;
