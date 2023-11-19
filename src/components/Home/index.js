import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import Footer from '../Footer'
import ReactSlick from '../Carousel'
import Navbar from '../Navbar'

import './index.css'

function Home() {
  const [loader, setLoader] = useState(true)
  const [topRatedBooks, setTRB] = useState([])

  useEffect(() => {
    const url = 'https://apis.ccbp.in/book-hub/top-rated-books'
    const jwtToken = Cookies.get('jwt_token')
    const headers = {
      Authorization: `Bearer ${jwtToken}`,
    }
    const options = {
      method: 'GET',
      headers,
    }
    async function fetchData() {
      try {
        const response = await fetch(url, options)

        if (response.ok) {
          const data = await response.json()
          const booksList = data.books
          const booksData = booksList.map(each => ({
            authorName: each.author_name,
            coverPic: each.cover_pic,
            id: each.id,
            title: each.title,
          }))
          setTRB(booksData)
          setLoader(false)
        } else {
          setLoader(false)
          console.error('Failed to fetch data')
        }
      } catch (error) {
        setLoader(false)
        console.error('An error occurred while fetching data', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div className="Home-main-con">
        <div className="head-dis-con">
          <h1 className="find-fav-books-head">
            Find Your Next Favorite Books?
          </h1>
          <p className="fav-books-dis">
            You are in the right place.Tell us what titles or genres you have
            enjoyed in the past, and we will give you surprisingly insightful
            recommendations.
          </p>
          <Link to="/shelf">
            <button className="find-books-btn mb-btn" type="button">
              Find Books
            </button>
          </Link>
        </div>
        <div className="top-rated-books-con">
          <div className="flex-con">
            <div className="head-btn-con">
              <h1 className="top-rated-books-head">Top Rated Books</h1>
              <Link to="shelf">
                <button className="find-books-btn pc-btn" type="button">
                  Find Books
                </button>
              </Link>
            </div>
          </div>
          {loader && (
            <div className="loader-container" testid="loader">
              <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
            </div>
          )}

          {!loader && topRatedBooks.length !== 0 && (
            <ReactSlick topRatedBooks={topRatedBooks} />
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
