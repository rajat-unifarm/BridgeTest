import {
  LiquidityAdded,
  LiquidityRemoved
} from "../generated/BridgeUpgradeable/BridgeUpgradeable"
import { LiquidityPositions } from "../generated/schema"
import { store } from '@graphprotocol/graph-ts'


export function handleLiquidityAdded(event: LiquidityAdded): void {
  let entity = new LiquidityPositions(
    event.params.index.toHexString() + "-" + event.params.account.toHexString() + "-" + event.params.tokenTicker.toHexString()
  )
  entity.index = event.params.index
  entity.account = event.params.account
  entity.tokenTicker = event.params.tokenTicker.toString()
  entity.noOfTokens = event.params.noOfTokens
  entity.save()
}

export function handleLiquidityRemoved(event: LiquidityRemoved): void {
  let id = event.params.index.toHexString() + "-" + event.params.account.toHexString() + "-" + event.params.tokenTicker.toHexString();
  let entity = LiquidityPositions.load(id);
  if(!entity) {
    return;
  }
  store.remove('Transfer', id);
}