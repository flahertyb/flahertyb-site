import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,400;0,600;1,400&family=Sen&display=swap" rel="stylesheet" />

        <meta
          name="description"
          content="Bart Flaherty's Photos"
        />

        <meta name="og:title" content="Bart Flaherty" />
      </Head>
      <header className={styles.header}>
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={70}
              width={70}
              alt={"Bart Flaherty"}
            />
            <h1 className={utilStyles.heading2Xl}>
                Bart Flaherty
            </h1>
          </>
      </header>

      <main>{children}</main>

    </div>
  )
}
