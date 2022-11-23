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
                        <img src="assets/1.jpeg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="assets/2.jpeg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>

            </div>



        </div>
    )
}

export default Gallery;
