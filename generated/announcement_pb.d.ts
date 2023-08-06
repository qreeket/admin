import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class CreateAnnouncementRequest extends jspb.Message {
  getAnnouncement(): Announcement | undefined;
  setAnnouncement(value?: Announcement): CreateAnnouncementRequest;
  hasAnnouncement(): boolean;
  clearAnnouncement(): CreateAnnouncementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAnnouncementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAnnouncementRequest): CreateAnnouncementRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAnnouncementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAnnouncementRequest;
  static deserializeBinaryFromReader(message: CreateAnnouncementRequest, reader: jspb.BinaryReader): CreateAnnouncementRequest;
}

export namespace CreateAnnouncementRequest {
  export type AsObject = {
    announcement?: Announcement.AsObject,
  }
}

export class UpdateAnnouncementRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateAnnouncementRequest;

  getAnnouncement(): Announcement | undefined;
  setAnnouncement(value?: Announcement): UpdateAnnouncementRequest;
  hasAnnouncement(): boolean;
  clearAnnouncement(): UpdateAnnouncementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAnnouncementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAnnouncementRequest): UpdateAnnouncementRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAnnouncementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAnnouncementRequest;
  static deserializeBinaryFromReader(message: UpdateAnnouncementRequest, reader: jspb.BinaryReader): UpdateAnnouncementRequest;
}

export namespace UpdateAnnouncementRequest {
  export type AsObject = {
    id: string,
    announcement?: Announcement.AsObject,
  }
}

export class AnnouncementsList extends jspb.Message {
  getAnnouncementsList(): Array<Announcement>;
  setAnnouncementsList(value: Array<Announcement>): AnnouncementsList;
  clearAnnouncementsList(): AnnouncementsList;
  addAnnouncements(value?: Announcement, index?: number): Announcement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnouncementsList.AsObject;
  static toObject(includeInstance: boolean, msg: AnnouncementsList): AnnouncementsList.AsObject;
  static serializeBinaryToWriter(message: AnnouncementsList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnouncementsList;
  static deserializeBinaryFromReader(message: AnnouncementsList, reader: jspb.BinaryReader): AnnouncementsList;
}

export namespace AnnouncementsList {
  export type AsObject = {
    announcementsList: Array<Announcement.AsObject>,
  }
}

export class Announcement extends jspb.Message {
  getId(): string;
  setId(value: string): Announcement;

  getTitle(): string;
  setTitle(value: string): Announcement;

  getBody(): string;
  setBody(value: string): Announcement;

  getAuthor(): string;
  setAuthor(value: string): Announcement;

  getImageUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setImageUrl(value?: google_protobuf_wrappers_pb.StringValue): Announcement;
  hasImageUrl(): boolean;
  clearImageUrl(): Announcement;

  getLinkUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLinkUrl(value?: google_protobuf_wrappers_pb.StringValue): Announcement;
  hasLinkUrl(): boolean;
  clearLinkUrl(): Announcement;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Announcement;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Announcement;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Announcement;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Announcement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Announcement.AsObject;
  static toObject(includeInstance: boolean, msg: Announcement): Announcement.AsObject;
  static serializeBinaryToWriter(message: Announcement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Announcement;
  static deserializeBinaryFromReader(message: Announcement, reader: jspb.BinaryReader): Announcement;
}

export namespace Announcement {
  export type AsObject = {
    id: string,
    title: string,
    body: string,
    author: string,
    imageUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    linkUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ImageUrlCase { 
    _IMAGE_URL_NOT_SET = 0,
    IMAGE_URL = 5,
  }

  export enum LinkUrlCase { 
    _LINK_URL_NOT_SET = 0,
    LINK_URL = 6,
  }
}

