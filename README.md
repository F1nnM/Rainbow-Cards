# Yet another Cards Against Humanity clone

[![Publish latest Docker image](https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone/actions/workflows/docker_push.yaml/badge.svg)](https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone/actions/workflows/docker_push.yaml)
[![Publish release Docker image](https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone/actions/workflows/docker_release.yaml/badge.svg)](https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone/actions/workflows/docker_release.yaml)

As the title suggests, this is yet another [Cards against Humanity](https://cardsagainsthumanity.com/) clone.

The game is available to play [here](https://cah.mfinn.de).

## How to run

There are docker images available here on github as well as in the official docker registry:
- `f1nnm/yacahc` for the frontend
- `f1nnm/yacahc_backend` for the backend

The tags available are:
- `latest`: Always the state of the repo
- `release-{version number}`: All the releases

Both can be configured via environment variables:

### Frontend
- `REACT_APP_BACKEND`: URL of the backend. Example: `example.com`, `test.net:1234`
- `REACT_APP_USE_HTTPS`: Use htpps and wss for the connections to the backend

### Backend
- `ADMIN_PASS`: Password for the colyseus monitor.

<!-- Test -->
