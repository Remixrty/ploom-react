import './App.css';
import './styles/base/base.scss'
import './styles/base/fonts.css'
import './styles/base/normalize.css'
import './styles/index.scss'
import { ReactComponent as Arrow } from './img/Vector.svg'
import { ReactComponent as Gps } from './img/gps.svg'
import { ReactComponent as OpenIcon } from './img/Open.svg'
import { ReactComponent as SearchIcon } from './img/Search_icon.svg'
import { ReactComponent as SearchIconBlack } from './img/Search_icon_black.svg'

import { ReactComponent as FilterIcon } from './img/Filter.svg';
import { useEffect, useState } from 'react';
import ModalSearch from './components/ModalSearch';
import ModalFilter from './components/ModalFilter';


function App() {
  const [search, setSearch] = useState('')
  const [focusSearch, setFocusSearch] = useState(false)
  const [point, setPoint] = useState({
    "city": "Санкт-Петербург",
    "state": "Россия",
    "name": "Санкт-Петербурге"
  })
  const [active, setActive] = useState(false)
  const [activeFilter, setActiveFilter] = useState(false)

  useEffect(() => {
    if (focusSearch) {
      document.getElementById('search').focus()
      setFocusSearch(false)
    }
  }, [focusSearch])

  function dropdownMake() {
    document.getElementById('dropdown-make').classList.toggle('superfield_open')
    document.getElementById('dropdown-make-content').classList.toggle('text-content_input-light')
  }
  function dropdownNetwork() {
    document.getElementById('dropdown-network').classList.toggle('superfield_open')
    document.getElementById('dropdown-network-content').classList.toggle('text-content_input-light')
  }

  function getUserPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        alert(position)
      },
      )
    }

  }

  return (
    <>
      <div className="container">
        <div className="top-menu">
          <a href='#' className="text-content_button text-content_gray">
            Главная
          </a>
          <div className="top-menu__arrow">
            <Arrow />
          </div>
          <a href="#" className="text-content_button text-content_light">
            Магазины
          </a>
        </div>

        <div className="head">
          <h1 className="text-content__h1">
            Магазины в&nbsp;<div className="text-content__h1 text-content__h1_underline" onClick={() => setActive(true)}>{point.name}</div>
          </h1>
        </div>

        <div className="head_mobile">
          <h1 className="text-content__h1_mobile">
            Магазины
          </h1>
          <div className='head__icons'>
            <SearchIconBlack className='head__icons_first' />
            <FilterIcon onClick={() => setActiveFilter(true)} />
          </div>
        </div>

        <ModalSearch active={active} setActive={setActive} city={point} setCity={setPoint} />
        <ModalFilter active={activeFilter} setActive={setActiveFilter} city={point} setCity={setPoint} />
        <div className="row">
          <div className="superfield superfield_search" onClick={() => setFocusSearch(true)}>
            <div className="superfield__left">
              <div className="superfield__search-icon">
                <SearchIcon />
              </div>
              <div className="superfield__inputfield">
                <input type="text" className="superfield__input" id="search" placeholder="Поиск на карте" onChange={e => setSearch(e.target.value)} />
              </div>

            </div>
            <div className="superfield__right" onClick={() => getUserPosition()}>
              <Gps />
              <div className='text-content_input text-content_geo'>
                Мое местоположение
              </div>
            </div>
          </div>
          <button className="button">
            <p className="text-content_button">Найти</p>
          </button>
        </div>
        <div className="row">
          <div className="superfield superfield_dropdown" onClick={() => dropdownMake()}>
            <div className="superfield__inputfield">
              <p className="text-content_input text-content_input-light" id='dropdown-make-content'>Что хотите сделать?</p>
            </div>
            <OpenIcon id='dropdown-make' />
          </div>
          <div className="superfield superfield_dropdown" onClick={() => dropdownNetwork()}>
            <div className="superfield__inputfield">
              <p className="text-content_input text-content_input-light" id='dropdown-network-content'>Торговая сеть</p>
            </div>
            <OpenIcon id='dropdown-network' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
