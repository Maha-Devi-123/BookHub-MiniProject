import {Route, Switch} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Bookshelves from './components/Bookshelves'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => (
  <div className="app">
    <Navbar />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/bookshelves" component={Bookshelves} />
    </Switch>
  </div>
)
export default App
