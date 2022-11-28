import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';


const Gallery = () => {

    return (
        <div className={`h-full min-h-screen w-full grid grid-cols-[repeat(7,1fr)] grid-rows-[100px,25px,auto,100px] bg-[#242428]`}>
            <span> </span>
            <span> </span>

            <div className={`justify-self-center row-start-3 col-start-1 col-end-8`}>
                <Carousel>
                    <div>
                        <img src="/Nature.svg" />
                        <a href='https://gateway.btfs.io/btfs/QmYhNpA5bwc539yY4XGwve8gjTdm7uGMM16YzhTAkPEonq'>View on BTFS</a>
                    </div>
                    <div>
                        <img src="/Nature-2.svg" />
                        <a href='https://gateway.btfs.io/btfs/QmT4Q56tyHFYEPtFyEowNVMRvFE6xL1PN47qEhAjBLYtYU'>View on BTFS</a>
                    </div>
                    <div>
                        <img src="/Nature-3.svg" />
                        <a href='https://gateway.btfs.io/btfs/QmShc78RMxcTvfa3J3SLXw6fhnnkBh9g4LbU9KMYaRoHje'>View on BTFS</a>
                    </div>
                    <div>
                        <img src="/Nature-4.svg" />
                        <a href='https://gateway.btfs.io/btfs/QmXMYtWQqkmmwvycAbWKnUvKVK1gjWUkEVKpxvCrDTCq1c'>View on BTFS</a>
                    </div>
                </Carousel>

            </div>



        </div>
    )
}

export default Gallery;
