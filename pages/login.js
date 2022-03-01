import React, { useEffect } from 'react';
import tw from "tailwind-styled-components";
import { useRouter } from 'next/router'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Login = () => {
    const router = useRouter()

    useEffect(() =>{
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])

  return (
    <Wrapper>
        <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' />
        <TopSection>
        <Title>Log in to access your account</Title>
        <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png'/>
      <SignInButton
         onClick={() => signInWithPopup(auth, provider)}
      >Sign in with Google</SignInButton>
      </TopSection>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
 flex flex-col bg-gray-200 h-screen w-screen p-4  
`
const UberLogo = tw.img`
h-8 object-contain self-start mx-auto
`
const TopSection = tw.div`
flex  flex-col flex-grow mx-auto
`
const Title  = tw.div`
text-2xl pt-4 text-gray-500
`
const HeadImage = tw.img`
object-contain h-48 w-96
`
const SignInButton = tw.button`
  bg-black text-white text-center py-4 mt-8 self-center w-4/6 rounded-md
`


