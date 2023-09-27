'use client'
import mockData from '@/src/app/my_files/mockData.json'
import DocumentDetails from '@/src/components/Other/DocumentDetails'
import PdfOutput from '@/src/components/Other/PdfOutput'
import { ScrollArea } from '@/src/components/ui/scroll-area'
import { useTopSectionHook } from '@/src/hooks/useTopSectionHook'
import threeDot from '@svg/threeDot.svg'
import Image from 'next/image'

export default function Page({ params }: { params: { id: number } }) {
  useTopSectionHook(mockData[params.id - 1].documentName)
  return (
    <div>
      <div className='flex flex-col bg-white'>
        <div className='flex w-full justify-between bg-gray-dark'>
          <DocumentDetails
            title={mockData[params.id - 1].documentName}
            description={`id:${params.id}`}
            usedAs='header'
          />
          <Image alt='' src={threeDot} className='mr-7' />
        </div>

        <ScrollArea className='h-[300px] w-full pl-8 pt-7 text-black'>
          {mockData[params.id - 1].details}
        </ScrollArea>
        <PdfOutput />
      </div>
    </div>
  )
}
