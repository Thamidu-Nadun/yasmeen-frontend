import {
  File,
  PanelLeftDashed,
  ShieldCheck,
  Stars,
  TerminalSquare,
} from 'lucide-react';
import React, {useContext} from 'react';
import {LanguageContext} from '../../../context/Language';

const featuresData = {
  header: {
    title: {
      en: 'Powerful Automation Suite',
      jp: '強力な自動化スイート',
    },
    description: {
      en: 'Everything you need to manage clients at scale with AI-powered automation tools.',
      jp: 'AIを活用した自動化ツールで、スケールでクライアントを管理するために必要なすべて。',
    },
  },
  card1: {
    title: {
      en: 'PDF Automation',
      jp: 'PDF自動化',
    },
    description: {
      en: 'Convert emails into professional PDFs instantly with AI-powered data extraction and customizable templates.',
      jp: 'AIを活用したデータ抽出とカスタマイズ可能なテンプレートで、メールをプロフェッショナルなPDFに瞬時に変換します。',
    },
  },
  card2: {
    title: {
      en: 'AI Translation',
      jp: 'AI翻訳',
    },
    description: {
      en: 'Translate emails across languages while preserving context, formatting, and meaning automatically.',
      jp: 'コンテキスト、フォーマット、意味を自動的に保持しながら、メールを複数の言語に翻訳します。',
    },
  },
  card3: {
    title: {
      en: 'Live Logs',
      jp: 'ライブログ',
    },
    description: {
      en: 'Track every automation step in real time with detailed logs and execution monitoring.',
      jp: '詳細なログと実行モニタリングで、すべての自動化ステップをリアルタイムで追跡します。',
    },
  },
  card4: {
    title: {
      en: 'Enterprise Infratructure',
      jp: 'エンタープライズインフラ',
    },
    description: {
      en: 'Built for scale with secure, reliable, and highly available cloud infrastructure.',
      jp: '安全で信頼性が高く、可用性の高いクラウドインフラストラクチャでスケールに対応しています。',
    },
  },
};

const Features = () => {
  const {language} = useContext (LanguageContext);
  return (
    <div className="w-full py-16 px-4 sm:px-8 lg:px-20 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {language === 'en'
            ? featuresData.header.title.en
            : featuresData.header.title.jp}
        </h2>
        <p className="text-lg text-gray-600">
          {language === 'en'
            ? featuresData.header.description.en
            : featuresData.header.description.jp}
        </p>
      </div>

      {/* Features */}
      {/* Row - 1 */}
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-5 gap-6">
        {/* row -1 card 1 */}
        <div className="lg:col-span-3 group h-70">
          <div className="h-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-200 hover:shadow-gray-300 transition-shadow duration-300">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
                  <File className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {language === 'en'
                    ? featuresData.card1.title.en
                    : featuresData.card1.title.jp}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {language === 'en'
                    ? featuresData.card1.description.en
                    : featuresData.card1.description.jp}
                </p>
              </div>

              {/* Image */}
              <div className="overflow-hidden hidden md:block bg-red-100 w-full h-full">
                <img
                  src="/img/humaans-2.png"
                  alt="PDF Automation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
        {/* row -1 card 2 */}
        <div className="lg:col-span-2 h-70 group">
          <div className="h-full rounded-xl shadow-md shadow-gray-200 hover:shadow-gray-300 transition-shadow duration-300 bg-white p-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 mb-5">
              <Stars className="w-6 h-6 text-blue-600" />
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'en'
                ? featuresData.card2.title.en
                : featuresData.card2.title.jp}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {language === 'en'
                ? featuresData.card2.description.en
                : featuresData.card2.description.jp}
            </p>
          </div>
        </div>

        {/* row 2 */}
        {/* row -2 card 1 */}
        <div className="lg:col-span-2 group h-60">
          <div className="h-full overflow-hidden rounded-xl bg-white shadow-md shadow-gray-200 hover:shadow-gray-300 transition-shadow duration-300">
            <div className="p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:rotate-10 transition-all duration-300  mb-5">
                <TerminalSquare className="w-6 h-6 text-blue-600" />
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {language === 'en'
                  ? featuresData.card3.title.en
                  : featuresData.card3.title.jp}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {language === 'en'
                  ? featuresData.card3.description.en
                  : featuresData.card3.description.jp}
              </p>
            </div>
          </div>
        </div>
        {/* row -2 card 2 */}
        <div className="lg:col-span-3 group h-60">
          <div className="h-full rounded-xl bg-white p-6 shadow-md shadow-gray-200 hover:shadow-gray-300 transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:rotate-5 transition-all duration-300 mb-5">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {language === 'en'
                ? featuresData.card4.title.en
                : featuresData.card4.title.jp}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {language === 'en'
                ? featuresData.card4.description.en
                : featuresData.card4.description.jp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
