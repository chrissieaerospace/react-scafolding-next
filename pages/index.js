import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {
  AuthHocProps,
  AuthenticationHOC,
  useAuthenticationHOC,
} from "../app/Shared/hoc/Authentication";
import { toPromise } from "react-boilerplate-redux-saga-hoc/utils";
function Home(props) {
  // console.log(AuthHocProps);
  console.log(props);
  const {
    actions: { JSON_PLACEHOLDER_POSTS_API_CALL },
  } = props.Authentication_hoc;
  useEffect(() => {
    console.log("JSON_PLACEHOLDER_POSTS_API_CALL");
    JSON_PLACEHOLDER_POSTS_API_CALL();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/test">Next.js!</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

Home.getInitialProps = async (props) => {
  const store = props.ctx ? props.ctx.store : props.store;
  const isServer = props.ctx ? props.ctx.isServer : props.isServer;
  const {
    actions: { JSON_PLACEHOLDER_POSTS_API_CALL },
  } = props.Authentication_hoc;
  let response;
  const { status, data } = await toPromise(JSON_PLACEHOLDER_POSTS_API_CALL);

  JSON_PLACEHOLDER_POSTS_API_CALL({
    callback: {
      successCallback({ data: { data } = {} }) {
        if (isServer) store.sagaTask.end(data);
      },
    },
  });

  if (isServer) response = await store.sagaTask.toPromise();

  /* Please don't send key 'res' in return object it will create a circular dependency */
  return { store, response, jsonResponse: { status, data }, isServer };
};

export default AuthenticationHOC(Home);