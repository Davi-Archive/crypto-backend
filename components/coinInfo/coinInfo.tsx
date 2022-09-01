import styles from './coinInfo.module.scss'
import CoinChart from '../coinChart/coinChart'


export default function CoinInfo({prices}:any){
    return(
        <div className={styles.CoinInfo}>
             <CoinChart prices={ prices } />
        </div>
    )
}