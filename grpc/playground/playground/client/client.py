from playground.proto import service_pb2
from playground.proto import service_pb2_grpc
import grpc
import time
import argparse

class PlaygroundClient:
    def __init__(self, target="localhost:50051"):
        self.channel = grpc.insecure_channel(target)
        self.stub = service_pb2_grpc.PlaygroundServiceStub(self.channel)

    def echo(self, message):
        return self.stub.Echo(service_pb2.EchoRequest(message=message))

    def stream_data(self, count=100, interval_ms=100, message="Stream"):
        """Server streaming - creates long-lived connection"""
        request = service_pb2.StreamRequest(
            count=count,
            interval_ms=interval_ms,
            message=message
        )
        try:
            for response in self.stub.StreamData(request):
                print(f"Received: {response.message}@{response.timestamp}")
        except Exception as e:
            print(f"Stream error: {e}")
            raise

    def chat_stream(self, message_count=50):
        """Bidirectional streaming - most aggressive"""
        def generate_messages():
            for i in range(message_count):
                yield service_pb2.ChatMessage(
                    user_id="client",
                    message=f"Message {i + 1}",
                    timestamp=time.strftime("%H:%M:%S")
                )
                time.sleep(0.05)  # 50ms between messages

        try:
            responses = self.stub.Chat(generate_messages())
            for response in responses:
                print(f"Chat: {response.message}")
        except Exception as e:
            print(f"Chat error: {e}")
            raise

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='gRPC Playground Client')
    parser.add_argument('command', choices=['echo', 'stream', 'chat'], 
                       help='Command to test: echo, stream, or chat')
    parser.add_argument('--message', default="Hello, World!", 
                       help='Message for echo command')
    parser.add_argument('--count', type=int, default=100, 
                       help='Count for stream command')
    parser.add_argument('--interval', type=int, default=100, 
                       help='Interval in ms for stream command')
    parser.add_argument('--chat-count', type=int, default=50, 
                       help='Message count for chat command')
    
    args = parser.parse_args()
    
    client = PlaygroundClient()
    
    if args.command == 'echo':
        response = client.echo(args.message)
        print(f"Echo response: {response.message}")
    elif args.command == 'stream':
        print(f"Starting stream with count={args.count}, interval={args.interval}ms")
        client.stream_data(count=args.count, interval_ms=args.interval, message=args.message)
    elif args.command == 'chat':
        print(f"Starting chat with {args.chat_count} messages")
        client.chat_stream(message_count=args.chat_count)
