const remoteURL = "http://localhost:5002";

export default {
    getUser(email) {
        return fetch(`${remoteURL}/users?email=${email}`).then(result => result.json());
    }
}