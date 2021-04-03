export function GetStarships() {
    return fetch('https://swapi.dev/api/starships/').then(res => (res.json()));
}