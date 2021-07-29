import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import ContactPage from "./Pages/ContactPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Route render={(props) => <Navbar {...props} />} />
      <div className="main">
        <Switch>
          <Route path="/home" render={(props) => <HomePage {...props} />} />
          <Route path="/contact-us" component={ContactPage} />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
