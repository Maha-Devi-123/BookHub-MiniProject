import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

function ReactSlick(topRatedBooks) {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const slides = width > 756 ? 3 : 2

  const settings = {
    dots: true,
    slidesToShow: slides,
    slidesToScroll: 1,
  }
  const trb = topRatedBooks
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {trb.topRatedBooks.map(each => (
          <Link to={`books/${each.id}`}>
            <div className="trb-item-con" key={each.id}>
              <img src={each.coverPic} alt={each.title} className="trb-img" />
              <h2 className="trb-book-title">{each.title}</h2>
              <h3 className="trb-book-author">{each.authorName}</h3>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default ReactSlick
