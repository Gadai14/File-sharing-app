import { Download } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function FileItemC({file}) {
    const [password,setPassword]=useState('');

    // const [incorrectPassword, setIncorrectPassword] = useState(false);

    // const handleDownload = () => {
    //     if (file.password && file.password !== password) {
    //         // Incorrect password
    //         setIncorrectPassword(true);
    //         return;
    //     }

    //     // If password is correct or not required
    //     const link = document.createElement('a');
    //     link.href = file.fileUrl;
    //     link.download = file.fileName; // Set the downloaded file name
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

   
  return file&&(
    <div className='bg-transparent'>
    <div className='p-8 rounded-md border border-gray-300 border-solid flex flex-col items-center'>
     
      <div className='text-center flex-col gap-3 items-center flex'>
          <h2 className='text-[20px] text-gray-600'>
              <strong className='text-primary'>{file.userName} </strong>
              Shared the file with You</h2>
          <h2 className='text-[12px] text-gray-400'>Find File details below</h2>
          <Image src='/download-file.gif'
              width={150} height={150}
              alt='download'
              className='w-[150px] h-[150px]  p-5 ' />

          <h2 className='text-gray-500 text-[15px]'>
            {file.fileName} ⚡ {file.fileType}  ⚡ {(file.fileSize/1024/1024).toFixed(2)} MB</h2>
      </div>

     {file.password && file.password.length>3? <input type='password' 
      className='p-2 border rounded-md text-[14px] mt-5
      text-center  outline-blue-400' 
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='Enter password to access '/>:null}
      <br />
       <button href='' className='flex gap-2 p-2
       bg-primary text-white rounded-full w-full
       items-center hover:bg-blue-600
        text-[14px] mt-5 text-center  justify-center
        disabled:bg-gray-300' 
        onClick={()=>window.open(file?.fileUrl)}
        // disabled={file.password!==password}
        >

          <Download className='h-5 w-4' /> Download</button> 
         
     <h2 className='text-gray-400 text-[12px]'>*Term and Condition apply</h2>


  </div>
</div>
  )
}

export default FileItemC
