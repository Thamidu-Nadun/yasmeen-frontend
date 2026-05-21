import React, {useContext} from 'react';
import {LanguageContext} from '../../context/Language';

const footerContent = {
  en: `© ${new Date ().getFullYear ()} Nadun. All rights reserved.`,
  jp: `© ${new Date ().getFullYear ()} ナドゥン。全著作権所有。`,
};

const Footer = () => {
  const {language} = useContext (LanguageContext);
  return (
    <footer>
      <div className="w-full bg-blue-600/90 text-white py-2 text-center">
        <p className="text-sm">
          {language === 'en' ? footerContent.en : footerContent.jp}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
