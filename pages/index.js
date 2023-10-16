import React from 'react'
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
export default function Home() {
  const { data: session, status } = useSession();

  // useEffect(() => {
  //   if (session) {
  //     console.log(session.user);
  //   }
  // }, [session]);
  return (
    <>
    
    <button onClick={() => signIn('google')}>Sign-In</button>
    {session && (
      <>
    <button onClick={() => signOut()}>Sign-out</button>
    <ol>
      <li>name: {session.user.name}</li>
      <li>email: {session.user.email}</li>
    </ol>
    <img src={session.user.image} alt="Profile" />
    {console.log(session.user)};
    </>
    )}
    </>
  )
}
