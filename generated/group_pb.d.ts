import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class DeleteGroupRequest extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): DeleteGroupRequest;

  getAdmin(): string;
  setAdmin(value: string): DeleteGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupRequest): DeleteGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupRequest;
  static deserializeBinaryFromReader(message: DeleteGroupRequest, reader: jspb.BinaryReader): DeleteGroupRequest;
}

export namespace DeleteGroupRequest {
  export type AsObject = {
    group: string,
    admin: string,
  }
}

export class ManageAdminRequest extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): ManageAdminRequest;

  getUser(): string;
  setUser(value: string): ManageAdminRequest;

  getAdmin(): string;
  setAdmin(value: string): ManageAdminRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManageAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManageAdminRequest): ManageAdminRequest.AsObject;
  static serializeBinaryToWriter(message: ManageAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManageAdminRequest;
  static deserializeBinaryFromReader(message: ManageAdminRequest, reader: jspb.BinaryReader): ManageAdminRequest;
}

export namespace ManageAdminRequest {
  export type AsObject = {
    group: string,
    user: string,
    admin: string,
  }
}

export class ManageGroupOrChannel extends jspb.Message {
  getUser(): string;
  setUser(value: string): ManageGroupOrChannel;

  getChannel(): string;
  setChannel(value: string): ManageGroupOrChannel;

  getGroup(): string;
  setGroup(value: string): ManageGroupOrChannel;

  getPayloadCase(): ManageGroupOrChannel.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManageGroupOrChannel.AsObject;
  static toObject(includeInstance: boolean, msg: ManageGroupOrChannel): ManageGroupOrChannel.AsObject;
  static serializeBinaryToWriter(message: ManageGroupOrChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManageGroupOrChannel;
  static deserializeBinaryFromReader(message: ManageGroupOrChannel, reader: jspb.BinaryReader): ManageGroupOrChannel;
}

export namespace ManageGroupOrChannel {
  export type AsObject = {
    user: string,
    channel: string,
    group: string,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    CHANNEL = 2,
    GROUP = 3,
  }
}

export class ManageGroupOrChannelRequest extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): ManageGroupOrChannelRequest;

  getGroup(): string;
  setGroup(value: string): ManageGroupOrChannelRequest;

  getUser(): string;
  setUser(value: string): ManageGroupOrChannelRequest;

  getAdmin(): string;
  setAdmin(value: string): ManageGroupOrChannelRequest;

  getPayloadCase(): ManageGroupOrChannelRequest.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManageGroupOrChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManageGroupOrChannelRequest): ManageGroupOrChannelRequest.AsObject;
  static serializeBinaryToWriter(message: ManageGroupOrChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManageGroupOrChannelRequest;
  static deserializeBinaryFromReader(message: ManageGroupOrChannelRequest, reader: jspb.BinaryReader): ManageGroupOrChannelRequest;
}

export namespace ManageGroupOrChannelRequest {
  export type AsObject = {
    channel: string,
    group: string,
    user: string,
    admin: string,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    CHANNEL = 1,
    GROUP = 2,
  }
}

export class ManageChannelSubscriptionRequest extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): ManageChannelSubscriptionRequest;

  getUser(): string;
  setUser(value: string): ManageChannelSubscriptionRequest;

  getToken(): string;
  setToken(value: string): ManageChannelSubscriptionRequest;

  getAccept(): boolean;
  setAccept(value: boolean): ManageChannelSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManageChannelSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManageChannelSubscriptionRequest): ManageChannelSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: ManageChannelSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManageChannelSubscriptionRequest;
  static deserializeBinaryFromReader(message: ManageChannelSubscriptionRequest, reader: jspb.BinaryReader): ManageChannelSubscriptionRequest;
}

export namespace ManageChannelSubscriptionRequest {
  export type AsObject = {
    channel: string,
    user: string,
    token: string,
    accept: boolean,
  }
}

