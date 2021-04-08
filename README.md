# Yet another Cards Against Humanity clone

[![Publish latest Docker image](https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone/actions/workflows/docker_push.yaml/badge.svg)](https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone/actions/workflows/docker_push.yaml)
[![Publish release Docker image](https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone/actions/workflows/docker_release.yaml/badge.svg)](https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone/actions/workflows/docker_release.yaml)

As the title suggests, this is yet another [Cards against Humanity](https://cardsagainsthumanity.com/) clone.

The game is available to play [here](https://cah.mfinn.de).

# Help the game

## Running another backend server
As the resources of my server are limited the game might become slow on the main server. You can help by running the backend on your own server. 
Doing so is very easy, if you have some experience with git and Docker. 
If you need help or have any questions, feel free to mail me at `cah@mfinn.de`, I'm happy to help you.

### Prerequisites
- A server with a good uptime and enough bandwidth / resources. Doesn't have to be perfect, but the players should experience as few disconnections as possible.
- Docker
- Motivation to update the backend quickly after a new version is released here. Important, as new versions might introduce incompatibilities with the frontend.

### Running the backend

Simply start the backend docker and expose the port 8080. 
You can do this with for example the following command:

```bash
docker run -p <target port>:8080 --env REACT_APP_MASTER_BACKEND=cah-backend.mfinn.de --env REACT_APP_MASTER_BACKEND_USE_HTTPS=true f1nnm/yacahc_backend:release-<version>
```

### Check if it works
In the frontend select a custom server and enter yours. Please check if you can create a game without errors. If this works, everything should be alright.

### Making it available to players
Create a pull request editing the `backend/src/servers.ts` file, adding your server to the list. Please add it at the bottom, just above localhost.
Template:
```js
{
    name: "A display name", // shouldn't be longer than maybe 25 characters
    url: "example.com",     // this can be an url or an ip-address, it may include a port (example.com:8080)
    ssl: true               // should the game use ssl to connect to your server.
                            // It's 2021, everybody should be using SSL encryption on the web, but hey, you do you.
}
```
If you don't know how to do that, just mail me that information.

## Contribute to this repository

Be it design improvements, new features or just a fixed typo, any contribution to this repository are very welcome.
For larger contributions please check back with me first, so we don't work on the same thing separately.

# Run your own, completely separate version of the game
Please don't run a new instance with the intent of replacing me, however you're welcome to run a new instance of this game for your friends or other groups.

Also, did you consider, just running the backend as described above and helping everyone out?
## How to run

There are docker images available here on GitHub as well as in the official docker registry:
- `f1nnm/yacahc` for the frontend
- `f1nnm/yacahc_backend` for the backend

The tags available are:
- `latest`: Always the state of the repo
- `release-{version number}`: All the releases

Both can be configured via environment variables:

### Frontend
- `REACT_APP_MASTER_BACKEND`: URL of the master / mothership / main backend.
- `REACT_APP_MASTER_BACKEND_USE_HTTPS`: Use htpps for the connections to the master / mothership / main backend.

### Backend
- `ADMIN_PASS`: Password for the colyseus monitor. 
