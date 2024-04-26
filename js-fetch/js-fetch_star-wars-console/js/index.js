console.clear();

const url = "https://swapi.py4e.com/api/peoples";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch {
    console.error();
  }
}

fetchData();
