import olimp from './img/olimp.jpg';
import nice from './img/nice.jpg';
import studio from './img/studio.jpg';
import flat from './img/flat.jpg';

import _uniqueId from 'lodash/uniqueId';

const apartmentList = [
    {   
        id: _uniqueId('apartment_'),
        name: 'olimp',
        title: 'Пентхаус “Loft Олимп”',
        img: olimp 
    },
    {
        id: _uniqueId('apartment_'),
        name: 'nice',
        title: 'Апартаменты “Nice Loft”',
        img: nice
    },
    {
        id: _uniqueId('apartment_'),
        name: 'studio',
        title: 'Апартаменты “Loft Studio”',
        img: studio
    },
    {
        id: _uniqueId('apartment_'),
        name: 'flat',
        title: 'Loft квартира “Престиж”',
        img: flat
    }
];

export default apartmentList;
