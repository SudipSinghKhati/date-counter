import { useState } from "react";
import "./DateCount.css";

function DateCounter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  let date = new Date();
  date.setDate(date.getDate() + count);

  function addCount() {
    setCount(count + steps);
  }

  function minusCount() {
    setCount(count - steps);
  }

  function handleReset() {
    setCount(0);
    setSteps(1);
  }
  return (
    <div>
      <div className="StepsData">
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />

        <p>{`Steps: ${steps}`}</p>
      </div>
      <div className="StepsData">
        <button className="btn" onClick={minusCount}>
          &minus;
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="btn" onClick={addCount}>
          &#43;
        </button>
      </div>
      <p className="pragraph">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day from today is `
            : `${Math.abs(count)} day ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div className="StepsData">
        <button onClick={handleReset}>Rest</button>
      </div>
    </div>
  );
}

export default DateCounter;
