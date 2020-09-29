export const fetchUserData = user => {
    return fetch(`https://api.github.com/users/${user}`)
        .then(resp => resp.json())
        .catch(err => console.error(err));
};