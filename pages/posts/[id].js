import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Header from '../../components/header';
import Date from '../../components/date';
import Link from 'next/link';
import styles from '../../styles/layout.module.css';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

const name = 'Harshit Kumar';
export const siteTitle = 'Blog | Harshit Kumar';

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
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
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}

