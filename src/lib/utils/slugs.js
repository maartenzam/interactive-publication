export function slugify(str) {
	if (str) {
		return str
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/[\s_-]+/g, '-')
			.replace(/^-+|-+$/g, '');
	}
}

export function deslugify(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).replaceAll('-', ' ');
}
