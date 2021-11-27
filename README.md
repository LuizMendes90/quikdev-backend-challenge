# RESTFul API User

Project to create a RESTful API, developed by Luiz Mendes using the following technologies:

- Jest
- Swagger UI
- Docker
- NPM
- Node
- Typescrypt
- Mongo
- Typeorm

## Índice:
- [Starting](#starting)
	- [dependencies](#dependencies)
	- [Running the application](#running-the-application)
- [Tests](#tests)
- [Documentation](#documentation)

## Starting
As a basis for this application, Docker was used, this is why a large part of this section is based on docker. To run with Docker, make sure you have docker and docker-compose installed and configured, more information about these dependencies can be found on the providers website:

### Dependencies
- [Docker] https://docs.docker.com/engine/install/ versão Docker version 20.10.10, build b485636
- [Docker-Compose] https://docs.docker.com/compose/install/ Docker version 20.10.10, build b485636

After configuring Docker, you can clone this repository and run the application. Still talking about Docker and containers, the application needs port 3000 to run the api and 27017 to run Mongo, in this case, make sure these ports are free to use.


> **versions** The application was developed using the Docker and docker-composer versions listed above and it is recommended to use the same or higher versions.

> **Note** In an upcoming release, an ENV will be well configured, also to facilitate deployment, testing and development environments.
### Running the application

At this point, using any terminal, you should enter the cloned application folder and run the following command:

```
docker-compose up
```

You will be able to see each of the resources available at the following address of Docker counters:

```
API : http://localhost:3000/
Database : http://localhost:27017/
```

In the documentation section you can find ways to consume this API.

## Tests

Tests can be run from within the root of the application. From any terminal, type the command:


```
npm run test
```

The above command will perform part of the code quality check.## Documentação

The Swagger UI based on OPEN API 3.0 was used for documentation. After running the application, the documentation can be viewed at http://localhost:3000/v1/docs. In this part, you can check all available endpoints as well as possible input and output data.
