import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class MessageChat extends jspb.Message {
  getId(): string;
  setId(value: string): MessageChat;

  getSender(): string;
  setSender(value: string): MessageChat;

  getRecipient(): string;
  setRecipient(value: string): MessageChat;

  getBody(): string;
  setBody(value: string): MessageChat;

  getStatus(): MessageStatus;
  setStatus(value: MessageStatus): MessageChat;

  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): MessageChat;
  hasCreatedat(): boolean;
  clearCreatedat(): MessageChat;

  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): MessageChat;
  hasUpdatedat(): boolean;
  clearUpdatedat(): MessageChat;

  getSentat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSentat(value?: google_protobuf_timestamp_pb.Timestamp): MessageChat;
  hasSentat(): boolean;
  clearSentat(): MessageChat;

  getReceivedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReceivedat(value?: google_protobuf_timestamp_pb.Timestamp): MessageChat;
  hasReceivedat(): boolean;
  clearReceivedat(): MessageChat;

  getReadat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadat(value?: google_protobuf_timestamp_pb.Timestamp): MessageChat;
  hasReadat(): boolean;
  clearReadat(): MessageChat;

  getDeletedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedat(value?: google_protobuf_timestamp_pb.Timestamp): MessageChat;
  hasDeletedat(): boolean;
  clearDeletedat(): MessageChat;

  getReadbyList(): Array<string>;
  setReadbyList(value: Array<string>): MessageChat;
  clearReadbyList(): MessageChat;
  addReadby(value: string, index?: number): MessageChat;

  getAttachment(): string;
  setAttachment(value: string): MessageChat;
  hasAttachment(): boolean;
  clearAttachment(): MessageChat;

  getAttachmenttype(): MessageAttachmentType;
  setAttachmenttype(value: MessageAttachmentType): MessageChat;

  getReactionsList(): Array<string>;
  setReactionsList(value: Array<string>): MessageChat;
  clearReactionsList(): MessageChat;
  addReactions(value: string, index?: number): MessageChat;

  getMentionsList(): Array<string>;
  setMentionsList(value: Array<string>): MessageChat;
  clearMentionsList(): MessageChat;
  addMentions(value: string, index?: number): MessageChat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageChat.AsObject;
  static toObject(includeInstance: boolean, msg: MessageChat): MessageChat.AsObject;
  static serializeBinaryToWriter(message: MessageChat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageChat;
  static deserializeBinaryFromReader(message: MessageChat, reader: jspb.BinaryReader): MessageChat;
}

export namespace MessageChat {
  export type AsObject = {
    id: string,
    sender: string,
    recipient: string,
    body: string,
    status: MessageStatus,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sentat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    receivedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    readat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    readbyList: Array<string>,
    attachment?: string,
    attachmenttype: MessageAttachmentType,
    reactionsList: Array<string>,
    mentionsList: Array<string>,
  }

  export enum AttachmentCase { 
    _ATTACHMENT_NOT_SET = 0,
    ATTACHMENT = 14,
  }
}

export class MessageThread extends jspb.Message {
  getId(): string;
  setId(value: string): MessageThread;

  getSender(): string;
  setSender(value: string): MessageThread;

  getRecipient(): string;
  setRecipient(value: string): MessageThread;

  getBody(): string;
  setBody(value: string): MessageThread;

