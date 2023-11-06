import {Component} from 'react'
import './index.css'

class BookItem extends Component {
  render() {
    return (
      <div className="image-item-con">
        <img
          src="https://i.ibb.co/cgyv1Tb/Rectangle-1433-1.png"
          alt="img"
          className="book-image-edit"
        />
        <div className="book-details-con">
          <h1 className="book-name-head">The Begging of Everything</h1>
          <p className="book-author-name">Robyn Schneider</p>
          <p className="book-author-name">rating</p>
          <p className="book-author-name">status</p>
        </div>
      </div>
    )
  }
}

export default BookItem
