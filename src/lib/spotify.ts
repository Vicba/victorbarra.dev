const client_id = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID!;
const client_secret = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_SECRET!;
const refresh_token = import.meta.env.VITE_REACT_APP_SPOTIFY_REFRESH_TOKEN!;

const credentials = `${client_id}:${client_secret}`;
const basic = btoa(credentials);
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return await response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};