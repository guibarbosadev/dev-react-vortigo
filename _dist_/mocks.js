export const userMock = {
  name: 'Some name',
  favoritePokemonType: 'fire'
};
export const userContextMock = {
  user: null,
  getUser: async function () {
    this.user = { ...userMock
    };
    this.alreadyFetchedUser = true;
  },
  saveUser: async function () {
    this.alreadyFetchedUser = true;
  },
  alreadyFetchedUser: true
};