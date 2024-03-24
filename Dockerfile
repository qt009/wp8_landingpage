FROM node:latest AS build-env

# Install required dependencies
RUN apt-get update \
    && apt-get install -y wget \
    && apt-get install -y golang-go \
    && rm -rf /var/lib/apt/lists/*

# Download and install Hugo
RUN wget -O /tmp/hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.121.2/hugo_extended_0.121.2_Linux-64bit.tar.gz \
    && tar -xzf /tmp/hugo.tar.gz -C /tmp \
    && mv /tmp/hugo /usr/local/bin/hugo \
    && rm /tmp/hugo.tar.gz

WORKDIR /opt/HugoApp

# Copy Hugo project files into the container workdir.
COPY . .

# Run Hugo to generate HTML.
RUN hugo

