const TOKEN_TO_AGGREGATION_PROOF_CACHE = {
  mina: "mina_aggregation_cache",
  bitcoin: "btc_aggregation_cache",
  ethereum: "eth_aggregation_cache",
  solana: "sol_aggregation_cache",
  ripple: "xrp_aggregation_cache",
  cardano: "ada_aggregation_cache",
  avalanche: "avax_aggregation_cache",
  polygon: "matic_aggregation_cache",
  chainlink: "link_aggregation_cache",
  dogecoin: "doge_aggregation_cache",
};

const TOKEN_TO_CACHE = {
  mina: "mina_cache",
  bitcoin: "btc_cache",
  ethereum: "eth_cache",
  solana: "sol_cache",
  ripple: "xrp_cache",
  cardano: "ada_cache",
  avalanche: "avax_cache",
  polygon: "matic_cache",
  chainlink: "link_cache",
  dogecoin: "doge_cache",
};

const TOKEN_TO_SYMBOL = {
  mina: "MINA",
  bitcoin: "BTC",
  ethereum: "ETH",
  solana: "SOL",
  ripple: "XRP",
  avalanche: "AVAX",
  cardano: "ADA",
  polygon: "MATIC",
  chainlink: "LINK",
  dogecoin: "DOGE",
};

module.exports = {
  TOKEN_TO_CACHE,
  TOKEN_TO_SYMBOL,
  TOKEN_TO_AGGREGATION_PROOF_CACHE,
};
