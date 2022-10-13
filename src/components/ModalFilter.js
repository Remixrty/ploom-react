import React, { useState } from 'react'
import '../styles/filter-modal.scss'
import { ReactComponent as CloseIcon } from '../img/Close_icon.svg'
import { ReactComponent as ServiceIcon } from '../img/24Hrs.svg'
import { ReactComponent as FirmBrandIcon } from '../img/Firm-brand.svg'
import { ReactComponent as KBBrandIcon } from '../img/KB-brand.svg'
import { ReactComponent as MagnitBrandIcon } from '../img/Magnit-brand.svg'
import { ReactComponent as AzbukaBrandIcon } from '../img/Azbuka-brand.svg'
import { ReactComponent as AllBrandIcon } from '../img/All-brand.svg'
import ModalSearch from './ModalSearch'


export default function ModalFilter({ todo, brand, active, setActive, activePoint, setActivePoint, city, setCity }) {

    document.getElementById('shop-service-container')?.addEventListener('click', () => {
        console.log('toggle');
        document.getElementById('service-toggle').classList.toggle('disable')
    }
    )

    function closeForm(e) {
        setActive(false)
    }

    return (
        <>
            <div className={active ? 'filter-modal filter-modal_active' : 'filter-modal '}>
                <div className='filter-modal__head filter-modal__head_fixed'>
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
                        <p className='text-content__filter-head text-content__filter-head_light'>Что хотите сделать?</p>
                    </div>
                    <div className='filter-modal__item-content'>
                        {todo.map(item => {
                            return (
                                <div className="filter-modal__superfield" id={item.for + `-container`} key={item.for} onClick={() => item.checked = !item.checked}>
                                    <label className="text-content__filter-head" htmlFor={item.for}>{item.name}</label>
                                    <input className="filter-modal__checkbox" type="checkbox" id={item.for}
                                        value="grey" data-shops-filter />
                                </div>
                            )
                        })}
                        <div className="filter-modal__service-container " id="service-toggle">
                            <ServiceIcon />
                            <p className='text-content_input'>Нужна консультация? Звоните 8&nbsp;800&nbsp;333-80-88, бесплатно, 24/7</p>
                        </div>
                    </div>
                </div>
                <div className="filter-modal__item">
                    <div className='filter-modal__item-name'>
                        <p className='text-content__filter-head text-content__filter-head_light'>Торговая сеть</p>
                    </div>
                    <div className="filter-modal__superfield">
                        <FirmBrandIcon />
                        <label className="text-content__filter-head" htmlFor="firm-brand">Фирменный павильон Plus Lounge</label>
                        <input className="filter-modal__checkbox" type="checkbox" id="firm-brand"
                            value="gold" data-shops-filter />
                    </div>
                    <div className="filter-modal__superfield">
                        <KBBrandIcon />
                        <label className="text-content__filter-head" htmlFor="kb-brand">Красное и Белое</label>
                        <input className="filter-modal__checkbox" type="checkbox" id="kb-brand"
                            value="gold" data-shops-filter />
                    </div>
                    <div className="filter-modal__superfield">
                        <MagnitBrandIcon />
                        <label className="text-content__filter-head" htmlFor="magnit-brand">Магнит</label>
                        <input className="filter-modal__checkbox" type="checkbox" id="magnit-brand"
                            value="gold" data-shops-filter />
                    </div>
                    <div className="filter-modal__superfield">
                        <AzbukaBrandIcon />
                        <label className="text-content__filter-head" htmlFor="azbuka-brand">Азбука вкуса</label>
                        <input className="filter-modal__checkbox" type="checkbox" id="azbuka-brand"
                            value="gold" data-shops-filter />
                    </div>
                    <div className="filter-modal__superfield">
                        <AllBrandIcon />
                        <label className="text-content__filter-head" htmlFor="all-brand">Другие магазины</label>
                        <input className="filter-modal__checkbox" type="checkbox" id="all-brand"
                            value="gold" data-shops-filter />
                    </div>
                </div>
            </div>
        </>
    )
}