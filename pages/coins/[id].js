import React from "react";
import CoinDetailsPage from "../../components/coinDetails/CoinDetailsPage";
import { getEventById } from "../../dummyData";
import { useRouter } from "next/router";

const Coin = ({ coin }) => {
  // const router = useRouter();

  // const coinId = router.query.eventId;

  // const coin = getEventById(coinId);

  if (!coin) {
    return (
      // <ErrorAlert>
      <p>event is not found</p>
      // </ErrorAlert>
    );
  }

  return (
    <div>
      {/* <h1>hello sunil</h1> */}
      <CoinDetailsPage
        marketRank={coin.market_cap_rank}
        shotName={coin.symbol}
        title={coin.name}
        description={coin.description.sl}
        price={coin.market_data.current_price.usd}
        marketCap={coin.market_data.market_cap.usd}
        circulatingSupply={coin.market_data.circulating_supply}
        totalSupply={coin.market_data.total_supply}
        website={coin.links.homepage}
        image={coin.image.small}
        explorer={coin.links.blockchain_site[0]}
        high24={coin.market_data.high_24h.usd}
        low24={coin.market_data.low_24h.usd}
        priceChangePercentage24h={coin.market_data.price_change_percentage_24h}
      />
    </div>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
