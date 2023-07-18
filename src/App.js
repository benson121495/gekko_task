import './App.css';
import { useState } from "react";
import { formula } from './function/cal';

function App() {
  const [inputResult, setInputResult] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    //  Get input value from "event"
    setValue(event.target.value);
  };
  const [selectUnit, setSelectUnit] = useState("");
  const onChange = (event) => {
    const unit = event.target.value;
    setSelectUnit(unit);
  };

  function handleSubmit(event) {
    event.preventDefault()
    setInputResult(formula(selectUnit, value));
  }

  return (
    <div className="App">
      
      <div class ="HeaderFont">Convert temperature celsius to fahrenhei</div>
      
      <header className="Convert temperature celsius to fahrenhei">
       
        <form onSubmit={handleSubmit}>
       
          <div class="selectBoxFrame">
       
            <select onChange={onChange} className="form-select">
              <option defaultValue disabled>
                Select Convert Type
              </option>
              <option value="celsius">celsius</option>
              <option value="fahrenhei">fahrenhei</option>
            </select>
       
          </div>
        
          <div class="inputFrame">
            <input pattern="[0-9]*" name="value" onChange={handleChange} />
          </div>
        
          <div>
            <button  class="submitFrame" type="submit">Convert</button>
          </div>
        
        </form>
        
        <div> degree {selectUnit} is equal to {inputResult} {selectUnit === "celsius" ? "fahrenhei" : "celsius"} degree .</div>
        
      </header>
    </div>
  );
}




export default App;
