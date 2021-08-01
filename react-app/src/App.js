import './App.css';
import Navbar from './navbar';
// import Landing from './landing';
// import SignUpS from './signupS';
// import ThankYouS from './thankyouS';
// import Footer from './footer';
import QR_generator from './qr_generator';

function App() {
  return (
    <div className="App">
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>

      <Navbar/>
      {/* <Landing/> */}
      {/* <SignUpS/> */}
      {/* <ThankYouS/> */}
      <QR_generator/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
