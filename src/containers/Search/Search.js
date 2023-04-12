import React from 'react'
import Card from '../../components/Card/Card';
import Filters from '../../components/Filters/Filters';
import Header from '../../components/Header/Header';
import './Search.css';

const Search = () => {
  return (
    <>
        <Header backColor="#FFFFFF"/>
        <section className='search'>
            <div className='d-flex justify-content-between'>
              <div className='left'>
                <Filters />
              </div>
              <div className='right pl-5'>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
              </div>
            </div>
        </section>
    </>
  )
}

export default Search