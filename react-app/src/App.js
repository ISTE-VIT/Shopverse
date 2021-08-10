import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Navbar from './navbar';
import Landing from './landing';
// import SignUpS from './signupS';
// import ThankYouS from './thankyouS';
// import Footer from './footer';
// import QR_generator from './qr_generator';
import SignUpB from './signupB';
import {AuthProvider} from './context/AuthContext'
import SignInB from './signinb';
import ThankYouB from './thankyoub';

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
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signInB" component={SignInB} />
            <Route exact path="/signUpB" component={SignUpB} />
            <Route exact path="/thankYouB" component={ThankYouB} />
          </Switch>
        </AuthProvider>
      </Router>

      {/* <Landing/> */}
      {/* <Navbar/> */}
      {/* <SignUpS/> */}
      {/* <ThankYouS/> */}
      {/* <QR_generator/> */}
      {/* <Footer/> */}
      {/* <AuthProvider>
      <SignUpB/>
      </AuthProvider> */}
      {/* <AuthProvider>
      <SignInB/>
      </AuthProvider> */}
    </div>
  );
}

export default App;
