import {CircleSlash, CircleSlash2} from 'lucide-react';
import {ButtonLG} from '../../../Components/Buttons/Buttons';
import {LabelSM} from '../../../Components/Labels/Labels';
import {useContext} from 'react';
import {LanguageContext} from '../../../context/Language';

const content = {
  label: {
    en: 'system active',
    jp: 'システム稼働中',
  },
  title: {
    en: ['Automate emails today.', 'Let AI handle them tomorrow.'],
    jp: ['今日からメールを自動化', '明日からAIに任せましょう。'],
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
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-0.5 px-4 sm:px-6 lg:px-8">
      <LabelSM name={language === 'en' ? content.label.en : content.label.jp} />
      <div className="flex flex-col items-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-6 sm:mt-10 capitalize leading-tight font-google-sans-regular">
          {language === 'en'
            ? content.title.en.map ((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))
            : content.title.jp.map ((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
        </h1>
        <p className="text-center text-sm sm:text-base md:text-lg mt-4 sm:mt-6 text-gray-600 max-w-2xl leading-relaxed">
          {language === 'en' ? content.description.en : content.description.jp}
        </p>
      </div>
      <div className="mt-4 sm:mt-6">
        <ButtonLG
          name={language === 'en' ? content.button.en : content.button.jp}
        />
      </div>
    </div>
  );
};

export default Hero;
