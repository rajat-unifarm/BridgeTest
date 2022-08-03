import { BigInt } from "@graphprotocol/graph-ts"
import {
  BridgeUpgradeable,
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
import { ExampleEntity } from "../generated/schema"

export function handleBridgeTransactionEnd(event: BridgeTransactionEnd): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.transferIndex = event.params.transferIndex
  entity.toChainId = event.params.toChainId

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.boosterConfig(...)
  // - contract.chainId(...)
  // - contract.crossChainGas(...)
  // - contract.crossChainTransferOut(...)
  // - contract.currentIndex(...)
  // - contract.currentTransferIndex(...)
  // - contract.epochs(...)
  // - contract.feePoolUpgradeable(...)
  // - contract.fetchFeetToken(...)
  // - contract.fetchHandler(...)
  // - contract.fetchLink(...)
  // - contract.fetchLinkSetter(...)
  // - contract.getEpochTotalDepositors(...)
  // - contract.getEpochTotalFees(...)
  // - contract.getEpochsLength(...)
  // - contract.getToken(...)
  // - contract.getTokenTotalLiquidity(...)
  // - contract.getUserTotalDeposit(...)
  // - contract.hasBooster(...)
  // - contract.liquidityPosition(...)
  // - contract.maxBips(...)
  // - contract.nextEpochBlock(...)
  // - contract.owner(...)
  // - contract.routerSync(...)
  // - contract.supportsInterface(...)
  // - contract.tokenBridgeRegistryUpgradeable(...)
  // - contract.totalBoostedUsers(...)
  // - contract.totalLiquidity(...)
  // - contract.transferIn(...)
  // - contract.transferMapping(...)
}

export function handleBridgeTransactionInit(
  event: BridgeTransactionInit
): void {}

export function handleCrossTalkReceive(event: CrossTalkReceive): void {}

export function handleCrossTalkSend(event: CrossTalkSend): void {}

export function handleInitialized(event: Initialized): void {}

export function handleLinkevent(event: Linkevent): void {}

export function handleLiquidityAdded(event: LiquidityAdded): void {}

export function handleLiquidityRemoved(event: LiquidityRemoved): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleUnlinkevent(event: Unlinkevent): void {}
