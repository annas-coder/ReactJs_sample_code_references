import React, { useEffect, useState } from "react";
import FlipCountdown from '@rumess/react-flip-countdown';
import InfiniteScroll from "react-infinite-scroll-component";



function Digital() {

    const arr = [
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-05-09T13:47:01.867325",
        },
        {
            createdDate: "2023-05-06T13:47:01.867325",
        },
        {
            createdDate:  "2023-05-06T10:47:01.867325",
        },
        {
            createdDate: "2023-01-06T10:47:01.867325",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-11-11T16:10:52.09031",
        },
        {
            createdDate: "2023-11-11T13:11:48.766437",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        }
        ,
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        },
        {
            createdDate: "2023-08-30T14:02:01.762814",
        },
        {
            createdDate: "2023-12-06T15:12:54.984818",
        },
        {
            createdDate: "2023-09-08T17:05:20.830523",
        },
        {
            createdDate: "2023-09-12T12:28:38.762326",
        }
    ]

    const [data,setData]=useState(arr&&arr.slice(0,30))
    const [count,setCount]=useState(20)

    
    console.log(data.length,"length")

    const time = (data) => {
        console.log(data,"dfghjkl")
        var date = new Date(data)
        // date=new Date()
        console.log(date,"Test Date")
        date = new Date(date.getTime() + 30 * 60 * 1000)
        console.log(date.valueOf(),"Test Date")
        return date.valueOf();
    }

    const [hasMore,setHasMore]=useState(20);

    const fetchMoreData = () =>{
        setCount(prev=>prev+20)
    }

    useEffect(()=>{
        setData(arr.splice(0,count))
        console.log(arr.length,"arr length")
        console.log(data.length,"arr length")
    },[count])

    return (
        <>

            
            {/* <InfiniteScroll
                dataLength={arr.length}
                next={fetchMoreData}
                hasMore={hasMore}
                style={{ overflow: "none" }}
                loader={<h1>Loading</h1>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                scrollableTarget="scrollableDiv"
            >
            <div style={{border:"2px solid red"}}>
                
            {data.length>0 && data.map((item) => 
               item.createdDate!==undefined&&
                <FlipCountdown
                hideYear
                hideMonth
                hideDay
                endAt={new Date(time(item.createdDate))}
                onTimeUp={() => console.log("Time's up ⏳")}
                />
            )}

            </div>
            </InfiniteScroll> */}




            {arr.map((item) => 
               item.createdDate!==undefined&&
                <FlipCountdown
                hideYear
                hideMonth
                hideDay
                endAt={new Date(time(item.createdDate))}
                onTimeUp={() => console.log("Time's up ⏳")}
                />
            )}

        </>
    )
}
export default Digital