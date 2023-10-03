import React from 'react';
import './style.scss';
import one from '../../components/img/img/1.jpg';

export default function Bascet() {
  return (
    <div className='bascetContainer'>
      <div className='blockOneBascet'>
        <div className='podBlockOneBascet'>
          <div className='bascetImg'>
            <img
              src={one}
              className='imgGettinBascet'
            />
          </div>
          <div className='bascetText'>
            <div className='settingsText'>
              <p className='namedText'>SiteSale</p>
              <p className='namedText'>
                Давно выяснено, что при оценке дизайна и
                композиции читаемый текст мешает сосредоточиться.
                Lorem Ipsum используют потому, что тот обеспечивает
                более или менее стандартное заполнение шаблона
              </p>
              <p className='priceText'>100000 рублей</p>
              <p className='namedText'>It и технолгии, лендинг</p>
            </div>
          </div>
        </div>

        <hr />
      </div>
      <div className='priceBlock'>
        <div className='blockMyGoods'>
          <button className='goToPayBtn'>
            Перейти к оплате
          </button>

        </div>
        <p className='waysPay'>
          Доступные способы оплаты
          можно выбрать при оформлении заказа
        </p>
        <div className='warningBlock'>
          <p className='payWarning'>
            Некоторые способы оплаты в
            РФ временно не доступны.
          </p>
        </div>
        <hr className='lineOknoBascet' />
        <div className='blockYourBascet'>
          <div className='itemYourBascetOne'>
            <p className='textYourBascet'>Ваша корзина</p>
          </div>
          <div className='itemYourBascetTwo'>
            <p className='quantityProduct'>1 товар</p>
          </div>
          <div className='itemYourBascetThree'>
            <p className='quantityText'>
              Товары(1)
            </p>
          </div>
          <div className='itemYourBascetFour'>
            <p className='priceQuantity'>
              100000 &#x20bd;
            </p>
          </div>
          <div className='itemYourBascetThree'>
            <p className='quantityText'>
              Итого:
            </p>
          </div>
          <div className='itemYourBascetFour'>
            <p className='priceQuantity'>
              100000 &#x20bd;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
