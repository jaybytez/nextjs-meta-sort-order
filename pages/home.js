import Head from 'next/head';
import Link from 'next/link';
function HomePage() {
  return (
    <>
      <Head>
        <meta name='test' content='test2'></meta>
        <meta name='pageName' content='home'></meta>
      </Head>
      <div>Welcome to Next.js! <p> Click here -&gt; <Link href='/about'><a>About</a></Link>  </p></div>

    </>
  )
}

export default HomePage