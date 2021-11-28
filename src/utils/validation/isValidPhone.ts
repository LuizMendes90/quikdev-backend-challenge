const expression = '^\\([0-9]{2}\\) (([0-9]{4}-[0-9]{4}))$';
const regex = new RegExp(expression);

const isValidPhone = (phone: string): boolean => regex.test(phone);

export default isValidPhone;
