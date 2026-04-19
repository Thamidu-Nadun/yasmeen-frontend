import {useState, createContext} from 'react';

const LanguageContext = createContext (null);

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState ('en');

  const toggleLanguage = () => {
    setLanguage (prev => (prev === 'en' ? 'jp' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{language, toggleLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export {LanguageContext, LanguageProvider};
