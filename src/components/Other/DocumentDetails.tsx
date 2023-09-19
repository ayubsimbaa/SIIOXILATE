import PdfWhiteIcon from '@svg/PDF-white.svg'
import PdfIcon from '@svg/PDF.svg'
import Image from 'next/image'

export interface DocumentHistoryProps {
  title: string
  description: string
  usedAs: 'header' | 'inactiveHistory' | 'activeHistory'
}

export default function DocumentDetails(props: DocumentHistoryProps) {
  return (
    <div
      className={`font-mont group flex max-w-lg items-start gap-4 rounded-lg py-8 pl-8 shadow-sm
      ${
        props.usedAs === 'inactiveHistory'
          ? 'bg-offwhite-100 hover:bg-gray-400'
          : ''
      }
      ${
        props.usedAs === 'activeHistory'
          ? 'bg-blue-500 hover:bg-purple-700'
          : ''
      }
      ${props.usedAs === 'header' ? 'max-w-full rounded-none shadow-none' : ''}
      `}
    >
      {props.usedAs === 'header' || props.usedAs === 'activeHistory' ? (
        <Image alt={props.title} src={PdfWhiteIcon} width={36} height={41} />
      ) : (
        <Image alt={props.title} src={PdfIcon} width={36} height={41} />
      )}

      <div className='flex max-w-[382px] flex-col gap-2'>
        <p
          className={`leading-4 
          ${
            props.usedAs === 'inactiveHistory'
              ? 'text-gray-400 text-xs group-hover:text-white'
              : ''
          }
          ${props.usedAs === 'activeHistory' ? 'text-xs text-white' : ''}
          ${props.usedAs === 'header' ? 'text-lg font-medium text-white' : ''}
          `}
        >
          {props.title}
        </p>
        <p
          className={` 
          ${
            props.usedAs === 'inactiveHistory'
              ? 'text-gray-300 text-[10px] leading-3 group-hover:text-white'
              : ''
          }
          ${
            props.usedAs === 'activeHistory'
              ? 'text-gray-200 text-[10px] leading-3'
              : ''
          }
          ${props.usedAs === 'header' ? 'text-gray-200 text-sm leading-4' : ''}
          `}
        >
          {props.description}
        </p>
      </div>
    </div>
  )
}
