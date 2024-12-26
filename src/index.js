export default async function getData(){
    const response = await fetch("https://json-api.uz/api/project/forest/animals");
    const data = await response.json();
    return data;
}