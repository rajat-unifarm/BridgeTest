import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ClaimedRewards } from "../generated/schema"
import { ClaimedRewards as ClaimedRewardsEvent } from "../generated/FeePoolUpgradeable/FeePoolUpgradeable"
import { handleClaimedRewards } from "../src/fee-pool-upgradeable"
import { createClaimedRewardsEvent } from "./fee-pool-upgradeable-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let index = BigInt.fromI32(234)
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenTicker = "Example string value"
    let noOfTokens = BigInt.fromI32(234)
    let claimTimestamp = BigInt.fromI32(234)
    let newClaimedRewardsEvent = createClaimedRewardsEvent(
      index,
      account,
      tokenTicker,
      noOfTokens,
      claimTimestamp
    )
    handleClaimedRewards(newClaimedRewardsEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ClaimedRewards created and stored", () => {
    assert.entityCount("ClaimedRewards", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ClaimedRewards",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "index",
      "234"
    )
    assert.fieldEquals(
      "ClaimedRewards",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ClaimedRewards",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenTicker",
      "Example string value"
    )
    assert.fieldEquals(
      "ClaimedRewards",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "noOfTokens",
      "234"
    )
    assert.fieldEquals(
      "ClaimedRewards",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "claimTimestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
