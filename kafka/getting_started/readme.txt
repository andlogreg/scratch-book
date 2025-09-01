## Create local kafka cluster in docker:

- Install CLI: `brew install confluentinc/tap/cli`
- Start broker: `confluent local kafka start`
- Note the Plaintext Ports printed in your terminal, which you will need to configure the producer and consumer clients in upcoming steps.
- Create purchases topic: `confluent local kafka topic create purchases`

## Setup producer/consumer

- in producer.py and consumer.py, replace the port with the Plaintext Ports from above

## Run

- Run the producer: `python producer.py`
- Run the consumer: `python consumer.py`

## Shutdown

- Shutdown kafka cluster: `confluent local kafka stop`