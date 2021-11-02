import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import LoginNavigation from './LoginNavigation';
import GLogin from './GLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import test from './test.css';

// import Service from '../../Service';
function Login(){
   // for sucess msg
   const diffToast=() =>{
    toast.success("Login successful ",{position:"top-right"

  });
  }


        const[email,setEmail] = useState("")
        const[password,setPassword] = useState("")

        const history = useHistory();
        useEffect(() => {
            if (localStorage.getItem('user-info')){
                history.push("/adminHome")
            }
        },[])
        async function login(){
            console.warn(email,password)
            let item = {email,password};
            let result = await fetch("http://127.0.0.1:8000/api/admin/login/",{
                method: 'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":'application/json'
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            localStorage.setItem("user-info",JSON.stringify(result))
            // alert(result.email)
            history.push("/adminHome")
        }
        return(
            <>
            <LoginNavigation/>
            
            <section class="vh-80 my-5" >
        <div class="container h-80">
          <div class="row d-flex justify-content-center align-items-center h-80">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black pr" style={{borderRadius: "25px;"}}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" >Sign In</p>  
                      <form onSubmit={login}>
                     <input type="text" placeholder="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" /> <br />
                     <input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} className="form-control" /> <br />
                     <button class="button"  onClick={diffToast} >LOGIN</button>
                     <br/>
                     <GLogin />
                     </form>
                    </div>
                    <ToastContainer />

                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" /> */}
                      {/* <img src="https://mdbootstrap.com/img/illustrations/undraw_basketball_agx4.png" class="img-fluid" alt="smaple image" /> */}
          <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" class="img-fluid" alt="smaple image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      </>
        )

}
export default Login














