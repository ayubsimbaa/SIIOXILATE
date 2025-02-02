'use client'
import contentData from '@/src/app/my_files/content.json';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs';
import { useState } from 'react';
import GraphDisplay from './GraphDisplay';
import BadgeList from './BadgeList';

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
          } absolute left-14 top-5 rounded-t-md px-6  py-[6px] capitalize text-white hover:bg-blue-300/50`}
          onClick={() => setActiveButton('Explain')}
        >
          Explain
        </TabsTrigger>
        <TabsTrigger
          value='Graph'
          className={`
          ${activeButton === 'Graph' ? 'bg-black' : 'bg-gray-400'}
          absolute left-44 top-5 rounded-t-md px-6  py-[6px] capitalize text-white hover:bg-blue-300/50 `}
          onClick={() => setActiveButton('Graph')}
        >
          Graph
        </TabsTrigger>
      </TabsList>
      <TabsContent value='Explain'>
        <ExplainDisplay />
      </TabsContent>
      <TabsContent value='Graph'>
        <GraphDisplay />
      </TabsContent>
    </Tabs>
  )
}


function ExplainDisplay() {
  const explainContent = contentData['Explain'] || '';

  return (
    <div className='bg-gray-dark w-full h-72'>
      <div className=' pl-3 pr-3 pt-7'>
      <BadgeList/>
      </div>
      <p className='w-full  pl-8 pt-7' dangerouslySetInnerHTML={{ __html: explainContent }} />
    </div>
  );
}


