import {
  ClaimedRewards as ClaimedRewardsEvent
} from "../generated/FeePoolUpgradeable/FeePoolUpgradeable"
import {
  ClaimedRewards
} from "../generated/schema"

export function handleClaimedRewards(event: ClaimedRewardsEvent): void {
  let entity = new ClaimedRewards(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.index = event.params.index
  entity.account = event.params.account
  entity.tokenTicker = event.params.tokenTicker.toString()
  entity.noOfTokens = event.params.noOfTokens
  entity.claimTimestamp = event.params.claimTimestamp
  entity.save()
}