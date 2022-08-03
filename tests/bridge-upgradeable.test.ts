import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { ExampleEntity } from "../generated/schema"
import { BridgeTransactionEnd } from "../generated/BridgeUpgradeable/BridgeUpgradeable"
import { handleBridgeTransactionEnd } from "../src/bridge-upgradeable"
import { createBridgeTransactionEndEvent } from "./bridge-upgradeable-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let transferIndex = BigInt.fromI32(234)
    let toChainId = BigInt.fromI32(234)
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenTicker = "Example string value"
    let newBridgeTransactionEndEvent = createBridgeTransactionEndEvent(
      transferIndex,
      toChainId,
      account,
      tokenTicker
    )
    handleBridgeTransactionEnd(newBridgeTransactionEndEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExampleEntity created and stored", () => {
    assert.entityCount("ExampleEntity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "transferIndex",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "toChainId",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "tokenTicker",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
