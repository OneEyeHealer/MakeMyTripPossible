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
import {
  culturalData,
  natureData,
  popularData,
  spritualData,
} from "./Services/DestinationService";
import ImagesPage from "./Pages/ImagesPage";
import SideNav from "./Components/SideNav";

function App() {
  return (
    <Router>
      <Route render={(props) => <Navbar {...props} />} />
      <SideNav phoneNumber="9953880159" />
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
          <Route
            path="/destination/popular-places"
            render={(props) => (
              <ImagesPage
                title="Popular Destination"
                data={popularData}
                {...props}
              />
            )}
          />
          <Route
            path="/destination/nature-places"
            render={(props) => (
              <ImagesPage
                title="Nature Destination"
                data={natureData}
                {...props}
              />
            )}
          />
          <Route
            path="/destination/spritual-places"
            render={(props) => (
              <ImagesPage
                title="Spritual Destination"
                data={spritualData}
                {...props}
              />
            )}
          />
          <Route
            path="/destination/cultural-places"
            render={(props) => (
              <ImagesPage
                title="Cultural Destination"
                data={culturalData}
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
