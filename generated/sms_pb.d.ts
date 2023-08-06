import * as jspb from 'google-protobuf'



export class VerifyPhoneRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyPhoneRequest;

  getVerificationCode(): string;
  setVerificationCode(value: string): VerifyPhoneRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPhoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPhoneRequest): VerifyPhoneRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyPhoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPhoneRequest;
  static deserializeBinaryFromReader(message: VerifyPhoneRequest, reader: jspb.BinaryReader): VerifyPhoneRequest;
}

export namespace VerifyPhoneRequest {
  export type AsObject = {
    phoneNumber: string,
    verificationCode: string,
  }
}

