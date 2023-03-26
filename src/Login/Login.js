import React,{useState,useEffect} from "react";
import axios from "axios"

function Login(){

    const [getUser,set_user] = useState("")
    
    const [user,setUser]=useState({
        userName:"",
        password:""
    })

    useEffect(()=>{
        user_authenticate()
    },[])

    const user_authenticate= async()=>{
        await axios.get("http://localhost:5000/getAll")
        .then((response)=>set_user(response.data.response))
        .catch(err=>console.log(err))
    }

    const user_Validate = () =>{

        
        // let login={ 
        //     userName:"MOHAMED ANNAS",
        //     password:"An0406@s"
        // }

        axios.post("http://localhost:5000/login?userName=MOHAMED ANNAS&password=An0406@s")
        // axios.post("http://localhost:5000/login"+login) 
        .then((res)=>{
            if(res){
                // alert("working fyn")
                console.log(res.data)
            }
        })
        .catch(err=>console.log(err))

    }

    return(
        <div>
            <h1>LOGIN</h1>
            <input type="text" name="userName" value={user.userName} onChange={(event)=>setUser({...user,userName:event.target.value})}/>
            <input type="text" name="password" value={user.password} onChange={(event)=>setUser({...user,password:event.target.value})}/>
            <input type="button" value="clickhere" onClick={user_Validate}/>
        </div>
    )
    
}

export default Login;