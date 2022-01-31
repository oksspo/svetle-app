import { writable } from "svelte/store";

export const users = writable([]);

const fetchUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(url);
    const userData = await res.json();
    users.set(userData);
}

fetchUsers();