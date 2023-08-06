import * as jspb from 'google-protobuf'



export class UploadMediaRequest extends jspb.Message {
  getMedia(): Uint8Array | string;
  getMedia_asU8(): Uint8Array;
  getMedia_asB64(): string;
  setMedia(value: Uint8Array | string): UploadMediaRequest;

  getType(): MediaType;
  setType(value: MediaType): UploadMediaRequest;

  getName(): string;
  setName(value: string): UploadMediaRequest;
  hasName(): boolean;
  clearName(): UploadMediaRequest;

  getOwner(): string;
  setOwner(value: string): UploadMediaRequest;
  hasOwner(): boolean;
  clearOwner(): UploadMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadMediaRequest): UploadMediaRequest.AsObject;
  static serializeBinaryToWriter(message: UploadMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadMediaRequest;
  static deserializeBinaryFromReader(message: UploadMediaRequest, reader: jspb.BinaryReader): UploadMediaRequest;
}

export namespace UploadMediaRequest {
  export type AsObject = {
    media: Uint8Array | string,
    type: MediaType,
    name?: string,
    owner?: string,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 3,
  }

  export enum OwnerCase { 
    _OWNER_NOT_SET = 0,
    OWNER = 4,
  }
}

export class UploadMediaResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): UploadMediaResponse;

  getSize(): number;
  setSize(value: number): UploadMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadMediaResponse): UploadMediaResponse.AsObject;
  static serializeBinaryToWriter(message: UploadMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadMediaResponse;
  static deserializeBinaryFromReader(message: UploadMediaResponse, reader: jspb.BinaryReader): UploadMediaResponse;
}

export namespace UploadMediaResponse {
  export type AsObject = {
    url: string,
    size: number,
  }
}

export enum MediaType { 
  IMAGE = 0,
  VIDEO = 1,
}
