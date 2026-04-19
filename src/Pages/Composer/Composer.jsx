import React, {Fragment, useContext, useState} from 'react';
import {LabelSM} from '../../Components/Labels/Labels';
import {Lightbulb} from 'lucide-react';
import {LanguageContext} from '../../context/Language';

const content = {
  label: {en: 'New Draft', jp: '新しいドラフト'},
  header: {en: 'Compose Automation', jp: '自動化を作成'},
  description: {
    en: 'Design your automated email script. Use double brackets {{ variable_name }} to inject variable data from your Google Sheet.',
    jp: '自動化されたメールスクリプトをデザインします。二重括弧 {{ variable_name }} を使用して、Googleシートからの変数データを注入します。',
  },
  proTip: {
    title: {en: 'Pro Tip', jp: 'プロのヒント'},
    description: {
      en: 'Use double brackets {{ variable_name }} to inject dynamic data from your Google Sheet into the email body.',
      jp: '二重括弧 {{ variable_name }} を使用して、Googleシートからの動的データをメール本文に注入します。',
    },
  },
  form: {
    recipient: {en: 'Recipient', jp: '受信者'},
    subject: {en: 'Subject', jp: '件名'},
    mailType: {en: 'Mail Type', jp: 'メールタイプ'},
    body: {en: 'Body', jp: '本文'},
    mailTypeOptions: [
      {value: 'newsletter', label: {en: 'Newsletter', jp: 'ニュースレター'}},
      {value: 'promotion', label: {en: 'Promotion', jp: 'プロモーション'}},
      {value: 'followUp', label: {en: 'Follow-up', jp: 'フォローアップ'}},
      {value: 'confirmation', label: {en: 'Confirmation', jp: '確認'}},
    ],
    save: {en: 'Save Draft', jp: 'ドラフトを保存'},
    delete: {en: 'Delete Draft', jp: 'ドラフトを削除'},
  },
};

const Composer = () => {
  const {language} = useContext (LanguageContext);
  const [data, setData] = useState ({
    recipient: '',
    subject: '',
    mail_type: 'newsletter',
    email_body: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setData (prev => ({...prev, [name]: value}));
  };

  const handleSubmit = e => {
    e.preventDefault ();
    console.log (data);
  };

  const handleDelete = () => {
    setData ({
      recipient: '',
      subject: '',
      mail_type: 'newsletter',
      email_body: '',
    });
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="w-full max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <LabelSM
            name={language === 'en' ? content.label.en : content.label.jp}
            variant="primary"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 font-google-sans-bold">
            {language === 'en' ? content.header.en : content.header.jp}
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl">
            {language === 'en'
              ? content.description.en
              : content.description.jp}
          </p>
        </div>

        {/* Form Card */}
        <div
          id="form"
          className="bg-white rounded-2xl shadow-md-lg p-8 mb-10 space-y-7 animate-fade-in"
        >

          {/* Recipient */}
          <div className="space-y-2.5">
            <label className="block text-sm font-semibold text-gray-800">
              {language === 'en'
                ? content.form.recipient.en
                : content.form.recipient.jp}
            </label>
            <input
              type="email"
              name="recipient"
              placeholder="john@gmail.com"
              value={data.recipient}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 bg-white hover:border-gray-400"
            />
          </div>

          {/* Subject */}
          <div className="space-y-2.5">
            <label className="block text-sm font-semibold text-gray-800">
              {language === 'en'
                ? content.form.subject.en
                : content.form.subject.jp}
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject Line"
              value={data.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 bg-white hover:border-gray-400"
            />
          </div>

          {/* Mail Type */}
          <div className="space-y-2.5">
            <label className="block text-sm font-semibold text-gray-800">
              {language === 'en'
                ? content.form.mailType.en
                : content.form.mailType.jp}
            </label>
            <select
              name="mail_type"
              value={data.mail_type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 font-medium text-gray-700"
            >
              {content.form.mailTypeOptions.map (option => (
                <option key={option.value} value={option.value}>
                  {language === 'en' ? option.label.en : option.label.jp}
                </option>
              ))}
            </select>
          </div>

          {/* Body */}
          <div className="space-y-2.5">
            <label className="block text-sm font-semibold text-gray-800">
              {language === 'en' ? content.form.body.en : content.form.body.jp}
            </label>
            <textarea
              name="email_body"
              placeholder="Start writing your email content here..."
              value={data.email_body}
              rows={7}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 bg-white hover:border-gray-400 font-medium"
            />
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={handleSubmit}
              className="flex-1 sm:flex-none px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg active:scale-95"
            >
              {language === 'en' ? content.form.save.en : content.form.save.jp}
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 sm:flex-none px-6 py-3 text-red-600 border-2 border-red-500 rounded-xl hover:bg-red-50 hover:border-red-600 transition-all duration-300 font-semibold active:scale-95"
            >
              {language === 'en'
                ? content.form.delete.en
                : content.form.delete.jp}
            </button>
          </div>

        </div>

      </div>

      {/* PRO TIP */}
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-5 shadow-sm-lg hover:shadow-md-lg transition-all duration-300 animate-fade-in">
          <Lightbulb
            className="shrink-0 text-blue-600 bg-white p-3 rounded-xl shadow-sm"
            size={40}
          />
          <div className="flex-1">
            <h5 className="font-bold text-base text-gray-900">
              {language === 'en'
                ? content.proTip.title.en
                : content.proTip.title.jp}
            </h5>
            <p className="text-sm text-gray-700 mt-1">
              {language === 'en'
                ? content.proTip.description.en
                : content.proTip.description.jp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Composer;
