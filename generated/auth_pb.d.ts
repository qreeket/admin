import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class AuthenticateWithSocialAccountRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): AuthenticateWithSocialAccountRequest;

  getUsername(): string;
  setUsername(value: string): AuthenticateWithSocialAccountRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): AuthenticateWithSocialAccountRequest;

  getAvatarData(): Uint8Array | string;
  getAvatarData_asU8(): Uint8Array;
  getAvatarData_asB64(): string;
  setAvatarData(value: Uint8Array | string): AuthenticateWithSocialAccountRequest;

  getCountryId(): string;
  setCountryId(value: string): AuthenticateWithSocialAccountRequest;

  getCollegeId(): string;
  setCollegeId(value: string): AuthenticateWithSocialAccountRequest;

  getEmail(): string;
  setEmail(value: string): AuthenticateWithSocialAccountRequest;

  getAuthAvatarCase(): AuthenticateWithSocialAccountRequest.AuthAvatarCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateWithSocialAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateWithSocialAccountRequest): AuthenticateWithSocialAccountRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticateWithSocialAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateWithSocialAccountRequest;
  static deserializeBinaryFromReader(message: AuthenticateWithSocialAccountRequest, reader: jspb.BinaryReader): AuthenticateWithSocialAccountRequest;
}

export namespace AuthenticateWithSocialAccountRequest {
  export type AsObject = {
    phoneNumber: string,
    username: string,
    avatarUrl: string,
    avatarData: Uint8Array | string,
    countryId: string,
    collegeId: string,
    email: string,
  }

  export enum AuthAvatarCase { 
    AUTH_AVATAR_NOT_SET = 0,
    AVATAR_URL = 3,
    AVATAR_DATA = 4,
  }
}

export class GetCollegesResponse extends jspb.Message {
  getCollegesList(): Array<College>;
  setCollegesList(value: Array<College>): GetCollegesResponse;
  clearCollegesList(): GetCollegesResponse;
  addColleges(value?: College, index?: number): College;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCollegesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCollegesResponse): GetCollegesResponse.AsObject;
  static serializeBinaryToWriter(message: GetCollegesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCollegesResponse;
  static deserializeBinaryFromReader(message: GetCollegesResponse, reader: jspb.BinaryReader): GetCollegesResponse;
}

export namespace GetCollegesResponse {
  export type AsObject = {
    collegesList: Array<College.AsObject>,
  }
}

export class GetCountriesResponse extends jspb.Message {
  getCountriesList(): Array<Country>;
  setCountriesList(value: Array<Country>): GetCountriesResponse;
  clearCountriesList(): GetCountriesResponse;
  addCountries(value?: Country, index?: number): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountriesResponse): GetCountriesResponse.AsObject;
  static serializeBinaryToWriter(message: GetCountriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountriesResponse;
  static deserializeBinaryFromReader(message: GetCountriesResponse, reader: jspb.BinaryReader): GetCountriesResponse;
}

export namespace GetCountriesResponse {
  export type AsObject = {
    countriesList: Array<Country.AsObject>,
  }
}

export class ValidateAccessTokenResponse extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): ValidateAccessTokenResponse;
  hasAccountId(): boolean;
  clearAccountId(): ValidateAccessTokenResponse;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): ValidateAccessTokenResponse;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): ValidateAccessTokenResponse;

  getUsername(): string;
  setUsername(value: string): ValidateAccessTokenResponse;
  hasUsername(): boolean;
  clearUsername(): ValidateAccessTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateAccessTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateAccessTokenResponse): ValidateAccessTokenResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateAccessTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateAccessTokenResponse;
  static deserializeBinaryFromReader(message: ValidateAccessTokenResponse, reader: jspb.BinaryReader): ValidateAccessTokenResponse;
}

export namespace ValidateAccessTokenResponse {
  export type AsObject = {
    accountId?: string,
    phoneNumber?: string,
    username?: string,
  }

  export enum AccountIdCase { 
    _ACCOUNT_ID_NOT_SET = 0,
    ACCOUNT_ID = 1,
  }

  export enum PhoneNumberCase { 
    _PHONE_NUMBER_NOT_SET = 0,
    PHONE_NUMBER = 2,
  }

  export enum UsernameCase { 
    _USERNAME_NOT_SET = 0,
    USERNAME = 3,
  }
}

