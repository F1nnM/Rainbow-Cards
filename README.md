# Yet another CardsAgainstHumanity clone

As the title suggests, this is yet another [Cards against Humanity](https://cardsagainsthumanity.com/) clone.

## How to run

There are docker images available:
- `f1nnm/yacahc` for the frontend
- `f1nnm/yacahc_backend` for the backend

Both can be configured via environment variables:

### Frontend
`REACT_APP_BACKEND`: URL of the backend. Example: `example.com`, `test.net:1234`

### Backend
`ADMIN_PASS`: Password for the colyseus monitor.