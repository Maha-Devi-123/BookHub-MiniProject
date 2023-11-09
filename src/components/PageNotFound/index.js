import {Link} from 'react-router-dom'
import './index.css'

function PageNotFound() {
  return (
    <div className="page-not-found-con">
      <h1 className="page-not-found-head">Page Not Found</h1>
      <p className="page-not-found-dis">
        we are sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Link to="/">
        <button type="button" className="go-back-btn">
          Go Back To Home
        </button>
      </Link>
    </div>
  )
}

export default PageNotFound
