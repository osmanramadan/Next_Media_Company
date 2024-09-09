"use client";
import Link from 'next/link'
import styles from "./header.module.css";
import Navbar from './Navbar'
// import s from "@images/logo.jpg"

// import { cookies } from 'next/headers';
// import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from './LogoutButton'

const Header = () => {
//   const token = cookies().get("jwtToken")?.value || "";
//   const payload = verifyTokenForPage(token);

  return (
    <header className={styles.header}>

      <Link href="/" className={styles.logo}>
          <img src="/images/logos/logo.png"/>
      </Link>
             
      <Navbar  />
      <div className={styles.right}>

            {/* <Link className={styles.btn} href="/login">Login</Link>
            <Link className={styles.btn} href="/register">Register</Link> */}
      </div>
     
    </header>
  )
}

export default Header