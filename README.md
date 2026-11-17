# docker-traefik
My Docker setup with Traefik, Authelia and a bunch of other applications.

## Getting Started
You can download the [latest release](https://github.com/Joery/docker-traefik/releases/latest) or clone the repository:
```
git clone https://github.com/Joery/docker-traefik.git
cd docker-traefik
```

Make a copy of the example `.env` file and fill in the required variables:
```
cp .env.example .env
nano .env
```

This is also where you enable or disable optional containers.

Start the stack:
```
docker compose up -d
```

## Documentation
Additional documentation, guides and examples are available in the [wiki](https://github.com/Joery/docker-traefik/wiki).

## Contributing
Contributions are welcome. If you find any issues or have improvements, you can create an [issue](https://github.com/Joery/docker-traefik/issues) or [pull request](https://github.com/Joery/docker-traefik/pulls).

## License
This repo is licensed under the [GNU General Public License v3.0](LICENSE).
