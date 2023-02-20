import Head from 'next/head';
import Header from '@/components/Header';

import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>BlackBoard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className='text-[rgb(251,247,245)] flex flex-col items-center pt-16'>
          <p className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            BlackBoard Development Studios</p>
          <div className='text-xl md:text-2xl lg:text-3xl py-10'>
            <p>Exceeding Expectations</p>
            <p>Without Exceeding your Budget.</p>
          </div>

          <button onClick={() => router.push("/contact")} className='bg-[#F7AB0A] py-3 px-10 rounded-md
           text-black font-bold text-lg'>Contact Us</button>
        </div>


      </main>
    </div>
  );
}
