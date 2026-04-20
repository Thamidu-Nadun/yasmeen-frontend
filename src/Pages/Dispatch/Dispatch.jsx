import {FileText} from 'lucide-react';
import PDFICON from '/img/pdf.png';
import PdfRender from '../../Components/PdfRender/PdfRender';
import {useContext} from 'react';
import {LanguageContext} from '../../context/Language';

const paths = [
  {
    step: 1,
    name: {en: 'configure', jp: '構成する'},
    path: '/dispatch/configure',
    active: false,
  },
  {
    step: 2,
    name: {en: 'review', jp: 'レビュー'},
    path: '/dispatch/review',
    active: true,
  },
  {
    step: 3,
    name: {en: 'dispatch', jp: '急送'},
    path: '/dispatch/dispatch',
    active: false,
  },
];

const otherContent = {
  title: {
    en: 'Review Dispatch',
    jp: '配送を確認する',
  },
  description: {
    en: 'Please verify the email distribution details and generated document before final execution.',
    jp: '「最終実行の前に、メール配信の詳細と生成されたドキュメントを確認してください。」',
  },
  recipient: {
    en: 'Recipient',
    jp: '受信者',
  },
  subjectLine: {
    en: 'Subject Line',
    jp: '件名',
  },
  dipatchBtn: {
    en: 'Dispatch Email',
    jp: 'メールを送る',
  },
};

const Dispatch = () => {
  const {language} = useContext (LanguageContext);

  return (
    <div className="w-full pt-10 flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">

      {/* Stepper */}
      <div className="mt-2 w-full max-w-4xl">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">

          {paths.map (item => (
            <div key={item.step} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                    ${item.active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}
              >
                {item.step}
              </div>
              <span
                className={`text-sm font-medium capitalize ${item.step === 1 ? 'text-blue-600' : 'text-gray-500'}`}
              >
                {language === 'en' ? item.name.en : item.name.jp}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Layout */}
      <div className="bg-white rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          {/* Header */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {language === 'en'
                ? otherContent.title.en
                : otherContent.title.jp}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {language === 'en'
                ? otherContent.description.en
                : otherContent.description.jp}
            </p>
          </div>

          {/* Card */}
          <div className="bg-white border rounded-lg p-5 space-y-5 max-w-md">

            {/* Recipient */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                {language === 'en'
                  ? otherContent.recipient.en
                  : otherContent.recipient.jp}
              </label>
              <div className="flex items-center text-gray-800">
                <span className="text-blue-500 font-bold mr-1">@</span>
                jhon@x.com
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                {language === 'en'
                  ? otherContent.subjectLine.en
                  : otherContent.subjectLine.jp}
              </label>
              <div className="text-gray-800">
                Monthly Report - 2026
              </div>
            </div>

            {/* File */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 w-fit">
              <img src={PDFICON} alt="pdf icon" className="w-5 h-5" />
              <span className="text-sm font-semibold text-gray-800">
                Annual Report.pdf
              </span>
            </div>

            {/* Action */}
            <button className="w-full sm:w-auto mt-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500">
              {language === 'en'
                ? otherContent.dipatchBtn.en
                : otherContent.dipatchBtn.jp}
            </button>

          </div>
        </div>

        {/* RIGHT SIDE - PDF PREVIEW */}
        <div className="h-[70vh] lg:h-auto lg:sticky lg:top-10 border border-dashed rounded-lg p-3 overflow-hidden w-155">
          <div className="h-130 overflow-y-scroll overflow-x-hidden">
            <PdfRender url="https://raw.githubusercontent.com/Thamidu-Nadun/pdf_generation-yasmeen-travels/refs/heads/main/pdf/2026/04/06/nadunrz101@gmail.com.pdf" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dispatch;
