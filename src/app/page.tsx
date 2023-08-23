'use client'

import Topic from '@components/Other/Topic'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-[#ffffff] py-8'>
      <div className='space-y-2 pl-8'>
        <p className='text-3xl font-semibold'>Smart Insurance Topics!</p>
        <p className='text-lg font-light'>
          Find all your needs faster than ever
        </p>
      </div>
      <div className='flex justify-between pb-10 pl-8 pt-10'>
        <div className='flex flex-col gap-3'>
          <Topic imageUrl='/Contracts.svg' variant='normal' title='Contracts' />
          <Topic imageUrl='/Client.svg' variant='normal' title='Clients' />
          <Topic imageUrl='/Message.svg' variant='normal' title='Claims' />
          <Topic imageUrl='/Product.svg' variant='normal' title='Products' />
          <Topic
            imageUrl='/Competing.svg'
            variant='withall'
            title='Competing Products'
          />
        </div>
        <div>
          <Image
            alt='insurance image'
            src={'/insurance.png'}
            width={458}
            height={490}
            className='w-auto'
          />
        </div>
      </div>
    </div>
  )
}
