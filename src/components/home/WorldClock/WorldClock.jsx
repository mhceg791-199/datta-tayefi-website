import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const WorldClock = ({ city, tz }) => {
  const [time, setTime] = useState(dayjs().tz(tz));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().tz(tz));
    }, 1000);
    return () => clearInterval(interval);
  }, [tz]);

  const seconds = time.second();
  const minutes = time.minute();
  const hours = time.hour() % 12;

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  return (
    <div className="flex flex-col items-center my-5">
      <div className="relative w-28 h-28 border-2 border-mainColor rounded-full flex items-center justify-center">
        <div
          className="absolute bg-mainColor w-[3px] h-8"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
            transformOrigin: "50% 100%",
            borderRadius: "2px",
          }}
        ></div>

        <div
          className="absolute bg-[#a69b89] w-[2px] h-10"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
            transformOrigin: "50% 100%",
            borderRadius: "2px",
          }}
        ></div>

        <div
          className="absolute bg-mainGold w-[1px] h-12"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
            transformOrigin: "50% 100%",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      <p className="mt-3 text-lg font-semibold">{city}</p>
    </div>
  );
};

export default WorldClock;
