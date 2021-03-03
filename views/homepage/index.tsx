import Head from 'next/head'
import Link from 'next/link'
import styles from './style.module.css'
import {
  useAuthUser,
  withAuthUser,
  AuthAction
} from 'next-firebase-auth'

// Components
import Button from 'components/Button'

const Homepage = () => {
  const AuthUser = useAuthUser();
  console.log(JSON.stringify(AuthUser));
  return (
    <div className={styles.container}>
      <Head>
        <title>Create DevHouse App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          AuthUser.id ?
        <div>
          <p>Your email is {AuthUser.email ? AuthUser.email : "unknown"}.</p>
        </div>
        : null
        }
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">DevHouse!</a>
        </h1>
        <Button />
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="https://nextjs.org/learn">
            <a className={styles.card}>
              <h3>Careers &rarr;</h3>
              <p>Fetch careers from greenhouse provider</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(Homepage);