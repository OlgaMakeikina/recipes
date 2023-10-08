import {useState} from 'react';
import { data } from "./data";
import './App.css';


function App() {
const [weekMenu, setWeekMenu] = useState(0);
const {id, day, name, image, description} = data[weekMenu];
const [menu, setMenu] = useState(data);
const removeRecipe = (id) => {
  let newArray = menu.filter(recipe => recipe.id !== id)
  setMenu(newArray);
  }

const previousRecipe = () => {
  setWeekMenu ((weekMenu => {
    weekMenu --;
    if (weekMenu<0) {
      return data.length-1;
    }
    return weekMenu
  }))
}

const nextRecipe = () => {
  setWeekMenu ((weekMenu => {
    weekMenu ++;
    if (weekMenu > data.length-1) {
      weekMenu = 0;
    }
    return weekMenu
  }))
}



return (
  <div className='container'>
        <h1>List of {menu.length} ideas for breakfast</h1>
  <div> 
     <button className='btn' onClick={previousRecipe}>Previous</button>
  </div>
  
  <div> 
<h2>{day}</h2>
</div>
  <div> 
<h2>{id} - {name}</h2>
</div>
<div> 
<img src={image} alt="recipe" width="300px" height="400px"/>
</div>
<div> 
<p>{description}</p>
</div>
<div> 
     <button className='btn' onClick={nextRecipe}>Next</button>
  </div>
<button onClick={() => removeRecipe(id)}>Remove</button>
<button onClick={() => setMenu([])}>Remove all</button>

</div>


)

}

export default App;
