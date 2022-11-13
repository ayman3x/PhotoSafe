import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';

const UploadImage = () => {
    const [URI, setURI] = useState('')
    const [file, setFile] = useState()
    const [image, setImage] = useState('')
    const hiddenFileInput = useRef(null);

    function onFileChange(e: any) {
        const file = e.target.files[0]
        if (file) {
            const image = URL.createObjectURL(file)
            setImage(image)
            let reader = new FileReader()
            reader.onload = function () {
                if (reader.result) {
                    setFile(reader.result)
                }
            }
            reader.readAsArrayBuffer(file)
        }
    }

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleUpload = async () => {

        // const res = await uploadFile(file);

        // setURI(`http://arweave.net/${res.data.id}`)
    }

    console.log(hiddenFileInput)
    console.log(file)

    return (
        <div className='col-start-1 col-end-8 flex flex-col justify-center items-center w-full'>

            <>
                <span className={`flex`}>
                    <Button onClick={handleClick} className='mb-4 mx-4'>
                        {image ? 'Change Selection' : 'Select Image'}
                    </Button>
                    <input
                        accept="image/png, image/gif, image/jpeg"
                        type="file"
                        ref={hiddenFileInput}
                        onChange={onFileChange}
                        style={{ display: 'none' }}
                    />
                    {image && <button className='bg-gray-200 rounded px-8 py-2 text-[black] hover:bg-gray-100 hover:text-[orange]' onClick={handleUpload}>Upload File</button>
                    }

                </span>


                {
                    image &&
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        width='100%'
                        py={40}
                        bgImage={`url('${image}')`}
                        bgPosition='center'
                        bgRepeat='no-repeat'
                        mb={2}
                    >
                    </Box>
                }
            </>


            {
                URI && <Text className='mt-4'>
                    <Text fontSize='xl'> Uploaded File:</Text> <a href={URI} target="_blank">{URI}</a>
                </Text>
            }
        </div>
    )
}

export default UploadImage
