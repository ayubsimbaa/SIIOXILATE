'use client'

import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <Image alt='image' src={'/png/competing.png'} width={1132} height={920} />

      {/* {competingProducts.map((item, index) => (
        <CompetingProduct {...item} key={index} />
      ))} */}
    </div>
  )
}
