import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
// import InfiniteScrollReverse from "react-infinite-scroll-reverse";

import qs from "qs";
import "./chatScroll.css";

function Scroll() {
  const [comments, setComments] = useState([]);
  const [parentRef, setParentRef] = React.useState();
  const [listRef, setListRef] = React.useState();

  useEffect(() => {
    handleFetch({ _limit: 10 });
  }, []);

  function handleFetch(params) {
    setTimeout(()=>{
        const strParams = qs.stringify(params);
        let url = "https://jsonplaceholder.typicode.com/comments";
        if (strParams) {
          url = url + "/?" + strParams;
        }
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            setComments(res);
          })
          .catch((err) => console.log(err));
    },[4000])
  }

  const handleClick = () => {
    console.log("parentRef-click", parentRef);
    console.log("parentRef-offsetHeight", parentRef.offsetHeight);
    console.log("parentRef-scrollHeight", parentRef.scrollHeight);
    console.log("parentRef-scrollTop", parentRef.scrollTop);
    parentRef.scrollTop = 300;
  };

  const handleClick2 = () => {
    console.log("listRef-scrollTop de", listRef.scrollTop);
    listRef.scrollTop = 300;
  };

  return (
    <React.Fragment>
      <button onClick={handleClick}>Adjust Parent Div</button>
      <button onClick={handleClick2}>Adjust list </button>
      <div className="pane" ref={setParentRef}>
        <InfiniteScroll
          isReverse={true}
          pageStart={0}
          loadMore={() => handleFetch({ _limit: comments.length + 10 })}
          hasMore={true || false}
          useWindow={false}
          loader={
            <div key="loading" className="loader">
              Loading ...
            </div>
          }
        >
          <ul className="table-body" ref={setListRef}>
            {comments.map((x, index) => (
              <React.Fragment key={index}>
                <strong>INDEX IS: {index}</strong>
                <li key={x.name}>{x.name}</li>
              </React.Fragment>
          ))}
          </ul>
        </InfiniteScroll>
      </div>
    </React.Fragment>
  );
}

export default Scroll;
