import { useEffect, useState } from "react"
import Container from "../components/container/container"
import CoinInfo from "../components/coinInfo/coinInfo"

function HomePage() {
  const [data, setData] = useState()

  async function getCryptoData() {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=brl&days=7`)
    const responseData = await response.json()
    setData(responseData)
  }

  useEffect(() => {
    getCryptoData()
  }, [data])

  return (
    <Container>
      <h1>BitcoinDev</h1>
      <p>Acompanhe o gráfico da principal cryptomoeda da atualidade.</p>
      <div>
      <CoinInfo prices={data?.prices}
      />
      </div>
    </Container>
  )
}

export default HomePage