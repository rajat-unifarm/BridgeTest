import {
  ClaimedRewards as ClaimedRewardsEvent
} from "../generated/FeePoolUpgradeable/FeePoolUpgradeable"
import {
  ClaimedReward
} from "../generated/schema"

export function handleClaimedReward(event: ClaimedRewardsEvent): void {
  let entity = new ClaimedReward(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  entity.index = event.params.index
  entity.account = event.params.account
  entity.tokenTicker = event.params.tokenTicker
  entity.noOfTokens = event.params.noOfTokens
  entity.claimTimestamp = event.params.claimTimestamp
  entity.txHash = event.transaction.hash
  entity.save()
}