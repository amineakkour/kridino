export default function getCurrentDate(){
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return year + '-0' + month + '-0' + day;
}