import Head from 'next/head';
import Link from 'next/link';
function About() {
  return (
    <>
      <Head>
        <meta name='test' content='test2'></meta>
        <meta name='pageName' content='about'></meta>
      </Head>
      <div>Welcome to Next.js! <p> Click here -&gt; <Link href='/home'><a>Home</a></Link>  </p></div>

    </>
  )
}

export default About