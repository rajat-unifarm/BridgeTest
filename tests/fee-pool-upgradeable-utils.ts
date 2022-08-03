import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ClaimedRewards,
  FeePoolUpgradeableInitialized,
  FeePoolUpgradeableOwnershipTransferred
} from "../generated/FeePoolUpgradeable/FeePoolUpgradeable"

export function createClaimedRewardsEvent(
  index: BigInt,
  account: Address,
  tokenTicker: string,
  noOfTokens: BigInt,
  claimTimestamp: BigInt
): ClaimedRewards {
  let claimedRewardsEvent = changetype<ClaimedRewards>(newMockEvent())

  claimedRewardsEvent.parameters = new Array()

  claimedRewardsEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  claimedRewardsEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  claimedRewardsEvent.parameters.push(
    new ethereum.EventParam(
      "tokenTicker",
      ethereum.Value.fromString(tokenTicker)
    )
  )
  claimedRewardsEvent.parameters.push(
    new ethereum.EventParam(
      "noOfTokens",
      ethereum.Value.fromUnsignedBigInt(noOfTokens)
    )
  )
  claimedRewardsEvent.parameters.push(
    new ethereum.EventParam(
      "claimTimestamp",
      ethereum.Value.fromUnsignedBigInt(claimTimestamp)
    )
  )

  return claimedRewardsEvent
}

export function createFeePoolUpgradeableInitializedEvent(
  version: i32
): FeePoolUpgradeableInitialized {
  let feePoolUpgradeableInitializedEvent = changetype<
    FeePoolUpgradeableInitialized
  >(newMockEvent())

  feePoolUpgradeableInitializedEvent.parameters = new Array()

  feePoolUpgradeableInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return feePoolUpgradeableInitializedEvent
}

export function createFeePoolUpgradeableOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): FeePoolUpgradeableOwnershipTransferred {
  let feePoolUpgradeableOwnershipTransferredEvent = changetype<
    FeePoolUpgradeableOwnershipTransferred
  >(newMockEvent())

  feePoolUpgradeableOwnershipTransferredEvent.parameters = new Array()

  feePoolUpgradeableOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  feePoolUpgradeableOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return feePoolUpgradeableOwnershipTransferredEvent
}
