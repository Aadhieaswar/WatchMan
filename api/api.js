// constant API URL variable
const API_URL = 'https://www.omdbapi.com/?apikey=fda039b5&r=json&'

// fetches results for search
export const getResult = async (search) => {
  const res = await fetch(API_URL + `s=${search}&`)
  const data = await res.json()
  return data
}

// fetches more results when scrolling and more results are available to display
export const getMoreResults = async (search, page) => {
  const res = await fetch(API_URL + `s=${search}&page=${page}`)
  const data = await res.json()
  return data
}

// fetches the full information for any movie
export const getInfo = async (ID) => {
  const res = await fetch(API_URL + `i=${ID}&plot=full&`)
  const data = await res.json()
  return data
}

