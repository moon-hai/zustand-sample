import React from 'react'
import { useFruitStore } from '../../store/fruit'

const FruitControls = () => {
  const changeFruit = useFruitStore((state) => state.change)
  return <button onClick={() => (changeFruit({
    // mango: 1,
    orange: 2
  }))}>one up</button>
}

export default FruitControls
