import React, { useEffect, useState } from 'react';

interface DocumentCardProps {
  documentName: string;
}

interface DocumentData {
  id: number;
  documentName: string;
}

interface ScrollListProps {
  documents: DocumentData[];
}

const DocumentCard: React.FC<DocumentCardProps> = ({ documentName }) => {
  return (
    <div className="flex items-center border border-gray-light p-4 mb-2 bg-white rounded-lg overflow-hidden">
      <div className="text-xl">
        📄
      </div>
      <div className="ml-4">
        {documentName}
      </div>
    </div>
  );
};

const ScrollList: React.FC<ScrollListProps> = ({ documents }) => {
  const [loading, setLoading] = useState(true);
  const [displayDocuments, setDisplayDocuments] = useState<DocumentData[]>([]);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
    setDisplayDocuments(documents);
  }, [documents]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        displayDocuments.map((doc) => (
          <DocumentCard key={doc.id} documentName={doc.documentName} />
        ))
      )}
    </div>
  );
};

export default ScrollList;