export class ChannelSubscriptionList extends jspb.Message {
  getSubscriptionsList(): Array<ChannelSubscription>;
  setSubscriptionsList(value: Array<ChannelSubscription>): ChannelSubscriptionList;
  clearSubscriptionsList(): ChannelSubscriptionList;
  addSubscriptions(value?: ChannelSubscription, index?: number): ChannelSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelSubscriptionList.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelSubscriptionList): ChannelSubscriptionList.AsObject;
  static serializeBinaryToWriter(message: ChannelSubscriptionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelSubscriptionList;
  static deserializeBinaryFromReader(message: ChannelSubscriptionList, reader: jspb.BinaryReader): ChannelSubscriptionList;
}

export namespace ChannelSubscriptionList {
  export type AsObject = {
    subscriptionsList: Array<ChannelSubscription.AsObject>,
  }
}

export class ChannelSubscription extends jspb.Message {
  getId(): string;
  setId(value: string): ChannelSubscription;

  getChannel(): Channel | undefined;
  setChannel(value?: Channel): ChannelSubscription;
  hasChannel(): boolean;
  clearChannel(): ChannelSubscription;

  getUser(): string;
  setUser(value: string): ChannelSubscription;

  getToken(): string;
  setToken(value: string): ChannelSubscription;

  getStatus(): ChannelOrGroupInviteStatus;
  setStatus(value: ChannelOrGroupInviteStatus): ChannelSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelSubscription): ChannelSubscription.AsObject;
  static serializeBinaryToWriter(message: ChannelSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelSubscription;
  static deserializeBinaryFromReader(message: ChannelSubscription, reader: jspb.BinaryReader): ChannelSubscription;
}

export namespace ChannelSubscription {
  export type AsObject = {
    id: string,
    channel?: Channel.AsObject,
    user: string,
    token: string,
    status: ChannelOrGroupInviteStatus,
  }
}

export class RevokeGroupInviteRequest extends jspb.Message {
  getInviteid(): string;
  setInviteid(value: string): RevokeGroupInviteRequest;

  getToken(): string;
  setToken(value: string): RevokeGroupInviteRequest;

  getAdmin(): string;
  setAdmin(value: string): RevokeGroupInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeGroupInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeGroupInviteRequest): RevokeGroupInviteRequest.AsObject;
  static serializeBinaryToWriter(message: RevokeGroupInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeGroupInviteRequest;
  static deserializeBinaryFromReader(message: RevokeGroupInviteRequest, reader: jspb.BinaryReader): RevokeGroupInviteRequest;
}

export namespace RevokeGroupInviteRequest {
  export type AsObject = {
    inviteid: string,
    token: string,
    admin: string,
  }
}

export class ChannelSubscriptionRequest extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): ChannelSubscriptionRequest;

  getUser(): string;
  setUser(value: string): ChannelSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelSubscriptionRequest): ChannelSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: ChannelSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelSubscriptionRequest;
  static deserializeBinaryFromReader(message: ChannelSubscriptionRequest, reader: jspb.BinaryReader): ChannelSubscriptionRequest;
}

export namespace ChannelSubscriptionRequest {
  export type AsObject = {
    channel: string,
    user: string,
  }
}

export class GroupInviteRequest extends jspb.Message {
  getGroup(): string;
  setGroup(value: string): GroupInviteRequest;

  getUser(): string;
  setUser(value: string): GroupInviteRequest;

  getChannelsList(): Array<string>;
  setChannelsList(value: Array<string>): GroupInviteRequest;
  clearChannelsList(): GroupInviteRequest;
  addChannels(value: string, index?: number): GroupInviteRequest;

  getAdmin(): string;
  setAdmin(value: string): GroupInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInviteRequest): GroupInviteRequest.AsObject;
  static serializeBinaryToWriter(message: GroupInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInviteRequest;
  static deserializeBinaryFromReader(message: GroupInviteRequest, reader: jspb.BinaryReader): GroupInviteRequest;
}

