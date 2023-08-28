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
      <button onClick={() => setColor('red')}>
        <AiOutlineHeart style={"background-color"="red"} width="20px" height="20px" />
      </button>
    </div>
  )
}
export default Person
