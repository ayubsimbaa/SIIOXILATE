'use client'

import DocumentSelector from '@/src/components/Other/DocumentSelector'
import ScrollList from '@/src/components/Other/ScrollList'
import { ScrollArea } from '@/src/components/ui/scroll-area'
import { useTopSectionHook } from '@/src/hooks/useTopSectionHook'
import React, { useState } from 'react'
import mockData from './mockData.json'

const MyPage: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  const handleDocumentSelect = (fileName: string) => {
    setSelectedDocument(fileName)
  }

  useTopSectionHook('Document insights')
  return (
    <div className='container mx-auto grid grid-cols-2 gap-7 p-2'>
      <div className='col-span-1 rounded-lg '>
        <h1 className='mb-4 text-2xl'>Document Selector</h1>
        <DocumentSelector onDocumentSelect={handleDocumentSelect} />
        {selectedDocument && <p></p>}
      </div>

      <div className='col-span-1'>
        <h1 className='mb-4 text-2xl  text-black'>Document List</h1>

        <ScrollArea className='h-[600px] w-[600px] rounded-lg bg-gray-light p-4 shadow-lg '>
          <ScrollList documents={mockData} />
        </ScrollArea>
      </div>
    </div>
  )
}

export default MyPage
