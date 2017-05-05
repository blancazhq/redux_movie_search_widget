let init_state = {
  searchTerm: "",
  movieInfo: null,
  error: null,
  loading: false
}

export default function reducer(state=init_state, action){
  let nextState;
  if(action.type==="change"){
    nextState = Object.assign({}, state, {
      searchTerm: action.value
    })
  }else if(action.type==="getResult"){
    nextState = Object.assign({}, state, {
      movieInfo: action.payload,
      error: null,
      loading: false
    })
  }else if(action.type==="errorHandle"){
    nextState = Object.assign({}, state, {
      movieInfo: null,
      error: action.error,
      loading: false
    })
  }else if(action.type==="loading"){
    nextState = Object.assign({}, state, {
      loading: true
    })
  }else if(action.type==="showContent"){
    let results_copy=state.movieInfo.results.map((item)=>item);
    results_copy[action.idx].showContent = !results_copy[action.idx].showContent
    let movieInfo_copy = Object.assign({}, state.movieInfo,{
      results: results_copy
    })
    nextState = Object.assign({}, state, {
      movieInfo: movieInfo_copy
    })
  }else{
    nextState = Object.assign({}, state)
  }
  return nextState;
}
