import Link from 'next/link'
export default function Home() {
  return (
    <>
      <h1>Home Page!</h1>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </>
  )
}
