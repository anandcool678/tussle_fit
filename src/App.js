import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App  container-fluid">
      <video loop autoplay muted>
        <source
          src="https://vimeo.com/707969803"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
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
        <div className="d-flex justify-content-start mb-4">
        <select name="timeframe" id="timeframe" className='countryCode mr-4' >
          
          <option value="+91">+91</option>
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
  );
}

export default App;
