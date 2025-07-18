# docker-traefik
My Docker setup with Traefik, Authelia and a bunch of other applications.

## Issues & Improvements
If you find any issues or have improvements, feel free to create an [issue](https://github.com/Joery/docker-traefik/issues) or [pull request](https://github.com/Joery/docker-traefik/pulls).

## Applications
> [!TIP]
> You are not required to run all applications, you can simply comment out or remove applications from the ```compose.yaml```-file.

- `adguard` blocking ads & tracking
- `adguard-sync` syncing config of `adguard` with other instances
- `asf` farming Steam cards
- `authelia` login portal for applications
- `bitwarden` storing passwords & secrets
- `deluge` downloading Linux ISOs
- `esphome` manage microcontrollers
- `flame` dashboard with bookmarks
- `freshrss` RSS feeds aggregator
- `gluetun` VPN for `deluge`
- `home-assistant` home automation
- `mongo` database for `unifi`
- `mosquitto` MQTT message broker
- `netbootxyz` PXE boot ISOs
- `nginx` simple webserver
- `pairdrop` P2P file sharing
- `portainer` container management
- `portainer-agent` container management agent
- `postgres` database for `authelia`, `bitwarden`, `freshrss`, `home-assistant`, `ryot` & `zipline`
- `ring` communication between Ring-devices & `home-assistant` via `mosquitto`
- `ryot` media tracker
- `socket-proxy` secure access to Docker socket
- `tautulli` Plex activity & statistics
- `traefik` reverse proxy
- `unifi` central management for UniFi
- `uptime-kuma` monitoring tool
- `watchtower` updating Docker containers
- `wyoming-openwakeword` assistant voice activation for `home-assistant`
- `wyoming-piper` text-to-speech for `home-assistant`
- `wyoming-whisper` speech-to-text for `home-assistant`
- `zipline` file & link sharing

## Networks
- `frontend` for access to `traefik`
- `backend` for access to `mongo`, `postgres` & `socket-proxy`

# Installation Instructions
> [!IMPORTANT]  
> These installation instructions are incomplete, they will be expanded upon and moved to the wiki in the future.

## Docker (Ubuntu)
- [Install Docker Engine & Docker Compose](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
- `sudo groupadd docker`
- `sudo usermod -aG docker $USER`

## Firewall (ufw)
> [!CAUTION]
> Understand the commands you are entering below and make sure they are correct, failing to do so may lock you out of your server.

```
# Install UFW
sudo apt-get install ufw

# Disable UFW & setup defaults
sudo ufw disable
sudo ufw reset
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Replace subnet with your home-network or management-VLAN
sudo ufw allow from x.x.x.x/24 to any port 22

# Setup rules
sudo ufw allow in 53/tcp    # AdGuard
sudo ufw allow in 53/udp    # AdGuard
sudo ufw allow in 443/tcp   # Traefik
sudo ufw allow in 1884/tcp  # MQTT
sudo ufw allow in 8080/tcp  # UniFi
sudo ufw allow in 8123/tcp  # Home Assistant
sudo ufw allow in 9001/tcp  # Portainer Agent

# Enable UFW & check rules
sudo ufw enable
sudo ufw status verbose
```

## PostgreSQL
```
# Create database
CREATE DATABASE x;

# Create user
CREATE USER x WITH ENCRYPTED PASSWORD 'x';

# Grand privileges to user on database
GRANT all privileges ON database x TO x;

# Repeat steps for other required databases
```
