import './index.css'

const SearchNotFound = props => {
  const {searchText} = props
  return (
    <div className="search-not-found-con">
      <img
        src="https://i.ibb.co/BrtbSqw/Asset-1-1-1.png"
        alt="no books"
        border="0"
      />
      <p className="search-not-found-text">
        Your search for <span style={{color: '#0284c7'}}> {searchText}</span>{' '}
        did not find any matches.
      </p>
    </div>
  )
}

export default SearchNotFound
