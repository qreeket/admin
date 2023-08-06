/**
 * @fileoverview gRPC-Web generated client stub for qreeket
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.15.8
// source: sms_service.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as sms_pb from './sms_pb';


export class SmsServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorsend_phone_verification_code = new grpcWeb.MethodDescriptor(
    '/qreeket.SmsService/send_phone_verification_code',
    grpcWeb.MethodType.UNARY,
    google_protobuf_wrappers_pb.StringValue,
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_wrappers_pb.StringValue) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  send_phone_verification_code(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  send_phone_verification_code(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  send_phone_verification_code(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/qreeket.SmsService/send_phone_verification_code',
        request,
        metadata || {},
        this.methodDescriptorsend_phone_verification_code,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/qreeket.SmsService/send_phone_verification_code',
    request,
    metadata || {},
    this.methodDescriptorsend_phone_verification_code);
  }

  methodDescriptorverify_phone_verification_code = new grpcWeb.MethodDescriptor(
    '/qreeket.SmsService/verify_phone_verification_code',
    grpcWeb.MethodType.UNARY,
    sms_pb.VerifyPhoneRequest,
    google_protobuf_empty_pb.Empty,
    (request: sms_pb.VerifyPhoneRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  verify_phone_verification_code(
    request: sms_pb.VerifyPhoneRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  verify_phone_verification_code(
    request: sms_pb.VerifyPhoneRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  verify_phone_verification_code(
    request: sms_pb.VerifyPhoneRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/qreeket.SmsService/verify_phone_verification_code',
        request,
        metadata || {},
        this.methodDescriptorverify_phone_verification_code,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/qreeket.SmsService/verify_phone_verification_code',
    request,
    metadata || {},
    this.methodDescriptorverify_phone_verification_code);
  }

}

