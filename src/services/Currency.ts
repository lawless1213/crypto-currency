export const setCurrency = (value: string | number): string => {
	let res = '$' + Number(value).toLocaleString();
	return res;
}