import Explain from '@svg/explain.svg'
import Graph from '@svg/graph.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function PdfOutput() {
  const [activeButton, setActiveButton] = useState<'Explain' | 'Graph'>(
    'Explain'
  )

  function ExplainButton() {
    return (
      <button
        className={`
        ${activeButton === 'Explain' ? 'bg-blue-300' : 'bg-gray-400'}
       hover:bg-blue-300/50 absolute -top-9 left-14 rounded-t-md  px-6 py-[6px] capitalize text-white`}
        onClick={() => setActiveButton('Explain')}
      >
        Explain
      </button>
    )
  }
  function GraphButton() {
    return (
      <button
        className={`
        ${activeButton === 'Graph' ? 'bg-blue-300' : 'bg-gray-400'}
        hover:bg-blue-300/50 absolute -top-9 left-44 rounded-t-md  px-6 py-[6px] capitalize text-white `}
        onClick={() => setActiveButton('Graph')}
      >
        Graph
      </button>
    )
  }

  return (
    <div className='bg-gray-400 h-64'>
      <div className='relative'>
        <ExplainButton />
        <GraphButton />
      </div>
      {activeButton === 'Explain' ? <ExpainDisplay /> : <GraphDisplay />}
    </div>
  )
}

function ExpainDisplay() {
  return <Image alt='explain image' src={Explain} />
}

function GraphDisplay() {
  return <Image alt='graph' src={Graph} />
}
