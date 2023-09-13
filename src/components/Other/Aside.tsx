'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Aside() {
  const path = useSelectedLayoutSegment()
  const options: OptionType[] = [
    {
      image_url: '/svg/home.svg',
      title: 'Home',
    },
    {
      image_url: '/svg/attachment.svg',
      title: 'My Files',
      url: '/my_files',
      is_active: true,
    },
    {
      image_url: '/svg/topic.svg',
      title: 'My Topics',
    },
    {
      image_url: '/svg/mail.svg',
      title: 'My Emails',
    },
    {
      image_url: '/png/insights.png',
      title: 'Insights',
      url: '/new_insights',
      is_active: true,
    },
  ]

  const options2: OptionType[] = [
    {
      image_url: '/svg/password.svg',
      title: 'Forgot Password',
    },
    {
      image_url: '/svg/update.svg',
      title: 'Updates & FAQ',
    },
    {
      image_url: '/svg/logout.svg',
      title: 'Log out',
    },
  ]
  return (
    <div className='bg-gray-700 grid max-w-[425px] rounded-r-3xl bg-gray-dark p-5 pb-20'>
      <div className='grid'>
        <span className='my-10 p-2 text-3xl font-extrabold italic'>
          OXILATE
        </span>
        <span className='font-medium'>Welcome, Antonio Torrejon! 👋 </span>
      </div>

      <div className='mb-10 mt-2 grid gap-2 rounded-xl bg-gray-light/60 px-5'>
        {options.map((opt, index) => (
          <Option {...opt} key={index} />
        ))}
      </div>

      <div className='mb-10 mt-2 grid gap-2 rounded-xl px-5'>
        {options2.map((opt, index) => (
          <Option {...opt} key={index} />
        ))}
      </div>
    </div>
  )
}

interface OptionType {
  image_url: string
  title: string
  url?: string
  is_active?: boolean
}

function Option(props: OptionType) {
  return (
    <Link className={`flex items-center gap-5`} href={props.url ?? '/'}>
      <Image alt='' src={props.image_url} width={32} height={32} className='aspect-square'/>
      <span className='font-semibold'>{props.title}</span>
    </Link>
  )
}
