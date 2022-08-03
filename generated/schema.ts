// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class LiquidityPositions extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LiquidityPositions entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LiquidityPositions must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LiquidityPositions", id.toString(), this);
    }
  }

  static load(id: string): LiquidityPositions | null {
    return changetype<LiquidityPositions | null>(
      store.get("LiquidityPositions", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get tokenTicker(): string {
    let value = this.get("tokenTicker");
    return value!.toString();
  }

  set tokenTicker(value: string) {
    this.set("tokenTicker", Value.fromString(value));
  }

  get noOfTokens(): BigInt {
    let value = this.get("noOfTokens");
    return value!.toBigInt();
  }

  set noOfTokens(value: BigInt) {
    this.set("noOfTokens", Value.fromBigInt(value));
  }
}

export class ClaimedRewards extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ClaimedRewards entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ClaimedRewards must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ClaimedRewards", id.toString(), this);
    }
  }

  static load(id: string): ClaimedRewards | null {
    return changetype<ClaimedRewards | null>(store.get("ClaimedRewards", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get tokenTicker(): string {
    let value = this.get("tokenTicker");
    return value!.toString();
  }

  set tokenTicker(value: string) {
    this.set("tokenTicker", Value.fromString(value));
  }

  get noOfTokens(): BigInt {
    let value = this.get("noOfTokens");
    return value!.toBigInt();
  }

  set noOfTokens(value: BigInt) {
    this.set("noOfTokens", Value.fromBigInt(value));
  }

  get claimTimestamp(): BigInt {
    let value = this.get("claimTimestamp");
    return value!.toBigInt();
  }

  set claimTimestamp(value: BigInt) {
    this.set("claimTimestamp", Value.fromBigInt(value));
  }
}