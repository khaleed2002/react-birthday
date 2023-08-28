import { useState } from 'react'
import Person from './components/Person'
import data from './data'
const App = () => {
  const [dummyData, setData] = useState(data)
  
  return (
    <div className="main">
      <div className="container">
        <h3>{dummyData.length} Close Friends</h3>
        {dummyData.map((friend) => {
          return <Person {...friend} key={friend.id} />
        })}
      </div>
    </div>
  )
}
export default App
