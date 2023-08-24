import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  imageUrl: string
  title: string
  variant: 'withall' | 'normal'
}

function Topic2(props: Props) {
  return (
    <>
      {props.variant === 'normal' ? (
        <Popover>
          <PopoverTrigger>
            <div className='mx-auto flex w-full items-center gap-4 bg-gray-light px-14 py-4'>
              {/* Icon */}
              <div>
                <Image
                  alt='icon'
                  src={props.imageUrl}
                  width={52}
                  height={52}
                  className='h-auto w-auto'
                />
              </div>
              <div className='flex flex-col gap-3'>
                <p
                  className={`text-base font-semibold ${
                    props.variant === 'normal' ? 'text-black' : 'text-blue-dark'
                  }`}
                >
                  {props.title}
                </p>
              </div>
              {/* Text */}
            </div>
          </PopoverTrigger>
          <PopoverContent className='bg-[#ffffff] first-letter:capitalize'>
            no information available at this moment.
          </PopoverContent>
        </Popover>
      ) : (
        <Link href={'/competing_products'}>
          <div className='flex max-w-[544px] items-center gap-4 bg-gray-light px-14 py-4'>
            {/* Icon */}
            <div>
              <Image
                alt='icon'
                src={props.imageUrl}
                width={52}
                height={52}
                className='h-auto w-auto'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <p className={`text-base font-semibold text-blue-dark`}>
                {props.title}
              </p>
              {props.variant === 'withall' && (
                <div className='flex gap-14'>
                  <p className='max-w-[248px] text-sm font-semibold'>
                    Many Insurance companies compete to provide services .
                  </p>
                  <Image
                    alt='right up arrow'
                    src={'/arrow-up-right.svg'}
                    width={39}
                    height={39}
                    className='w-10 h-10'
                  />
                </div>
              )}
            </div>
            {/* Text */}
          </div>
        </Link>
      )}
    </>
  )
}

export default Topic2
