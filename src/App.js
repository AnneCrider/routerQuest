import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';


const App = () => (
    
          <BrowserRouter>
            
          <div>
            <ul>
              <li><NavLink exact to="/" activeStyle={{
                fontWeight: 'bold',
                color: 'red'
                }}>Home</NavLink>
              </li>
              
              <li><NavLink to="/notre-histoire" activeStyle={{
                fontWeight: 'bold',
                color: 'red'
                }}>History</NavLink>
              </li>
            </ul>
            
            <hr/>
            <Switch>
            <Route exact path="/" component={Home}/>
            
            <Route path="/notre-histoire" component={History}/>
         
          </Switch>
          </div>
        </BrowserRouter>
  )

const Home = () => (
  <div>
    <h2>Bienvenue sur l'accueil</h2>
  </div>
)
const History = () => (
  <div>
    <h2>Notre histoire</h2>
  </div>
)


export default App;