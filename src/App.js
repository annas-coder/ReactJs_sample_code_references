import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from "../src/Login/Login";
// import axios from "axios"
// import FileUploading from './FileUploading/fileUploading';Steppers
// import Static from "../src/Static";
// import Chatscroll from "./chatScroll/chatScroll";
// import Timer1 from './Timer1/Timer1';
import moment from "moment"
// import { DateTimePicker, Picklist, PicklistOption } from 'react-rainbow-components';  
// import {} from './Stepper/Kendostepper'; 
   
import Compress from './Compress';
import Boostrap from './Boostrap/Boostrap';
import { Reactquery } from './ReactQuery/Reactquery';

// import Digital from './Timer1/Singletimer';
// import { findDOMNode } from 'react-dom';
// import Apps from './Timer1/Timer1';   

// import InfiniteListWithVerticalScroll from './chatScroll/Scroll';   
// import { Getsnapshotupdates } from './getsnapshotupdate';
// import Testsvg from './chatScroll/Svg';
// import { ReactComponent as IMGS } from "./Assets/Img.svg"
// import { ReactComponent as IMGS1 } from "./Assets/Img1.svg"
// import { ReactComponent as IMGS2 } from "./Assets/Img2.svg"
// import { ReactComponent as IMGS3 } from "./Assets/Img3.svg"
// import { ReactComponent as IMGS4 } from "./Assets/Img4.svg"
// import Swipes from './swipe-list/Swipes';
// import Hierarchy from './Hierarchy/Hierarchy';
// import Hierarchy1 from './Hierarchy/Hierarchy1';
// import UserAccess from './Hafizur/Hafizur';
// import Heirarchy from './Heirarchy Npm/HeirarchyNpm';
// import { HeirarchyNpm } from './Heirarchy Npm/HeirarchyNpm';


