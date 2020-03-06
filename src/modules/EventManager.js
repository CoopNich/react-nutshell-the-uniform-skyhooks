const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch('${remoteURL}/events/${id}').then(result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/events`).then(result => result.)
    }
}