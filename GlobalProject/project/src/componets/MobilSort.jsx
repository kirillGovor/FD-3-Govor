
import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

import { Link } from 'react-router';


const Sort = ({ setSort, SortBy }) => {


    return (

        <ul>
             <li><Menu.Item><a>Главная</a></Menu.Item></li>
            <Link to ="/basketMobile"><li><Menu.Item>Корзина</Menu.Item></li></Link>
            <br></br>
            <p>Сортировка по:</p>
            <li>
                <Menu.Item name='all' active={SortBy === 'all'}
                    onClick={setSort.bind(this, "all")} >Все</Menu.Item>
            </li>
            <li>
                <Menu.Item
                    name='price_expensive'
                    active={SortBy === 'price_expensive'}
                    onClick={setSort.bind(this, "price_expensive")}
                >Цена(с самых дешевых)</Menu.Item>
            </li>

            <li>
                <Menu.Item
                    name='price_cheap'
                    active={SortBy === 'price_cheap'}
                    onClick={setSort.bind(this, "price_cheap")}
                >Цена(с самых дорогих)</Menu.Item>
            </li>

            <li>

                <Menu.Item
                    name='author'
                    active={SortBy === 'author'}
                    onClick={setSort.bind(this, "author")}
                >По автору</Menu.Item>
            </li><br></br>
            <p>Аккаунт:</p>
            <li>
                <Link to={`/login`}>
                    <Menu.Item>
                        <Button >Войти</Button>
                    </Menu.Item>
                </Link>
            </li>

        </ul>

    )
};



export default Sort;


