import React, { useRef, useState } from "react"
import { CredentialsPreview } from "./components/CredentialsPreview"
import { EducationPreview } from "./components/EducationPreview"
import { SkillsPreview } from "./components/SkillsPreview"
import jsPDF from 'jspdf';
import './Preview.scss'
import { ClausePreview } from "./components/ClausePreview";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from './reactPdf';

import { saveAs } from 'file-saver';
import ReactPDF, { pdf, PDFViewer } from '@react-pdf/renderer';

// Create styles
export const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        width: '100%',
        height: '100%',
        color: 'black'
    },
})

const CV = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <CredentialsPreview />

            xd
        </Page>
    </Document>
)

const generatePdfDocument = async () => {
    const blob = await pdf((
        <CV />
    )).toBlob();
    saveAs(blob, 'nazwa');
};

export const Preview = () => {

    return (
        <>
            <div>
                <CV />
                <PDFDownloadLink document={<CV />} fileName='d.pdf'>
                    s
                </PDFDownloadLink>
                <button onClick={() => generatePdfDocument()}>Pobierz</button>
            </div>
        </>
    )
}

// export const Preview = () => {
//     const reportTemplateRef = useRef(null);

//     const handleGeneratePdf = () => {
//         if (!reportTemplateRef.current) return

//         const doc = new jsPDF({
//             format: 'a4',
//             unit: 'px',
//         });

//         // Adding the fonts.
//         // doc.setFont('Inter-Regular', 'normal');
//         doc.setLanguage('pl');
//         doc.setFontSize(8)

//         doc.html(reportTemplateRef.current, {
//             async callback(doc) {
//                 await doc.save('document');
//             },
//         });
//     };

//     const [numPages, setNumPages] = useState<number | null>(null)
//     const [pageNumber, setPageNumber] = useState(1)

//     const onDocumentLoadSuccess = ({ numPages }: { numPages: number | null }) => {
//         setNumPages(numPages)
//     }

//     return (
//         <div className='preview'>
//             <button onClick={handleGeneratePdf}>PDF</button>
//             <div className='preview-document' ref={reportTemplateRef}>
//                 <CredentialsPreview />
//                 <SkillsPreview />
//                 <EducationPreview />
//                 <ClausePreview />
//             </div>
//         </div>
//     )
// }