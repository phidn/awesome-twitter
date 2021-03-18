const initialState = {
  user: null,
  posts: []
}

/* eslint-disable */
export default (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_USER": {
      state.user = action.payload;
      break;
    }
    case "GET_ALL_POSTS": {
      posts = action.payload
      break;
    }
    case "CREATE_ONE_POST": {
      state.posts = [ ...state.posts, action.payload ];
      break;
    }
    case "UPDATE_ONE_POST": {
      let postsUpdate = state.posts.map(post => {
        return post._id === action.payload._id
          ? {...post, ...action.payload}
          : post
      });
      state.posts = postsUpdate;
    }; break;
    case "DELETE_ONE_POST": {
      let postsUpdate = state.posts.filter(post => post._id != action.payload._id);
      state.posts = postsUpdate;
    }; break;
  }
  return {...state};
}
