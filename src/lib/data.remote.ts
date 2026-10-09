import { form, getRequestEvent } from '$app/server';

export const save = form('unchecked', async (data) => {
	getRequestEvent().cookies.set('answered', String(data.answer), { path: '/' });
	return { saved: true };
});
