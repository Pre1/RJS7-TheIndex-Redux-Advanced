import * as actionTypes from "./actionTypes"

import axios from "axios"

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const fetchAuthorDetail = (authorID) => {
	return async dispatch => {
		try {
	      const res = await instance.get(`/api/authors/${authorID}`);
	      const author = res.data;
	      // state ==> { author: author, loading: false };
	      dispatch({
	      	type: actionTypes.FETCH_AUTHOR_DETAIL,
	      	payload: author
	      })
	    } catch (err) {
	      console.error(err);
	    }
	}
}