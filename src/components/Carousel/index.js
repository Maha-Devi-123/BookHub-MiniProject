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
      slides = 1
      break
    case width < 756:
      slides = 2
      break
    default:
      slides = 3
      break
  }

  console.log(width)
  console.log(slides)

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
            <div className="trb-item-con">
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
