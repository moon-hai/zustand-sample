import React from 'react'
import { useBearStore } from '../../store/bear'

const BearControls = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}

export default BearControls
