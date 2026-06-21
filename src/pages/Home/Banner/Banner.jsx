import {RefreshCcw} from 'lucide-react';
import React, {useContext} from 'react';
import {LanguageContext} from '../../../context/Language';

const bannerContent = {
  header: {
    title: {
      en: 'All jobs completed',
      jp: 'すべてのジョブが完了しました',
    },
    description: {
      en: 'Your automation engine is currently idle. Create a new email workflow to start processing tasks.',
      jp: 'あなたの自動化エンジンは現在アイドル状態です。新しいメールワークフローを作成してタスクの処理を開始してください。',
    },
  },
  cta: {
    en: 'Create New Email',
    jp: '新しいメールを作成',
  },
};
const Banner = () => {
  const {language} = useContext (LanguageContext);
  return (
    <div className="w-full px-4 sm:px-8 lg:px-20 py-8">
      <div className="flex h-60 py-4 flex-col items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-center shadow-sm">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <RefreshCcw className="h-8 w-8 text-blue-600" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          {language === 'en'
            ? bannerContent.header.title.en
            : bannerContent.header.title.jp}
        </h3>

        <p className="mt-2 max-w-md text-sm text-gray-500">
          {language === 'en'
            ? bannerContent.header.description.en
            : bannerContent.header.description.jp}
        </p>

        <button className="mt-6 rounded-lg border border-transparent px-5 py-2.5 text-sm font-medium bg-blue-50 text-blue-900/90 transition-all duration-200 hover:border-blue-700 hover:text-blue-700 hover:shadow-md">
          {language === 'en' ? bannerContent.cta.en : bannerContent.cta.jp}
        </button>
      </div>
    </div>
  );
};

export default Banner;
