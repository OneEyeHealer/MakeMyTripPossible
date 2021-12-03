import {
  BrowserRouter as Router,
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
import { honyMoon, Tours } from "./Services/TourService";
import { Hotels } from "./Services/HotelService";
import { Flights } from "./Services/FlightService";
import {
  roadData,
  natureData,
  popularData,
  hillsData,
} from "./Services/DestinationService";
import ImagesPage from "./Pages/ImagesPage";
import SideNav from "./Components/SideNav";
import ClientDetails from "./Pages/ClientDetails";
import { useEffect, useState } from "react";

function App() {
  const [tourPlace, setTourPlace] = useState("");
  const [name, setName] = useState(tourPlace);
  useEffect(() => {
    setName(tourPlace);
  }, [tourPlace]);
  return (
    <Router>
      <Route render={(props) => <Navbar {...props} />} />
      <SideNav phoneNumber="9953880159" />
      <ToastContainer />
      <div className="main">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <HomePage
                title="Our Recent Tours"
                honeymoon="Our honeymoon Packages"
                data={Tours}
                datahm={honyMoon}
                tourPlace={tourPlace}
                setTourPlace={setTourPlace}
                {...props}
              />
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
            path="/destination/hills-places"
            render={(props) => (
              <ImagesPage
                title="hills Destination"
                data={hillsData}
                {...props}
              />
            )}
          />
          <Route
            path="/destination/road-places"
            render={(props) => (
              <ImagesPage title="road Destination" data={roadData} {...props} />
            )}
          />
          <Route path="/contact-us" component={ContactPage} />
          <Route
            path="/client-details"
            render={(props) => (
              <ClientDetails
                title="Cultural Destination"
                destination={name}
                {...props}
              />
            )}
            component={ClientDetails}
          />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Route render={(props) => <InquiryDetialsForm {...props} />} />
      {/* <InquiryDetialsForm {...props} /> */}
      <Footer />
    </Router>
  );
}

export default App;
