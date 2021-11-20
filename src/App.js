import { useReducer } from 'react'

import { Switch, Route } from "react-router-dom";

import MainContext from './Contexts/mainContext'
import mainReduser from './Redusers/main.reduser';

import Article from './Components/Article/Article';
import CardList from './Components/CardList/CardList';
import Header from './Components/Header/Header';

import './App.css';

function App() {

  const rows = [
    {
      id: '00001',
      title: 'Автоматический выключатель 10A',
      vendor: 'ABB',
      pack: 100,
      price: 1500,
      img: '/img1.jpg'
    },
    {
      id: '00002',
      title: 'Автоматический выключатель 20A',
      vendor: 'ABB',
      pack: 100,
      price: 1550,
      img: '/img2.jpg'
    },
    {
      id: '00003',
      title: 'Корпус металлический',
      vendor: 'ABB',
      pack: 1,
      price: 6800,
      img: '/img3.jpg'
    },
    {
      id: '00004',
      title: 'Корпус пластиковый',
      vendor: 'IEK',
      pack: 1,
      price: 1200,
      img: '/img4.jpg'
    },
    {
      id: '00005',
      title: 'Шина медная МТ 60х8',
      vendor: 'DKC',
      pack: 1,
      price: 1200,
      img: '/img2.jpg'
    },
    {
      id: '00006',
      title: 'DLP Кабель - канал 105x50',
      vendor: 'DKC',
      pack: 1,
      price: 350,
      img: '/img3.jpg'
    },
    {
      id: '00007',
      title: 'DLP Кабель - канал 80x50',
      vendor: 'DKC',
      pack: 1,
      price: 300,
      img: '/img4.jpg'
    },
    {
      id: '00008',
      title: 'ЭТЮД Выключатель одноклавишный',
      vendor: 'Schneider Electric',
      pack: 1,
      price: 85,
      img: '/img1.jpg'
    },
    {
      id: '00009',
      title: 'Контактор E 12А катушка управления 220В',
      vendor: 'Schneider Electric',
      pack: 1,
      price: 3800,
      img: '/img2.jpg'
    },
    {
      id: '00010',
      title: 'Лоток для систем освещения',
      vendor: 'Schneider Electric',
      pack: 1,
      price: 1859,
      img: '/img4.jpg'
    }
  ]

  const [state, dispatch] = useReducer(mainReduser, {rows, selected: rows})

  return (
    <MainContext.Provider value={[state, dispatch]}>
      <Header />
      <Switch>
        <Route exact path='/' component={CardList} />
        <Route exact path="/catalog/:id" children={<Article />} />
      </Switch>
    </MainContext.Provider>
  );
}

export default App;
