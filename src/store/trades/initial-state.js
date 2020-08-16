export default {
  entries: [
    {
      id: 1,
      name: "Pero",
      assetId: 1,
      amount: 1,
      price: 10000,
      targetPrice: 12000,
      status: "open",
    },
    {
      id: 2,
      name: "mirko",
      assetId: 2,
      amount: 2,
      price: 20000,
      targetPrice: 24000,
      status: "closed",
      note: "long term trade",
    },
  ],
  selectedTrade: { amount: 0, price: 0, status: "open" },
}
