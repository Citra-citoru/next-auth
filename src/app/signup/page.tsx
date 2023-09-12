'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import api from '@/config/base-url'
import './style.css'

export default function Signup() {
  const router = useRouter()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [submitButton, setSubmitButton] = useState(true)
  const onSubmit = async (e: any) => {
    try {
      e.preventDefault()
      await api.post('/api/v1/users', user)
      router.push('/login')
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setSubmitButton(false)
    }
  }

  useEffect(() => {
    var conditions =
      user.name.length > 0 && user.email.length > 0 && user.password.length > 0
    if (conditions) {
      setSubmitButton(true)
    }
  }, [user])

  return (
    <>
      <div className="flex flex-row justify-center align-items-center m-20">
        <div className="flex flex-col justify-center bg-green-500 basis-3/4/ py-10 px-6">
          <h1 className="text-2xl text-center text-white mb-6">
            Welcome Back!
          </h1>
          <p className="text-center text-white">
            To keep connected with us please{' '}
          </p>
          <p className="text-center text-white mb-6">
            login with personal info!
          </p>
          <br />
          <div className="flex flex-row justify-center">
            <button className="border-2 rounded-full text-center px-5 py-2 w-40 text-sm border-white text-white">
              <Link href="/login">LOG IN</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-row basis-1/4 flex flex-row p-6 justify-center bg-white">
          <div className="flex flex-col">
            <h1 className="text-2xl text-center text-green-500">
              Create Account
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
              <form onClick={onSubmit}>
                <div className="input">
                  <FontAwesomeIcon icon={faUser} className="form-icon" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="text-black"
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    required
                  />
                </div>
                <div className="input">
                  <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
                  <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="text-black"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="input">
                  <FontAwesomeIcon icon={faLock} className="form-icon" />
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="text-black"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex flex-row justify-center">
                  <button
                    type="submit"
                    disabled={submitButton}
                    className="bg-green-500 border-2 rounded-full  text-center px-5 py-2 w-40 text-sm  text-white text-center"
                  >
                    SIGN UP
                  </button>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black footer">
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
