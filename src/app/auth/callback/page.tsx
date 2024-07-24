"use client"

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useQuery } from '@tanstack/react-query';
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { checkAuthStatus } from './actions';


const Page = () => {

  const router = useRouter();
  const { user } = useKindeBrowserClient();
  const { data, isLoading }  = useQuery({
    queryKey: ["checkAuthStatus"],
    queryFn: async () => await checkAuthStatus(),
  })

  if(data?.success) router.push("/")

  return (
    <div className='mt-20 w-full flex justify-center'>
        <div className='flex flex-col items-center gap-2'>
            <Loader className='w-16 h-16 animate-spin text-primary'/>
            <h3 className='text-xl font-bold'>Redirecting ...</h3>
            <p>Please Wait ...</p>
        </div>
    </div>
  )
}

export default Page