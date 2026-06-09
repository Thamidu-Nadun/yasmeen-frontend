import React, {useContext} from 'react';
import {LanguageContext} from '../../context/Language';

const footerContent = {
  en: `© ${new Date ().getFullYear ()} Nadun. All rights reserved.`,
  jp: `© ${new Date ().getFullYear ()} ナドゥン。全著作権所有。`,
};
const quickLinks = [
  {en: 'Home', jp: 'ホーム'},
  {en: 'Emails', jp: 'メール'},
  {en: 'Logs', jp: 'ログ'},
];
const siteLinks = [
  {en: 'Privacy Policy', jp: 'プライバシーポリシー'},
  {en: 'Terms of Service', jp: '利用規約'},
  {en: 'Contact Us', jp: 'お問い合わせ'},
];

const Footer = () => {
  const {language} = useContext (LanguageContext);
  return (
    <footer className="border-t border-blue-300 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Mail Craft
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              AI-powered email automation platform.
            </p>
          </div>

          {/* Quick Links */}
          <ul className="flex flex-wrap gap-6 text-sm text-slate-600">
            {quickLinks.map (link => (
              <li
                key={link.en}
                className="cursor-pointer transition-colors duration-200 hover:text-blue-600"
              >
                {language === 'en' ? link.en : link.jp}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-slate-200" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-sm text-slate-500">
            {language === 'en' ? footerContent.en : footerContent.jp}
          </p>

          <ul className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 md:justify-end">
            {siteLinks.map (link => (
              <li
                key={link.en}
                className="cursor-pointer transition-colors duration-200 hover:text-blue-600"
              >
                {language === 'en' ? link.en : link.jp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
