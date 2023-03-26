import React, { useEffect } from "react";

import { INode, ReactHiererchyChart } from "react-hierarchy-chart";
import "./Hierarchy1.css";

import Hierarchy from "../Json/Heirarchy.json";


// import {
//   TreeList,
//   mapTree,
//   extendDataItem,
//   TreeListSelectionCell,
//   TreeListHeaderSelectionCell,
//   getSelectedState,
//   filterBy
// } from "@progress/kendo-react-treelist";

function Hierarchy1() {

  console.log(Hierarchy)
  // const [value,setValue]=React.useState(JSON.parse(Hierarchy))
  // console.log(value,"value")

  const nodes = [
    {
      name: "Caleb Matthews",
      cssClass: "level1",
      position: "Chief Executive Officer",
      orderId:1,
      indexId:null,
      childs: [
        {
          name: "Antonia Sancho",
          cssClass: "level2",
          position: "HR Manager",
          orderId:2,
          indexId:1,
        },
        {
          name: "Thoms Hilty",
          cssClass: "level2",
          position: "Marketing Manager",
          orderId:2,
          indexId:1,
          childs: [
            {
              name: "Eyal Matthews",
              cssClass: "level3",
              position: "Social Media",
              orderId:3,
              indexId:1,
            },
            {
              name: "Adam Mark",
              cssClass: "level3",
              position: "Offline Marketing",
              orderId:3,
              indexId:1,
            },
          ],
        },
        {
          name: "Barry Roy",
          cssClass: "level2",
          position: "Production Manager",
          orderId:2,
          indexId:1,
          childs: [
            {
              name: "Ligia Opera",
              cssClass: "level3",
              position: "Supply Chain",
              orderId:3,
              indexId:2,
            },
            {
              name: "Moran Perry",
              cssClass: "level3",
              position: "Operational Manager",
              orderId:3,
              indexId:2,
            },
            {
              name: "Adam Mark",
              cssClass: "level3",
              position: "Offline Marketing",
              orderId:3,
              indexId:2,
            },
          ],
        }
      ],
    },
  ];

  const handleFilterChange = event => {
    // setFilterValue(event)
    // let Filter = [{ field: 'name', operator: 'contains', value: event }]
    // let FilterData = filterBy(nodes, Filter, "name")
    // setH_Data(FilterData)
    // console.log(FilterData,"FilterData")
};


  useEffect(()=>{
    navigator.clipboard.writeText("Burmese Potato").then(() => {
      alert("text copied")
    })    
  },[])


  const changeHanler=(e)=>{
    
    // let arr=[]

   const arr=nodes.filter((el)=>{   
      return(
        el.name.toLowerCase().includes(e.target.value.toLowerCase()) ? alert("1234567890") : subChild(el.childs,e.target.value)

      // (el.name.toLowerCase() == e.target.value.toLowerCase()) ?( el.name.toLowerCase() == e.target.value.toLowerCase()) :  (subChild(el.childs,e.target.value))
      )
    })

    console.log(arr,"ARR")



  }


  const subChild=(data,inputValue)=>{
    const subchild_data =  data.length>0 && data.filter(el=>{
      return(
        el.name.toLowerCase().includes(inputValue) ? el.name.toLowerCase().includes(inputValue) : null
      )
    })
    // console.log(subchild_data,"subchild_data")
    return subchild_data;
  }




  // console.log(nodes)
  // useEffect(()=>{
  // },[])

  return (
    <div>
      <h1></h1>
      <input type="text" placeholder="Search Your heirarchy"  onChange={(e)=>handleFilterChange(e)} />
      <ReactHiererchyChart
        nodes={Hierarchy}
        direction="vertical"
        randerNode={(node) => {
          return (
            <div className="node-template">
              <strong style={{fontSize:"0.9rem"}}>{node.userName} </strong>
              <span>{node.empID} </span>
              <button
                onClick={() => {
                  alert(node.empID);
                }}
              >
                ok
              </button>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Hierarchy1;
