import { useState } from "react";
import "./DateCount.css";

function DateCounter() {
  const [steps, setSteps] = useState(0);
  const [count, setCount] = useState(2);
  let currentDate = new Date();
  let newDate = addDays(currentDate, count);
  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  function addSteps() {
    setSteps((s) => s + 1);
  }
  function minusSteps() {
    setSteps((s) => s - 1);
  }

  function addCount() {
    setCount((c) => count + steps);
  }

  function minusCount() {
    setCount((c) => count - steps);
  }
  return (
    <div>
      <div className="StepsData">
        <button className="btn" onClick={minusSteps}>
          &minus;
        </button>
        <p>{`Steps: ${steps}`}</p>
        <button className="btn" onClick={addSteps}>
          &#43;
        </button>
      </div>
      <div className="StepsData">
        <button className="btn" onClick={minusCount}>
          &minus;
        </button>
        <p>{`Count: ${count}`}</p>
        <button className="btn" onClick={addCount}>
          &#43;
        </button>
      </div>
      <div>
        <p className="pragraph">
          {count >= -1
            ? `${count} day from now is ${newDate}`
            : `${count} day ago was ${newDate}`}
        </p>
      </div>
    </div>
  );
}

export default DateCounter;
