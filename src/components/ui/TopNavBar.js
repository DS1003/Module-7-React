import React, { useState } from 'react';
import { Home, FileText, Upload, Menu, X } from 'lucide-react';

// NavigationBar Component
export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: FileText, label: 'Files', path: '/files' },
    { icon: Upload, label: 'Upload', path: '/upload' }
  ];

  return (
    <div className="bg-gray-800 text-white w-64 h-full p-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="mb-4 p-2 bg-gray-700 rounded hover:bg-gray-600"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav>
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
          >
            <item.icon className="mr-3" size={20} />
            {isOpen && <span>{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};

// TopBar Component
export const TopBar = ({ title }) => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title || 'Dashboard'}</h1>
      <div className="flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-3 py-2 border rounded-md"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    </div>
  );
};

// FileCard Component
export const FileCard = ({ fileName, fileSize, fileType }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{fileName}</h3>
          <p className="text-sm text-gray-500">
            {fileSize} | {fileType}
          </p>
        </div>
        <button className="text-blue-500 hover:text-blue-700">
          <FileText size={24} />
        </button>
      </div>
    </div>
  );
};

// FileUploadModal Component
export const FileUploadModal = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement file upload logic here
      console.log('Uploading file:', selectedFile);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">Upload File</h2>
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="mb-4 w-full"
        />
        <div className="flex justify-between">
          <button 
            onClick={onClose} 
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button 
            onClick={handleUpload} 
            disabled={!selectedFile}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;