import React, { useEffect, useState } from 'react'
import '../styles/modal.scss'
import { ReactComponent as SearchIcon } from '../img/Search_icon.svg'
import { ReactComponent as DoneIcon } from '../img/Done.svg'
import '../styles/base/fonts.css'
import cities from '../cities.json'

export default function ModalSearch({ active, setActive, city, setCity }) {
    const [focusSearchModal, setFocusSearchModal] = useState(false)
    const [searchCities, setSearchCities] = useState(JSON.parse(JSON.stringify(cities)))


    useEffect(() => {
        if (focusSearchModal) {
            document.getElementById('searchModal').focus()
            setFocusSearchModal(false)
        }
    }, [focusSearchModal])

    function search(word) {
        setSearchCities(cities.filter(item => {
            return item.city.toString().toLowerCase().includes(word.toString().toLowerCase()) ? item : null
        })
        )
        console.log(searchCities);
    }

    function closeForm(e) {
        setActive(false)
    }
    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={e => closeForm(e)}>
                <div className='modalform' onClick={e => e.stopPropagation()}>
                    <h1 className='text-content__modal-h1'>Выберите населенный пункт</h1>
                    <div className='modalform__form'>
                        <div className="superfield superfield_search" onClick={() => setFocusSearchModal(true)}>
                            <div className="superfield__left">
                                <div className="superfield__search-icon">
                                    <SearchIcon />
                                </div>
                                <div className="superfield__inputfield">
                                    <input type="text" className="superfield__input" id="searchModal" placeholder="Поиск" onChange={e => search(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='modalform__menu'>
                        {
                            searchCities?.length > 0 ?
                                searchCities.slice(0, 10).map(item => {
                                    return <div key={item.city} className='modalform__item' onClick={() => setCity(item)}>
                                        <div className='modalform__content'>
                                            <div className='text-content_input'> {item.city} </div>
                                            <div className='text-content_overline'> {item.state} </div>
                                        </div>
                                        {city.name == item.name ? <div className='modalform__choose'><DoneIcon /></div> : null}
                                    </div>
                                })
                                :
                                <div className='text-content_input'>Ничего не найдено. Попробуйте снова.</div>
                        }
                    </div>

                </div>


            </div>
        </>
    )
}