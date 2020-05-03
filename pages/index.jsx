import React from 'react';
import Head from 'next/head';
import YouTube from '../components/youtube';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Заголовок</title>
      </Head>
      <YouTube className={styles.youtube_background} videoId="KR1PqUqJMsQ" />
    </>
  );
}
