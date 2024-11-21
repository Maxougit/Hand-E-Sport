# Makefile for building and running the Docker container

# Variables
IMAGE_NAME = handesport
CONTAINER_NAME = handesport_container
PORT = 3000

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
run: clean
	docker run -d --restart always -p $(PORT):$(PORT) --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Clean up the Docker container
clean:
	docker stop $(CONTAINER_NAME) || exit 0
	docker rm $(CONTAINER_NAME) || exit 0

# Full build and run process
all: build run