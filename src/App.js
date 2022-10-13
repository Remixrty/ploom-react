import './App.css';
import './styles/base/base.scss'
import './styles/base/fonts.css'
import './styles/base/normalize.css'
import './styles/index.scss'
import { ReactComponent as Arrow } from './img/Vector.svg'
import { ReactComponent as DoneIcon } from './img/Done.svg'
import { ReactComponent as FirmBrandIcon } from './img/Firm-brand.svg'
import { ReactComponent as KBBrandIcon } from './img/KB-brand.svg'
import { ReactComponent as MagnitBrandIcon } from './img/Magnit-brand.svg'
import { ReactComponent as AzbukaBrandIcon } from './img/Azbuka-brand.svg'
import { ReactComponent as AllBrandIcon } from './img/All-brand.svg'
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
  const todo = [
    {
      name: "Купить стики",
      desciption: "",
      for: "shop-sticks",
      checked: false
    },
    {
      name: "Купить устройство",
      desciption: "",
      for: "shop-devices-sticks",
      checked: false
    },
    {
      name: "Купить устройство/стики/аксессуары в фирменном павильоне",
      desciption: "Консультация, акции",
      for: "shop-brand",
      checked: false
    },
    {
      name: "Воспользоваться сервисом",
      desciption: "Консультация, чистка, диагностика, гарантийная замена",
      for: "shop-service",
      checked: false
    },
  ]

  const brands = [
    {
      name: "Фирменный павильон Plus Lounge",
      for: "firm-brand",
      forModal: "firm-brand_modal",
      icon: FirmBrandIcon,
      checked: false
    },
    {
      name: "Красное и Белое",
      for: "kb-brand",
      forModal: "kb-brand_modal",
      icon: KBBrandIcon,
      checked: false
    },
    {
      name: "Магнит",
      for: "magnit-brand",
      forModal: "magnit-brand_modal",
      icon: MagnitBrandIcon,
      checked: false
    },
    {
      name: "Азбука вкуса",
      for: "azbuka-brand",
      forModal: "azbuka-brand_modal",
      icon: AzbukaBrandIcon,
      checked: false
    },
    {
      name: "Другие магазины",
      for: "all-brand",
      forModal: "all-brand_modal",
      icon: AllBrandIcon,
      checked: false
    }
  ]

  useEffect(() => {
    if (focusSearch) {
      document.getElementById('suggest').focus()
      setFocusSearch(false)
    }
  }, [focusSearch])

  function dropdownMake() {
    document.getElementById('dropdown-make').classList.toggle('superfield_open')
    document.getElementById('dropdown-make-content').classList.toggle('text-content_input-light')
    document.querySelector('#dropdown-wrapper').classList.toggle('disable')
  }
  function dropdownNetwork() {
    document.getElementById('dropdown-network').classList.toggle('superfield_open')
    document.getElementById('dropdown-network-content').classList.toggle('text-content_input-light')
    document.querySelector('#dropdown-wrapper_second').classList.toggle('disable')

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
            <SearchIconBlack className='head__icons_first' onClick={() => setActive(true)} />
            <FilterIcon onClick={() => setActiveFilter(true)} />
          </div>
        </div>

        <ModalSearch active={active} setActive={setActive} city={point} setCity={setPoint} />
        <ModalFilter todo={todo} brand={brands} active={activeFilter} setActive={setActiveFilter} activePoint={active} setActivePoint={setActive} city={point} setCity={setPoint} />
        <div className="row">
          <div className="superfield superfield_search" onClick={() => setFocusSearch(true)}>
            <div className="superfield__left">

              <div className="superfield__search-icon">
                <SearchIcon />
              </div>
              <div className="superfield__inputfield">
                <input type="text" className="superfield__input" id="suggest" placeholder="Поиск на карте" onChange={e => setSearch(e.target.value)} />
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

          <div className="superfield superfield_dropdown  superfield_no-padding">
            <div className="row row_padding" onClick={() => dropdownMake()}>
              <div className="superfield__inputfield">
                <p className="text-content_input text-content_input-light" id='dropdown-make-content'>Что хотите сделать?</p>
              </div>
              <OpenIcon id='dropdown-make' />
            </div>
            <div className="dropdown-wrapper" id='dropdown-wrapper'>

              {todo.map(item => {
                return (<div className="dropdown-wrapper__item" key={item.name}>
                  <div className='modalform__item'>
                    <div className='modalform__content'>
                      <div className='text-content_input'> {item.name} </div>
                      {item.desciption.length ? <p className='text-content_overline'>Консультация, акции</p> : null}
                    </div>
                  </div>
                </div>
                )
              })}
            </div>
          </div>

          <div className="superfield superfield_dropdown superfield_no-padding" >
            <div className="row row_padding" onClick={() => dropdownNetwork()}>
              <div className="superfield__inputfield">
                <p className="text-content_input text-content_input-light" id='dropdown-network-content'>Торговая сеть</p>
              </div>
              <OpenIcon id='dropdown-network' />
            </div>
            <div className="dropdown-wrapper" id='dropdown-wrapper_second'>
              {brands.map(item => {
                return (<div className="dropdown-wrapper__item" key={item.for} onClick={() => {
                  item.checked = !item.checked
                }}>
                  <div className='modalform__item'>
                    <div className='modalform__content'>
                      <div className="filter-modal__superfield">
                        {/* {item.icon} */}<item.icon />
                        <label className="text-content__filter-head" htmlFor={item.for}>{item.name}</label>
                        <input className="filter-modal__checkbox" type="checkbox" id={item.for}
                          value="gold" data-shops-filter />
                      </div>
                    </div>
                  </div>
                </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
