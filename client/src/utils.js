import { AUTH_TOKEN } from './constants/etc';

const getAuthToken = () => localStorage.getItem(AUTH_TOKEN);
const login = authToken => localStorage.setItem(AUTH_TOKEN, authToken);
const logout = () => localStorage.removeItem(AUTH_TOKEN);

export { getAuthToken, login, logout };
