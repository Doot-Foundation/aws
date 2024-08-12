const AggregationModule = require("./AggregationModule");

function processFloatString(input) {
  const floatValue = parseFloat(input);

  if (isNaN(floatValue)) {
    return "Invalid input";
  }

  const multipliedValue = floatValue * Math.pow(10, 10);
  const integerValue = Math.floor(multipliedValue);
  const resultString = integerValue.toString();

  return resultString;
}

async function generateProofCompatiblePrices(prices) {
  return prices.map((price) => BigInt(processFloatString(price.toString())));
}

async function generateAggregationProof(prices, lastProof, isBase) {
  const proofCompatiblePrices = await generateProofCompatiblePrices(prices);

  const aggregationResults = await AggregationModule(
    proofCompatiblePrices,
    lastProof,
    isBase
  );

  return aggregationResults;
}

module.exports = generateAggregationProof;
