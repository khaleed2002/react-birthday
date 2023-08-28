import { AiOutlineHeart } from 'react-icons/ai'
const Person = (props) => {
  const { name, age, img } = props

  return (
    <div className="person">
      <img src={img} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      <AiOutlineHeart />
    </div>
  )
}
export default Person
