import React, {Component} from 'react';
import './App.css';
// import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
// import Contact from "./pages/Contact";
// import PriceList from "./pages/PriceList";
// import Info from "./pages/Info";
// import NotFoundPage from "./pages/404";
// import About from "./pages/AboutUs";
// import Shop from "./pages/Shop";
// import Reservation from "./pages/Reservation";
import Header from "./components/Header";
import Home from "./pages/Home";


class App extends Component {
    render() {
        return (
            <div className="content">
                <Header/>
                <Home/>
            </div>
                // {/*<Router>*/}
                // {/*    <Switch>*/}
                // {/*        <Route exact path="/" component={Home}/>*/}
                // {/*        <Route path="/about" component={About}/>*/}
                // {/*        <Route path="/before" component={Info}/>*/}
                // {/*        <Route path="/booking" component={Reservation}/>*/}
                // {/*        <Route path="/price" component={PriceList}/>*/}
                // {/*        <Route path="/contact" component={Contact}/>*/}
                // {/*        <Route path="/shop" component={Shop}/>*/}
                // {/*        <Route exact path='/404' component={NotFoundPage}/>*/}
                // {/*        <Redirect to="/404"/>*/}
                // {/*    </Switch>*/}
                // {/*</Router>*/}
        );
    }
}

export default App;
