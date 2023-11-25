import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {BsFillStarFill} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Footer from '../Footer'
import NetworkError from '../NetworkError'
import Navbar from '../Navbar'
import './index.css'

function BookDetails() {
  const params = useParams()
  const bookId = params.id

  const [load, setLoad] = useState(true)
  const [bookDetails, setBookDetails] = useState([])
  const [netError, setNetError] = useState(false)
  const [retry, setRetry] = useState(false)

  useEffect(() => {
    const url = `https://apis.ccbp.in/book-hub/books/${bookId}`
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
          const bookDetailsInSK = data.book_details
          const bookData = {
            authorName: bookDetailsInSK.author_name,
            coverPic: bookDetailsInSK.cover_pic,
            id: bookDetailsInSK.id,
            aboutBook: bookDetailsInSK.about_book,
            aboutAuthor: bookDetailsInSK.about_author,
            rating: bookDetailsInSK.rating,
            readStatus: bookDetailsInSK.read_status,
            title: bookDetailsInSK.title,
          }

          setBookDetails(bookData)
          setLoad(false)
          setNetError(false)
          setRetry(false)
        } else {
          setLoad(false)
          setNetError(true)
          console.error('Failed to fetch data')
        }
      } catch (error) {
        setLoad(false)
        setNetError(true)
        console.error('An error occurred while fetching data', error)
      }
    }

    fetchData()
    if (retry) {
      setLoad(true)
      fetchData()
    }
  }, [bookId, retry])

  return (
    <>
      <Navbar />
      {netError && (
        <NetworkError
          onClickFun={() => {
            setRetry(true)
            setLoad(true)
            setNetError(false)
          }}
        />
      )}
      {load && (
        <div className="loader-container" testid="loader">
          <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
        </div>
      )}
      {!netError && (
        <div className="bookDetails-main-con">
          <div className="bookDetails-mini-con">
            {!load && (
              <>
                <div className="bookDetails-cover-con">
                  <img
                    className="book-details-cover-pic"
                    src={bookDetails.coverPic}
                    alt={bookDetails.title}
                  />
                  <div>
                    <h1 className="bookDetail-title">{bookDetails.title} </h1>
                    <p className="bookDetails">{bookDetails.authorName}</p>
                    <p className="bookDetails">
                      Avg Rating:{'  '}
                      <>
                        <BsFillStarFill className="star" />
                        {bookDetails.rating}{' '}
                      </>
                    </p>
                    <p className="bookDetails">
                      Status:
                      <span style={{color: '#0284C7'}}>
                        {' '}
                        {bookDetails.readStatus}
                      </span>{' '}
                    </p>
                  </div>
                </div>
                <hr className="hr-line" />
                <div>
                  <div className="about-author-con">
                    <h1 className="about-author-head">About Book</h1>
                    <p className="about-author-dis">{bookDetails.aboutBook} </p>
                  </div>
                  <div className="about-author-con">
                    <h1 className="about-author-head">About Author</h1>
                    <p className="about-author-dis">
                      {bookDetails.aboutAuthor}{' '}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default BookDetails
