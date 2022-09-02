import { BigInt, log, store } from '@graphprotocol/graph-ts';
import {
  LiquidityAdded,
  LiquidityRemoved
} from "../generated/BridgeUpgradeable/BridgeUpgradeable";
import { LiquidityPosition } from "../generated/schema";

export function handleLiquidityAdded(event: LiquidityAdded): void {
  log.info('Inside handleLiquidityAdded() function: index: {}  account: {}  tokenTicker: {}  noOfTokens: {}', 
    [event.params.index.toString(), event.params.account.toHexString(), event.params.tokenTicker, 
    event.params.noOfTokens.toString()]
  );
  let id = event.params.index.toString() + "-" + event.params.account.toHexString() + "-" + event.params.tokenTicker;
  log.info("ID: {}", [id]);
  
  let entity = new LiquidityPosition(id)
  entity.index = event.params.index
  entity.account = event.params.account
  entity.tokenTicker = event.params.tokenTicker
  entity.noOfTokens = event.params.noOfTokens
  entity.status = 1
  entity.addTimestamp = event.block.timestamp
  entity.removeTimestamp = new BigInt(0)

  // let decodedData = ethereum.decode("(uint256,address,string,uint256)", event.transaction.input);
  // const dataToDecode = getTxnInputDataToDecode(event)
  // const decodedData = ethereum.decode("(uint256,address,string,uint256)", dataToDecode);
  // // log.info('First field: {}', [decoded.toTuple()[0].toString()];
  // if(decodedData) {
  //   log.info("decoded tokenTicker: {}", [decodedData.toString()]);
  //   // entity.tokenTicker = decodedData.toString();
  // }
  // else {
  //   log.info("Decoding failed", [])
  // }
  // else {
  //   entity.tokenTicker = event.params.tokenTicker.toHexString()
  // }

  entity.save()
}

export function handleLiquidityRemoved(event: LiquidityRemoved): void {
  let id = event.params.index.toString() + "-" + event.params.account.toHexString() + "-" + event.params.tokenTicker;
  let entity = LiquidityPosition.load(id);
  if(!entity) {
    return;
  }
  // store.remove('LiquidityPosition', id);
  entity.status = 2
  entity.removeTimestamp = event.block.timestamp
  entity.save()
}