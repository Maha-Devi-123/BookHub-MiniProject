import './index.css'

function NetworkError({onClickFun}) {
  return (
    <div className="net-err-con">
      <img src="https://i.ibb.co/2sLpytz/Group-7522.jpg" alt="failure view" />
      <p className="something-text">Something went wrong. Please try again</p>
      <button className="try-again-btn" onClick={onClickFun} type="button">
        Try Again
      </button>
    </div>
  )
}

export default NetworkError
