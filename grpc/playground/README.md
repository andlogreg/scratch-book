# gRPC Playground

## Overview

This is a simple gRPC playground I'll use to test gRPC connections and see how
they behave under different conditions.

## Setup

## Using Python Virtual Environment

```bash
# Create virtual environment
python -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Generate protocol buffer code
python -m grpc_tools.protoc \
  --proto_path=. \
  --python_out=. \
  --pyi_out=. \
  --grpc_python_out=. \
  playground/proto/service.proto

# Run server
python -m playground.server.server

# Run client (in another terminal)
python -m playground.client.client echo --message "Hi, there"
python -m playground.client.client stream --count 50 --interval 200 --message "Awesome"
python -m playground.client.client chat --chat-count 25
```