export namespace GroupInviteRequest {
  export type AsObject = {
    group: string,
    user: string,
    channelsList: Array<string>,
    admin: string,
  }
}

export class ManageGroupInviteRequest extends jspb.Message {
  getInviteid(): string;
  setInviteid(value: string): ManageGroupInviteRequest;

  getToken(): string;
  setToken(value: string): ManageGroupInviteRequest;

  getAccept(): boolean;
  setAccept(value: boolean): ManageGroupInviteRequest;

  getChannelsList(): Array<string>;
  setChannelsList(value: Array<string>): ManageGroupInviteRequest;
  clearChannelsList(): ManageGroupInviteRequest;
  addChannels(value: string, index?: number): ManageGroupInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManageGroupInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManageGroupInviteRequest): ManageGroupInviteRequest.AsObject;
  static serializeBinaryToWriter(message: ManageGroupInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManageGroupInviteRequest;
  static deserializeBinaryFromReader(message: ManageGroupInviteRequest, reader: jspb.BinaryReader): ManageGroupInviteRequest;
}

export namespace ManageGroupInviteRequest {
  export type AsObject = {
    inviteid: string,
    token: string,
    accept: boolean,
    channelsList: Array<string>,
  }
}

export class GroupList extends jspb.Message {
  getGroupsList(): Array<Group>;
  setGroupsList(value: Array<Group>): GroupList;
  clearGroupsList(): GroupList;
  addGroups(value?: Group, index?: number): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupList.AsObject;
  static toObject(includeInstance: boolean, msg: GroupList): GroupList.AsObject;
  static serializeBinaryToWriter(message: GroupList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupList;
  static deserializeBinaryFromReader(message: GroupList, reader: jspb.BinaryReader): GroupList;
}

export namespace GroupList {
  export type AsObject = {
    groupsList: Array<Group.AsObject>,
  }
}

export class Channel extends jspb.Message {
  getName(): string;
  setName(value: string): Channel;

  getDescription(): string;
  setDescription(value: string): Channel;
  hasDescription(): boolean;
  clearDescription(): Channel;

  getOwner(): string;
  setOwner(value: string): Channel;

  getSubscribersList(): Array<Subscriber>;
  setSubscribersList(value: Array<Subscriber>): Channel;
  clearSubscribersList(): Channel;
  addSubscribers(value?: Subscriber, index?: number): Subscriber;

  getMutedList(): Array<string>;
  setMutedList(value: Array<string>): Channel;
  clearMutedList(): Channel;
  addMuted(value: string, index?: number): Channel;

  getType(): ChannelType;
  setType(value: ChannelType): Channel;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): Channel;
  hasCreated(): boolean;
  clearCreated(): Channel;

  getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): Channel;
  hasUpdated(): boolean;
  clearUpdated(): Channel;

  getId(): string;
  setId(value: string): Channel;

  getGroup(): string;
  setGroup(value: string): Channel;

  getIcon(): string;
  setIcon(value: string): Channel;
  hasIcon(): boolean;
  clearIcon(): Channel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Channel.AsObject;
  static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
  static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Channel;
  static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
  export type AsObject = {
    name: string,
    description?: string,
    owner: string,
    subscribersList: Array<Subscriber.AsObject>,
    mutedList: Array<string>,
    type: ChannelType,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    id: string,
    group: string,
    icon?: string,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 2,
  }

  export enum IconCase { 
    _ICON_NOT_SET = 0,
    ICON = 16,
  }
}

export class ChannelList extends jspb.Message {
  getChannelsList(): Array<Channel>;
  setChannelsList(value: Array<Channel>): ChannelList;
  clearChannelsList(): ChannelList;
  addChannels(value?: Channel, index?: number): Channel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelList.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelList): ChannelList.AsObject;
  static serializeBinaryToWriter(message: ChannelList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelList;
  static deserializeBinaryFromReader(message: ChannelList, reader: jspb.BinaryReader): ChannelList;
}

