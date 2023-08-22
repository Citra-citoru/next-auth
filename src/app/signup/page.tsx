"use client";
import { useState, useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import api from "@/config/base-url";

import "./style.css";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [submitButton, setSubmitButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e:any) => {
    try {
      e.preventDefault();
      console.log("test");
      const resp = await api.post("/api/v1/users", user);
      console.log("sign up success!", resp);
      router.push('/login');
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    var conditions = user.name.length > 0 && user.email.length > 0 && user.password.length > 0;
    if (conditions) {
      setSubmitButton(false);
    }
  }, [user]);

  return (
    <>
      <div className="flex flex-row justify-center align-items-center m-20">
        <div className="flex flex-col justify-center bg-green-500 basis-3/4/ py-10 px-6">
          <h1 className="text-2xl text-center text-white mb-6">Welcome Back!</h1>
          <p className="text-center text-white">To keep connected with us please </p>
          <p className="text-center text-white mb-6">login with personal info!</p>
          <br />
          <div className="flex flex-row justify-center">
            <button type="submit" className="border-2 rounded-full text-center px-5 py-2 w-40 text-sm border-white text-white">LOG IN</button>
          </div>
        </div>
        <div className="flex flex-row basis-1/4 flex flex-row p-6 justify-center bg-white">
          <div className="flex flex-col">
            <h1 className="text-2xl text-center text-green-500">Create Account</h1>
            <br className="mb-6" />
            <div className="flex flex-row justify-center">
              <div>
                <button className="circle tooltip">
                  <span className="tooltiptext text-xs">Create account with facebook</span>
                  <i className="fa-brands fa-facebook-f social-icon"></i>
                </button>
              </div>
              <div>
                <button className="circle tooltip">
                  <span className="tooltiptext text-xs">Create account with google</span>
                  <i className="fa-brands fa-google social-icon"></i>
                </button>
              </div>
              <div>
                <button className="circle tooltip">
                  <span className="tooltiptext text-xs">Create account with linkedin</span>
                  <i className="fa-brands fa-linkedin-in social-icon"></i>
                </button>
              </div>
            </div>
            <br className="mb-6" />
            <p className="text-center text-gray-600">or use your email account:</p>
            <br className="mb-6" />
            <div className="flex flex-row justify-center">
              <form onClick={onSubmit}>
                <div className="input">
                  <i className="fa-solid fa-user form-icon" />
                  <input 
                    id="name" 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    className="text-black" 
                    value={user.name} 
                    onChange={(e) => setUser({...user, name: e.target.value})}
                    required/> 
                </div>
                <div className="input">
                  <i className="fa-solid fa-envelope form-icon"></i>
                  <input 
                    id="email" 
                    type="text" 
                    placeholder="Email"
                     name="email" 
                     className="text-black" 
                     value={user.email} 
                     onChange={(e) => setUser({...user, email: e.target.value})}
                     required/>
                </div>
                <div className="input">
                  <i className="fa-solid fa-lock form-icon"></i>
                  <input 
                    id="password" 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    className="text-black" 
                    value={user.password} 
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    required/>
                </div>
                <div className="flex flex-row justify-center">
                  <button type="submit" className="bg-green-500 border-2 rounded-full  text-center px-5 py-2 w-40 text-sm  text-white text-center">SIGN UP</button>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
