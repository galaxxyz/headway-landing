interface IObjectKeys {
  [key: string]: number;
}

export default interface Active extends IObjectKeys {
  all: 0 | 1;
  selfgrowth: 0 | 1;
  happiness: 0 | 1;
  moneyInvesment: 0 | 1;
  negotiation: 0 | 1;
  health: 0 | 1;
  spirituality: 0 | 1;
  productivity: 0 | 1;
  businessCareer: 0 | 1;
  loveSex: 0 | 1;
  sportsFitness: 0 | 1;
}
