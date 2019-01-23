window.Seed = (()=>{
  const api = [
    {
    from: "eth",
    to: "xmr",
    min: 0.2742146,
    max: 30.4682977,
    rate: 2.5542626,
    minerFee: 0.0309371,
    },
    {
    from: "eth",
    to: "btc",
    min: 0.2742146,
    max: 45.7024466,
    rate: 0.032221,
    minerFee: 0.0000918,
    },
    {
    from: "eth",
    to: "zec",
    min: 0.2742146,
    max: 45.7024466,
    rate: 2.2006438,
    minerFee: 0.001646,
    },
    {
    from: "eth",
    to: "ltc",
    min: 0.2742146,
    max: 45.7024466,
    rate: 3.6021506,
    minerFee: 0.0018575,
    },
    {
    from: "eth",
    to: "bch",
    min: 0.2742146,
    max: 45.7024466,
    rate: 0.8648258,
    minerFee: 0.0004038,
    }];

    return { api };
})();