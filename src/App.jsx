import { useState } from 'react'
import Person from './components/Person'
import data from './data'
const App = () => {
  const [dummyData, setData] = useState(data)
  const handleClick = () => {
    setData([])
  }
  return (
    <div className="container">
      <h3>{dummyData.length} Close Friends</h3>
      {dummyData.map((friend) => {
        return <Person {...friend} key={friend.id} />
      })}
      <button className="btn" onClick={handleClick}>
        Remove All
      </button>
    </div>
  )
}
export default App
