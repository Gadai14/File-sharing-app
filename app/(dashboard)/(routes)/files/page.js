"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from './../../../../firebaseConfig';
import TotalFileCard from './_components/TotalFileCard';
import FileList from './_components/FileList';
import Link from 'next/link';

function Files() {
  const db = getFirestore(app);
  const { user } = useUser();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    user && getAllUserFiles();
  }, [user]);

  const getAllUserFiles = async () => {
    const q = query(collection(db, "uploadedFile"), where("userEmail", "==", user.primaryEmailAddress.emailAddress));
    const querySnapshot = await getDocs(q);
    const files = [];
    querySnapshot.forEach((doc) => {
      files.push(doc.data());
    });
    setFileList(files);
    setLoading(false); // Set loading to false once files are fetched
  }

  return (
    <div className='p-5'>
      <h2 className='text-[20px]'>My Files</h2>
      {loading ? ( // Show loading indicator while files are being fetched
        <p>Loading...</p>
      ) : (
        <>
          {fileList.length === 0 ? ( // Check if fileList is empty
            <>
              <h2 className='mb-6'> You dont have any File</h2>
              <Link href='/upload' className='p-2 text-white bg-primary rounded-md mt-7'>
                Upload Now
              </Link>
            </>
          ) : (
            <>
              <TotalFileCard totalFile={fileList?.length} />
              <FileList fileList={fileList} />
              {/* <Link href='/upload' className='p-2 text-white bg-primary rounded-md mt-7'>
                Upload Now
              </Link> */}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Files;
