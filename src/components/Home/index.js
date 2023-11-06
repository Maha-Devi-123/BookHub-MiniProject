import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai'

import './index.css'

const topRatedBooks = [
  {
    imgUrl: 'https://i.ibb.co/XZChW6f/Rectangle-1433.png',
    title: 'The Secret',
    author: 'Rhonda Byrne',
  },
  {
    imgUrl: 'https://i.ibb.co/cgyv1Tb/Rectangle-1433-1.png',
    title: 'Fall To Earth',
    author: 'ken Britz',
  },
]

const PcThirdImage = () => (
  <li className="image-item hide-pic">
    <img
      className="top-rated-img"
      src="https://i.ibb.co/qBc8b6C/Rectangle-1433-2.png"
      alt="Borrowed Magic"
    />
    <h1 className="book-title">Borrowed Magic</h1>
    <p className="author-name">Stephanie Foxe</p>
  </li>
)

const Home = () => (
  <div className="Home-main-con">
    <div className="head-dis-con">
      <h1 className="find-fav-books-head">Find Your Next Favorite Books?</h1>
      <p className="fav-books-dis">
        You are in the right place.Tell us what titles or genres you have
        enjoyed in the past, and we will give you surprisingly insightful
        recommendations.
      </p>
      <button className="find-books-btn mb-btn" type="button">
        Find Books
      </button>
    </div>
    <div className="top-rated-books-con">
      <div className="head-btn-con">
        <h1 className="top-rated-books-head">Top Rated Books</h1>
        <button className="find-books-btn pc-btn" type="button">
          Find Books
        </button>
      </div>
      <ul className="ul-con">
        {topRatedBooks.map(each => (
          <li className="image-item">
            <img className="top-rated-img" src={each.imgUrl} alt={each.title} />
            <h1 className="book-title">{each.title}</h1>
            <p className="author-name">{each.author}</p>
          </li>
        ))}
        {PcThirdImage()}
      </ul>
    </div>
    <div className="footer">
      <div className="icons-con">
        <AiOutlineGoogle className="icon" />
        <AiOutlineTwitter className="icon" />
        <AiOutlineYoutube className="icon" />
        <AiOutlineLinkedin className="icon" />
        <AiOutlineInstagram className="icon" />
      </div>
      <p className="contacts-us">Contact us</p>
    </div>
  </div>
)

export default Home
