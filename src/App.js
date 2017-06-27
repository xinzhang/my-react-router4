import React from 'react';
import  {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';

const Home = (props) => {
  //console.log(props)
  return <h1>Home</h1>
}

const About = () => <h1>About</h1>

const isActiveFunc = (match, location) => {
  // console.log(match, location)
  return match
}

const Links = () => (
  <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to={{pathname: '/about'}}>About</NavLink>
    <NavLink
      isActive={isActiveFunc}
      activeClassName="active"
      to="/contact">Contact</NavLink>
    <NavLink to="/query/?id=123">Query Inline</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
      <Route exact path="/" component={Home} />
      {/*<Route path="/about" render={() => <h1>About in func</h1>} /> */}
      <Route
        path="/about"
        children={({match}) => match && <h1>About children</h1>} />
      <Route path="/contact" render={() => <h1>contact</h1>} />

      <Route path="/page/:page?-:subpage?" render={ ({match}) => (
        <h1>
          Page: {match.params.page || 'nothing'} <br />
          SubPage: {match.params.subpage || 'nothing'}
        </h1>
      )} />

      <Route path="/regex/:a(\d+)/:b" render={ ({match}) => (
        <h1>
          a: {match.params.a || 'nothing'} <br />
          b: {match.params.b || 'nothing'}
        </h1>
      )} />

      <Route path="/query" render={({match, location}) => (
        <div>
          <p>root</p>
          <p>{JSON.stringify(location)}</p>
          <p>{/*new URLSearchParams(location.search).get('id')*/}</p>
        </div>
      )} />

      <Route render={ () => <h1> Page not found</h1>} />
      </Switch>
    </div>
  </Router>
)

export default App;
