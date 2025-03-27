'use client';

import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { HiHome, HiDotsHorizontal } from 'react-icons/hi';
import { signIn, signOut, useSession } from 'next-auth/react'
export default function Sidebar() {
  const { data: session } = useSession();
  console.log("session data", session);
  return (
    <div className='flex flex-col p-3 justify-between h-screen'>
      <div className='flex flex-col gap-4 '>
        <Link href='/'>
          <FaXTwitter className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 ' />
        </Link>
        <Link
          href='/'
          className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'
        >
          <HiHome className='w-7 h-7' />
          <span className='font-bold hidden xl:inline'>Home</span>
        </Link>
        
          <button
            className='bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden md:inline font-semibold cursor-pointer'
            onClick={session ? ()=>signOut() : ()=>signIn()}
          >
            {session ? "SignOut" : "SignIn"}
          </button>         
         
      </div>
      {session && (
        <div className='w-full text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200'>
          <img
            src={session.user.image}
            alt='user-img'
            className='h-10 w-10 rounded-full xl:mr-2'
          />
          <div className='hidden xl:inline'>
            <h4 className='font-bold'>{session.user.name}</h4>
            <p className='text-gray-500'>@{session.user.username}</p>
          </div>
          <HiDotsHorizontal className='h-5 xl:ml-8 hidden xl:inline' />
        </div>
      )}      
    </div>
  );
}