  getStatus(): MessageStatus;
  setStatus(value: MessageStatus): MessageThread;

  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): MessageThread;
  hasCreatedat(): boolean;
  clearCreatedat(): MessageThread;

  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): MessageThread;
  hasUpdatedat(): boolean;
  clearUpdatedat(): MessageThread;

  getSentat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSentat(value?: google_protobuf_timestamp_pb.Timestamp): MessageThread;
  hasSentat(): boolean;
  clearSentat(): MessageThread;

  getReceivedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReceivedat(value?: google_protobuf_timestamp_pb.Timestamp): MessageThread;
  hasReceivedat(): boolean;
  clearReceivedat(): MessageThread;

  getReadat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadat(value?: google_protobuf_timestamp_pb.Timestamp): MessageThread;
  hasReadat(): boolean;
  clearReadat(): MessageThread;

  getDeletedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedat(value?: google_protobuf_timestamp_pb.Timestamp): MessageThread;
  hasDeletedat(): boolean;
  clearDeletedat(): MessageThread;

  getSubject(): string;
  setSubject(value: string): MessageThread;

  getReadbyList(): Array<string>;
  setReadbyList(value: Array<string>): MessageThread;
  clearReadbyList(): MessageThread;
  addReadby(value: string, index?: number): MessageThread;

  getReactionsList(): Array<string>;
  setReactionsList(value: Array<string>): MessageThread;
  clearReactionsList(): MessageThread;
  addReactions(value: string, index?: number): MessageThread;

  getMentionsList(): Array<string>;
  setMentionsList(value: Array<string>): MessageThread;
  clearMentionsList(): MessageThread;
  addMentions(value: string, index?: number): MessageThread;

  getMessagesList(): Array<MessageChat>;
  setMessagesList(value: Array<MessageChat>): MessageThread;
  clearMessagesList(): MessageThread;
  addMessages(value?: MessageChat, index?: number): MessageChat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageThread.AsObject;
  static toObject(includeInstance: boolean, msg: MessageThread): MessageThread.AsObject;
  static serializeBinaryToWriter(message: MessageThread, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageThread;
  static deserializeBinaryFromReader(message: MessageThread, reader: jspb.BinaryReader): MessageThread;
}

export namespace MessageThread {
  export type AsObject = {
    id: string,
    sender: string,
    recipient: string,
    body: string,
    status: MessageStatus,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sentat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    receivedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    readat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    subject: string,
    readbyList: Array<string>,
    reactionsList: Array<string>,
    mentionsList: Array<string>,
    messagesList: Array<MessageChat.AsObject>,
  }
}

export class MessageListItem extends jspb.Message {
  getMessage(): MessageChat | undefined;
  setMessage(value?: MessageChat): MessageListItem;
  hasMessage(): boolean;
  clearMessage(): MessageListItem;

  getThread(): MessageThread | undefined;
  setThread(value?: MessageThread): MessageListItem;
  hasThread(): boolean;
  clearThread(): MessageListItem;

  getItemCase(): MessageListItem.ItemCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageListItem.AsObject;
  static toObject(includeInstance: boolean, msg: MessageListItem): MessageListItem.AsObject;
  static serializeBinaryToWriter(message: MessageListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageListItem;
  static deserializeBinaryFromReader(message: MessageListItem, reader: jspb.BinaryReader): MessageListItem;
}

export namespace MessageListItem {
  export type AsObject = {
    message?: MessageChat.AsObject,
    thread?: MessageThread.AsObject,
  }

  export enum ItemCase { 
    ITEM_NOT_SET = 0,
    MESSAGE = 1,
    THREAD = 2,
  }
}

export class MessageList extends jspb.Message {
  getMessagesList(): Array<MessageListItem>;
  setMessagesList(value: Array<MessageListItem>): MessageList;
  clearMessagesList(): MessageList;
  addMessages(value?: MessageListItem, index?: number): MessageListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageList.AsObject;
  static toObject(includeInstance: boolean, msg: MessageList): MessageList.AsObject;
  static serializeBinaryToWriter(message: MessageList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageList;
  static deserializeBinaryFromReader(message: MessageList, reader: jspb.BinaryReader): MessageList;
}

export namespace MessageList {
  export type AsObject = {
    messagesList: Array<MessageListItem.AsObject>,
  }
}

export class GetMessagesRequest extends jspb.Message {
  getSender(): string;
  setSender(value: string): GetMessagesRequest;

  getDm(): string;
  setDm(value: string): GetMessagesRequest;

  getChannel(): string;
  setChannel(value: string): GetMessagesRequest;

  getRecipientCase(): GetMessagesRequest.RecipientCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesRequest): GetMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: GetMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesRequest;
  static deserializeBinaryFromReader(message: GetMessagesRequest, reader: jspb.BinaryReader): GetMessagesRequest;
}

export namespace GetMessagesRequest {
  export type AsObject = {
    sender: string,
    dm: string,
    channel: string,
  }

