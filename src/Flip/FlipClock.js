import clsx from "clsx";
import React, { useMemo } from "react";
import FlipClockDigit from "./FlipClockDigit";
import styles from "./style.module.css";

const FlipClockCountdown =(props)=> {
  const {
    to,
    className,
    style,
    children,
    onComplete,
    onTick,
    showLabels,
    showSeparators,
    labels,
    labelStyle,
    digitBlockStyle,
    separatorStyle,
    dividerStyle,
    duration,
    ...other
  } = props;
  // we don't immediately construct the initial state here because it might
  // lead to some bugs with server-side rendering and hydration.
  const [state, setState] = React.useState();
  const countdownRef = React.useRef(0);
  // const clearTimer =() =>{
  //   window.clearInterval(countdownRef.current);
  // }

  
   const calcTimeDelta =(target) =>{
    const date = new Date(target);
    console.log(date,"date Test")
    if (isNaN(date.getTime())) {
      throw Error("Invalid date");
    }
    const now = new Date();
    let timeLeft = Math.round((date.getTime() - now.getTime())  /1000 ); // convert to seconds
    console.log(timeLeft,"timeLeft")
    // if (timeLeft < 0) timeLeft = 0;
if(timeLeft<0){
    return {
      
      total: timeLeft,
      days: Math.abs(Math.floor(timeLeft / (24 * 60 * 60))),
      hours: Math.abs(Math.floor((timeLeft / 3600) % 24)),
      minutes: Math.abs(Math.floor((timeLeft / 60) % 60)),
      seconds:Math.abs(Math.floor(timeLeft % 60))
      
    };
  }else{
    return{
     total:timeLeft,
     seconds:Math.abs(Math.floor((timeLeft ) % 60)),
     minutes:Math.abs(Math.floor((timeLeft / 60) % 60)),
     hours:Math.abs(Math.floor((timeLeft / (  60 * 60)) % 24)),
     days:Math.abs(Math.floor(timeLeft / (  60 * 60 * 24)))
       }
  }
  }
  
   const pad = (n) => {
    return ("0".repeat(Math.max(0, 2 - String(n).length)) + String(n)).split("");
  }
  
   const parseTimeDeltaDown = (timeDelta) => {
    console.log("down")

    const nextTimeDelta = calcTimeDelta(
      new Date().getTime() + (timeDelta.total - 1) * 1000
    );
  
    return {
      days: {
        current: pad(timeDelta.days),
        next: pad(nextTimeDelta.days)
      },
      hours: {
        current: pad(timeDelta.hours),
        next: pad(nextTimeDelta.hours)
      },
      minutes: {
        current: pad(timeDelta.minutes),
        next: pad(nextTimeDelta.minutes)
      },
      seconds: {
        current: pad(timeDelta.seconds),
        next: pad(nextTimeDelta.seconds)
      }
    };
  }

  const parseTimeDeltaUp = (timeDelta) => {

    console.log("up")
    const nextTimeDelta = calcTimeDelta(
      new Date().getTime()+ (-timeDelta.total + 1) *  1000
    );

// console.log("hello")
  
    return {
      days: {
        current: pad(timeDelta.days),
        next: pad(nextTimeDelta.days)
      },
      hours: {
        current: pad(timeDelta.hours),
        next: pad(nextTimeDelta.hours)
      },
      minutes: {
        current: pad(timeDelta.minutes),
        next: pad(nextTimeDelta.minutes)
      },
      seconds: {
        current: pad(timeDelta.seconds),
        next: pad(nextTimeDelta.seconds)
      }
    };
  }
  
   const convertToPx = (n) => {
    if (n === undefined) return undefined;
    if (typeof n === "string") return n;
    return `${n}px`;
  }
  

  const constructState = () => {
    const timeDelta = calcTimeDelta(to);
    return {
      timeDelta,
      // completed: timeDelta.total === 0
    };
  }

  const tick =() => {
    const newState = constructState();
    setState(newState);
    onTick(newState);
    // if (newState.completed) {
      // clearTimer();
      // onComplete();
    // }
  }

  React.useEffect(() => {
    setState(constructState());
    // clearTimer();
    countdownRef.current = window.setInterval(tick, 1000);

    // return () => clearTimer();
  }, [to]);




  const renderProps = React.useMemo(() => {
    if (state === undefined) return undefined;
    const { timeDelta } = state;
console.log(timeDelta)
if(timeDelta.total>0){
    return {
      ...timeDelta,
      formatted: parseTimeDeltaDown(timeDelta)
    };
  }else if(timeDelta.total<=0){
    return {
      ...timeDelta,
      formatted: parseTimeDeltaUp(timeDelta)
    };
  }
  }, [state]);

  if (state === undefined || renderProps === undefined){
    return <React.Fragment></React.Fragment>;
  }

  // if (state?.completed) {
  //   return <React.Fragment>{children}</React.Fragment>;
  // }

  const { days, hours, minutes, seconds } = renderProps.formatted;
  const _labels =
    labels.length >= 4 ? labels : ["Days", "Hours", "Minutes", "Seconds"];

  return (
    <div
      {...other}
      className={clsx(
        styles.fcc__container,
        {
          [styles.fcc__label_show]: showLabels
        },
        className
      )}
      // style={containerStyles}
      data-testid="fcc-container"
    >
      {[days, hours, minutes, seconds].map((item, idx) => {
        return (
          <React.Fragment key={`digit-block-${idx}`}>
            <div className={styles.fcc__digit_block_container}>
              {showLabels && (
                <div
                  className={styles.fcc__digit_block_label}
                  // style={labelStyle}
                >
                  {_labels[idx]}
                </div>
              )}
              {item.current.map((cItem, cIdx) => (
                <FlipClockDigit
                  key={cIdx}
                  current={cItem}
                  next={item.next[cIdx]}
                  // style={_digitBlockStyle}
                />
              ))}
            </div>
            {idx < 3 && <div className={styles.fcc__colon}></div>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

FlipClockCountdown.defaultProps = {
  onComplete: () => {},
  onTick: () => {},
  labels: ["Days", "Hours", "Minutes", "Seconds"],
  showLabels: true,
  showSeparators: true
}

export default FlipClockCountdown
