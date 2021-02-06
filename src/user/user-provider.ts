import type { User } from './types';

export async function fetchUser() {
    let parsedUser = null;

    try {
        const response = await localStorage.getItem('user');
        if (response) {
            parsedUser = JSON.parse(response);
        }
    } catch {}

    return parsedUser;
}

export async function saveUser(user: User) {
    if (user) {
        try {
            await localStorage.setItem('user', JSON.stringify(user));
        } catch {}
    }
}
