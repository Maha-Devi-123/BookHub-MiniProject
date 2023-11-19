import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'
import './index.css'

const BookItem = props => {
  const {bookDetails} = props
  const {authorName, coverPic, id, rating, readStatus, title} = bookDetails
  return (
    <Link to={`books/${id}`}>
      <li className="image-item-con">
        <img src={coverPic} alt="img" className="book-image-edit" />
        <div className="book-details-con">
          <h1 className="book-name-head">{title}</h1>
          <p className="book-author-name">{authorName}</p>
          <p className="book-rating flex-can">
            Rating:{'  '}
            <>
              <BsFillStarFill className="star-edit" />
              {rating}{' '}
            </>
          </p>
          <p className="book-rating">
            status :<span style={{color: '#0284C7'}}> {readStatus} </span>
          </p>
        </div>
      </li>
    </Link>
  )
}

export default BookItem
