"use client"
import React, { useEffect, useState } from 'react'
import  app  from '../../../firebaseConfig';

import { doc, getDoc, getFirestore } from 'firebase/firestore';
import  FileItemC  from './_components/FileItemC'
import Link from 'next/link';
import Image from 'next/image';

function FileView({params}) {
    const db = getFirestore(app);
    const [file,setFile]=useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        // console.log(params.fileId)
        params.field&&getFileInfo()

    },[])

    const getFileInfo=async()=>{
        const docRef = doc(db, "uploadedFile", params?.field);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFile(docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
          setIsLoading(false);
    }
  return (
    <div className='
    bg-white h-screen w-full flex justify-center
    items-center flex-col gap-4'>
        <Link href=''>
            <Image src='/logo.svg'
            alt='logo'
            width={150}
            height={100}/>
        </Link>
        {isLoading ? (
                <div>Loading...</div> // Loading indicator while data is being fetched
            ) : (
         <FileItemC file={file ? file : {}} />  
        )}
    </div>
  )
}

export default FileView