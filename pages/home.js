import Head from 'next/head';
import Link from 'next/link';
function HomePage() {
    return (
      <>
        <Head>
          <meta name='test' content='test2'></meta>
          <meta name='nochange' content='nochange'></meta>
        </Head>
        <div>Welcome to Next.js! <Link href='/about'><a>About</a></Link> </div>
        

      </>
    )
}
  
  export default HomePage