import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";

// Pages
import Home from "./pages/home";
import NewMoviews from "./pages/new-movie";
import Popular from "./pages/popular";
import Search from "./pages/search/search";
import Movie from "./pages/Movie";
import Error404 from "./pages/error404/error404";

function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header style={{zIndex: 1}}>
          <MenuTop />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/new-movies" exact={true}>
              <NewMoviews />
            </Route>
            <Route path="/popular" exact={true}>
              <Popular />
            </Route>
            <Route path="/search" exact={true}>
              <Search />
            </Route>
            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>
            <Route path="*" exact={true}>
              <Error404 />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
