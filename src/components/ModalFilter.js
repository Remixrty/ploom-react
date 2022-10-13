import React, { useState } from 'react'
import '../styles/filter-modal.scss'
import { ReactComponent as CloseIcon } from '../img/Close_icon.svg'
import ModalSearch from './ModalSearch'


export default function ModalFilter({ active, setActive, city, setCity }) {
    const [activePoint, setActivePoint] = useState(false)

    function closeForm(e) {
        setActive(false)
    }
    return (
        <>
            <div className={active ? 'filter-modal filter-modal_active' : 'filter-modal '}>
                <div className='filter-modal__head'>
                    <h1 className='text-content__h1_modal'>Фильтр</h1>
                    <CloseIcon onClick={e => closeForm(e)} />
                </div>
                <div className='filter-modal__item' onClick={() => setActivePoint(true)}>
                    <div className='filter-modal__item-name'>
                        <p className='text-content__filter-head text-content__filter-head_light'>Населенный пункт</p>
                    </div>
                    <div className='filter-modal__content'>
                        <p className='text-content__filter-head'>{city.city}</p>
                    </div>
                </div>
                <div className='filter-modal__item'>
                    <div className='filter-modal__item-name'>
                        <p className='text-content__filter-head'>Что хотите сделать?</p>
                    </div>
                    <div className='filter-modal__item-content'>
                        {/* <div className='' */}
                    </div>
                </div>
                <ModalSearch active={activePoint} setActive={setActivePoint} city={city} setCity={setCity} />
            </div>
        </>
    )
}