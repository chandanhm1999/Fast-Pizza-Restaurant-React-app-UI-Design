import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import {ShoppingCartOutlined} from '@ant-design/icons';
import {PhoneOutlined} from '@ant-design/icons';
import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <div className={styles.phone12}><PhoneOutlined /></div>
        </div>
        <Link href="/contact/form" className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </Link>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" className={styles.listItem1}>Homepage</Link>
          <Link href="/product/123" className={styles.listItem2}>Products</Link>
          <Link href="/menu/345" className={styles.listItem3}>Menu</Link>
          <Image className={styles.logo124} src="/img/logo12.png" alt="" width={260} height={180} />
          <li className={styles.listItem}>Events</li>
          <Link href="https://cdevelops.blogspot.com/" className={styles.listItem5}>Blog</Link>
          <Link href="/contact/form" className={styles.listItem4}>Contact</Link>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/orders/1234" className={styles.cart}>
          <div className={styles.carting}><ShoppingCartOutlined /></div>
          <div className={styles.counter}>2</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
