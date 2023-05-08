import './App.css';
import cartImage from "./cart.jpg"
import bagImage from "./bag.jpg"
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Grocery List</h1>
        <img className='cartImage' src={ cartImage } alt="Cart" width="200px"/>
      </div>
      <div className='groceryList'>
        <GroceryList />
        <img className='bagImage' src={ bagImage } alt="Bag" width="150px"/>
      </div>
    </div>
  );
}

export default App;   
