'use client'

import Insights from '@/src/components/Other/Insights'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import mockData from './mockData.json'

export default function Page() {
  const [data, setData] = useState<DataType>()

  useEffect(() => {
    // Simulating a delay as if it's a real request
    setTimeout(() => {
      setData(mockData)
    }, 1100)
  }, [])

  return (
    <div className='space-y-8'>
      <Image
        alt='competing products'
        src={'/png/top.png'}
        width={1072}
        height={634}
      />
      <div className='space-y-2 pl-8'>
        <p className='text-xl font-semibold'>New Insights!!</p>
      </div>

      {data &&
        data.insights.map((insight, index) => (
          // @ts-ignore
          <Insights {...insight} key={index} />
        ))}
    </div>
  )
}

export interface DataType {
  insights: {
    title: string
    subtitle: string
    body: {
      text: string
      highlightedInfo: {
        'holiday season'?: string
        'recent marketing campaign'?: string
      }
    }
  }[]
}
