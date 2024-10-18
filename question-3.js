// เริ่มเขียนโค้ดตรงนี้
const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
}
const handleResponse = (response) => {
    return response.json();
}
const onSuccess = (data) => {
    let filterData = data.filter((filtname) => filtname.name.length >= 17)
    let showName = filterData.map((arr) => arr.name);
    console.log(showName);
}
getUsers().then(handleResponse).then(onSuccess);