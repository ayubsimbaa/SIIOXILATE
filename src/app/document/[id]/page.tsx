'use client'
import mockData from '@/src/app/my_files/mockData.json'
import DocumentDetails from '@/src/components/Other/DocumentDetails'
import PdfOutput from '@/src/components/Other/PdfOutput'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import threeDot from '@svg/threeDot.svg'
import Image from 'next/image'

export default function Page({ params }: { params: { id: number } }) {
  return (
    <div>
      <div className='flex flex-col bg-gray-500'>
        <div className='flex w-full justify-between bg-gray-300'>
          <DocumentDetails
            title={mockData[params.id - 1].documentName}
            description={`id:${params.id}`}
            usedAs='header'
          />
          <Image alt='' src={threeDot} className='mr-7' />
        </div>

        <ScrollArea className='h-[300px] w-[350px] pl-8 pt-7 text-white'>
          {mockData[params.id - 1].details}
        </ScrollArea>
        <PdfOutput />
      </div>
    </div>
  )
}
