import * as React from 'react';
import { tw } from 'twind';
import {
  formInput,
} from '@twind/forms';

interface IFileUpload {
  onFileChange: (file: File) => void;
}

const FileUpload = ({ onFileChange }: IFileUpload) => {
  const fileInput = React.useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = React.useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      onFileChange(selectedFile);
    }
  };

  return (
    <div className={tw`flex justify-between gap-1.5`}>
      <div className={tw`flex-1`}>
        <label htmlFor="email" className={tw`sr-only`}>File</label>
        <input
          type="text"
          name="email"
          id="email"
          className={tw`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${formInput}`}
          placeholder="Select file..."
          disabled
          value={fileName}
        />
        <input type="file" ref={fileInput} onChange={handleFileChange} className={tw`hidden`} />
      </div>
      <button
        type="button"
        className={tw`px-3 py-2 border(& gray-300) shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:(outline-none ring-2 ring-offset-2 ring-indigo-500)`}
        onClick={() => fileInput.current?.click()}
      >
        Select...
      </button>
    </div>
  )
};

export default FileUpload;
