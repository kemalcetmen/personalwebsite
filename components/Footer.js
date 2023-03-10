import React from 'react'
import styles from '../styles/Footer.module.scss'
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.git }>
        <Link href="https://github.com/kemalcetmen">
          <AiFillGithub />
        </Link>
      </div>
      <div title="we are not going anywhere" className={ styles.fb }>
        <BsFacebook />
      </div>
      <div title="we are not going anywhere" className={ styles.yt }>
        <BsYoutube />
      </div>
      <div title="we are not going anywhere" className={ styles.tw }>
        <AiFillTwitterCircle />
      </div>
      <div title="we are not going anywhere" className={ styles.in }>
        <AiFillInstagram />
      </div>
    </footer>
  )
}

export default Footer
