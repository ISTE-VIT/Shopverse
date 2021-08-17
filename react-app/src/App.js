import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Navbar from './navbar';
import Landing from './landing';
import SignUpS from './signupS';
// import ThankYouS from './thankyouS';
// import Footer from './footer';
import QR_generator from './qr_generator';
import SignUpB from './signupB';
import SignInS from './signins';
import {AuthProvider} from './context/AuthContext'
import SignInB from './signinb';
import ThankYouB from './thankyoub';
import ThankYouS from './thankyouS/ThankYouS';


function App() {
  return (
    <div className="App">
      <script>var Alert = ReactBootstrap.Alert;</script>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signInB" component={SignInB} />
            <Route exact path="/signUpB" component={SignUpB} />
            <Route exact path="/signUpS" component={SignUpS} />
            <Route exact path="/signInS" component={SignInS} />
            <Route exact path="/thankYouB" component={ThankYouB} />
            <Route exact path="/thankYouS" component={ThankYouS} />
            <Route exact path="/QR_Generation" component={QR_generator} />
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
