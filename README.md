# Daniel de los Reyes Leal - Portfolio

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Development

```
docker build -f Dockerfile.dev -t dandelea/portfolio .
docker run -it -p 8080:8080 dandelea/portfolio
```

... Listening on port 8080

## Production

```
docker build -t dandelea/portfolio .
docker run -it -p 8080:80 dandelea/portfolio
```

... Listening on port 8080

## Stack

* Vue

## Developer

Daniel de los Reyes
