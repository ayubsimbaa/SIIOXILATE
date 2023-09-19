import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import Explain from '@svg/explain.svg'
import Graph from '@svg/graph.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function PdfOutput() {
  const [activeButton, setActiveButton] = useState<'Explain' | 'Graph'>(
    'Explain'
  )
  return (
    <Tabs defaultValue='Explain' className='relative w-full'>
      <TabsList className='space-x-2'>
        <TabsTrigger
          value='Explain'
          className={`  ${
            activeButton === 'Explain' ? 'bg-blue-300' : 'bg-gray-400'
          } absolute top-5 left-14 rounded-t-md px-6  py-[6px] capitalize text-white hover:bg-blue-300/50`}
          onClick={() => setActiveButton('Explain')}
        >
          Explain
        </TabsTrigger>
        <TabsTrigger
          value='Graph'
          className={`
          ${activeButton === 'Graph' ? 'bg-blue-300' : 'bg-gray-400'}
          absolute top-5 left-44 rounded-t-md px-6  py-[6px] capitalize text-white hover:bg-blue-300/50 `}
          onClick={() => setActiveButton('Graph')}
        >
          Graph
        </TabsTrigger>
      </TabsList>
      <TabsContent value='Explain'>
        <ExpainDisplay />
      </TabsContent>
      <TabsContent value='Graph'>
        <GraphDisplay />
      </TabsContent>
    </Tabs>
  )
}

function ExpainDisplay() {
  return <Image alt='explain image' src={Explain} className='w-full' />
}

function GraphDisplay() {
  return <Image alt='graph' src={Graph} className='w-full' />
}
