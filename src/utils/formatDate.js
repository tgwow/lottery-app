export const formatCurrentDate = () => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${String(day).padStart(2, 0)}/${String(month).padStart(2, 0)}/${year}`;
};
