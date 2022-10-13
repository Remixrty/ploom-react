import React from 'react'

export default function Map() {

    return (
        <>
           <div class="shops-map">
            <div class="shops-map__map-wrapper" id="ymap">
                <div class="shops-map__overlay" data-map-overlay></div>
                <ul class="shops-map__legend">
                    <li class="shops-map__legend-item shops-map__legend-item_brand">Фирменный павильон Plus lounge
                    </li>
                    <li class="shops-map__legend-item">Точка продаж</li>
                </ul>
            </div>
            <div class="shops-map__list-wrapper" data-shops-list></div>
        </div>
        </>
    )
}