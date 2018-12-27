
import React from 'react';
import { Input, Menu } from 'semantic-ui-react';




const Sort = ({setSort, SortBy, searchQuery,setSeatchQuery}) => {


  return (
    <div>
  <Menu secondary>
        <Menu.Item name='all' active={SortBy === 'all'} 
        onClick={setSort.bind(this, "all")} >Все</Menu.Item>
      
        <Menu.Item
          name='price_expensive'
          active={SortBy === 'price_expensive'}
          onClick={setSort.bind(this, "price_expensive")}
        >Цена(с самых дешевых)</Menu.Item>

         <Menu.Item
          name='price_cheap'
          active={SortBy === 'price_cheap'}
          onClick={setSort.bind(this, "price_cheap")}
        >Цена(с самых дорогих)</Menu.Item>

          <Menu.Item
          name='author'
          active={SortBy === 'author'}
          onClick={setSort.bind(this, "author")}
        >По автору</Menu.Item>
       
       <Menu.Item>
            <Input 
            onChange={e => setSeatchQuery(e.target.value)}
             value={searchQuery} 
             icon='search' 
             placeholder='Поиск...' />
            </Menu.Item>
      </Menu>

      
            <Input  className="seachMobile"
            onChange={e => setSeatchQuery(e.target.value)}
             value={searchQuery} 
             icon='search' 
             placeholder='Поиск...' />
            
</div>
      )
  };



export default Sort;


