import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  BridgeTransactionEnd,
  BridgeTransactionInit,
  CrossTalkReceive,
  CrossTalkSend,
  Initialized,
  Linkevent,
  LiquidityAdded,
  LiquidityRemoved,
  OwnershipTransferred,
  Unlinkevent
} from "../generated/BridgeUpgradeable/BridgeUpgradeable"

export function createBridgeTransactionEndEvent(
  transferIndex: BigInt,
  toChainId: BigInt,
  account: Address,
  tokenTicker: string
): BridgeTransactionEnd {
  let bridgeTransactionEndEvent = changetype<BridgeTransactionEnd>(
    newMockEvent()
  )

  bridgeTransactionEndEvent.parameters = new Array()

  bridgeTransactionEndEvent.parameters.push(
    new ethereum.EventParam(
      "transferIndex",
      ethereum.Value.fromUnsignedBigInt(transferIndex)
    )
  )
  bridgeTransactionEndEvent.parameters.push(
    new ethereum.EventParam(
      "toChainId",
      ethereum.Value.fromUnsignedBigInt(toChainId)
    )
  )
  bridgeTransactionEndEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  bridgeTransactionEndEvent.parameters.push(
    new ethereum.EventParam(
      "tokenTicker",
      ethereum.Value.fromString(tokenTicker)
    )
  )

  return bridgeTransactionEndEvent
}

export function createBridgeTransactionInitEvent(
  transferIndex: BigInt,
  toChainId: BigInt,
  account: Address,
  tokenTicker: string,
  noOfTokens: BigInt
): BridgeTransactionInit {
  let bridgeTransactionInitEvent = changetype<BridgeTransactionInit>(
    newMockEvent()
  )

  bridgeTransactionInitEvent.parameters = new Array()

  bridgeTransactionInitEvent.parameters.push(
    new ethereum.EventParam(
      "transferIndex",
      ethereum.Value.fromUnsignedBigInt(transferIndex)
    )
  )
  bridgeTransactionInitEvent.parameters.push(
    new ethereum.EventParam(
      "toChainId",
      ethereum.Value.fromUnsignedBigInt(toChainId)
    )
  )
  bridgeTransactionInitEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  bridgeTransactionInitEvent.parameters.push(
    new ethereum.EventParam(
      "tokenTicker",
      ethereum.Value.fromString(tokenTicker)
    )
  )
  bridgeTransactionInitEvent.parameters.push(
    new ethereum.EventParam(
      "noOfTokens",
      ethereum.Value.fromUnsignedBigInt(noOfTokens)
    )
  )

  return bridgeTransactionInitEvent
}

export function createCrossTalkReceiveEvent(
  sourceChain: i32,
  destChain: i32,
  sourceAddress: Address,
  destinationAddress: Address,
  _selector: Bytes,
  _data: Bytes,
  _hash: Bytes
): CrossTalkReceive {
  let crossTalkReceiveEvent = changetype<CrossTalkReceive>(newMockEvent())

  crossTalkReceiveEvent.parameters = new Array()

  crossTalkReceiveEvent.parameters.push(
    new ethereum.EventParam(
      "sourceChain",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(sourceChain))
    )
  )
  crossTalkReceiveEvent.parameters.push(
    new ethereum.EventParam(
      "destChain",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(destChain))
    )
  )
  crossTalkReceiveEvent.parameters.push(
    new ethereum.EventParam(
      "sourceAddress",
      ethereum.Value.fromAddress(sourceAddress)
    )
  )
  crossTalkReceiveEvent.parameters.push(
    new ethereum.EventParam(
      "destinationAddress",
      ethereum.Value.fromAddress(destinationAddress)
    )
  )
  crossTalkReceiveEvent.parameters.push(
    new ethereum.EventParam(
      "_selector",
      ethereum.Value.fromFixedBytes(_selector)
    )
  )
  crossTalkReceiveEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )
  crossTalkReceiveEvent.parameters.push(
    new ethereum.EventParam("_hash", ethereum.Value.fromFixedBytes(_hash))
  )

  return crossTalkReceiveEvent
}

export function createCrossTalkSendEvent(
  sourceChain: i32,
  destChain: i32,
  sourceAddress: Address,
  destinationAddress: Address,
  _selector: Bytes,
  _data: Bytes,
  _hash: Bytes
): CrossTalkSend {
  let crossTalkSendEvent = changetype<CrossTalkSend>(newMockEvent())

  crossTalkSendEvent.parameters = new Array()

  crossTalkSendEvent.parameters.push(
    new ethereum.EventParam(
      "sourceChain",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(sourceChain))
    )
  )
  crossTalkSendEvent.parameters.push(
    new ethereum.EventParam(
      "destChain",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(destChain))
    )
  )
  crossTalkSendEvent.parameters.push(
    new ethereum.EventParam(
      "sourceAddress",
      ethereum.Value.fromAddress(sourceAddress)
    )
  )
  crossTalkSendEvent.parameters.push(
    new ethereum.EventParam(
      "destinationAddress",
      ethereum.Value.fromAddress(destinationAddress)
    )
  )
  crossTalkSendEvent.parameters.push(
    new ethereum.EventParam(
      "_selector",
      ethereum.Value.fromFixedBytes(_selector)
    )
  )
  crossTalkSendEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )
  crossTalkSendEvent.parameters.push(
    new ethereum.EventParam("_hash", ethereum.Value.fromFixedBytes(_hash))
  )

  return crossTalkSendEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createLinkeventEvent(
  ChainID: i32,
  linkedContract: Address
): Linkevent {
  let linkeventEvent = changetype<Linkevent>(newMockEvent())

  linkeventEvent.parameters = new Array()

  linkeventEvent.parameters.push(
    new ethereum.EventParam(
      "ChainID",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(ChainID))
    )
  )
  linkeventEvent.parameters.push(
    new ethereum.EventParam(
      "linkedContract",
      ethereum.Value.fromAddress(linkedContract)
    )
  )

  return linkeventEvent
}

export function createLiquidityAddedEvent(
  index: BigInt,
  account: Address,
  tokenTicker: string,
  noOfTokens: BigInt
): LiquidityAdded {
  let liquidityAddedEvent = changetype<LiquidityAdded>(newMockEvent())

  liquidityAddedEvent.parameters = new Array()

  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenTicker",
      ethereum.Value.fromString(tokenTicker)
    )
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "noOfTokens",
      ethereum.Value.fromUnsignedBigInt(noOfTokens)
    )
  )

  return liquidityAddedEvent
}

export function createLiquidityRemovedEvent(
  index: BigInt,
  account: Address,
  tokenTicker: string
): LiquidityRemoved {
  let liquidityRemovedEvent = changetype<LiquidityRemoved>(newMockEvent())

  liquidityRemovedEvent.parameters = new Array()

  liquidityRemovedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  liquidityRemovedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  liquidityRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenTicker",
      ethereum.Value.fromString(tokenTicker)
    )
  )

  return liquidityRemovedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createUnlinkeventEvent(
  ChainID: i32,
  linkedContract: Address
): Unlinkevent {
  let unlinkeventEvent = changetype<Unlinkevent>(newMockEvent())

  unlinkeventEvent.parameters = new Array()

  unlinkeventEvent.parameters.push(
    new ethereum.EventParam(
      "ChainID",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(ChainID))
    )
  )
  unlinkeventEvent.parameters.push(
    new ethereum.EventParam(
      "linkedContract",
      ethereum.Value.fromAddress(linkedContract)
    )
  )

  return unlinkeventEvent
}