function App() {

  // const [Validate_userName,setValidate_userName]=React.useState("")    

  // const arr={
  //   sno:3,
  //   userName:"nafil",
  //   password:"password"
  // }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [state, setState] = useState({
    arrays: []
  })

  const [db, setDb] = React.useState("")
  const id = 1

  const [x, setx] = useState(0)

  const [MasterData, setMasterData] = useState([
    {
      "inAppNotificationID": 13168,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Scheme 12012023 - 0000007 Single Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-12T15:00:36.846682+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-12T15:00:36.846682+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "T-482",
      "taskID": "12012023 - 0000007"
    },
    {
      "inAppNotificationID": 13166,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Demo 12012023 - 0000005 Single Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-12T14:43:09.878878+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-12T14:43:09.878878+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "T-480",
      "taskID": "12012023 - 0000005"
    },
    {
      "inAppNotificationID": 13165,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Painter Visit 12012023 - 0000004 Event Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-12T14:40:00.80832+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-12T14:40:00.80832+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "E-479",
      "taskID": "12012023 - 0000004"
    },
    {
      "inAppNotificationID": 13164,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! (Task name) (Task ID ) ( Task type) Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-12T14:39:58.189885+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-12T14:39:58.189886+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "E-479",
      "taskID": "12012023 - 0000004"
    },
    {
      "inAppNotificationID": 13163,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Prochamp 12012023 - 0000003 Group Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-12T14:38:33.48034+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-12T14:38:33.480368+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "T-478",
      "taskID": "12012023 - 0000003"
    },
    // {
    //   "inAppNotificationID": 13160,
    //   "empID": "NPI4002",
    //   "notificationDetails": "Hi Balachander G,  Your target for the upcoming month has been set. You can now start assigning targets to your team, Click to view.",
    //   "isRead": false,
    //   "createdDate": "2023-01-12T13:51:18.289667+05:30",
    //   "createdBy": "NPI0344",
    //   "modifiedDate": null,
    //   "modifiedBy": null,
    //   "leadid": "",
    //   "task": null,
    //   "taskID": ""
    // },
    {
      "inAppNotificationID": 13157,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Painter Visit 11012023 - 0000015 Event Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-11T20:23:28.297636+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-11T20:23:28.297637+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "T-475",
      "taskID": "11012023 - 0000015"
    },
    {
      "inAppNotificationID": 13156,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Painter Visit 11012023 - 0000014 Event Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-11T20:22:10.230313+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-11T20:22:10.230313+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "T-474",
      "taskID": "11012023 - 0000014"
    },
    {
      "inAppNotificationID": 13155,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Painter Visit 11012023 - 0000013 Event Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-11T20:21:20.13437+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-11T20:21:20.13437+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "E-473",
      "taskID": "11012023 - 0000013"
    },
    {
      "inAppNotificationID": 13154,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Painter Visit 11012023 - 0000012 Event Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-11T20:19:34.30454+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-11T20:19:34.30454+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "E-472",
      "taskID": "11012023 - 0000012"
    },
    {
      "inAppNotificationID": 13153,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Painter Visit 11012023 - 0000011 Event Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-11T20:10:57.131287+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-11T20:10:57.131287+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "E-471",
      "taskID": "11012023 - 0000011"
    },
    {
      "inAppNotificationID": 13150,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Demo 11012023 - 0000008 Single Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-11T17:51:08.367981+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-11T17:51:08.367981+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "T-468",
      "taskID": "11012023 - 0000008"
    },
    {
      "inAppNotificationID": 13149,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Painter Visit 11012023 - 0000007 Event Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-11T17:50:46.281629+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-11T17:50:46.281629+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "E-467",
      "taskID": "11012023 - 0000007"
    },
    {
      "inAppNotificationID": 13148,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Painter Visit 11012023 - 0000006 Event Click to take actions.",
      "isRead": true,
      "createdDate": "2023-01-11T17:40:32.87785+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-11T12:18:33.580811+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "E-466",
      "taskID": "11012023 - 0000006"
    },
    // {
    //   "inAppNotificationID": 13147,
    //   "empID": "NPI4002",
    //   "notificationDetails": "You have an Invoice approval request for 09012023 - 0006 from Balachander G.",
    //   "isRead": false,
    //   "createdDate": "2023-01-11T17:08:14.085599+05:30",
    //   "createdBy": "9840989800",
    //   "modifiedDate": null,
    //   "modifiedBy": null,
    //   "leadid": "09012023 - 0006",
    //   "task": null,
    //   "taskID": null
    // },
    // {
    //   "inAppNotificationID": 13145,
    //   "empID": "NPI4002",
    //   "notificationDetails": "You have an Invoice approval request for 09012023 - 0006 from Syed Nayeem M.",
    //   "isRead": true,
    //   "createdDate": "2023-01-11T17:07:59.303379+05:30",
    //   "createdBy": "9840989800",
    //   "modifiedDate": "2023-01-11T11:38:10.776334+05:30",
    //   "modifiedBy": "NPI4002",
    //   "leadid": "09012023 - 0006",
    //   "task": null,
    //   "taskID": null
    // },
    // {
    //   "inAppNotificationID": 13139,
    //   "empID": "NPI4002",
    //   "notificationDetails": "You have an Invoice approval request for 09012023 - 0006 from Syed Nayeem M.",
    //   "isRead": false,
    //   "createdDate": "2023-01-11T17:03:01.426144+05:30",
    //   "createdBy": "9840989800",
    //   "modifiedDate": null,
    //   "modifiedBy": null,
    //   "leadid": "09012023 - 0006",
    //   "task": null,
    //   "taskID": null
    // },
    {
      "inAppNotificationID": 13138,
      "empID": "NPI4002",
      "notificationDetails": "New visit Alert! Demo 11012023 - 0000003 Single Click to take actions.",
      "isRead": false,
      "createdDate": "2023-01-11T16:55:17.577938+05:30",
      "createdBy": "NPI4002",
      "modifiedDate": "2023-01-11T16:55:17.577939+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "",
      "task": "T-463",
      "taskID": "11012023 - 0000003"
    },
    // {
    //   "inAppNotificationID": 13135,
    //   "empID": "NPI4002",
    //   "notificationDetails": "You have an Quotation approval request for 09012023 - 0006 from Syed Nayeem M.",
    //   "isRead": false,
    //   "createdDate": "2023-01-11T16:50:23.350788+05:30",
    //   "createdBy": "Syed Nayeem M",
    //   "modifiedDate": null,
    //   "modifiedBy": null,
    //   "leadid": "09012023 - 0006",
    //   "task": null,
    //   "taskID": null
    // },
    // {
    //   "inAppNotificationID": 13129,
    //   "empID": "NPI4002",
    //   "notificationDetails": "New lead Alert! 11012023 - 0006 Click to take actions.",
    //   "isRead": false,
    //   "createdDate": "2023-01-11T15:48:12.292187+05:30",
    //   "createdBy": "Call Center",
    //   "modifiedDate": null,
    //   "modifiedBy": null,
    //   "leadid": "11012023 - 0006",
    //   "task": null,
    //   "taskID": null
    // },
    {
      "inAppNotificationID": 13116,
      "empID": "NPI4002",
      "notificationDetails": "New lead Alert! 11012023 - 0005 Click to take actions.",
      "isRead": true,
      "createdDate": "2023-01-11T12:15:21.443688+05:30",
      "createdBy": "Call Center",
      "modifiedDate": "2023-01-11T06:48:11.460101+05:30",
      "modifiedBy": "NPI4002",
      "leadid": "11012023 - 0005",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13113,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 09012023 - 0006 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.373459+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.37346+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "09012023 - 0006",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13112,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 09012023 - 0006 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.367425+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.367426+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "09012023 - 0006",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13109,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 09012023 - 0004 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.346512+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.346513+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "09012023 - 0004",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13108,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 09012023 - 0004 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.338845+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.338846+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "09012023 - 0004",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13105,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 09012023 - 0003 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.318389+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.318391+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "09012023 - 0003",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13104,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 09012023 - 0003 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.310311+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.310312+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "09012023 - 0003",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13101,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 22122022 - 0004 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.290366+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.290367+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "22122022 - 0004",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13100,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 22122022 - 0004 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.28323+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.283231+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "22122022 - 0004",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13097,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 09012023 - 0002 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.262734+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.262735+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "09012023 - 0002",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13096,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 09012023 - 0002 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.255303+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.255304+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "09012023 - 0002",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13093,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 06012023 - 0019 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.235604+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.235605+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "06012023 - 0019",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13092,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 06012023 - 0019 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.228725+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.228726+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "06012023 - 0019",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13089,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 06012023 - 0014 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.209821+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.209822+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "06012023 - 0014",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13089,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 06012023 - 0014 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-11T11:01:10.209821+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.209822+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "06012023 - 0014",
      "task": null,
      "taskID": null
    },
    {
      "inAppNotificationID": 13089,
      "empID": "NPI4002",
      "notificationDetails": "UH-OH! 06012023 - 0014 of Syed Nayeem has been escalated, take immediate actions.",
      "isRead": false,
      "createdDate": "2023-01-13T11:01:10.209821+05:30",
      "createdBy": "LMS Scheduler",
      "modifiedDate": "2023-01-11T11:01:10.209822+05:30",
      "modifiedBy": "LMS Scheduler",
      "leadid": "06012023 - 0014",
      "task": null,
      "taskID": null
    },
  ])


  // React.useEffect(()=>{   



  //   for(let i=0;i<arr.length;i++){
  //     setState({
  //       arrays:[
  //        ...arr,arr[i]
  //       ]
  //     })
  //   }      

  // },[])

  const [temp, setTemp] = useState([])


  useEffect(() => {
    // console.log(MasterData,"MasterDAta")
    let arr = []

    MasterData.map(element => {
      // setTemp(prev=>[...prev, moment(element.createdDate).format("DD-MM-YYYY")])
      arr = [...arr, moment(element.createdDate).format("DD-MM-YYYY")]
    })

    const getElement = arr.filter((el, i) => arr.indexOf(el) == i)
    // console.log(getElement,"getElement")
    setTemp(getElement)

  }, [MasterData])

  // MasterData.map(element=>{
  //   setTemp([...temp,moment(element.createdDate).format("DD-MM-YYYY")])
  // })


  const thisObj = {
    prop: 1
  }

  // const clickHandler = (e) => { }


  // const fetchData = async() =>{
  //   let data={
  //     sno:1,
  //     userName:"anas",
  //     password:"password"
  //   }
  //    axios.post("http://localhost:5000/getAll/Product",data)
  //   .then((res)=>console.log(res))
  //   .catch(err=>console.log(err))
  // }

  // function temp (v1,v2) {
  //   console.log(v1,v2)
  // }

  // const x=new temp(1,2)
  // console.log(x,"x")

  // function tempData(...value){
  //   return value
  // }

  // console.log(tempData(1,2,3),"valuegeting")
  // console.log(x)


  // useEffect(()=>{
  //   console.log(navigator)
  // },[])

  const changeHandler = async(e) =>
  {

    const files=e.target.files

    // var reader = new FileReader();
    // reader.readAsDataURL(e.target.files[0]);
    // reader.onloadend = function() {
    //  const x= fetch(reader.result,{mode:"no-cors"})
    //   .then(el=>{
    //    console.log(e.target.files[0].name,"e.target.files[0]")
    //    const buffer =  el.arrayBuffer()
    //    const pdf = [new File([buffer], e.target.files[0].name+".pdf", { type: "application/pdf" }) ]
        
    // navigator.share({  
    //     files:  pdf,
    //     title: 'test web api through email',
    //     text: "Google's content and product policies apply wherever you are in the world, ... You may report the same content through both legal and content product policy ...",
    //     url: window.location.href
    //   })
        
    //   }
    //     )

    navigator.share({  
        files,
        title: 'test web api through email',
        text: "Google's content and product policies apply wherever you are in the world, ... You may report the same content through both legal and content product policy ...",
        url: window.location.href
      })


    }
    
    
    // const files = e.target.files
    //  await navigator.share({
      //     files,
      //     title: 'test web api through email',
      //     text: "Google's content and product policies apply wherever you are in the world, ... You may report the same content through both legal and content product policy ...",
      //     url: window.location.href
      //   })
      
      const [defaultValue,setDefaultValue]=useState("000")
      
      const changedValue = (data) =>{
        
        console.log(defaultValue)
        
        if(defaultValue.substring(0,defaultValue.length) !== data.substring(0,defaultValue.length)){
          setDefaultValue("000")          
        } 
        else{
          setDefaultValue(data)
        } 
      }
      
      
      useEffect(()=>{
        navigator.clipboard.writeText("Burmese Potato").then(() => {
          console.log("text copied")
        })    


        
      navigator.credentials.get({
        otp: {transport:['sms']}
      })
      .then(otp => console.log(otp.code,"123456"));
      },[])
    


    const initialState = {
        value: new Date('2019-10-25 10:44'),
        locale: { name: 'en-US', label: 'English (US)' },
    };
    
    const okButtonLocalizedLabel = {
        'en-US': 'OK',
        'es-ES': 'Aceptar',
        'fr-Fr': "D'accord",
    };
    
    const cancelButtonLocalizedLabel = {
        'en-US': 'Cancel',
        'es-ES': 'Cancelar',
        'fr-Fr': 'Annuler',
    };

    var options = {
      // weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric"
  };

  const clickHandler = (event) =>{
    // console.log(event.target.files[0])

    // const file = new FileReader()
    // file.readAsDataURL(event.target.files[0]);
    // file.onload = function(){
    //   console.log(file.result)
    //     document.write("<a download=image.png href=" +file.result +">click here to downlaod image</a>")
    // }

    // const message = encodeURIComponent(`#${conversationId}|${messageId}`);
    const url = document.URL;
    const windowHeight = '540';
    const windowWidth = '960';
    // window.open(url, '_blank', `location=yes,height=${windowHeight},width=${windowWidth},scrollbars=yes,status=yes`);
    window.open(url, '_blank', `location=yes,height=${windowHeight},width=${windowWidth},scrollbars=yes,status=yes`);
    // window.open(url, );
  } 

  var WIDTH = 40 ;


  const upload_file=(event)=>{
    let image_file = event.target.files[0];

    let reader = new FileReader();

    reader.readAsDataURL(image_file);

    reader.onload = (event) => {

      var  image_url = event.target.result;
        let image = document.createElement('img');
        image.src = image_url;

        image.onload = (e) => {

            let canvas = document.createElement('canvas');
            let ratio = WIDTH / image.width;
            canvas.width = WIDTH;
            canvas.height = image.height * ratio;

            let context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            let new_image_url = canvas.toDataURL('image/jpeg', 98)

            console.log("Image URL: ", new_image_url)

            let image_file = urlToFile(new_image_url)
            // uploadImage(image_file)
            console.log(image_file)

        }             
    }

  }


  let urlToFile = (url) => {

    let arr = url.split(",")
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1]
    let data = arr[1]

    let dataStr = atob(data)
    let n = dataStr.length
    let dataArr = new Uint8Array(n)

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    }

    let file  = new File([dataArr], 'File.jpg', {type: mime})

    console.log(file,"files")

    let blob = new Blob([file], {type:"jpg"});
    let urls= window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.download = "test.jpg";
    link.href = urls;
    link.click();

    
    return 


}

  const resize = (e) =>{

    if (e.target.files) {
      let imageVal = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
          var img = document.createElement("img");
          img.onload = function (event) {
              // This line is dynamically creating a canvas element
              var canvas = document.createElement("canvas");
              var ctx = canvas.getContext("2d");
              //This line shows the actual resizing of image
              ctx.drawImage(img, 0, 0, 50, 50);
              //This line is used to display the resized image in the body
              var url = canvas.toDataURL(imageVal.type);
              document.getElementById("img-content").src = url;
          }
          console.log(e.target.result)
          // img.src = e.target.result;
        urlToFile(e.target.result)

          // console.log(img)
      }
      reader.readAsDataURL(imageVal);

   }


  }
    // window.addEventListener("scroll",(event)=>{
    //   var myEl = document.querySelector('div');

      
    //   const myObserver = new IntersectionObserver(elements => {
       
    //     elements.forEach((row)=>{
    //       console.log(row.intersectionRatio )
    //       if (elements[0].intersectionRatio !== 0) {
    //         console.log(elements[0].intersectionRatio)
    //         console.log("The element is in view!");
    //       } else {
    //         console.log("The element is out of view")
    //       }
    //     })

    //   })
      
      
    //   myObserver.observe(myEl);

    // },{
    //   root:"App",
    //   rootmargin:"0px",
    //   atthreshold:[0,1]
    // })

