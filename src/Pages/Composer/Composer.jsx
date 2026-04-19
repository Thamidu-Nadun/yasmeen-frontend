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
    mail_type: 'Newsletter',
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
      mail_type: 'Newsletter',
      email_body: '',
    });
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-10 bg-gray-100">
      <div className="w-full max-w-3xl">

        {/* Header */}
        <div className="mt-16">
          <LabelSM
            name={language === 'en' ? content.label.en : content.label.jp}
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            {language === 'en' ? content.header.en : content.header.jp}
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? content.description.en
              : content.description.jp}
          </p>
        </div>

        {/* Form */}
        <div id="form" className="space-y-6 mt-6">

          {/* Recipient */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              {language === 'en'
                ? content.form.recipient.en
                : content.form.recipient.jp}
            </label>
            <input
              type="email"
              name="recipient"
              placeholder="john@gmail.com"
              defaultValue={data.recipient}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              {language === 'en'
                ? content.form.subject.en
                : content.form.subject.jp}
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject Line"
              defaultValue={data.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Mail Type */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              {language === 'en'
                ? content.form.mailType.en
                : content.form.mailType.jp}
            </label>
            <select
              name="mail_type"
              defaultValue={data.mail_type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm bg-white outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              {content.form.mailTypeOptions.map (option => (
                <option key={option.value} value={option.value}>
                  {language === 'en' ? option.label.en : option.label.jp}
                </option>
              ))}
            </select>
          </div>

          {/* Body */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              {language === 'en' ? content.form.body.en : content.form.body.jp}
            </label>
            <textarea
              name="email_body"
              placeholder="Start writing..."
              defaultValue={data.email_body}
              rows={6}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none resize-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-5 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            {language === 'en' ? content.form.save.en : content.form.save.jp}
          </button>
          <button
            onClick={handleDelete}
            className="w-full sm:w-auto px-5 py-3 text-red-500 border border-red-500 rounded-xl hover:bg-red-500 hover:text-white transition"
          >
            {language === 'en'
              ? content.form.delete.en
              : content.form.delete.jp}
          </button>
        </div>

      </div>

      {/* PRO TIP */}
      <div className="w-lg bg-gray-300/40 flex items-center gap-3 px-4 py-2 rounded">
        <Lightbulb
          className="text-blue-500 bg-gray-100 px-2 py-1 rounded"
          size={50}
        />
        <div>
          <h5 className="font-bold text-sm">
            {language === 'en'
              ? content.proTip.title.en
              : content.proTip.title.jp}
            {' '}
          </h5>
          <p className="text-xs text-gray-600">
            {language === 'en'
              ? content.proTip.description.en
              : content.proTip.description.jp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Composer;