export class RequestPasswordResetRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): RequestPasswordResetRequest;

  getEmail(): string;
  setEmail(value: string): RequestPasswordResetRequest;

  getRequestPasswordResetPayloadCase(): RequestPasswordResetRequest.RequestPasswordResetPayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPasswordResetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPasswordResetRequest): RequestPasswordResetRequest.AsObject;
  static serializeBinaryToWriter(message: RequestPasswordResetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPasswordResetRequest;
  static deserializeBinaryFromReader(message: RequestPasswordResetRequest, reader: jspb.BinaryReader): RequestPasswordResetRequest;
}

export namespace RequestPasswordResetRequest {
  export type AsObject = {
    phoneNumber: string,
    email: string,
  }

  export enum RequestPasswordResetPayloadCase { 
    REQUEST_PASSWORD_RESET_PAYLOAD_NOT_SET = 0,
    PHONE_NUMBER = 1,
    EMAIL = 2,
  }
}

export class LoginRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): LoginRequest;

  getEmail(): string;
  setEmail(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getCountryId(): string;
  setCountryId(value: string): LoginRequest;

  getPayloadCase(): LoginRequest.PayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    phoneNumber: string,
    email: string,
    password: string,
    countryId: string,
  }

  export enum PayloadCase { 
    PAYLOAD_NOT_SET = 0,
    PHONE_NUMBER = 1,
    EMAIL = 2,
  }
}

export class RegisterRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): RegisterRequest;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  getUsername(): string;
  setUsername(value: string): RegisterRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): RegisterRequest;

  getAvatarData(): Uint8Array | string;
  getAvatarData_asU8(): Uint8Array;
  getAvatarData_asB64(): string;
  setAvatarData(value: Uint8Array | string): RegisterRequest;

  getCountryId(): string;
  setCountryId(value: string): RegisterRequest;

  getCollegeId(): string;
  setCollegeId(value: string): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;
  hasEmail(): boolean;
  clearEmail(): RegisterRequest;

  getAvatarCase(): RegisterRequest.AvatarCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    phoneNumber?: string,
    password: string,
    username: string,
    avatarUrl: string,
    avatarData: Uint8Array | string,
    countryId: string,
    collegeId: string,
    email?: string,
  }

  export enum AvatarCase { 
    AVATAR_NOT_SET = 0,
    AVATAR_URL = 5,
    AVATAR_DATA = 6,
  }

  export enum PhoneNumberCase { 
    _PHONE_NUMBER_NOT_SET = 0,
    PHONE_NUMBER = 1,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 11,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): ResetPasswordRequest;

  getEmail(): string;
  setEmail(value: string): ResetPasswordRequest;

  getPassword(): string;
  setPassword(value: string): ResetPasswordRequest;

  getResetToken(): string;
  setResetToken(value: string): ResetPasswordRequest;

  getResetPayloadCase(): ResetPasswordRequest.ResetPayloadCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    phoneNumber: string,
    email: string,
    password: string,
    resetToken: string,
  }

  export enum ResetPayloadCase { 
    RESET_PAYLOAD_NOT_SET = 0,
    PHONE_NUMBER = 1,
    EMAIL = 2,
  }
}

