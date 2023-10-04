"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import api from "@/config/base-url"
import "./style.css"

type FormData = {
  email: string
  password: string
}

export default function Signup() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    try {
      api.post('/api/v1/login', data)
      .then(()=>router.push('/'));
    } catch (error: any) {
      toast.error(error.message)
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center align-items-center m-20">
      <div className="flex flex-row basis-1/4 flex flex-row p-6 justify-center bg-white">
          <div className="flex flex-col">
            <h1 className="text-2xl text-center text-green-500">
              Sign in to Next
            </h1>
            <br className="mb-6" />
            <div className="flex flex-row justify-center">
              <div>
                <button className="circle tooltip">
                  <span className="tooltiptext text-xs">
                    Create account with facebook
                  </span>
                  <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                </button>
              </div>
              <div>
                <button className="circle tooltip">
                  <span className="tooltiptext text-xs">
                    Create account with google
                  </span>
                  <FontAwesomeIcon icon={faGoogle} className="social-icon" />
                </button>
              </div>
              <div>
                <button className="circle tooltip">
                  <span className="tooltiptext text-xs">
                    Create account with linkedin
                  </span>
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="social-icon"
                  />
                </button>
              </div>
            </div>
            <br className="mb-6" />
            <p className="text-center text-gray-600">
              or use your email account:
            </p>
            <br className="mb-6" />
            <div className="flex flex-row justify-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                  <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
                  <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    className="text-black"
                    {...register("email", { required: true })} 
                    />
                </div>
                <div className="input">
                  <FontAwesomeIcon icon={faLock} className="form-icon" />
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="text-black"
                    {...register("password", { required: true })} 
                    />
                </div>
                <div className="text-center py-2">
                  <Link href="/forgot_password"><span className="text-black text-xs underline">Forgot your password?</span></Link>
                </div>
                <div className="flex flex-row justify-center">
                  <button
                    type="submit"
                    className="bg-green-500 border-2 rounded-full  text-center px-5 py-2 w-40 text-sm  text-white text-center"
                  >
                   LOG IN
                  </button>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-green-500 py-10 px-6">
          <h1 className="text-2xl text-center text-white mb-6">
            Hello Friend!
          </h1>
          <p className="text-center text-white">
            Enter your personal details{" "}
          </p>
          <p className="text-center text-white mb-6">
            and start journey with us
          </p>
          <br />
          <div className="flex flex-row justify-center">
            <Link type="button" href="/signup" className="border-2 rounded-full text-center px-5 py-2 w-40 text-sm border-white text-white">SIGN UP</Link>
          </div>
        </div>
      </div>
      <div className="text-black text-xs footer">
        <a
          target="_blank"
          href="https://dribbble.com/shots/5311359-Diprella-Login"
        >
          Design by selecto
        </a>
      </div>
    </>
  )
}
