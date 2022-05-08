import React, { useEffect, useState } from "react";
const CountDownTimer = (props) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(props.fromDate.toString()) - +new Date();
    let timeLeft = {  minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {

        // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div>
      {/* <span>{timeLeft.hours}</span>Hours &nbsp; */}
      <span> {timeLeft.minutes} </span>Min&nbsp;
      <span>{timeLeft.seconds}</span>Sec &nbsp;
    </div>
  );
};
export default CountDownTimer;
