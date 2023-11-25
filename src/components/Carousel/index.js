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

  let slides
  switch (true) {
    case width < 556:
      slides = 2
      break
    case width < 756:
      slides = 3
      break
    default:
      slides = 4
      break
  }

  const settings = {
    dots: true,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true, // Make sure this is set to true
    autoplaySpeed: 2000, // Adjust the speed as needed
  }

  const trb = topRatedBooks
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {trb.topRatedBooks.map(each => (
          <Link key={each.id} to={`books/${each.id}`}>
            <li className="trb-item-con">
              <img src={each.coverPic} alt={each.title} className="trb-img" />
              <h1 className="trb-book-title">{each.title}</h1>
              <h1 className="trb-book-author">{each.authorName}</h1>
            </li>
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default ReactSlick
