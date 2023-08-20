"use client";
import Link from "next/link";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import "./style.css";

export default function Signup() {

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
                <button className="circle"><i className="fa-brands fa-facebook-f social-icon"></i></button>
              </div>
              <div><button className="circle"><i className="fa-brands fa-google social-icon"></i></button></div>
              <div><button className="circle"><i className="fa-brands fa-linkedin-in social-icon"></i></button></div>
            </div>
            <br className="mb-6" />
            <p className="text-center text-gray-600">or use your email account:</p>
            <br className="mb-6" />
            <div className="flex flex-row justify-center">
              <form>
                <div className="input">
                  <i className="fa-solid fa-user form-icon" />
                  <input id="name" type="text" placeholder="Name" name="name" required></input>
                </div>
                <div className="input">
                  <i className="fa-solid fa-envelope form-icon"></i>
                  <input id="email" type="text" placeholder="Email" name="email" required></input>
                </div>
                <div className="input">
                  <i className="fa-solid fa-lock form-icon"></i>
                  <input id="password" type="password" placeholder="Password" name="password" required></input>
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
