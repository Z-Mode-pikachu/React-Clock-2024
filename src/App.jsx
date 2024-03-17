import { useEffect, useState } from "react";
import "./App.css";

// Clock Component
const Clock = () => {
  // Using useState hook - store current time in variable 'time' and initializing it with the current time using useState's
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  //  Using useEffect hook to Update time after each second
  useEffect(() => {
    //  Creating a new interval that updates the state every second
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <h2>
      {/*  Displaying the current Time */}
      Time - <strong> {time} </strong>
    </h2>
  );
};

function App() {
  return (
    <>
      <h1>React Clock</h1>
      <h5> By - Zam</h5>
      <Clock />
      <h3>
        Date :{" "}
        <strong>
          {/*  Adding date */}
          {new Date().toLocaleDateString()} {/* Adding Day */}
          {new Date().toDateString().split(" ")[0]}day
        </strong>
      </h3>
    </>
  );
}

export default App;
