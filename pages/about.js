import Head from 'next/head';
import Link from 'next/link';
function About() {
    return (
      <>
        <Head>
          <meta name='test' content='test2'></meta>  
          <meta name='fly' content='fly2'></meta>
        </Head>
        <div>Welcome to Next.js! <Link href='/home'><a>home</a></Link>  </div>
        
      </>
    )
}
  
  export default About