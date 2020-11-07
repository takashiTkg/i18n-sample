import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('sample.text1')}
        </p>
        <p>
          {t('sample.text2')}
        </p>
        <div>
          <button onClick={() => changeLanguage('en')}>
            English
          </button>
          <button onClick={() => changeLanguage('ja')}>
            日本語
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
