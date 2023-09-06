// Write your code here.
import './index.css'

const Technologies = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList

  return (
    <li className={className}>
      <div className="card-con">
        <h1 className="head"> {title}</h1>
        <p className="para"> {description}</p>
      </div>
      <div className="image-con">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}
export default Technologies
