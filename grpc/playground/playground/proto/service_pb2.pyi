from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class EchoRequest(_message.Message):
    __slots__ = ("message", "delay_ms")
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DELAY_MS_FIELD_NUMBER: _ClassVar[int]
    message: str
    delay_ms: int
    def __init__(self, message: _Optional[str] = ..., delay_ms: _Optional[int] = ...) -> None: ...

class EchoResponse(_message.Message):
    __slots__ = ("message", "timestamp", "server_id")
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    SERVER_ID_FIELD_NUMBER: _ClassVar[int]
    message: str
    timestamp: str
    server_id: str
    def __init__(self, message: _Optional[str] = ..., timestamp: _Optional[str] = ..., server_id: _Optional[str] = ...) -> None: ...

class StreamRequest(_message.Message):
    __slots__ = ("count", "interval_ms", "message")
    COUNT_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_MS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    count: int
    interval_ms: int
    message: str
    def __init__(self, count: _Optional[int] = ..., interval_ms: _Optional[int] = ..., message: _Optional[str] = ...) -> None: ...

class StreamResponse(_message.Message):
    __slots__ = ("sequence", "message", "timestamp")
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    sequence: int
    message: str
    timestamp: str
    def __init__(self, sequence: _Optional[int] = ..., message: _Optional[str] = ..., timestamp: _Optional[str] = ...) -> None: ...

class CollectRequest(_message.Message):
    __slots__ = ("data", "sequence")
    DATA_FIELD_NUMBER: _ClassVar[int]
    SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    data: str
    sequence: int
    def __init__(self, data: _Optional[str] = ..., sequence: _Optional[int] = ...) -> None: ...

class CollectResponse(_message.Message):
    __slots__ = ("total_received", "summary", "timestamp")
    TOTAL_RECEIVED_FIELD_NUMBER: _ClassVar[int]
    SUMMARY_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    total_received: int
    summary: str
    timestamp: str
    def __init__(self, total_received: _Optional[int] = ..., summary: _Optional[str] = ..., timestamp: _Optional[str] = ...) -> None: ...

class ChatMessage(_message.Message):
    __slots__ = ("user_id", "message", "timestamp")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    message: str
    timestamp: str
    def __init__(self, user_id: _Optional[str] = ..., message: _Optional[str] = ..., timestamp: _Optional[str] = ...) -> None: ...

class HealthRequest(_message.Message):
    __slots__ = ("service",)
    SERVICE_FIELD_NUMBER: _ClassVar[int]
    service: str
    def __init__(self, service: _Optional[str] = ...) -> None: ...

class HealthResponse(_message.Message):
    __slots__ = ("status", "message", "timestamp", "metadata")
    class MetadataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    STATUS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    status: str
    message: str
    timestamp: str
    metadata: _containers.ScalarMap[str, str]
    def __init__(self, status: _Optional[str] = ..., message: _Optional[str] = ..., timestamp: _Optional[str] = ..., metadata: _Optional[_Mapping[str, str]] = ...) -> None: ...

class StressRequest(_message.Message):
    __slots__ = ("iterations", "concurrent_requests", "payload_size", "enable_streaming")
    ITERATIONS_FIELD_NUMBER: _ClassVar[int]
    CONCURRENT_REQUESTS_FIELD_NUMBER: _ClassVar[int]
    PAYLOAD_SIZE_FIELD_NUMBER: _ClassVar[int]
    ENABLE_STREAMING_FIELD_NUMBER: _ClassVar[int]
    iterations: int
    concurrent_requests: int
    payload_size: int
    enable_streaming: bool
    def __init__(self, iterations: _Optional[int] = ..., concurrent_requests: _Optional[int] = ..., payload_size: _Optional[int] = ..., enable_streaming: bool = ...) -> None: ...

class StressResponse(_message.Message):
    __slots__ = ("completed_requests", "average_response_time_ms", "errors", "summary")
    COMPLETED_REQUESTS_FIELD_NUMBER: _ClassVar[int]
    AVERAGE_RESPONSE_TIME_MS_FIELD_NUMBER: _ClassVar[int]
    ERRORS_FIELD_NUMBER: _ClassVar[int]
    SUMMARY_FIELD_NUMBER: _ClassVar[int]
    completed_requests: int
    average_response_time_ms: float
    errors: int
    summary: str
    def __init__(self, completed_requests: _Optional[int] = ..., average_response_time_ms: _Optional[float] = ..., errors: _Optional[int] = ..., summary: _Optional[str] = ...) -> None: ...

class PingRequest(_message.Message):
    __slots__ = ("client_id", "timestamp")
    CLIENT_ID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    client_id: str
    timestamp: int
    def __init__(self, client_id: _Optional[str] = ..., timestamp: _Optional[int] = ...) -> None: ...

class PingResponse(_message.Message):
    __slots__ = ("server_id", "server_timestamp", "latency_ms")
    SERVER_ID_FIELD_NUMBER: _ClassVar[int]
    SERVER_TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    LATENCY_MS_FIELD_NUMBER: _ClassVar[int]
    server_id: str
    server_timestamp: int
    latency_ms: int
    def __init__(self, server_id: _Optional[str] = ..., server_timestamp: _Optional[int] = ..., latency_ms: _Optional[int] = ...) -> None: ...
