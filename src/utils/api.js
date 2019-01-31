export const api = {
  nasaPics() {
    const url =
      "https://api.nasa.gov/planetary/apod?api_key=hMtJK4dG3SHgylWSHz9eXj0dhqBfTcVjfTNTv6Ks";
    return fetch(url).then((res) => res.json());
  }
};
