"use client";
import { signIn, signOut, useSession } from "next-auth/react"
import { HiDotsHorizontal } from "react-icons/hi";

export default function Auth(){
    const { data: session } = useSession();
    return<button
                className='bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md font-semibold cursor-pointer'
                onClick={session ? ()=>signOut() : ()=>signIn()}
              >
                {session ? "SignOut" : "SignIn"}
            </button>
         
}