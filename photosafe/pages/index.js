import Head from 'next/head'

export default function Home() {
  return (
    <div className={` h-full min-h-screen w-full grid grid-cols-[repeat(7,1fr)] grid-rows-[100px,25px,auto,100px] bg-[#242428]`}>
      <Head>
        <title>Create Next App</title>
        <meta name="PhotoSafe" content="PhotoSafe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
