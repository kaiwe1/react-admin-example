import React, { useEffect, useState } from 'react'
import { Button } from "antd"
import store from '../../redux'

const Home = () => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log(store.getState())
    })

    return unsubscribe()
  }, [])
  
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => {store.dispatch({type: "ADD_COUNT", payload: {value: 1}})}}>Redux: Add Count</Button>
      <Button onClick={() => {setCount(count + 1)}}>useState: Add Count</Button>
      <div style={{marginTop: "15px"}}>
        useState: {count}
      </div>
      <div>
        Redux.store: {store.getState().homeReducer.count}
      </div>
      <p>Pay attention: store.dispatch will not trigger react re-render component but setCount will. You can use store.subscribe() and setCount to re-render</p>
    </div>
  )
}

export default Home