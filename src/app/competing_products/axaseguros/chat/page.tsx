/**
 * The function returns a React component that renders an iframe with a specific URL, width, and
 * height.
 * @returns The code is returning a React component that renders an iframe element. The iframe is set
 * to display a webpage with the URL 'https://next-js-front.vercel.app/'. The iframe has a width of
 * '1220px' and a height of '634px'.
 */
import Iframe from 'react-iframe'

export default function Page() {
  return (
    <div>
      <div className='bg-grey my-5 p-4'>
        <Iframe
          url='https://next-js-front.vercel.app/'
          width='1220px'
          height='634px'
          id=''
          className=''
          display='block'
          position='relative'
        />
      </div>
          
    </div>
  )
}