  export enum RecipientCase { 
    RECIPIENT_NOT_SET = 0,
    DM = 3,
    CHANNEL = 4,
  }
}

export class DirectMessenger extends jspb.Message {
  getId(): string;
  setId(value: string): DirectMessenger;

  getName(): string;
  setName(value: string): DirectMessenger;

  getAvatar(): string;
  setAvatar(value: string): DirectMessenger;

  getOnline(): boolean;
  setOnline(value: boolean): DirectMessenger;

  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): DirectMessenger;
  hasCreatedat(): boolean;
  clearCreatedat(): DirectMessenger;

  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): DirectMessenger;
  hasUpdatedat(): boolean;
  clearUpdatedat(): DirectMessenger;

  getLastseen(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastseen(value?: google_protobuf_timestamp_pb.Timestamp): DirectMessenger;
  hasLastseen(): boolean;
  clearLastseen(): DirectMessenger;

  getMuted(): boolean;
  setMuted(value: boolean): DirectMessenger;

  getBlocked(): boolean;
  setBlocked(value: boolean): DirectMessenger;

  getArchived(): boolean;
  setArchived(value: boolean): DirectMessenger;

  getBio(): string;
  setBio(value: string): DirectMessenger;
  hasBio(): boolean;
  clearBio(): DirectMessenger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectMessenger.AsObject;
  static toObject(includeInstance: boolean, msg: DirectMessenger): DirectMessenger.AsObject;
  static serializeBinaryToWriter(message: DirectMessenger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectMessenger;
  static deserializeBinaryFromReader(message: DirectMessenger, reader: jspb.BinaryReader): DirectMessenger;
}

export namespace DirectMessenger {
  export type AsObject = {
    id: string,
    name: string,
    avatar: string,
    online: boolean,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastseen?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    muted: boolean,
    blocked: boolean,
    archived: boolean,
    bio?: string,
  }

  export enum BioCase { 
    _BIO_NOT_SET = 0,
    BIO = 11,
  }
}

export class DirectMessengerList extends jspb.Message {
  getMessengersList(): Array<DirectMessenger>;
  setMessengersList(value: Array<DirectMessenger>): DirectMessengerList;
  clearMessengersList(): DirectMessengerList;
  addMessengers(value?: DirectMessenger, index?: number): DirectMessenger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectMessengerList.AsObject;
  static toObject(includeInstance: boolean, msg: DirectMessengerList): DirectMessengerList.AsObject;
  static serializeBinaryToWriter(message: DirectMessengerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectMessengerList;
  static deserializeBinaryFromReader(message: DirectMessengerList, reader: jspb.BinaryReader): DirectMessengerList;
}

export namespace DirectMessengerList {
  export type AsObject = {
    messengersList: Array<DirectMessenger.AsObject>,
  }
}

export enum MessageStatus { 
  MESSAGE_STATUS_UNSPECIFIED = 0,
  MESSAGE_STATUS_DRAFT = 1,
  MESSAGE_STATUS_SENT = 2,
  MESSAGE_STATUS_RECEIVED = 3,
  MESSAGE_STATUS_READ = 4,
  MESSAGE_STATUS_DELETED = 5,
}
export enum MessageAttachmentType { 
  MESSAGE_ATTACHMENT_TYPE_UNSPECIFIED = 0,
  MESSAGE_ATTACHMENT_TYPE_IMAGE = 1,
  MESSAGE_ATTACHMENT_TYPE_VIDEO = 2,
  MESSAGE_ATTACHMENT_TYPE_AUDIO = 3,
  MESSAGE_ATTACHMENT_TYPE_FILE = 4,
  MESSAGE_ATTACHMENT_TYPE_LINK = 5,
  MESSAGE_ATTACHMENT_TYPE_GIF = 6,
  MESSAGE_ATTACHMENT_TYPE_STICKER = 7,
  MESSAGE_ATTACHMENT_TYPE_LOCATION = 8,
}
