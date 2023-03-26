import clsx from "clsx";
import React from "react";
import styles from "./style.module.css";

export default function FlipClockDigit(props) {
  const { current, next, className, style } = props;
  const [digit, setDigit] = React.useState({ current, next });
  const [flipped, setFlipped] = React.useState(false);

  React.useEffect(() => {
    if (digit.current !== current) {
      if (digit.current === digit.next) {
        setDigit({ ...digit, next });
      }
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  }, [current, next]);

  const handleTransitionEnd = () => {
    setDigit({ current, next });
    setFlipped(false);
  };

  return (
    <div className={clsx(styles.fcc__digit_block, className)} style={style}>
      <div className={styles.fcc__next_above}>{digit.next}</div>
      <div className={styles.fcc__current_below}>{digit.current}</div>
      <div
        className={clsx(styles.fcc__card, { [styles.fcc__flipped]: flipped })}
        onTransitionEnd={handleTransitionEnd}
      >
        <div
          className={clsx(styles.fcc__card_face, styles.fcc__card_face_front)}
        >
          {digit.current}
        </div>
        <div
          className={clsx(styles.fcc__card_face, styles.fcc__card_face_back)}
        >
          {digit.next}
        </div>
      </div>
    </div>
  );
}
