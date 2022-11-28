import Head from 'next/head'
import { useRouter } from "next/router"
import Image from "next/image"
import React from "react"


import { useState, useEffect } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Home() {

  const [file, setFile] = useState();

  const router = useRouter();



  return (
    <div className={`h-full min-h-screen w-full grid grid-cols-[repeat(7,1fr)] grid-rows-[100px,25px,auto,100px] bg-[#242428]`}>
      <Head>
        <title>PhotoSafe</title>
        <meta name="PhotoSafe" content="PhotoSafe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span className={`col-start-1 col-end-8 mx-4 grid grid-rows-1 grid-cols-1 `}>

        <span className={`col-start-1 row-start-1 justify-self-start self-center`} >
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

          <Image
            width={50}
            height={50}
            className={`inline`}
            alt={'error'}
            src={'/logo.png'}
            onClick={() => {
              router.push('/')
            }}
          />
        </span>

        <span
          className="col-start-1 row-start-1 flex mx-auto mt-8 justify-self-center text-sm cursor-pointer ">
          <p onClick={() => {
            router.push('/gallery')
          }}
            className='my-auto mx-2 font-extralight hover:text-[orange] text-[white] text-sm'
          >
            Gallery
          </p>
          <p onClick={() => {
            router.push('/')
          }}
            className='my-auto mx-2 font-extralight hover:text-[orange] text-[white] text-sm'
          >
            Upload
          </p>
        </span>
        <span className={` flex self-center justify-self-end`}>
          <span className={`self-center`}>
            <ConnectButton />
          </span>
        </span>

      </span>
      <span className={`col-start-1 col-end-8 justify-self-center `}>
        <p className={`font-extralight text-[orange] text-3xl `}>Coming Soon...</p>
      </span>
      {/* <IpfsComponent /> */}
      <span className={`col-start-1 col-end-8 justify-self-center self-center mt-4`}>
      </span>
    </div>
  )
}
