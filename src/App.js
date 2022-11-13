import './App.css';
import BearControls from './components/BearControls/BearControls';
import FruitControls from './components/FruitControls/FruitControls';
import shallow from 'zustand/shallow'
import { useBearStore } from './store/bear';
import { useFruitStore } from './store/fruit';

function App() {
  const bearCounterState = useBearStore((state) => state.bears)
  const { mango } = useFruitStore(state => state.fruits, shallow)

  console.log('re-render')

  return (
    <div className="App">
      {bearCounterState}

      <BearControls />

      <br />
      <br />

      {mango}
      <br />
      <FruitControls />
    </div>
  );
}

export default App;
