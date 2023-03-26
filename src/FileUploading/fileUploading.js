import React, { useEffect, useLayoutEffect } from "react";
import axios from "axios";


function FileUploading() {
  const [state, setState] = React.useState("MOHAMEDANAS@gmail.com");

  let arr=[1,2,3,4,5,6,7]

 var arr1=[]

 arr.map((el)=>{
    if(el==1 || el==7){
        return arr1=[...arr1,el]
    }
 })

 console.log(arr1)


  console.log(Array.isArray(arr))


  const [dot,setDot]=React.useState("")


  const obj={
    name:"mohamed anas",
    age:222,
    develop:"reactjs"
  }



  console.log(typeof obj["name"],"asdfghjl;")
  console.log(typeof obj)

  //  for(var ob in obj){
  //   console.log(ob +"-" +obj[ob]) 
  //  }


    //   const styled = `display: inline-block;
    //   width: 180px;
    //   white-space: nowrap;
    //   overflow: hidden !important;
    //   text-overflow: ellipsis;`;


    useEffect(()=>{
    setDot(state.substr(0,state.indexOf("."))+"...")

    },[])

    // console.log(state.substring(0,state.indexOf("."))+"...")

//   const x=[1,2,3,4,5]

//   console.log(x.slice(-2))

  console.log(state.length > 16 ? state.substr(0, 12) + "..." : state);

  console.log(state.indexOf("com"));


  const red=[1,2,3,4,5,6,7,8,9,10]

  const x=red.reduce((acc,current)=>{
    return acc+current
  },0)
  console.log(x,"total")

  const n=10??9

  console.log(n)



  // useEffect(()=>{
  //     axios.get("http://localhost:5000/FILEUPLOAD")
  //     .then(res=>{

  //         let form = new FormData()

  //         console.log(form.get("files",res.data[1].name))
  //     })
  //     .catch((err)=>console.log(err))F
  //  },[])

  const handleChange = (e) => {
    const form = new FormData();

    form.append("files", e.target.files[0], "user.jpg");
    console.log(form.get("files"));

    axios
      .post("http://localhost:5000/FILEUPLOAD", {
        id: 2,
        name: form,
      })
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };


  var anas;
  const age = Boolean(anas)

  console.log(age,"age")
  console.log(!!anas,"age boolean 1")

  return (
    <div>
      <input type="file" accept="image/*" onChange={(e) => handleChange(e)} />

    <h2> 
    {state}
    </h2>
    
    <h2> 
    {dot}
    </h2>


<div style={{display:"flex",width:"100%"}}>
      <h1 style={{backgroundColor:"red"}}>anas</h1>
      <h1 style={{backgroundColor:"blue",marginLeft:"30%"}}>anas</h1>
      <h1 style={{backgroundColor:"yellow",marginLeft:"auto"}}>anas</h1>
</div>

      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </span>


      {
        obj?.name == "mohamed anas" ? <h1>mohamed anas</h1> : <h2>sample</h2>

      }
    </div>
  );
}

export default FileUploading;
