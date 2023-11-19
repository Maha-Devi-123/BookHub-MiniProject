import {FaSearch} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Navbar from '../Navbar'
import BookItem from '../BookItem'
import SearchNotFound from '../SearchNotFound'
import Footer from '../Footer'

import './index.css'

const bookshelvesList = [
  {
    id: '22526c8e-680e-4419-a041-b05cc239ece4',
    value: 'ALL',
    label: 'All',
  },
  {
    id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
    value: 'READ',
    label: 'Read',
  },
  {
    id: '2ab42512-3d05-4fba-8191-5122175b154e',
    value: 'CURRENTLY_READING',
    label: 'Currently Reading',
  },
  {
    id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
    value: 'WANT_TO_READ',
    label: 'Want to Read',
  },
]

function Bookshelves() {
  const [category, setCategory] = useState('ALL')
  const [searchText, setSearchText] = useState('')
  const [currentBooksList, setBooksList] = useState([])
  const [load, setLoad] = useState(true)
  const [cat, setCat] = useState('All')
  const [networkErr, setNetworkErr] = useState(false)

  function handleChanges(event) {
    setSearchText(event.target.value)
  }

  function doSearch() {
    const filteredBooks = currentBooksList.filter(each =>
      each.title.toLowerCase().includes(searchText.toLowerCase()),
    )

    setBooksList(filteredBooks)
  }

  async function fetchWithTimeout(url, options, timeout) {
    const controller = new AbortController()
    const {signal} = controller.signal

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => {
        controller.abort()
        reject(new Error('Request timeout'))
      }, timeout),
    )

    const response = await Promise.race([
      fetch(url, {...options, signal}),
      timeoutPromise,
    ])
    return response
  }

  useEffect(() => {
    const url = `https://apis.ccbp.in/book-hub/books?shelf=${category}`
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
        const response = await fetchWithTimeout(url, options, 10000)
        if (response.ok) {
          const data = await response.json()
          const booksList = data.books
          const booksData = booksList.map(each => ({
            authorName: each.author_name,
            coverPic: each.cover_pic,
            id: each.id,
            rating: each.rating,
            readStatus: each.read_status,
            title: each.title,
          }))

          setBooksList(booksData)
          setLoad(false)
        } else {
          console.error('Failed to fetch data')
        }
      } catch (error) {
        setLoad(false)
        setNetworkErr(true)
        console.log(error)
      }
    }

    fetchData()
    if (searchText === '') {
      fetchData()
    }
  }, [category, searchText])

  return (
    <>
      <Navbar />
      <div className="bookshelves-con">
        <div className="bookshelves-mini-con">
          <div className="search-con hide">
            <input
              placeholder="Search"
              className="search-bar"
              type="search"
              value={searchText}
              onChange={handleChanges}
            />
            <button
              type="button"
              onClick={doSearch}
              className="search-icon-con"
            >
              <FaSearch className="search-icon" />
            </button>
          </div>
          <div className="bookshelves-options">
            <h1 className="bookshelves-heading">Bookshelves</h1>
            <ul className="unorder-con">
              {bookshelvesList.map(each => (
                <li
                  onClick={() => {
                    setCat(each.label)
                    setCategory(each.value)
                    setSearchText('')
                    setLoad(true)
                  }}
                  key={each.id}
                  className={
                    each.value === category
                      ? 'currently-active cat-head'
                      : 'normal cat-head'
                  }
                >
                  {each.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="search-books-items-con">
            <div className="head-search-con">
              <h1 className="all-books-head">{cat} Books</h1>
              <div className="search-con">
                <input
                  placeholder="Search"
                  className="search-bar"
                  type="search"
                  value={searchText}
                  onChange={handleChanges}
                />
                <button
                  type="button"
                  onClick={doSearch}
                  className="search-icon-con"
                >
                  <FaSearch className="search-icon" />
                </button>
              </div>
            </div>
            <div className="loader-search-res-con">
              {load && (
                <div className="loader-container" testid="loader">
                  <Loader
                    type="TailSpin"
                    color="#0284C7"
                    height={50}
                    width={50}
                  />
                </div>
              )}
              {!load && (
                <ul className="books-results-con">
                  {currentBooksList.map(each => (
                    <BookItem key={each.id} bookDetails={each} />
                  ))}
                </ul>
              )}
              {currentBooksList.length === 0 && !load && !networkErr && (
                <SearchNotFound searchText={searchText} />
              )}

              {networkErr && (
                <div>
                  <h1> Something went wrong, Please try again.</h1>
                  <button onClick={() => setCategory(category)} type="button">
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Bookshelves
