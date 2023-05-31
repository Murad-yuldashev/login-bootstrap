import React, { useState } from "react";
import FormData from "../UI/FormData";
import ArticleService from "../../service/articlesservice";
import { useDispatch } from "react-redux";
import { postArticleFailure, postArticleLoading, postArticleSuccess } from "../../slice/Article";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [createArticle, setCreateArticle] = useState({
    title: "",
    description: "",
    body: "",
  });

  const infoData = (e) => {
    setCreateArticle(prev => {
        return {
            ...prev,
            [e.target.name]: e.target.value
        }
    })
  }
  const {title, description, body} = createArticle;

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = {title, description, body};
    dispatch(postArticleLoading())
    try {
      await ArticleService.postArticle(article);
      dispatch(postArticleSuccess());
      navigate('/')
    } catch (error) {
      dispatch(postArticleFailure())
    }
  }

  return (
    <div className="text-center">
      <h1>Create Article</h1>
      <FormData createArticle={createArticle} infoData={infoData} formSubmit={formSubmit} />
    </div>
  );
};

export default CreateArticle;
