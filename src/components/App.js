import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";


function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}
          />
          <Route
            exact
            path="/about-iframe-web-design-agency"
            component={() => <div>About</div>}
          />
          <Route
            exact
            path="/web-development-services"
            component={() => <div>Services</div>}
          />
          <Route
            exact
            path="/web-design-work"
            component={() => <div>Work</div>}
          />
          <Route
            exact
            path="/dublin-web-design-blog"
            component={() => <div>Blog</div>}
          />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route
            exact
            path="/web-design-service"
            component={() => <div>Web Design</div>}
          />
          <Route
            exact
            path="/e-commerce-web-development"
            component={() => <div>E-Commerce</div>}
          />
          <Route exact path="/website-seo" component={() => <div>SEO</div>} />
          <Route
            exact
            path="/web-app-development"
            component={() => <div>Web App Development</div>}
          />
          <Route
            exact
            path="/mobile-app-development"
            component={() => <div>Mobile App Development</div>}
          />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
