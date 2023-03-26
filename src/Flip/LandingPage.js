import React, { useEffect, useState } from "react";
import "./NewLandingPage.css";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import moment from "moment";
// import InputAdornment from "@mui/material/InputAdornment";
// import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
// import HTTPClient from "../../../HTTP/httpClient";
// // import FormAPI from '../../../api/formapi.json';
// import API from "../../../api/api.json";
import { ReadJsonFile } from "../../../helper/index";
import FlipClockCountdown from "./FlipClock";
import NewFlip from "./NewFlip"

// import Clock_Function from "./Clock_Function";

// import cards from "./cards.js";

// const tasks = cards.map((c) => ({
//   id: c.id,
//   name: c.name,
//   leadid: c.leadid,
//   createddate: c.createddate,
//   updateddate: c.updateddate,
//   disposition: c.disposition
// }));

function NewLandingPage() {
  const [NewDashbordList, setNewDashbordList] = useState([]);
  const [LiveMasterDate, setLiveMasterDate] = useState([]);
  const [FeedBackMasterList, setFeedBackMasterList] = useState([]);
  const [CompletedMasterList, setCompletedMasterList] = useState([]);
  // const [CallsValues, setCallValues] = useState([
  //   {
  //     id: 1,
  //     D_Id: "1_Day",
  //     H_Id: "1_Hrs",
  //     M_Id: "1_Min",
  //     S_Id: "1_Sec",
  //     name: "Campaigns",
  //     status: "new",
  //     leadid: "209988-1230",
  //     createddate: "2022-11-25T17:24:20.024832",
  //     updateddate: "2022-11-25T16:41:20.024832",
  //     disposition: "2",
  //   },
  //   {
  //     id: 2,
  //     D_Id: "2_Day",
  //     H_Id: "2_Hrs",
  //     M_Id: "2_Min",
  //     S_Id: "2_Sec",
  //     name: "Newsletters",
  //     status: "new",
  //     leadid: "209988-1231",
  //     createddate: "2022-10-23T09:30:20.024832",
  //     updateddate: "2022-11-25T16:41:20.024832",
  //     disposition: "7",
  //   },
  //   {
  //     id: 3,
  //     D_Id: "3_Day",
  //     H_Id: "3_Hrs",
  //     M_Id: "3_Min",
  //     S_Id: "3_Sec",
  //     name: "Ads Analytics",
  //     status: "new",
  //     leadid: "209988-1232",
  //     createddate: "2022-10-22T08:20:20.024832",
  //     updateddate: "2022-11-25T16:41:20.024832",
  //     disposition: "4",
  //   },
  //   {
  //     id: 4,
  //     D_Id: "4_Day",
  //     H_Id: "4_Hrs",
  //     M_Id: "4_Min",
  //     S_Id: "4_Sec",
  //     name: "SEO Analytics",
  //     status: "new",
  //     leadid: "209988-1233",
  //     createddate: "2022-10-21T05:41:20.024832",
  //     updateddate: "2022-11-25T16:41:20.024832",
  //     disposition: "3",
  //   },
  //   {
  //     id: 5,
  //     D_Id: "5_Day",
  //     H_Id: "5_Hrs",
  //     M_Id: "5_Min",
  //     S_Id: "5_Sec",
  //     name: "Customer Research",
  //     status: "new",
  //     leadid: "209988-1234",
  //     createddate: "2022-10-24T11:40:20.024832",
  //     updateddate: "2022-11-25T16:41:20.024832",
  //     disposition: "2",
  //   },
  //   {
  //     id: 6,
  //     D_Id: "6_Day",
  //     H_Id: "6_Hrs",
  //     M_Id: "6_Min",
  //     S_Id: "6_Sec",
  //     name: "Customer Research",
  //     status: "escalation",
  //     leadid: "209988-1235",
  //     createddate: "2022-11-25T17:24:20.024832",
  //     updateddate: "2022-11-25T16:41:20.024832",
  //     disposition: "2",
  //   },
  //   {
  //     id: 7,
  //     D_Id: "7_Day",
  //     H_Id: "7_Hrs",
  //     M_Id: "7_Min",
  //     S_Id: "7_Sec",
  //     name: "Customer Research",
  //     status: "escalation",
  //     leadid: "209988-1236",
  //     createddate: "2022-11-25T17:41:20.024832",
  //     updateddate: "2022-11-25T16:41:20.024832",
  //     disposition: "2",
  //   },
  //   {
  //     id: 8,
  //     D_Id: "8_Day",
  //     H_Id: "8_Hrs",
  //     M_Id: "8_Min",
  //     S_Id: "8_Sec",
  //     name: "Customer Research",
  //     status: "pending",
  //     leadid: "209988-1237",
  //     createddate: "2022-11-25T16:41:20.024832",
  //     updateddate: "2022-11-25T16:41:20.024832",
  //     disposition: "2",
  //   },
  //   {
  //     id: 9,
  //     D_Id: "9_Day",
  //     H_Id: "9_Hrs",
  //     M_Id: "9_Min",
  //     S_Id: "9_Sec",
  //     name: "Customer Research",
  //     status: "pending",
  //     leadid: "209988-1238",
  //     createddate: "2022-11-25T16:41:20.024832",
  //     updateddate: "2022-11-25T16:41:20.024832",
  //     disposition: "2",
  //   },
  //   {
  //     id: 10,
  //     D_Id: "10_Day",
  //     H_Id: "10_Hrs",
  //     M_Id: "10_Min",
  //     S_Id: "10_Sec",
  //     name: "Customer Research",
  //     status: "Pending - Due for Calling",
  //     leadid: "209988-1239",
  //     createddate: "2022-11-25T16:41:20.024832",
  //     updateddate: "2022-11-25T16:41:20.024832",
  //     disposition: "2",
  //   },
  // ]);
  const [ButtonSelect, setButtonSelect] = useState("liveleads");
  const [ListHeader, setListHeader] = useState([
    { Header: "New" },
    { Header: "Escalation" },
    { Header: "Pending" },
    { Header: "Pending - Due for Calling" },
  ]);

  useEffect(() => {
    GetDashboardNewStatus();
    // GetDashboardEscalation();
  }, []);

  const ButtonClick = (data) => {
    setButtonSelect(data);
    if (data.toLowerCase() === "feedback") {
      // setLiveMasterDmm,hate([]);
      getDashboardWonList();
    } else if (data.toLowerCase() === "completed") {
      // setLiveMasterDate([]);
      // setFeedBackMasterList([]);
      getDashboardQualifiedList();
    } else {
      GetDashboardNewStatus();
    }
  };

  const GetDashboardNewStatus = () => {
    let url =
      process.env.REACT_APP_CALL_CENTER_SERVER +
      ReadJsonFile.readSetting(API).NewDashboardLists.url;
    HTTPClient.getClient(url)
      .then((res) => {
        console.log(res, "NewLists");
        if (res.data !== undefined) {
          setNewDashbordList(res.data[0].leadDetails);
          // setMasterDate(MasterDate);
          GetDashboardEscalation(res.data);
        }
        console.log(res.data[0].leadDetails, "NewLists1");
      })

      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const GetDashboardEscalation = (data) => {
    let url =
      process.env.REACT_APP_CALL_CENTER_SERVER +
      ReadJsonFile.readSetting(API).EscalationsLists.url;
    HTTPClient.getClient(url)
      .then((res) => {
        console.log(res, "NewLists");
        if (res.data !== undefined) {
          // setEscalationList(res.data[0].leadDetails);
          let Data = [...data, ...res.data];
          // setMasterDate(Data);
          GetDashboardCallBackPendings(Data);
        }
        console.log(res.data[0].leadDetails, "EscalationsLists");
      })

      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const GetDashboardCallBackPendings = (data) => {
    let url =
      process.env.REACT_APP_CALL_CENTER_SERVER +
      ReadJsonFile.readSetting(API).CallBackPendings.url;
    HTTPClient.getClient(url)
      .then((res) => {
        console.log(res, "NewLists");
        if (res.data !== undefined) {
          // setEscalationList(res.data[0].leadDetails);
          let Data = [...data, ...res.data];
          // setMasterDate(Data);
          GetDashboardPendings(Data);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const GetDashboardPendings = (data) => {
    let url =
      process.env.REACT_APP_CALL_CENTER_SERVER +
      ReadJsonFile.readSetting(API).PendingsLists.url;
    HTTPClient.getClient(url)
      .then((res) => {
        console.log(res, "NewLists");
        if (res.data !== undefined) {
          let Data = [...data, ...res.data];
          console.log(Data, "LiveLeadsDatas");
          setLiveMasterDate(Data);
        }
        console.log(res.data[0].leadDetails, "PendingsLists");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const getDashboardWonList = () => {
    let url =
      process.env.REACT_APP_CALL_CENTER_SERVER +
      ReadJsonFile.readSetting(API).WonDasboardLists.url;
    HTTPClient.getClient(url)
      .then((res) => {
        console.log(res, "NewLists");
        if (res.data !== undefined) {
          // setNewDashbordList(res.data[0].leadDetails);
          // setMasterDate(MasterDate);
          GetDashboardLostList(res.data);
        }
        console.log(res.data, "WonLists");
      })

      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const GetDashboardLostList = (data) => {
    let url =
      process.env.REACT_APP_CALL_CENTER_SERVER +
      ReadJsonFile.readSetting(API).LostDasboardLists.url;
    HTTPClient.getClient(url)
      .then((res) => {
        if (res.data !== undefined) {
          let Data = [...data, ...res.data];
          setFeedBackMasterList(Data);
          
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  console.log(FeedBackMasterList,"Res data")
  const getDashboardQualifiedList = () => {
    let url =
      process.env.REACT_APP_CALL_CENTER_SERVER +
      ReadJsonFile.readSetting(API).QualifiedDasboardLists.url;
    HTTPClient.getClient(url)
      .then((res) => {
        if (res.data !== undefined) {
          GetDashboardForwardedList(res.data);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const GetDashboardForwardedList = (data) => {
    let url =
      process.env.REACT_APP_CALL_CENTER_SERVER +
      ReadJsonFile.readSetting(API).ForwardedDasboardLists.url;
    HTTPClient.getClient(url)
      .then((res) => {
        if (res.data !== undefined) {
          let Data = [...data, ...res.data];
          GetDashboarClosedList(Data);
        }
        console.log(res.data[0].leadDetails, "EscalationsLists");
      })

      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const GetDashboarClosedList = (data) => {
    let url =
      process.env.REACT_APP_CALL_CENTER_SERVER +
      ReadJsonFile.readSetting(API).ClosedDasboardLists.url;
    HTTPClient.getClient(url)
      .then((res) => {
        if (res.data !== undefined) {
          let Data = [...data, ...res.data];
          setCompletedMasterList(Data);
        }
      })

      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  // console.log(new Date("2022-11-25T16:41:20.024832").getTime(),"Testing")

  const NewTimerFunction = (date, index, itemindex, status) => {
    // var countDownDate = new Date(date).getTime();
    console.log(status);
    if (status.toLowerCase() === "escalation") {
      EscalationTimerFunction(date, index, itemindex);
    }
    if (status.toLowerCase() !== "escalation") {
      var Check = new Date(date);
      Check = new Date(Check.getTime() + 30 * 60 * 1000);
      Check = new Date(Check).getTime();
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = Check - now;
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        let divdays = document.getElementById(`days_${index}_${itemindex}`);
        if (divdays !== null) {
          divdays.innerText =
            days > 0
              ? Math.abs(days).toString().length == 1
                ? "0" + Math.abs(days)
                : Math.abs(days)
              : "00";
        }
        let divhours = document.getElementById(`hrs_${index}_${itemindex}`);
        if (divhours !== null) {
          divhours.innerText =
            hours > 0
              ? Math.abs(hours).toString().length == 1
                ? "0" + Math.abs(hours)
                : Math.abs(hours)
              : "00";
        }
        let divMin = document.getElementById(`min_${index}_${itemindex}`);

        if (divMin !== null) {
          divMin.innerText =
            minutes > 0
              ? Math.abs(minutes).toString().length == 1
                ? "0" + Math.abs(minutes)
                : Math.abs(minutes)
              : "00";
        }
        let divSec = document.getElementById(`sec_${index}_${itemindex}`);

        if (divSec !== null) {
          divSec.innerText =
            seconds > 0
              ? Math.abs(seconds).toString().length == 1
                ? "0" + Math.abs(seconds)
                : Math.abs(seconds)
              : "00";
        }
      }, 1000);
    }
  };

  const EscalationTimerFunction = (date, index, itemindex) => {
    var x = setInterval(function () {
      var t = Date.parse(date) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      let divdays = document.getElementById(`days_${index}_${itemindex}`);
      if (divdays !== null) {
        divdays.innerText = -days;
      }
      let divhours = document.getElementById(`hrs_${index}_${itemindex}`);
      if (divhours !== null) {
        divhours.innerText = -hours;
      }
      let divMin = document.getElementById(`min_${index}_${itemindex}`);

      if (divMin !== null) {
        divMin.innerText = -minutes;
      }
      let divSec = document.getElementById(`sec_${index}_${itemindex}`);

      if (divSec !== null) {
        divSec.innerText = -seconds;
      }
    }, 1000);
  };

  console.log(new Date().getTime(), "MasterDate");

  return (
    <div className="newLandingPage">
      <div style={{ textAlign: "end", width: "100%", paddingTop: "1%" }}>
        <ButtonGroup>
          <Button
            onClick={() => ButtonClick("liveleads")}
            selected={ButtonSelect.toLowerCase() === "liveleads"}
            togglable={true}
          >
            Live Leads
          </Button>
          <Button
            onClick={() => ButtonClick("feedback")}
            selected={ButtonSelect.toLowerCase() === "feedback"}
            togglable={true}
          >
            Feedback
          </Button>
          <Button
            onClick={() => ButtonClick("completed")}
            selected={ButtonSelect.toLowerCase() === "completed"}
            togglable={true}
          >
            Completed
          </Button>
        </ButtonGroup>
      </div>
      <div className="MainCard">
        {ButtonSelect.toLowerCase() === "liveleads" ? (
          <div className="row">
            {LiveMasterDate.length > 0 &&
              LiveMasterDate.map((item, index) => {
                console.log(item, " console.log(item)");
                return (
                  <div className="col-md-3">
                    <div className="card">
                      <div
                        className={
                          "Header-card " +
                          item.status.split(" ").join("").toLowerCase()
                        }
                      >
                        {item.status.toUpperCase()}
                        <br />
                        <div className="SubContent">
                          {/* {item.status.toLowerCase() === "new"
                        ? "(30 Minute Count Down)"
                        : item.status.toLowerCase() === "escalation"
                        ? "(Time From Escalation)"
                        : item.status.toLowerCase() === "pending"
                        ? "(Call Back Follow-up)"
                        : item.status.toLowerCase() ===
                            "pending - due for calling" &&
                          "(RNR/Not Reachable/Call Dorp)"} */}
                          {item.count}
                        </div>
                      </div>

                      <div className="Body-card">
                        {/* <div className="position">
                        <TextField
                          id="input-with-icon-textfield"
                          className="TextArea"
                          placeholder="Search.."
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="end">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                        </div> */}

                        {/* New Design Change Start */}

                        {/* <div className="List-Card">
                          <div className="row">
                            <label>
                              {"Sathish Kumar M"}
                              {" - "}
                              {"2022-0021232022"}
                            </label>
                          </div>
                          <div className="row">
                            <div className="col-5">
                              <div
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                Today
                              </div>
                              <div
                                style={{ fontSize: "9px", fontWeight: "bold" }}
                              >
                                {"Wednesday 28 Oct 2022"}
                              </div>
                              <div
                                style={{ fontSize: "9px", fontWeight: "bold" }}
                              >
                                {"10:00 AM"}
                              </div>
                              <div
                                style={{ fontSize: "10px", fontWeight: "bold" }}
                              >
                                {"Dispositions"}
                                <a> : {"332"}</a>
                              </div>
                            </div>
                            <div className="col-7 ">
                             <NewFlip/>
                            </div>
                          </div>
                          <div className="row">
                            <div
                              className="col"
                              style={{
                                fontSize: "10px",
                                textAlign: "end",
                                marginTop: "-4px",
                                fontStyle: "italic",
                              }}
                            >
                              Created on : {"Wednesday 28 Oct 2022 10:00 AM"}
                            </div>
                          </div>
                        </div> */}
                     
                     {LiveMasterDate[index].leadDetails.map(
                      (List_item, List_itemindex) => (
                        <div className="List-Card">
                          <div className="row">
                            <label>
                              {List_item.leadName}
                              {" - "}
                              {List_item.leadID}
                            </label>
                          </div>
                          <div className="row">
                            <div className="col-5">
                              <div
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                Today
                              </div>
                              <div
                                style={{ fontSize: "8px", fontWeight: "bold" }}
                              >
                                  {moment(List_item.createdDate).format(
                                      "dddd"
                                    ) +
                                      "-" +
                                      moment(List_item.createdDate).format(
                                        "DD MMM,YYYY"
                                      )}{" "}
                              </div>
                              <div
                                style={{ fontSize: "8px", fontWeight: "bold" }}
                              >
                              {moment(List_item.createdDate).format(
                                      "hh:mm A"
                                    )}
                              </div>
                              <div
                                style={{ fontSize: "10px", fontWeight: "bold" }}
                              >
                                {"Dispositions"}
                                <a> : {"332"}</a>
                              </div>
                            </div>
                            <div className="col-7 ">
                            <div className="ListCardRow_2_Col_3">
                                    <div className="Timer_Card">
                                      <div className="Timer_Card_Header">
                                        Days
                                      </div>
                                      <div className="Timer_Card_Header">
                                        Hrs
                                      </div>
                                      <div className="Timer_Card_Header">
                                        Mins
                                      </div>
                                      <div className="Timer_Card_Header">
                                        Sec
                                      </div>
                                    </div>

                                    <div className="Timer_Card">
                                      <div
                                        id={`days_${index}_${List_itemindex}`}
                                        className="Timer_Card_Time"
                                      />
                                      <div
                                        id={`hrs_${index}_${List_itemindex}`}
                                        className="Timer_Card_Time"
                                      />
                                      <div
                                        id={`min_${index}_${List_itemindex}`}
                                        className="Timer_Card_Time"
                                      />
                                      <div
                                        id={`sec_${index}_${List_itemindex}`}
                                        className="Timer_Card_Time"
                                      />
                                    </div>
                                    <div className="Timer_Card_Time_Show">
                                      {NewTimerFunction(
                                        List_item.createdDate,
                                        index,
                                        List_itemindex,
                                        item.status
                                      )}
                                    </div>
                                  </div>
                            </div>
                          </div>
                          <div className="row">
                            <div
                              className="col"
                              style={{
                                fontSize: "10px",
                                textAlign: "end",
                                marginTop: "-4px",
                                fontStyle: "italic",
                              }}
                            >
                              Created on :   {" "}
                                      {moment(List_item.createdDate).format(
                                        "dddd"
                                      ) +
                                        "-" +
                                        moment(List_item.createdDate).format(
                                          "DD MMM,YYYY hh:mm A"
                                        )}
                            </div>
                          </div>
                        </div>
                      )
                     )}
                       
                       
                        {/* New Design Change End */}

                        {/* {LiveMasterDate[index].leadDetails.map(
                          (List_item, List_itemindex) => (
                            <div className="List-Card">
                              <div className="row">
                                <label>
                                  {List_item.leadName}
                                  {" - "}
                                  {List_item.leadID}
                                </label>
                                <br />
                                <div className="ListCardRow_1">
                                  <div className="ListCardRow_1_Col_1">
                                    Today
                                  </div>
                                  <div className="ListCardRow_1_Col_2">-</div>
                                  <div
                                    className={
                                      item.status.toLowerCase() === "new"
                                        ? "ListCardRow_1_Col_3"
                                        : "ListCardRow__excepNew_1_Col_3"
                                    }
                                  >
                                    {item.status.toLowerCase() === "new"
                                      ? "Hurry up!!"
                                      : item.status.toLowerCase() ===
                                        "escalation"
                                      ? "Time since escalated"
                                      : item.status.toLowerCase() === "pending"
                                      ? "Time to Call"
                                      : item.status.toLowerCase() ===
                                        "pending - due for calling"
                                      ? "Since last escalated"
                                      : ""}
                                  </div>
                                </div>

                                <div className="ListCardRow_2">
                                  <div className="ListCardRow_2_Col_1">
                                    {moment(List_item.createdDate).format(
                                      "dddd"
                                    ) +
                                      "-" +
                                      moment(List_item.createdDate).format(
                                        "DD MMM,YYYY"
                                      )}{" "}
                                    <br />
                                    {moment(List_item.createdDate).format(
                                      "hh:mm A"
                                    )}
                                  </div>
                                  <div className="ListCardRow_2_Col_2">
                                    Dispositions
                                  </div>
                                  <div className="ListCardRow_2_Col_3">
                                    <div className="Timer_Card">
                                      <div className="Timer_Card_Header">
                                        Days
                                      </div>
                                      <div className="Timer_Card_Header">
                                        Hrs
                                      </div>
                                      <div className="Timer_Card_Header">
                                        Mins
                                      </div>
                                      <div className="Timer_Card_Header">
                                        Sec
                                      </div>
                                    </div>

                                    <div className="Timer_Card">
                                      <div
                                        id={`days_${index}_${List_itemindex}`}
                                        className="Timer_Card_Time"
                                      />
                                      <div
                                        id={`hrs_${index}_${List_itemindex}`}
                                        className="Timer_Card_Time"
                                      />
                                      <div
                                        id={`min_${index}_${List_itemindex}`}
                                        className="Timer_Card_Time"
                                      />
                                      <div
                                        id={`sec_${index}_${List_itemindex}`}
                                        className="Timer_Card_Time"
                                      />
                                    </div>
                                    <div className="Timer_Card_Time_Show">
                                      {NewTimerFunction(
                                        List_item.createdDate,
                                        index,
                                        List_itemindex,
                                        item.status
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="ListCardRow_3">
                                  <div className="ListCardRow_3_col_1">
                                    Created on{" "}
                                    <a style={{ fontWeight: "bold" }}>
                                      {" "}
                                      {moment(List_item.createdDate).format(
                                        "dddd"
                                      ) +
                                        "-" +
                                        moment(List_item.createdDate).format(
                                          "DD MMM,YYYY hh:mm A"
                                        )}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )} */}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : ButtonSelect.toLowerCase() === "feedback" ? (
          <div className="row">
            {FeedBackMasterList.length > 0 &&
              FeedBackMasterList.map((item, index) => (
                <div className="col-md-3">
                  <div className="card">
                    <div className={"Header-card " + item.status.toLowerCase()}>
                      {item.status.toUpperCase()}
                      <br />
                      <div className="SubContent">{item.count}</div>
                      {/* <br/>
                    Test */}
                    </div>

                    <div className="Body-card">
                      <div className="position">
                        <TextField
                          id="input-with-icon-textfield"
                          className="TextArea"
                          placeholder="Search.."
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="end">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </div>
                      {FeedBackMasterList[index].leadDetails.map(
                        (List_item) => (
                          <div className="List-Card">
                            <div className="row">
                              <label>
                                {List_item.leadName}
                                {" - "}
                                {List_item.leadID}
                              </label>
                              <br />
                              <div className="ListCardRow_1">
                                <div className="ListCardRow_1_Col_1">Today</div>
                                <div className="ListCardRow_1_Col_2">-</div>
                                <div className="ListCardRow__excepNew_1_Col_3">
                                  {item.status.toLowerCase() === "won"
                                    ? "Since last escalated"
                                    : item.status.toLowerCase() === "lost"
                                    ? "Since last escalated"
                                    : ""}
                                  {/* Hurry up!! */}
                                </div>
                              </div>

                              <div className="ListCardRow_2">
                                <div className="ListCardRow_2_Col_1">
                                  {moment(new Date()).format("dddd") +
                                    "-" +
                                    moment(new Date()).format(
                                      "DD MMM,YYYY"
                                    )}{" "}
                                  <br />
                                  {moment(new Date()).format("hh:mm A")}
                                </div>
                                <div className="ListCardRow_2_Col_2">
                                  Dispositions
                                </div>
                                <div className="ListCardRow_2_Col_3">
                                  <div className="Timer_Card">
                                    <div className="Timer_Card_Header">
                                      Days
                                    </div>
                                    <div className="Timer_Card_Header">Hrs</div>
                                    <div className="Timer_Card_Header">
                                      Mins
                                    </div>
                                    <div className="Timer_Card_Header">Sec</div>
                                  </div>

                                  <div className="Timer_Card">
                                    <div className="Timer_Card_Time" />
                                    <div className="Timer_Card_Time" />
                                    <div className="Timer_Card_Time" />
                                    <div className="Timer_Card_Time" />
                                  </div>
                                  <div
                                    id={List_item.leadID}
                                    className="Timer_Card_Time_Show"
                                  >
                                    {ButtonSelect.toLowerCase === "feedback" &&
                                    List_item.callCenterStatus.toLowerCase() ===
                                      "new"
                                      ? NewTimerFunction(
                                          List_item.createdDate,
                                          List_item.leadID.toString()
                                        )
                                      : ButtonSelect.toLowerCase ===
                                          "feedback" &&
                                        List_item.callCenterStatus.toLowerCase() ===
                                          "escalation"
                                      ? EscalationTimerFunction(
                                          List_item.createdDate,
                                          List_item.leadID.toString()
                                        )
                                      : ""}
                                  </div>
                                </div>
                              </div>
                              <div className="ListCardRow_3">
                                <div className="ListCardRow_3_col_1">
                                  Created on{" "}
                                  {moment(new Date()).format("dddd") +
                                    "-" +
                                    moment(new Date()).format(
                                      "DD MMM,YYYY hh:mm A"
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="row">
            {CompletedMasterList.length > 0 &&
              CompletedMasterList.map((item, index) => (
                <div className="col-md-3">
                  <div className="card">
                    <div className={"Header-card " + item.status.toLowerCase()}>
                      {item.status.toUpperCase()}
                      <br />
                      <div className="SubContent">{item.count}</div>
                      {/* <br/>
                    Test */}
                    </div>

                    <div className="Body-card">
                      <div className="position">
                        <TextField
                          id="input-with-icon-textfield"
                          className="TextArea"
                          placeholder="Search.."
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="end">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </div>
                      {CompletedMasterList[index].leadDetails.map(
                        (List_item) => (
                          <div className="List-Card">
                            <div className="row">
                              <label>
                                {List_item.leadName}
                                {" - "}
                                {List_item.leadID}
                              </label>
                              <br />
                              <div className="ListCardRow_1">
                                <div className="ListCardRow_1_Col_1">Today</div>
                                <div className="ListCardRow_1_Col_2">-</div>
                                <div className="ListCardRow__excepNew_1_Col_3">
                                  {item.status.toLowerCase() === "qualified"
                                    ? "Since last escalated"
                                    : item.status.toLowerCase() === "forwarded"
                                    ? "Since last escalated"
                                    : item.status.toLowerCase() === "closed"
                                    ? "Since last escalated"
                                    : ""}
                                </div>
                              </div>

                              <div className="ListCardRow_2">
                                <div className="ListCardRow_2_Col_1">
                                  {moment(new Date()).format("dddd") +
                                    "-" +
                                    moment(new Date()).format(
                                      "DD MMM,YYYY"
                                    )}{" "}
                                  <br />
                                  {moment(new Date()).format("hh:mm A")}
                                </div>
                                <div className="ListCardRow_2_Col_2">
                                  Dispositions
                                </div>
                                <div className="ListCardRow_2_Col_3">
                                  <div className="Timer_Card">
                                    <div className="Timer_Card_Header">
                                      Days
                                    </div>
                                    <div className="Timer_Card_Header">Hrs</div>
                                    <div className="Timer_Card_Header">
                                      Mins
                                    </div>
                                    <div className="Timer_Card_Header">Sec</div>
                                  </div>

                                  <div className="Timer_Card">
                                    <div className="Timer_Card_Time" />
                                    <div className="Timer_Card_Time" />
                                    <div className="Timer_Card_Time" />
                                    <div className="Timer_Card_Time" />
                                  </div>
                                  {/* <div id={List_item.leadID}  className="Timer_Card_Time_Show">
                                {List_item.callCenterStatus.toLowerCase()==="new"?NewTimerFunction( List_item.createdDate, List_item.leadID.toString())
                                :List_item.callCenterStatus.toLowerCase()==="escalation"?EscalationTimerFunction(List_item.createdDate, List_item.leadID.toString())
                                :""}
                              </div> */}
                                </div>
                              </div>
                              <div className="ListCardRow_3">
                                <div className="ListCardRow_3_col_1">
                                  Created on{" "}
                                  {moment(new Date()).format("dddd") +
                                    "-" +
                                    moment(new Date()).format(
                                      "DD MMM,YYYY hh:mm A"
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NewLandingPage;
