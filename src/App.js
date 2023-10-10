import {useState} from 'react';
import { data } from "./data";
import './App.css';


function App() {
const [weekMenu, setWeekMenu] = useState(0);
const [menu, setMenu] = useState(data);
const [showMore, setShowMore] = useState(false);
const removeRecipe = (id) => {
  let newArray = menu.filter(recipe => recipe.id !== id)
  setMenu(newArray);
  }

const previousRecipe = () => {
  setWeekMenu ((weekMenu => {
    weekMenu --;
    if (weekMenu<0) {
      return menu.length-1;
    }
    return weekMenu
  }))
}

const nextRecipe = () => {
  setWeekMenu ((weekMenu => {
    weekMenu ++;
    if (weekMenu > menu.length-1) {
      weekMenu = 0;
    }
    return weekMenu
  }))
}



return (
  menu.length > 0 &&
  <div className='container'>
        <h1>List of {menu.length} ideas for breakfast</h1>

  <div> 
<h2>{menu[weekMenu].id} - {menu[weekMenu].day} - {menu[weekMenu].name}</h2>
</div>
<div>
<button className='removeBtn' onClick={() => removeRecipe(menu[weekMenu].id)}>Remove recipe</button>
<button className='removeBtn' onClick={() => setMenu([])}>Remove all</button>
</div>
<div className='scroll'>
<div> 
     <button className='btn' onClick={previousRecipe}>&laquo;</button>
  </div>
<div> 
<img src={menu[weekMenu].image} alt="recipe" width="300px" height="400px"/>
</div>
<div> 
     <button className='btn' onClick={nextRecipe}>&raquo;</button>
  </div>
  </div>
<div> 
<p>{showMore? menu[weekMenu].description : menu[weekMenu].description.substring(0,70) + "..."}
<button className="showBtn" onClick = {() => setShowMore(!showMore)}>{showMore? "Show less" : "Show more"}</button></p>
</div>

</div>


)

}

export default App;
