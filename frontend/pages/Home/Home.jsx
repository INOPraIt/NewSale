import React from 'react';
import './style.scss';
import one from '../../components/img/img/1.jpg';
import linkBascet from '../../components/img/icons/1.png';


export default function Home() {
  let arrayCategory = [
    {
      id: 1,
      title: 'Сайт'
    },
    {
      id: 2,
      title: 'Мобильное приложени'
    },
    {
      id: 3,
      title: 'Все вместе'
    },
  ]

  let arrayPay = [
    {
      id: 1,
      title: 'Купить полностью'
    },
    {
      id: 2,
      title: 'Купить с правками'
    },
    {
      id: 3,
      title: 'На заказ'
    },
  ]

  let arrayTags = [
    {
      id: 1,
      title: 'It и технологии'
    },
    {
      id: 2,
      title: 'Медецина'
    },
    {
      id: 3,
      title: 'Маркетплейсы'
    },
    {
      id: 4,
      title: 'Лендинги'
    },
    {
      id: 4,
      title: 'Боты'
    },
    {
      id: 5,
      title: 'Автоматизация'
    }
  ]

  let arrayCards = [
    {
      id: 1,
      title: 'SiteSale',
      price: 10000
    },
    {
      id: 2,
      title: 'SiteSale',
      price: 30000
    },
    {
      id: 3,
      title: 'SiteSale',
      price: 20000
    },
    {
      id: 4,
      title: 'SiteSale',
      price: 40000
    },
    {
      id: 5,
      title: 'SiteSale',
      price: 60000
    },
    {
      id: 6,
      title: 'SiteSale',
      price: 70000
    },
    {
      id: 7,
      title: 'SiteSale',
      price: 40000
    },
    {
      id: 8,
      title: 'SiteSale',
      price: 20000
    },
  ]

  return (
    <div className='containerHome'>
      <div className='leftpColumn'>
        <p className='filtersHeader'>
          Фильтры:
        </p>
        <div className='categoryDiv'>
          <div className='divOneLeftColumn'>
            <p className='categoryHeader'>
              Категории:
            </p>
            <div>
              {arrayCategory.map(k =>
                <div className='arrayCategoryClass' key={k.id}>
                  <input
                    type='checkbox'
                    className='inpCheckbox'
                  />
                  <p className='textInput'>{k.title}</p>
                </div>
              )}
              <hr className='lineCategory' />
            </div>
            <p className='categoryHeader'>
              Покупка:
            </p>
            <div>
              {arrayPay.map(k =>
                <div className='arrayCategoryClass' key={k.id}>
                  <input
                    type='checkbox'
                    className='inpCheckbox'
                  />
                  <p className='textInput'>{k.title}</p>
                </div>
              )}
              <hr className='lineCategory' />
            </div>

            <p className='categoryHeader'>
              Цена:
            </p>
            <div>
              <input
                className='price'
              />
              <div className='divSlider'>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="50"
                  class="slider"
                  id="myRange"
                />
              </div>
              <hr className='lineCategory' />
            </div>
            <p className='categoryHeader'>
              Теги:
            </p>
            <div>
              {arrayTags.map(k =>
                <div className='arrayCategoryClass' key={k.id}>
                  <input
                    type='checkbox'
                    className='inpCheckbox'
                  />
                  <p className='textInput'>{k.title}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='centerColumn'>
        <div className='divCardsNets'>
          {arrayCards.map(k =>
            <div className='cardsCardsDiv'>
              <img
                className='imgClass'
                src={one}
              />
              <p className='textHeaderCard'>{k.title}</p>
              <p className='textPriceCard'>{k.price} рублей</p>
              <div className='btns'>
                <button className='checkOutBtn'>
                  Check out
                </button>
                <button className='getBascet'>
                  <img
                    className='iconBascet'
                    src={linkBascet}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='rightColumn'>
        {/* <div className='productSale'>
          <p className='noneProduct'>
            Вы не выбрали не одного продукта
          </p> 
        </div> */}
        <div className='selectedCardsDiv'>
          <img
            src={one}
            className='imgSelectedOne'
          />
          <p className='textSectedOneNamed'>SiteSale</p>
          <p className='textSectedOnePrice'>20000 рублей</p>
          <p className='descriptionHeader'>Описание:</p>
          <p className='descriptionText'>
            Давно выяснено, что при оценке дизайна и
            композиции читаемый текст мешает сосредоточиться.
            Lorem Ipsum используют потому, что тот обеспечивает
            более или менее стандартное заполнение шаблона
          </p>
          <p className='descriptionHeader'>Категория:</p>
          <ul className='blockUl'>
            <li className='liText'>dgndsjgndskgnlkdrglkdlkgdklg</li>
          </ul>
          <p className='descriptionHeader'>dgjdngjrngkdkgrdkrglkdrgkldlkrgldkrg:</p>
          <ul className='blockUl'>
            <li className='liText'>IT и технологии</li>
            <li className='liText'>Лендинг</li>
          </ul>
          <p className='descriptionHeader'>Покупка:</p>
          <ul className='blockUl'>
            <li className='liText'>Полностью</li>
          </ul>
          <button className='btnSelectedCardsGettingBascet'>
            <img
              className='iconBascet'
              src={linkBascet}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
