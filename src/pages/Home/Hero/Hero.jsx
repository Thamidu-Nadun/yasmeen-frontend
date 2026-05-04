import {CircleSlash, CircleSlash2} from 'lucide-react';
import {ButtonLG} from '../../../Components/Buttons/Buttons';
import {LabelSM} from '../../../Components/Labels/Labels';
import {Fragment, useContext} from 'react';
import {LanguageContext} from '../../../context/Language';

const content = {
  label: {
    en: 'system active',
    jp: 'システム稼働中',
  },
  description: {
    en: 'Automatically generate and send PDFs from emails — and get ready for smart replies powered by AI.',
    jp: 'メールからPDFを自動生成して送信し、AIによるスマートな返信に備えましょう。',
  },
  button: {
    en: 'See How it works',
    jp: '使い方を見る',
  },
};
const Hero = () => {
  const {language} = useContext (LanguageContext);
  console.log (language);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center -translate-y-20 md:translate-y-0 gap-0.5 px-4 sm:px-6 lg:px-8">
      <div className="page-enter">
        <LabelSM
          name={language === 'en' ? content.label.en : content.label.jp}
        />
      </div>
      <div className="flex flex-col items-center max-w-4xl md:-translate-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-6 sm:mt-10 capitalize leading-tight font-google-sans-regular">
          {language === 'en'
            ? <Fragment>
                <div className="page-enter">
                  Automate Email
                </div>
                <div className="md:-translate-y-10 page-enter">
                  <span className="text-blue-500 italic">Crafted </span>by AI
                </div>
              </Fragment>
            : <Fragment>
                <div className="page-enter">
                  メールを自動化
                </div>
                <div className="page-enter mb-4 md:mb-16">
                  AIによって
                </div>
              </Fragment>}
        </h1>
        <p className="text-center text-sm sm:text-base md:text-lg mt-4 sm:mt-6 text-gray-600 max-w-2xl leading-relaxed md:-translate-y-14 page-enter">
          {language === 'en' ? content.description.en : content.description.jp}
        </p>
      </div>
      <div className="mt-6 sm:mt-8 md:-translate-y-20 page-enter">
        <ButtonLG
          onClick={() =>
            window.open (
              'https://github.com/Thamidu-Nadun/yasmeen-backend/blob/main/README.md',
              '_blank'
            )}
          name={language === 'en' ? content.button.en : content.button.jp}
        />
      </div>
    </div>
  );
};

export default Hero;
