import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import MainScreen from './components/MainScreen/MainScreen';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import PriceList from './components/PriceList/PriceList';
import Description from './components/Description/Description';
import Contacts from './components/Contacts/Contacts';
import Calendar from './components/calendar/Calendar';


function App() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollTop(scrollTop);
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div className="App">
      <main className={styles.main}>
        <Header scrollTop={scrollTop}/>
        <MainScreen scrollTop={scrollTop}/>
        <div className={styles.liner}></div>
        <Description/>`
        <div className={styles.liner}></div>
        <PriceList/>
        <div className={styles.liner}></div>
        <Calendar/>
        <div className={styles.liner}></div>
        <Portfolio/>
        <div className={styles.liner}></div>
        <Contacts/>
      </main>
    </div>
  );
}

export default App;
