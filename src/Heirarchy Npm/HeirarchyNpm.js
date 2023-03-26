import React,{ useEffect ,useState} from "react"
import axios from "axios";
import "./HeirarchyNpm.css"

function Heirarchy(){
  
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get("https://localhost:7105/api/Userhierarchy/GetHierarchy?EmpID=NPI0025&Segment=NDPS&State=TAMIL%20NADU")
    .then((res)=>{
      setData([res.data[0]]) 
    })
    .catch((error)=>console.log(error))
  },[])

  

  const parentCard = (data) => {
    if (data !== undefined && data.length > 0) {
      console.log(data,"inside")
      let parentlevelOrder =
            data.map((record, Index) => {
              console.log(record.userName)
              return(
                <ul 
                        className="org-structure vertical justify-content-center">
                        <li 
                             className="hierarchy_form" style={{ display: 'inline-flex' }} >
                              <div class="ant-ribbon-wrapper">
                    <div class="MainTextCard_Show">
                    <div class="card shadow-sm">
                    <div class="card-body">
                    <div className="cut-text" >{record.userName}</div>
                      </div>
                      </div>
                    </div>
                    </div>
                                {record.childs != undefined && record.childs.length > 0 ? 
                            <ul key={Index + 'childParentul'}>{childCard(record.childs, "0")}</ul>
                            : <></>
                        }
                        </li>
                    </ul>
            )
            }
            ) 
        return parentlevelOrder
    }
    else
        return []   
  }


  const childCard = (data, P_ID) => {
    if (data !== undefined && data.length > 0) {
        console.log(data,"child")
        let childlevelOrder =
            data.map((record, Index) => (
                <li  className="hierarchy_form " style={{ display: 'inline-flex' }} >
                  <div class="ant-ribbon-wrapper">
                    <div class="MainTextCard_Show">
                    <div class="card shadow-sm">
                    <div class="card-body">
                    <div className="cut-text" >{record.userName}</div>
                      </div>
                      </div>
                    </div>
                    </div>
                        {record.childs != undefined && record.childs.length > 0 ?
                        <ul key={Index + 'childParentul'}>{
                            childCard(record.childs, record.parentID)
                        }</ul>
                        : <></>
                    }
                    </li>
            )
            )
        return childlevelOrder
    }
    else
        return []
}

 
  return(
    <div className="container-fluid">
      {/* <div className="cardCss"> */}
                <div style={{ width: '100%' }}>
                    {parentCard(data)}
                {/* </div> */}
            </div>
    </div>
  )
}

export default Heirarchy;