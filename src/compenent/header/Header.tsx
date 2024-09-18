"use client";
import Link from 'next/link'
import styles from "./header.module.css";
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import LogoutButton from './LogoutButton'

const Header = () => {

  return (
    <header className={styles.header}>

      <Link href="/" className={styles.logo}>
          <img src="/images/logos/logo.PNG" alt="logo of company"/>
      </Link>
             
      <Navbar  />
      <div className={styles.right}>
      <Link className={styles.btn} href="/login">
        <FontAwesomeIcon icon={faSignInAlt} className="mr-2" height={15} width={15}/> Login
      </Link>
      <Link className={styles.btn} href="/register">
        <FontAwesomeIcon icon={faUserPlus} className="mr-2" height={15} width={15}/> Register
      </Link>
    </div>
     
    </header>
  )
}

export default Header