import Head from 'next/head';
import Header from '../components/header'
import commonStyles from '../styles/layout.module.css';
import styles from '../styles/home.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export const siteTitle = 'Blog | Harshit Kumar';

export default function Home({ allPostsData }) {
  return (
    <div className={commonStyles.container}>
      <Head>
        <title>{siteTitle}</title>
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div className={`${styles.hero} rounded mb-5`}>
        <div className={`row align-items-center justify-content-between`}>
          <div className='col-md-6'>
            <h1>Hi. I am Harshit. An Engineer</h1>
            <p>I am also the author of this blog and an ex game developer</p>
            <a className='btn btn-dark text-white px-5 btn-lg' href="/about">About me</a>
          </div>
          <div className='col-md-6 text-right pl-0 pl-lg-4'>
            <img src='/images/intro.svg' width='100%' height='auto' />
          </div>
          </div>
      </div>
      <section className='row'>
        <div className='col-sm-8'>
          <div className='row'>
            {allPostsData.map(({ id, date, title, image }) => (
              <div className='col-md-6 mb-5'>
              <div className='card' key={id}>
                <img src={image} />
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-sm-4'>
          
        </div>
      </section>
      
    </div>
  );
}
