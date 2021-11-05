import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'
import styles from '../components/home.module.css'

import Laptop from '../components/svg/laptop.svg'
import Pillar from '../components/svg/pillar.svg'
import Workspace from '../components/svg/workspace.svg'
import Presentation from '../components/svg/presentation.svg'
import Billiards from '../components/svg/billiards.svg'
import Pottery from '../components/svg/pottery.svg'
import Bird from '../components/svg/bird.svg'
import RightArrow from '../components/svg/right-arrow.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bart's Website</title>
      </Head>
      <section className={styles.main}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Laptop className={styles.icon} />
            <span>software engineer since 2012</span>
          </li>
          <li className={styles.listItem}>
            <Pillar className={styles.icon} />
            <span>took courses in rhetoric and computer science at Northeastern</span>
          </li>
          <li className={styles.listItem}>
            <Workspace className={styles.icon} />
            <span>worked at <a href="https://upserve.com/">Upserve</a>, <a href="https://vimeo.com">Vimeo</a>, and <a href="https://splashthat.com">Splash</a></span>
          </li>
          <li className={styles.listItem}>
            <Presentation className={styles.icon} />
            <span>enjoys words, explaining things, being wrong</span>
          </li>
          <li className={styles.listItem}>
            <Billiards className={styles.icon} />
            <span>good with sandwiches, pool, saxophones, presentations</span>
          </li>
          <li className={styles.listItem}>
            <Pottery className={styles.icon} />
            <span>would like to be better at rock climbing, ceramics, dota 2</span>
          </li>
          <li className={styles.listItem}>
            <Bird className={styles.icon} />
            <span>took some great bird pictures from around the US this summer</span>
          </li>
        </ul>
        <Link href="/birds">
          <button
            className={styles.button}
            type="button"
          >
            <span className={styles.buttonText}>I'd like to see those bird pictures</span>
            <RightArrow className={styles.arrowIcon} />
            <Bird className={styles.birdIcon} />
          </button>
        </Link>
      </section>
    </>
  )
}
