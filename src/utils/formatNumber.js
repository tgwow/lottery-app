export const formatMoney = (value) => {
	return new Intl.NumberFormat('EUA', { style: 'currency', currency: 'USD' }).format(value);
};
