import { ScrollArea } from '@components/ui/scroll-area'
import threeDot from '@svg/threeDot.svg'
import Image from 'next/image'
import DocumentDetails, { DocumentHistoryProps } from './DocumentDetails'
import MainContent from './MainContent'
import PdfOutput from './PdfOutput'

export default function PdfViewer(props: DocumentHistoryProps) {
  return (
    <div className='flex flex-col bg-gray-500'>
      {/* Header */}
      <div className='flex w-full justify-between bg-gray-300'>
        <DocumentDetails
          description={props.description}
          title={props.title}
          usedAs='header'
        />
        <Image alt='' src={threeDot} className='mr-7' />
      </div>

      <ScrollArea className='h-[300px] w-full'>
        <MainContent />
      </ScrollArea>
      <PdfOutput />
    </div>
  )
}
