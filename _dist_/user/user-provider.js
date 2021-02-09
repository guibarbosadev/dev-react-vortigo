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
export async function saveUser(user) {
  if (user) {
    try {
      await localStorage.setItem('user', JSON.stringify(user));
    } catch {}
  }
}