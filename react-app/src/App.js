import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from './landing';
import SignUpS from './signupS';
// import ThankYouS from './thankyouS';
import QR_generator from './qr_generator';
import SignUpB from './signupB';
import SignInS from './signins';
import {AuthProvider} from './context/AuthContext'
import SignInB from './signinb';
import ThankYouB from './thankyoub';
import ThankYouS from './thankyouS/ThankYouS';
import HomeB from './homeB';
import AddItem from './additem';
import UpdateItem from './updateitem';
import OrderNumber from './ordernumber';


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
            <Route exact path="/Buisness_home" component={HomeB} />
            <Route exact path="/Add_Item" component={AddItem} />
            <Route exact path="/Update_Item" component={UpdateItem} />
            <Route exact path="/Order_Number" component={OrderNumber} />
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
