import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from './../components/Sidebar';
import Widgets from './../components/Widgets';
import Feed from './../components/Feed';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black min-h-screen flex max-w-[1300px] mx-auto'>
        <Sidebar />
        <Feed />
        <Widgets />

        {/* Modal */}
      </main>


    </div>
  )
}

export default Home
