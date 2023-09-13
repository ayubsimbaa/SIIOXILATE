import React, { useState, useRef } from 'react';
import { Button } from "@/src/components/ui/button";

export interface DocumentSelectorProps {
  onDocumentSelect: (fileName: string) => void;
}

const DocumentSelector: React.FC<DocumentSelectorProps> = ({ onDocumentSelect }) => {
  const [dragging, setDragging] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);

    const files = event.dataTransfer.files;
    if (files.length) {
      const fileName = files[0].name;
      setSelectedDocument(fileName);
      onDocumentSelect(fileName);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length) {
      const fileName = files[0].name;
      setSelectedDocument(fileName);
      onDocumentSelect(fileName);
    }
  };

  const handleBrowseButtonClick = () => {
    // Trigger the file input click event
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="col-span-1 rounded-lg">
      
      <div
        className={`rounded-lg w-full h-80 transition-shadow duration-300 ease-in-out ${
          dragging ? 'shadow-lg border-green-500' : 'shadow-md border-gray-300'
        } p-12 text-center`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p className="text-2xl text-gray-600 mb-2">
          Drag & Drop <br /> Files to Upload
        </p>
        <p className="text-xl text-gray-600 mb-2">or</p>
        {/* Hidden file input */}
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
          ref={fileInputRef}
        />
        {/* Browse button */}
        <label htmlFor="fileInput"></label>
        <Button className='text-white' onClick={handleBrowseButtonClick}>Browse Files</Button>
        {selectedDocument && (
          <div className="text-xl mt-4">
            📄 {selectedDocument} 
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentSelector;
