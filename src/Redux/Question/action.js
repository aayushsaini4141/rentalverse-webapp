import axios from "axios";
import {
  DELETE_QUESTION_ERROR,
  DELETE_QUESTION_LOADING,
  DELETE_QUESTION_SUCCESS,
  GET_QUESTION_ERROR,
  GET_QUESTION_LOADING,
  GET_QUESTION_SUCCESS,
  POST_QUESTION_ERROR,
  POST_QUESTION_LOADING,
  POST_QUESTION_SUCCESS,
} from "./actiontype";

export const getquestionapi = () => (dispatch) => {
  dispatch({ type: GET_QUESTION_LOADING });

  axios
    .get("http://localhost:8080/questions")
    .then((res) => dispatch({ type: GET_QUESTION_SUCCESS, payload: res.data }))
    .then(() => dispatch({ type: GET_QUESTION_ERROR }));
};

export const postquestionapi = (data) => (dispatch) => {
  dispatch({ type: POST_QUESTION_LOADING });

  axios
    .post("http://localhost:8080/questions", {
      data,
    })
    .then(() => {
      axios
        .get("http://localhost:8080/questions")
        .then((res) =>
          dispatch({ type: POST_QUESTION_SUCCESS, payload: res.data })
        )
        .then(() => dispatch({ type: POST_QUESTION_ERROR }));
    });
};

export const deletequestionapi = (id) => (dispatch) => {
  dispatch({ type: DELETE_QUESTION_LOADING });

  axios
    .delete(`http://localhost:8080/questions/${id}`)
    .then(() => {
      axios
        .get("http://localhost:8080/questions")
        .then((res) =>
          dispatch({ type: DELETE_QUESTION_SUCCESS, payload: res.data })
        )
        .then(() => dispatch({ type: DELETE_QUESTION_ERROR }));
    });
};
