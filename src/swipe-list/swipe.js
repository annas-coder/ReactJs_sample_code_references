import React from "react";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';
  
//   const leadingActions = () => (
//     <LeadingActions>
//       <SwipeAction onClick={() => console.info('swipe action triggered')}>
//         Action name
//       </SwipeAction>
//     </LeadingActions>
//   );   

  const test=()=>{
    console.info('swipe action triggered')
    alert("1234567890")
  }

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => test()}
      >
      </SwipeAction>
    </TrailingActions>
  );
  

function Swipe(){
    return(
        <div>

  <SwipeableList>
    <SwipeableListItem
    //   leadingActions={leadingActions()}
      trailingActions={trailingActions()}
    >
        <div style={{backgroundColor:"red",height:"120px",width:"100%"}}>
      Item content
      </div>
    </SwipeableListItem>
  </SwipeableList>

        </div>
    )
}
export default Swipe;