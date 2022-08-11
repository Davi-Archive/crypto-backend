import { useEffect, useState } from "react"
import Container from "../components/container/container"
import CoinInfo from "../components/coinInfo/coinInfo"
import styles from './index.module.css'

function HomePage() {
  const [data, setData] = useState()
  const [qtDays, setQtDays] = useState(7)
  const [coin, setCoin] = useState('bitcoin')
  const [selectedCoin, setSelectedCoin] = useState(coin)

  async function getCryptoData() {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=brl&days=${qtDays}`)
    const responseData = await response.json()
    setData(responseData)
  }

  useEffect(() => {
    getCryptoData()

    switch (coin){
    case 'bitcoin':
      setSelectedCoin('BTC')
      break
    case 'binance-peg-dogecoin':
      setSelectedCoin('DOGE')
      break
      case 'ethereum':
        setSelectedCoin('ETH')
        break
      case 'ripple':
        setSelectedCoin('XRP')
        break
      case 'shiba-inu':
        setSelectedCoin('SHIB')
        break
      case 'binance-peg-bitcoin-cash':
        setSelectedCoin('BCH')
        break
      case 'heco-peg-bnb':
        setSelectedCoin('BNB')
        break
      case 'apecoin':
        setSelectedCoin('APE')
        break
      case 'solana':
        setSelectedCoin('SOL')
        break
      case 'binance-peg-cardano':
        setSelectedCoin('ADA')
        break
        default:
      setSelectedCoin('Não Reconhecido')
      break
    }

  }, [qtDays, coin])


  return (
    <div className={styles.wrapper}>
      <Container>
        <p className={styles.titulo}><strong>CryptoGraphic APP</strong> Acompanhe o gráfico das principais cryptomoeda da atualidade. API por <a href="https://www.coingecko.com/" target="_blank">Gecko</a> </p>
        <div className={styles.daysInput}>
          <h3>Atualização de quantos dias?</h3>
          <input className={styles.inputBoxDays} type="number" value={qtDays} min={1} onChange={(e) => setQtDays(e.target.value)} />
        </div>
        <div className={styles.seletorMoeda}>
         <table>
          <caption>
          </caption>
          <tbody>
          <tr>
              <td>
          <h3>Qual moeda deseja ver?</h3>
          <br />
               </td>
          </tr>
            <tr>
              <td>
                <input type="radio" name="moeda-tipo"
                className={styles.coinType} value='bitcoin' onChange={(e) => setCoin(e.target.value)} />Bitcoin
              </td>
              <td id={styles.moedaSelecionada} rowSpan="4">Moeda = <span className={styles.corMoeda}>{selectedCoin}</span></td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="moeda-tipo"
                className={styles.coinType} value='ethereum' onChange={(e) => setCoin(e.target.value)} />Ethereum
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="moeda-tipo"
                className={styles.coinType} value='binance-peg-dogecoin' onChange={(e) => setCoin(e.target.value)} />Dogecoin
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="moeda-tipo"
                className={styles.coinType} value='ripple' onChange={(e) => setCoin(e.target.value)} />Ripple
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="moeda-tipo"
                className={styles.coinType} value='shiba-inu' onChange={(e) => setCoin(e.target.value)} />Shiba Inu
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="moeda-tipo"
                className={styles.coinType} value='binance-peg-bitcoin-cash' onChange={(e) => setCoin(e.target.value)} />Bitcoin Cash
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="moeda-tipo"
                className={styles.coinType} value='heco-peg-bnb' onChange={(e) => setCoin(e.target.value)} />Binance Coin
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="moeda-tipo"
                className={styles.coinType} value='apecoin' onChange={(e) => setCoin(e.target.value)} />Ape Coin
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="moeda-tipo"
                className={styles.coinType} value='solana' onChange={(e) => setCoin(e.target.value)} />Solana Coin
              </td>
            </tr>
            <tr>
              <td>
                <input type="radio" name="moeda-tipo"
                className={styles.coinType} value='binance-peg-cardano' onChange={(e) => setCoin(e.target.value)} />Cardano Coin
              </td>
            </tr>
          </tbody>
         </table>
        </div>
        <div>
        </div>
        <div className={styles.grafico}>
          <CoinInfo prices={data?.prices}
          />
        </div>
      </Container>
    </div>
  )
}

export default HomePage