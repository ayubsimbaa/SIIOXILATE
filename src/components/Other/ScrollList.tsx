import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface DocumentCardProps {
  documentName: string
  id: number
}

interface DocumentData {
  id: number
  documentName: string
}

interface ScrollListProps {
  documents: DocumentData[]
}

const DocumentCard: React.FC<DocumentCardProps> = ({ documentName, id }) => {
  const router = useRouter()
  /**
   * The function onClickDocument redirects the user to the '/document' route when a document name is
   * clicked.
   * @param {string} documentName - The parameter `documentName` is a string that represents the name of
   * the document that is being clicked.
   */

  function onClickDocument(documentName: string) {
    router.push(`/document/${id}`)
  }

  return (
    <div
      className='mb-2 flex cursor-pointer items-center overflow-hidden rounded-lg border border-gray-light bg-white p-4 hover:bg-blue-dark hover:text-white'
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
        displayDocuments.map(doc => <DocumentCard {...doc} key={doc.id} />)
      )}
    </div>
  )
}

export default ScrollList
