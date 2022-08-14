import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getCookie } from "cookies-next";

import axiosInstant from '../services/axios';
import { useEffect } from 'react';
import { setCookie } from 'cookies-next';

export async function getServerSideProps({ req, res }: any) {
  console.log("-----", getCookie("jwt", { req, res }));


  // axiosInstant.defaults.headers["x-access-token"] = `Bearer ${getCookie("jwt")}`;
  axiosInstant.get('/settings')
  
  return {
    props: {}, // will be passed to the page component as props
  }
}

const Home: NextPage = () => {
  useEffect(() => {
    setCookie('jwt', 'sdfasdff')
  }, [])
  return (
    <div className={styles.container}>
     
    </div>
  )
}

export default Home
