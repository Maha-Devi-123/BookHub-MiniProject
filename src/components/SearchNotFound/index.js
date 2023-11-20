import './index.css'

function SearchNotFound(props) {
  const {searchText} = props
  return (
    <div className="search-not-found-con">
      <img
        src="https://i.ibb.co/BrtbSqw/Asset-1-1-1.png"
        alt="page not found"
        border="0"
      />
      <h1 className="search-not-found-text">
        Your search for <span style={{color: '#0284c7'}}> {searchText}</span>{' '}
        did not find any matches.
      </h1>
    </div>
  )
}

export default SearchNotFound
