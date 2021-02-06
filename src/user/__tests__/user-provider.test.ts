import { fetchUser, saveUser } from '../user-provider';
import type { User } from '../types';
import { userMock } from '../../mocks';

describe('UserProvider test case', () => {
    beforeEach(() => {
        localStorage.__STORAGE__ = {};
    });

    it('fechUser()', async () => {
        localStorage.setItem('user', JSON.stringify(userMock));

        expect(localStorage.getItem).not.toHaveBeenCalled();
        await fetchUser();
        expect(localStorage.getItem).toHaveBeenCalledWith('user');
        expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    });

    it('saveUser', async () => {
        expect(localStorage.setItem).not.toHaveBeenCalled();
        await saveUser(userMock);
        expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(userMock));
    });

    it('saveUser DOT NOT save if user = null', async () => {
        await saveUser(null as any);
        expect(localStorage.setItem).not.toHaveBeenCalled();
    });
});
