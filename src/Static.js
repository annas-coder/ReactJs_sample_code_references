import React from 'react';

class Anas extends React.Component{
   

   
    constructor(props){
        super(props)
        this.state={
            name:{
                name:"anas",
                age:21,
                developer:"reactjs"
            }
        }
        // this.example = this.example.bind(this)
        this.fn=this.fn.call(this.state.name,"anas")
    }


    

    example=(...value)=> {
        // alert("working")
        console.log(typeof value)
        console.log(value)
        console.log("static methods")
    }



    fn(value){
        console.log(this.name,this.age,this.developer,value)
    }

    


    render(){
        console.log("render")
        return(
            <>
            <button onClick={()=>this.example(1,2,3)}>value</button>
                <h2>anas</h2>
            </>
        )
    }
}

export default Anas;