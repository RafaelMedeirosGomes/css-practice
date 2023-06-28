# css-practice

## About

Repository for Brad Traversy "50 Projects in 50 Days" course. 

## Prerequisites

- [Docker](https://www.docker.com/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## How this works

The files are served using [nginx](https://www.nginx.com/) inside a Docker container.
You don't need to configure anything, just run:

- `docker compose up -d` to start the server
- `docker compose down` to stop the server

## Picking a project

1. Access a project branch with `git checkout <branch-name>`
2. Visit `localhost` in your browser (chrome recommended)
