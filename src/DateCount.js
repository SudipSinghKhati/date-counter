import { useState } from "react";
import "./DateCount.css";

function DateCounter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  let date = new Date();
  date.setDate(date.getDate() + count);

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
      <div className="pragraph">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day from today is `
            : `${Math.abs(count)} day ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

export default DateCounter;
