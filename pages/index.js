import Head from 'next/head'
import { useRouter } from "next/router"
import Image from "next/image"
import React from "react"


import { useState } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

// ui
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function Home() {
  // Gallery Carrousel 
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState();

  const router = useRouter();

  const photos = [
    {
      src: "/Nature.svg",
      width: 800,
      height: 600,
      title: "",
      description: <a className='hover:text-[orange] text-[white] text-sm'
        href='https://gateway.btfs.io/btfs/QmYhNpA5bwc539yY4XGwve8gjTdm7uGMM16YzhTAkPEonq'>View on BTFS</a>
    },
    {
      src: "/Nature-2.svg",
      width: 1600,
      height: 900,
      description: <a className='hover:text-[orange] text-[white] text-sm'
        href='https://gateway.btfs.io/btfs/QmT4Q56tyHFYEPtFyEowNVMRvFE6xL1PN47qEhAjBLYtYU'>View on BTFS</a>
    },
    {
      src: "/Nature-3.svg",
      width: 1600,
      height: 900,
      description: <a className='hover:text-[orange] text-[white] text-sm'
        href='https://gateway.btfs.io/btfs/QmShc78RMxcTvfa3J3SLXw6fhnnkBh9g4LbU9KMYaRoHje'>View on BTFS</a>
    },
    {
      src: "/Nature-4.svg",
      width: 1600,
      height: 900,
      description: <a className='hover:text-[orange] text-[white] text-sm'
        href='https://gateway.btfs.io/btfs/QmXMYtWQqkmmwvycAbWKnUvKVK1gjWUkEVKpxvCrDTCq1c'>View on BTFS</a>
    },
  ];


  return (
    <div className={`h-full min-h-screen w-full grid grid-cols-[repeat(7,1fr)] grid-rows-[100px,25px,auto,100px] bg-[#242428]`}>
      <Head>
        <title>PhotoSafe</title>
        <meta name="PhotoSafe" content="PhotoSafe" />
        <link rel="icon" href="/photosafe.svg" />
      </Head>

      <span className={`col-start-1 col-end-8 mx-4 grid grid-rows-1 grid-cols-1 `}>

        <span className={`col-start-1 row-start-1 justify-self-start self-center`} >

          <Image
            width={50}
            height={50}
            className={`inline`}
            alt={'error'}
            src={'/photosafe.svg'}
            onClick={() => {
              router.push('/')
            }}
          />
        </span>

        <span
          className="col-start-1 row-start-1 flex mx-auto mt-8 justify-self-center text-sm cursor-pointer ">
          <p onClick={() => {
            setOpen(true)
          }}
            className='my-auto mx-2 font-bold hover:text-[orange] text-[white] text-sm'
          >
            Gallery
          </p>
          <p onClick={() => {
            router.push('/')
          }}
            className='my-auto mx-2 font-bold hover:text-[orange] text-[white] text-sm'
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
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={photos}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        />
      </span>
    </div>
  )
}