export class Account extends jspb.Message {
  getId(): string;
  setId(value: string): Account;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): Account;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): Account;

  getUsername(): string;
  setUsername(value: string): Account;

  getLanguageId(): string;
  setLanguageId(value: string): Account;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Account;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Account;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Account;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Account;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): Account;
  hasAvatarUrl(): boolean;
  clearAvatarUrl(): Account;

  getCountryId(): string;
  setCountryId(value: string): Account;

  getDeviceId(): string;
  setDeviceId(value: string): Account;
  hasDeviceId(): boolean;
  clearDeviceId(): Account;

  getDeviceToken(): string;
  setDeviceToken(value: string): Account;
  hasDeviceToken(): boolean;
  clearDeviceToken(): Account;

  getDeviceType(): string;
  setDeviceType(value: string): Account;
  hasDeviceType(): boolean;
  clearDeviceType(): Account;

  getIsVerified(): boolean;
  setIsVerified(value: boolean): Account;
  hasIsVerified(): boolean;
  clearIsVerified(): Account;

  getUserType(): UserType;
  setUserType(value: UserType): Account;
  hasUserType(): boolean;
  clearUserType(): Account;

  getCollegeId(): string;
  setCollegeId(value: string): Account;

  getEmail(): string;
  setEmail(value: string): Account;
  hasEmail(): boolean;
  clearEmail(): Account;

  getIsVisible(): boolean;
  setIsVisible(value: boolean): Account;
  hasIsVisible(): boolean;
  clearIsVisible(): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: string,
    phoneNumber?: string,
    username: string,
    languageId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    avatarUrl?: string,
    countryId: string,
    deviceId?: string,
    deviceToken?: string,
    deviceType?: string,
    isVerified?: boolean,
    userType?: UserType,
    collegeId: string,
    email?: string,
    isVisible?: boolean,
  }

  export enum PhoneNumberCase { 
    _PHONE_NUMBER_NOT_SET = 0,
    PHONE_NUMBER = 2,
  }

  export enum AvatarUrlCase { 
    _AVATAR_URL_NOT_SET = 0,
    AVATAR_URL = 7,
  }

  export enum DeviceIdCase { 
    _DEVICE_ID_NOT_SET = 0,
    DEVICE_ID = 10,
  }

  export enum DeviceTokenCase { 
    _DEVICE_TOKEN_NOT_SET = 0,
    DEVICE_TOKEN = 11,
  }

  export enum DeviceTypeCase { 
    _DEVICE_TYPE_NOT_SET = 0,
    DEVICE_TYPE = 12,
  }

  export enum IsVerifiedCase { 
    _IS_VERIFIED_NOT_SET = 0,
    IS_VERIFIED = 13,
  }

  export enum UserTypeCase { 
    _USER_TYPE_NOT_SET = 0,
    USER_TYPE = 14,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 16,
  }

  export enum IsVisibleCase { 
    _IS_VISIBLE_NOT_SET = 0,
    IS_VISIBLE = 17,
  }
}

export class AccessTokenStore extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): AccessTokenStore;

  getRefreshToken(): string;
  setRefreshToken(value: string): AccessTokenStore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessTokenStore.AsObject;
  static toObject(includeInstance: boolean, msg: AccessTokenStore): AccessTokenStore.AsObject;
  static serializeBinaryToWriter(message: AccessTokenStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessTokenStore;
  static deserializeBinaryFromReader(message: AccessTokenStore, reader: jspb.BinaryReader): AccessTokenStore;
}

export namespace AccessTokenStore {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
  }
}

export class Country extends jspb.Message {
  getId(): string;
  setId(value: string): Country;

  getName(): string;
  setName(value: string): Country;

  getCode(): string;
  setCode(value: string): Country;

  getDialCode(): string;
  setDialCode(value: string): Country;

  getCurrency(): string;
  setCurrency(value: string): Country;

  getCurrencySymbol(): string;
  setCurrencySymbol(value: string): Country;

  getFlagUrl(): string;
  setFlagUrl(value: string): Country;

  getLanguageId(): string;
  setLanguageId(value: string): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    id: string,
    name: string,
    code: string,
    dialCode: string,
    currency: string,
    currencySymbol: string,
    flagUrl: string,
    languageId: string,
  }
}

export class College extends jspb.Message {
  getId(): string;
  setId(value: string): College;

  getName(): string;
  setName(value: string): College;

  getAddress(): string;
  setAddress(value: string): College;

  getLogoUrl(): string;
  setLogoUrl(value: string): College;

  getWebsite(): string;
  setWebsite(value: string): College;

  getCountryId(): string;
  setCountryId(value: string): College;

  getBannerUrl(): string;
  setBannerUrl(value: string): College;
  hasBannerUrl(): boolean;
  clearBannerUrl(): College;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): College.AsObject;
  static toObject(includeInstance: boolean, msg: College): College.AsObject;
  static serializeBinaryToWriter(message: College, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): College;
  static deserializeBinaryFromReader(message: College, reader: jspb.BinaryReader): College;
}

export namespace College {
  export type AsObject = {
    id: string,
    name: string,
    address: string,
    logoUrl: string,
    website: string,
    countryId: string,
    bannerUrl?: string,
  }

  export enum BannerUrlCase { 
    _BANNER_URL_NOT_SET = 0,
    BANNER_URL = 7,
  }
}

export enum UserType { 
  STANDARD = 0,
  PREMIUM = 1,
}
