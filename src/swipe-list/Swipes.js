import React from "react";
import {
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

function Swipes() {
  return (
    <div>
      <SwipeableList>
        <SwipeableListItem
          swipeLeft={{
            content: <div>Revealed content during swipe</div>,
            action: () => console.info("swipe action triggered"),
          }}
          swipeRight={{
            content: <div>Revealed content during swipe</div>,
            action: () => console.info("swipe action triggered"),
          }}
          onSwipeProgress={(progress) =>
            console.info(`Swipe progress: ${progress}%`)
          }
        >
          <div>sample testing values</div>
        </SwipeableListItem>
      </SwipeableList>
    </div>
  );
}
export default Swipes;