export namespace ChannelList {
  export type AsObject = {
    channelsList: Array<Channel.AsObject>,
  }
}

export class GroupInvite extends jspb.Message {
  getChannelsList(): Array<string>;
  setChannelsList(value: Array<string>): GroupInvite;
  clearChannelsList(): GroupInvite;
  addChannels(value: string, index?: number): GroupInvite;

  getAdmin(): string;
  setAdmin(value: string): GroupInvite;

  getToken(): string;
  setToken(value: string): GroupInvite;

  getId(): string;
  setId(value: string): GroupInvite;

  getStatus(): ChannelOrGroupInviteStatus;
  setStatus(value: ChannelOrGroupInviteStatus): GroupInvite;

  getGroup(): Group | undefined;
  setGroup(value?: Group): GroupInvite;
  hasGroup(): boolean;
  clearGroup(): GroupInvite;

  getUser(): string;
  setUser(value: string): GroupInvite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInvite.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInvite): GroupInvite.AsObject;
  static serializeBinaryToWriter(message: GroupInvite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInvite;
  static deserializeBinaryFromReader(message: GroupInvite, reader: jspb.BinaryReader): GroupInvite;
}

export namespace GroupInvite {
  export type AsObject = {
    channelsList: Array<string>,
    admin: string,
    token: string,
    id: string,
    status: ChannelOrGroupInviteStatus,
    group?: Group.AsObject,
    user: string,
  }
}

export class GroupInviteList extends jspb.Message {
  getInvitesList(): Array<GroupInvite>;
  setInvitesList(value: Array<GroupInvite>): GroupInviteList;
  clearInvitesList(): GroupInviteList;
  addInvites(value?: GroupInvite, index?: number): GroupInvite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInviteList.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInviteList): GroupInviteList.AsObject;
  static serializeBinaryToWriter(message: GroupInviteList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInviteList;
  static deserializeBinaryFromReader(message: GroupInviteList, reader: jspb.BinaryReader): GroupInviteList;
}

export namespace GroupInviteList {
  export type AsObject = {
    invitesList: Array<GroupInvite.AsObject>,
  }
}

export class CreateChannelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateChannelRequest;

  getDescription(): string;
  setDescription(value: string): CreateChannelRequest;
  hasDescription(): boolean;
  clearDescription(): CreateChannelRequest;

  getIcon(): Uint8Array | string;
  getIcon_asU8(): Uint8Array;
  getIcon_asB64(): string;
  setIcon(value: Uint8Array | string): CreateChannelRequest;
  hasIcon(): boolean;
  clearIcon(): CreateChannelRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CreateChannelRequest;
  clearTagsList(): CreateChannelRequest;
  addTags(value: string, index?: number): CreateChannelRequest;

  getSubscribersList(): Array<Subscriber>;
  setSubscribersList(value: Array<Subscriber>): CreateChannelRequest;
  clearSubscribersList(): CreateChannelRequest;
  addSubscribers(value?: Subscriber, index?: number): Subscriber;

  getOwner(): string;
  setOwner(value: string): CreateChannelRequest;

  getGroup(): string;
  setGroup(value: string): CreateChannelRequest;

  getType(): ChannelType;
  setType(value: ChannelType): CreateChannelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChannelRequest): CreateChannelRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChannelRequest;
  static deserializeBinaryFromReader(message: CreateChannelRequest, reader: jspb.BinaryReader): CreateChannelRequest;
}

export namespace CreateChannelRequest {
  export type AsObject = {
    name: string,
    description?: string,
    icon?: Uint8Array | string,
    tagsList: Array<string>,
    subscribersList: Array<Subscriber.AsObject>,
    owner: string,
    group: string,
    type: ChannelType,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 2,
  }

  export enum IconCase { 
    _ICON_NOT_SET = 0,
    ICON = 3,
  }
}

export class Group extends jspb.Message {
  getId(): string;
  setId(value: string): Group;

  getName(): string;
  setName(value: string): Group;

