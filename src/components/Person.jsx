import { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
const Person = (props) => {
  const { name, age, img } = props
  const [color, setColor] = useState('')
  return (
    <div className="person">
      <img src={img} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      <button className="btn" onClick={() => setColor('red')}>
        <AiOutlineHeart color={color} />
      </button>
    </div>
  )
}
export default Person
