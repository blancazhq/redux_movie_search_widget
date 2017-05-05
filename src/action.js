import $ from "jquery";
let api_key = "12e5f764515c139983abd015e17446fd";

export const change = (event) =>({
    type: "change",
    value: event.target.value
});

export const search = (query) => {
  return function(dispatch) {
    dispatch({type: "loading"})
    $.ajax({
      url: "https://api.themoviedb.org/3/search/movie",
      data: {
        query: query,
        api_key: api_key
      }
    })
    .then(data => {
      data.results.forEach((result)=>result.showContent = false)
      dispatch({
      type: "getResult",
      payload: data
    })})
    .catch(resp => {
      let error = resp && resp.responseJSON && resp.responseJSON.message || "something went wrong!";
      dispatch({type: "errorHandle", error: error})
    })
  }
}

export const showContent = (idx)=>({
  type: "showContent",
  idx: idx
})
