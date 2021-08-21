import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ContactPage from "./Pages/ContactPage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import InquiryDetialsForm from "./Components/InquiryDetailsForm";
import ServicePage from "./Pages/ServicePage";
import { Buses } from "./Services/BusService";
import { Tours } from "./Services/TourService";
import { Hotels } from "./Services/HotelService";
import { Flights } from "./Services/FlightService";

function App() {
  return (
    <Router>
      <Route render={(props) => <Navbar {...props} />} />
      <ToastContainer />
      <div className="main">
        <Switch>
          <Route
            path="/home"
            exact
            render={(props) => (
              <HomePage title="Our Recent Tours" data={Tours} {...props} />
            )}
          />
          <Route
            path="/about-us"
            exact
            render={(props) => <AboutPage {...props} />}
          />
          {/* <Route path="/tour-details" render={() => <TourDetailPage />} /> */}
          <Route
            path="/service/bus"
            render={(props) => (
              <ServicePage title="Our Bus Services" data={Buses} {...props} />
            )}
          />
          <Route
            path="/service/hotel"
            render={(props) => (
              <ServicePage
                title="Our Hotel Services"
                data={Hotels}
                {...props}
              />
            )}
          />
          <Route
            path="/service/car"
            render={(props) => (
              <ServicePage title="Our Car Services" {...props} />
            )}
          />
          <Route
            path="/service/flight"
            render={(props) => (
              <ServicePage
                title="Our Flights Services"
                data={Flights}
                {...props}
              />
            )}
          />
          <Route path="/contact-us" component={ContactPage} />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <InquiryDetialsForm />
      <Footer />
    </Router>
  );
}

export default App;
