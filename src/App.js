import {Route, Switch} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Bookshelves from './components/Bookshelves'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import PageNotFound from './components/PageNotFound'
import BookDetails from './components/BookDetails'

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/shelf" component={Bookshelves} />
      <ProtectedRoute exact path="/books/:id" component={BookDetails} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
)
export default App
