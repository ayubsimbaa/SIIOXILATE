import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface DocumentCardProps {
  documentName: string
}

interface DocumentData {
  id: number
  documentName: string
}

interface ScrollListProps {
  documents: DocumentData[]
}

const DocumentCard: React.FC<DocumentCardProps> = ({ documentName }) => {
  const router = useRouter()
  /**
   * The function onClickDocument redirects the user to the '/document' route when a document name is
   * clicked.
   * @param {string} documentName - The parameter `documentName` is a string that represents the name of
   * the document that is being clicked.
   */

  function onClickDocument(documentName: string) {
    router.push('/document')
  }

  return (
    <div
      className='mb-2 flex items-center overflow-hidden rounded-lg border border-gray-light bg-white p-4 cursor-pointer hover:bg-blue-dark'
      onClick={() => onClickDocument(documentName)}
    >
      <div className='text-xl'>📄</div>
      <div className='ml-4'>{documentName}</div>
    </div>
  )
}

const ScrollList: React.FC<ScrollListProps> = ({ documents }) => {
  const [loading, setLoading] = useState(true)
  const [displayDocuments, setDisplayDocuments] = useState<DocumentData[]>([])

  useEffect(() => {
    setLoading(true)
    setLoading(false)
    setDisplayDocuments(documents)
  }, [documents])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        displayDocuments.map(doc => (
          <DocumentCard key={doc.id} documentName={doc.documentName} />
        ))
      )}
    </div>
  )
}

export default ScrollList
