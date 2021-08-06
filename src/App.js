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
import HolidayPackagesForm from "./Components/HolidayPackagesForm";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

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
            render={(props) => <HomePage {...props} />}
          />
          <Route
            path="/about-us"
            exact
            render={(props) => <AboutPage {...props} />}
          />
          <Route path="/contact-us" component={ContactPage} />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <HolidayPackagesForm />
      <Footer />
    </Router>
  );
}

export default App;
