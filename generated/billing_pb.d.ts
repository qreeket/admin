import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ListTransactionsResponse extends jspb.Message {
  getTransactionsList(): Array<Transaction>;
  setTransactionsList(value: Array<Transaction>): ListTransactionsResponse;
  clearTransactionsList(): ListTransactionsResponse;
  addTransactions(value?: Transaction, index?: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransactionsResponse): ListTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransactionsResponse;
  static deserializeBinaryFromReader(message: ListTransactionsResponse, reader: jspb.BinaryReader): ListTransactionsResponse;
}

export namespace ListTransactionsResponse {
  export type AsObject = {
    transactionsList: Array<Transaction.AsObject>,
  }
}

export class ChargeRequest extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): ChargeRequest;

  getDescription(): string;
  setDescription(value: string): ChargeRequest;

  getAmount(): number;
  setAmount(value: number): ChargeRequest;

  getCurrency(): string;
  setCurrency(value: string): ChargeRequest;

  getSource(): string;
  setSource(value: string): ChargeRequest;

  getCustomer(): string;
  setCustomer(value: string): ChargeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeRequest): ChargeRequest.AsObject;
  static serializeBinaryToWriter(message: ChargeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeRequest;
  static deserializeBinaryFromReader(message: ChargeRequest, reader: jspb.BinaryReader): ChargeRequest;
}

export namespace ChargeRequest {
  export type AsObject = {
    label: string,
    description: string,
    amount: number,
    currency: string,
    source: string,
    customer: string,
  }
}

export class ChargeResponse extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): ChargeResponse;

  getStatus(): string;
  setStatus(value: string): ChargeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeResponse): ChargeResponse.AsObject;
  static serializeBinaryToWriter(message: ChargeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeResponse;
  static deserializeBinaryFromReader(message: ChargeResponse, reader: jspb.BinaryReader): ChargeResponse;
}

export namespace ChargeResponse {
  export type AsObject = {
    transactionId: string,
    status: string,
  }
}

export class Transaction extends jspb.Message {
  getId(): string;
  setId(value: string): Transaction;

  getLabel(): string;
  setLabel(value: string): Transaction;

  getDescription(): string;
  setDescription(value: string): Transaction;

  getAmount(): number;
  setAmount(value: number): Transaction;

  getCurrency(): string;
  setCurrency(value: string): Transaction;

  getSource(): string;
  setSource(value: string): Transaction;

  getCustomer(): string;
  setCustomer(value: string): Transaction;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Transaction;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Transaction;

  getStatus(): string;
  setStatus(value: string): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    id: string,
    label: string,
    description: string,
    amount: number,
    currency: string,
    source: string,
    customer: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }
}

