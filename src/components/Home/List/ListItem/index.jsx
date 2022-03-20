import React from 'react';
import './styles.css';

const ListItem = ({
    item: { coverSrc, title, price, category, brand, size, rating },
}) => (
    <div className='listItem-wrap'>
        <img src={coverSrc} alt='' />
        <header>
            <h4>{title}</h4>
            <span>{brand}</span>
            <span>{size}</span>
            <span>🌟{rating}</span>
        </header>
        <footer>
            <p>
                <b>{category}</b>
            </p>
            <p>
                <b>${price}</b>
            </p>
        </footer>
    </div>
);

export default ListItem;