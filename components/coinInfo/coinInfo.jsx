import styles from './coinInfo.module.css'
import Moment  from 'moment'

export default function CoinInfo({prices}){
    return(
        <div className={styles.CoinInfo}>
               {
          prices?.map((data, pos) =>
            <div key={`market-info-price-${pos}`}>
              {Moment(data[0]).format('DD/MM/YYYY - HH:MM')} - R${data[1]}
            </div>
          )
            }; 
        </div>
    )
}