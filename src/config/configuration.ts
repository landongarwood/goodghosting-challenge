import Web3 from "web3";
import { Contract } from "web3-eth-contract"
import { AbiItem } from 'web3-utils'

import * as goodGhostingContract from "../contracts/goodghosting.json"

export default () => {
  const NODE_URL = process.env.NODE_URL;
  const provider = new Web3.providers.HttpProvider(NODE_URL);
  const web3 = new Web3(provider);
  const ggContract: Contract = new web3.eth.Contract(goodGhostingContract.abi as AbiItem[], goodGhostingContract.address);

  return {
    ggContract,
  };
};
