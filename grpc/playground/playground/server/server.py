from playground.proto import service_pb2
from playground.proto import service_pb2_grpc
import grpc
from concurrent import futures
import time

class PlaygroundService(service_pb2_grpc.PlaygroundServiceServicer):
    def Echo(self, request, context):
        return service_pb2.EchoResponse(message=f"'{request.message}' to you too!")
    
    def StreamData(self, request, context):
        for i in range(request.count):
            if context.is_active():
                response = service_pb2.StreamResponse(
                    sequence=i + 1,
                    message=f"{request.message} - {i + 1}",
                    timestamp=time.strftime("%H:%M:%S")
                )
                yield response
                time.sleep(request.interval_ms / 1000.0)  # Convert ms to seconds
            else:
                break
    
    def Chat(self, request_iterator, context):
        """Bidirectional streaming - most likely to trigger the error"""
        for request in request_iterator:
            if context.is_active():
                response = service_pb2.ChatMessage(
                    user_id="server",
                    message=f"CHAT: '{request.message}' to you too!",
                    timestamp=time.strftime("%H:%M:%S")
                )
                yield response
                time.sleep(0.1)  # Small delay to keep connection alive
            else:
                break
    
    def serve(self):
        server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        service_pb2_grpc.add_PlaygroundServiceServicer_to_server(self, server)
        server.add_insecure_port('[::]:50051')
        server.start()
        server.wait_for_termination()

if __name__ == "__main__":
    server = PlaygroundService()
    server.serve()
