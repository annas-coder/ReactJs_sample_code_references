import React from 'react';


export class Getsnapshotupdates extends React.Component{

    constructor(props){
        super(props)
        this.state={
            arr:[
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
              ]
        }
        this.references=React.createRef()
    }


    // getSnapshotBeforeUpdate(prevProps,prevState){
    //     if(prevState.arr.length>0){
    //         let list=this.references.current
    //         return list.scrollHeight - list.scrollTop
    //     }
    //     else{
    //         return null
    //     }
    // }

    componentDidUpdate(prevProps,prevState,snapShot){
        if(snapShot !== null){
            let list=this.references.current
            console.log(snapShot,"snapShot")
            console.log(list)
        }
    }

    render(){
        return(
            <div>
                <h1>working</h1>
            {
                this.state.arr.map((el,i)=>(
                    <div ref={this.references} key={i}>
                        {i}
                    </div>
                ))
            }
            </div>

        )
    }
}