//     window.addEventListener("scroll",(event)=>{
//       console.log(event)
//     })
//  })

  const convert=(event)=>{
    let text = event.target.files[0]
    const file = new FileReader()
    file.readAsText(text)
    file.onload=function(){
      console.log(file.result)
    }

  }

  return (
        <div className="App" >
          <img src="" alt="no image"/>
          <input type="file" onChange={(event)=>convert(event)}/>
        {/* <div style={{height:"190px",width:"120px",backgroundColor:"red",alignSelf:"center"}}></div> */}

          {/* <input type="file" onInput={(e)=>resize(e)}></input> */}
          {/* <Compress/> */}
          {/* <Boostrap/> */}
          {/* <Reactquery/> */}

        {/* <input type="file" onInput={(event)=>clickHandler(event)} ></input> */}
    {/* <button onClick={()=>clickHandler()}>click handler</button> */}
    {/* <Steppers/> */}

          {/* <input type="text" value={defaultValue} onChange={(e)=>changedValue(e.target.value)}/>     */}
            {/* {
              MasterData.map((el,i) =>{
                  return(
                    <>
                    
                    {
                moment(el.createdDate).format("DD-MM-YYYY") !== moment(MasterData[i+1]?.createdDate? MasterData[i+1].createdDate : "").format("DD-MM-YYYY")? 
                <h1 style={{display:"flex",justifyContent:"center",color:"red"}}>{moment(el.createdDate).format("DD-MM-YYYY") }</h1> 
                :null 
              }   

      <span>{moment(el.createdDate).format("DD-MM-YYYY")}</span>
      <h1>{el.notificationDetails} </h1>
      </>
    )
  }
  )
} */}

{/* <button onClick={()=>clickHandler()}>click here to share email</button>
<input type="file" onChange={(e)=>changeHandler(e)} /> */}
      {/* <IMGS fill={"blue"} />
      <IMGS2 fill={"red"} /> */}
      {/* <IMGS3 fill={"yellow"} style={{fontSize:"0.9rem"}}/>
      <IMGS1 fill={"green"} />
    <IMGS2 fill={"red"} /> 
  <IMGS4 fill={"blue"} /> */}

{/* <input type="file" onChange={(e)=>changeHandler(e)} />  */}

      {/* {
 
        temp.length > 0 && temp.map((element, index) => {
          return (
            <div key={element.createdDate + " -" + index}>
              <h1>{element}</h1>
              {
                MasterData.filter(el => moment(el.createdDate).format("DD-MM-YYYY") == element).length > 0 ? MasterData.filter(el => moment(el.createdDate).format("DD-MM-YYYY") == element).map((value) => {
                  return (
                    <div key={value.createdDate + " -" + index}>
                      <h5>{value.notificationDetails}</h5>
                    </div>
                  )
                }) : null

              }
            </div>
          )
        })

      } */}

{/* <h1>1234567890000000</h1>*/}

            {/* <DateTimePicker
                label="DateTimePicker Label"
                value={new Date()}
            /> */}
            {/* {} */}
      {/*   
  <Getsnapshotupdates/> */}

      {/* <Testsvg/> */}
      {/* <IMGS/> */}
      {/* <Static/>
  
        <h1 onClick={()=>console.log("h1")}>sample text from js
          <p onClick={()=>console.log("p")}>Lorem fghjofxcvhbjnkjdefrghjkiolpfghjkl; frghjklop; rftgyhujikol</p>
        </h1> */}
      {/* <Chatscroll/> */}
      {/* <InfiniteListWithVerticalScroll/> */}
      {/* <Timer1/>  */}
      {/* <Digital/> */}
      {/* <Login/> */}
      {/* <FileUploading/> */}
      {/* <button onClick={()=>setx(prev => prev+1)}>click me</button> */}

      {/* <Swipes/>   */}
      {/* <Hierarchy/> */}
      {/* <Hierarchy1/> */}
      {/* <Heirarchy/>   */}
      {/* <UserAccess/> */}
      <h1>111111111111111111</h1>
      <h1>222222222222222222</h1>
      <h1>33333333333333</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>6</h1>
      <h1>7</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <div className='test'>Yo</div>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>
      <h1>111111111111111111</h1>

      </div>
  );   
}





export default App;



