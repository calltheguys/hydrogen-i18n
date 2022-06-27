import {useEffect, useState, useRef} from 'react';
import {useTranslation} from 'react-i18next';

export function LangSwitcher() {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const supportedLangs = useRef([
    {value: 'en', name: 'English', flag: '🇺🇸'},
    {value: 'es', name: 'Español', flag: '🇪🇸'},
    {value: 'de', name: 'Deutsch', flag: '🇩🇪'},
  ]);

  const handleChange = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const cachedLang = localStorage.getItem('i18nextLng');
    console.log('Changing initial language from', lang, 'to', cachedLang);
    setLang(cachedLang);
  }, []);

  return (
    <div className="langSwitcher">
      <p className="langSwitcher__text" suppressHydrationWarning>
        {t('common.switcher')}
      </p>
      <select
        className="langSwitcher__select"
        name="lang"
        onChange={handleChange}
        value={lang}
      >
        {supportedLangs.current.map((lang) => (
          <option
            className="langSwitcher__option"
            key={lang.value}
            value={lang.value}
          >
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
