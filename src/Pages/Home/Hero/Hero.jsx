import {CircleSlash, CircleSlash2} from 'lucide-react';
import {ButtonLG} from '../../../Components/Buttons/Buttons';
import {LabelSM} from '../../../Components/Labels/Labels';

const content = {
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
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6 relative -translate-y-10">
      <LabelSM name="system active" />
      <div className="relative -translate-y-10">
        <h1 className="text-6xl font-bold text-center mt-10 capitalize w-250 font-google-sans-regular">
          {content.title.en.map ((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <p className="text-center mt-4 text-gray-600">
          {content.description.en}
        </p>
      </div>
      <div className="relative -translate-y-10">
        <ButtonLG name="See How it works" />
      </div>
    </div>
  );
};

export default Hero;
