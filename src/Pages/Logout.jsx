import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Logout(){
    let navigate = useNavigate()

    useEffect(()=>{
        let confirmm = confirm("are you sure to logout")
        if(confirmm){
            localStorage.removeItem("Loggedinuser")
            navigate("/signup")
        }
        else{
            navigate("/")
            
        }
    },[navigate])
    
    return(
        <>
         <h2>Loading...</h2>
        </>
    )
}
export default Logout