  getDescription(): string;
  setDescription(value: string): Group;
  hasDescription(): boolean;
  clearDescription(): Group;

  getIcon(): string;
  setIcon(value: string): Group;
  hasIcon(): boolean;
  clearIcon(): Group;

  getChannelsList(): Array<Channel>;
  setChannelsList(value: Array<Channel>): Group;
  clearChannelsList(): Group;
  addChannels(value?: Channel, index?: number): Channel;

  getSubscribersList(): Array<Subscriber>;
  setSubscribersList(value: Array<Subscriber>): Group;
  clearSubscribersList(): Group;
  addSubscribers(value?: Subscriber, index?: number): Subscriber;

  getAdminsList(): Array<string>;
  setAdminsList(value: Array<string>): Group;
  clearAdminsList(): Group;
  addAdmins(value: string, index?: number): Group;

  getBannedList(): Array<string>;
  setBannedList(value: Array<string>): Group;
  clearBannedList(): Group;
  addBanned(value: string, index?: number): Group;

  getMutedList(): Array<string>;
  setMutedList(value: Array<string>): Group;
  clearMutedList(): Group;
  addMuted(value: string, index?: number): Group;

  getLink(): string;
  setLink(value: string): Group;
  hasLink(): boolean;
  clearLink(): Group;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Group;
  clearTagsList(): Group;
  addTags(value: string, index?: number): Group;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): Group;
  hasCreated(): boolean;
  clearCreated(): Group;

  getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): Group;
  hasUpdated(): boolean;
  clearUpdated(): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id: string,
    name: string,
    description?: string,
    icon?: string,
    channelsList: Array<Channel.AsObject>,
    subscribersList: Array<Subscriber.AsObject>,
    adminsList: Array<string>,
    bannedList: Array<string>,
    mutedList: Array<string>,
    link?: string,
    tagsList: Array<string>,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }

  export enum IconCase { 
    _ICON_NOT_SET = 0,
    ICON = 4,
  }

  export enum LinkCase { 
    _LINK_NOT_SET = 0,
    LINK = 10,
  }
}

export class Subscriber extends jspb.Message {
  getId(): string;
  setId(value: string): Subscriber;

  getName(): string;
  setName(value: string): Subscriber;

  getAvatar(): string;
  setAvatar(value: string): Subscriber;

  getOnline(): boolean;
  setOnline(value: boolean): Subscriber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscriber.AsObject;
  static toObject(includeInstance: boolean, msg: Subscriber): Subscriber.AsObject;
  static serializeBinaryToWriter(message: Subscriber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscriber;
  static deserializeBinaryFromReader(message: Subscriber, reader: jspb.BinaryReader): Subscriber;
}

export namespace Subscriber {
  export type AsObject = {
    id: string,
    name: string,
    avatar: string,
    online: boolean,
  }
}

export class CreateGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateGroupRequest;

  getDescription(): string;
  setDescription(value: string): CreateGroupRequest;
  hasDescription(): boolean;
  clearDescription(): CreateGroupRequest;

  getIcon(): Uint8Array | string;
  getIcon_asU8(): Uint8Array;
  getIcon_asB64(): string;
  setIcon(value: Uint8Array | string): CreateGroupRequest;
  hasIcon(): boolean;
  clearIcon(): CreateGroupRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CreateGroupRequest;
  clearTagsList(): CreateGroupRequest;
  addTags(value: string, index?: number): CreateGroupRequest;

  getAdmin(): string;
  setAdmin(value: string): CreateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    name: string,
    description?: string,
    icon?: Uint8Array | string,
    tagsList: Array<string>,
    admin: string,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 2,
  }

  export enum IconCase { 
    _ICON_NOT_SET = 0,
    ICON = 3,
  }
}

export enum ChannelType { 
  PUBLIC = 0,
  PRIVATE = 1,
}
export enum ChannelOrGroupInviteStatus { 
  PENDING = 0,
  ACCEPTED = 1,
  DECLINED = 2,
}
