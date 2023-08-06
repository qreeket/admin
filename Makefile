connect-to-admin-gateway:
	#docker run -d -p 7778:7778 exag-admin-proxy
	grpcwebproxy --server_http_debug_port 7778 --backend_addr=0.0.0.0:7777 \
	--allow_all_origins --run_tls_server=false \
	--backend_max_call_recv_msg_size=1073741824 --websocket_compression_mode=disabled

get-protos-submodule:
	@echo "initializing protos submodule..." && \
	git submodule add --progress --force https://github.com/qreeket/protos.git protos

update-protos-submodule:
	@echo "initializing protos submodule..." && \
	git submodule update --init --recursive  --remote

gen-protos:
	@echo "generating protos..." && \
	chmod +x scripts/gen-protos.sh && ./scripts/gen-protos.sh

.PHONY: connect-to-admin-gateway get-protos-submodule update-protos-submodule gen-protos
