import React from 'react';
import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Заголовок</title>
      </Head>
      <video className={styles['video-bg']} autoPlay loop muted playsinline>
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </>
  );
}
