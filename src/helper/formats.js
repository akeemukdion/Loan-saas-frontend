import { array } from "prop-types";

export const get_url_extension = ( url ) => {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}
export const removeComma = num =>  {
    if (typeof num === "string") {
        return parseFloat(num.replace(/,/g, ''));
    }else {
        return num;
    }
} 
export const arrSum = arr => arr.reduce((a,b) => a + b, 0);
export const calcVat = num => 0.075 * num
export const calculateProcessing = (param1, param2) =>  ((param1 * 0.01) * param2)
export const  sortlatestByCreated = (array) =>  array.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
export const  sortlatestByPaidDate = (array) =>  array.sort((a, b) => new Date(b.date_paid) - new Date(a.date_paid));
export const sortlastestByNextPayment = () => array.sort((a, b) => new Date(b.next_payment_date) - new Date(a.next_payment_date));
export const  sortlatestByPaid = (array) =>  array.sort((a, b) => new Date(b.date_paid) - new Date(a.date_paid));
export const  sortlastestById = (array) =>  array.sort((a, b) => a.id - b.id);
export const  checkNegative = (num) =>  Math.sign(num)
export const  formatDate = (date) => {
    const d = new Date(date);
       let month = '' + (d.getMonth() + 1);
       let  day = '' + d.getDate();
       let  year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 