import {useState} from 'react';
import { Document, pdfjs, Page } from 'react-pdf';
import worker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(worker, import.meta.url).toString();
  
const PdfRender = ({url}) => {
  const [numPages, setNumPages] = useState (null);

  const onLoadSuccess = ({numPages}) => {
    setNumPages (numPages);
  };

  if (!url) {
    return (
      <div className="text-center text-gray-500">No PDF URL provided.</div>
    );
  }

  return (
    <div>
      <Document
        file={url}
        onLoadSuccess={onLoadSuccess}
        onLoadError={err => console.log (err)}
      >
        {Array.from (new Array (numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} width={600} />
        ))}
      </Document>
    </div>
  );
};

export default PdfRender;
