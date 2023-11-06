import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import BookItem from '../BookItem'

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

class Bookshelves extends Component {
  componentDidMount() {
    this.displayBooks()
  }

  displayBooks = () => {}

  render() {
    return (
      <div className="bookshelves-con">
        <div className="bookshelves-mini-con">
          <div className="bookshelves-options">
            <h1 className="bookshelves-head">Bookshelves</h1>
            <ul className="unorder-con">
              {bookshelvesList.map(each => (
                <li className="cat-head" onClick={this.displayBooks}>
                  {' '}
                  {each.label}{' '}
                </li>
              ))}
            </ul>
          </div>

          <div className="search-books-items-con">
            <div className="head-search-con">
              <h1 className="all-books-head">Books</h1>
              <div className="search-con">
                <input
                  placeholder="Search"
                  className="search-bar"
                  type="search"
                />
                <div className="search-icon-con">
                  <FaSearch className="search-icon" />
                </div>
              </div>
            </div>
            <BookItem />
          </div>
        </div>
      </div>
    )
  }
}

export default Bookshelves
