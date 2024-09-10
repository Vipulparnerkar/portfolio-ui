import React from 'react'
import "./Resume.css"
import { Document, Page,pdfjs, pdf } from "react-pdf";
import { Download } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Resume = () => {
  
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
  return (
    <div className="parent" id='resume'>
      <h1>Resume</h1>
      <div style={{ alignContent: "flex-end" }}>
        <IconButton
          style={{ color: "#fba802" }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1Lkre5spGhvzP3y4OtpsYRAca11Sl7Ww-/view?usp=drive_link",
              "_blank"
            )
          }
        >
          <Download fontSize="medium" />
        </IconButton>
        <Document file="resume.pdf" renderMode="canvas">
          <Page
            pageNumber={1}
            className="resume-page"
            renderTextLayer={false}
            renderAnnotationLayer={false}
            customTextRenderer={false}
            scale={0.6}
          />
        </Document>
      </div>
    </div>
  );
}

export default Resume