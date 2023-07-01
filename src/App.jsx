import { useState } from 'react'
// Write your Color component here
const Color = ({ color, setSelectedColor, selectedColor }) => {
  const isSelected = color === selectedColor

  return (
    <div 
      className={`${color} ${isSelected ? "selected" : ''}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="orange" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
      </div>
    </div>
  );
};

export default App;
