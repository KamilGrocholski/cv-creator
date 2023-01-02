import { useRef, useState } from "react"
import { CredentialsPreview } from "./components/CredentialsPreview"
import { EducationPreview } from "./components/EducationPreview"
import { SkillsPreview } from "./components/SkillsPreview"
import jsPDF from 'jspdf';
import './Preview.scss'

export const Preview = () => {
    const reportTemplateRef = useRef(null);

    const handleGeneratePdf = () => {
        if (!reportTemplateRef.current) return

        const doc = new jsPDF({
            format: 'a4',
            unit: 'px',
        });

        // Adding the fonts.
        // doc.setFont('Inter-Regular', 'normal');
        doc.setLanguage('pl');
        doc.setFontSize(8)

        doc.html(reportTemplateRef.current, {
            async callback(doc) {
                await doc.save('document');
            },
        });
    };

    const [numPages, setNumPages] = useState<number | null>(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number | null }) => {
        setNumPages(numPages)
    }

    return (
        <div className='preview'>
            <button onClick={handleGeneratePdf}>PDF</button>
            <div className='preview-document' ref={reportTemplateRef}>
                <CredentialsPreview />
                <SkillsPreview />
                <EducationPreview />
            </div>
        </div>
    )
}