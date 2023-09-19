import { ScrollArea } from '@components/ui/scroll-area'
import threeDot from '@svg/threeDot.svg'
import Image from 'next/image'
import DocumentDetails, { DocumentHistoryProps } from './DocumentDetails'
import MainContent from './MainContent'
import PdfOutput from './PdfOutput'

export default function PdfViewer(props: DocumentHistoryProps) {
  return (
    <div className='bg-gray-500 flex flex-col'>
      {/* Header */}
      <div className='bg-gray-300 flex w-full justify-between'>
        <DocumentDetails
          description={props.description}
          title={props.title}
          usedAs='header'
        />
        <Image alt='' src={threeDot} className='mr-7' />
      </div>

      <ScrollArea className='h-[400px] w-[1200px]'>
        <MainContent />
      </ScrollArea>
      <PdfOutput />
    </div>
  )
}
