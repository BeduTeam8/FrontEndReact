// here should go all api related calls

const ITEMS_PER_PAGE = 30;

url = "https://libroverse-production.up.railway.app/book/name"



// create an async fucntiont that will search
const search = async (query) => {
    const response = await fetch(
        `${url}/${query}`
    );
    const data = await response.json();
    return data;
    }
