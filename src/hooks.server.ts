import { redirect, type Handle } from '@sveltejs/kit';

// Once /a is answered, every request made for it moves on to /b.
export const handle: Handle = ({ event, resolve }) => {
	if (event.url.pathname === '/a' && event.cookies.get('answered')) redirect(303, '/b');
	return resolve(event);
};
