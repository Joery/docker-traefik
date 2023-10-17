# docker-traefik
My Docker setup with Traefik, Authelia and a bunch of other applications.

## Issues & Improvements
If you find any issues or have improvements, feel free to create an [issue](https://github.com/Joery/docker-traefik/issues) or [pull request](https://github.com/Joery/docker-traefik/pulls).

## Applications
- `adguard` blocking ads & tracking
- `adguard-sync` syncing config of `adguard` with other instances
- `asf` farming Steam cards
- `authelia` login portal for applications
- `bitwarden` storing passwords & secrets
- `deluge` downloading Linux ISOs
- `flame` dashboard with bookmarks
- `freshrss` RSS feeds aggregator
- `gluetun` VPN for `deluge`
- `home-assistant` home automation
- `mongo` database for `unifi`
- `mosquitto` MQTT message broker
- `pairdrop` P2P file sharing
- `portainer` container management
- `postgres` database for `authelia`, `bitwarden`, `home-assistant` & `zipline`
- `socket-proxy` secure access to Docker socket
- `tautulli` Plex activity & statistics
- `traefik` reverse proxy
- `unifi` central management for UniFi
- `uptime-kuma` monitoring tool
- `watchtower` updating Docker containers
- `zipline` file & link sharing

## Networks
- `frontend` for access to `traefik`
- `backend` for access to `mongo`, `postgres` & `socket-proxy`

# Installation Instructions

## Docker (Ubuntu)
- [Install Docker Engine & Docker Compose](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
- `sudo groupadd docker`
- `sudo usermod -aG docker $USER`

## Firewall (ufw)
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

# Enable UFW & check rules
sudo ufw enable
sudo ufw status verbose
```
