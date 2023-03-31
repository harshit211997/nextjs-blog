import Head from 'next/head';
import Header from './header'
import commonStyles from '../styles/layout.module.css';
import styles from './home_page_layout.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Harshit Kumar';
export const siteTitle = 'Blog | Harshit Kumar';

export default function Layout({ children }) {
  return (
    <div className={commonStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div className={styles.hero}>
        <div className={utilStyles.alignItemsCenter + ' ' + utilStyles.row}>
          <div className={styles.col}>
            <h1>Hi. I am Harshit. An Engineer</h1>
            <p>I am also the author of this blog and an ex game developer</p>
            <a href="/about">About me</a>
          </div>
          <div className={styles.col}>
            <img src='/images/intro.svg' width='100%' height='auto'></img>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}