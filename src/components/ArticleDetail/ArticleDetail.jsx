import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../../service/articlesservice";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailLoading,
  getArticleDetailSuccess,
} from "../../slice/Article";
import moment from 'moment';
import { Spinner } from "../UI";

const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector((state) => state.article);

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailLoading());
      try {
        const response = await ArticleService.getArticleDetails(slug);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailure());
      }
    };

    getArticleDetail();
  }, [slug]);

  return isLoading ? <Spinner /> : (
    articleDetail !== null && (
        <>
      <div className="p-4 p-md-5 mb-4 rounded ">
        <div className="col-md-8 px-0">
          <h2 className="display-5 ">{articleDetail.title}</h2>
          <p className="lead my-3">{articleDetail.description}</p>
        </div>
      </div>
      <div className="row mb-2">
    <div className="col-md-6">
     <div className="shadow-sm ">
        <h3 className="text-capitalize">{articleDetail.slug}</h3>
        <blockquote>{articleDetail.body}</blockquote>
     </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{articleDetail.author.username}</h3>
          <div className="mt-2 mb-3 text-body-secondary"><span className="fw-bold">Create At:</span> {moment(articleDetail.author.createdAt).format('DD MMM YYYY')}</div>
          <p className="mb-auto">{articleDetail.author.bio}</p>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">{articleDetail.author.username[0]}</text></svg>
        </div>
      </div>
    </div>
  </div>
      </>
    )
  );
};

export default ArticleDetail;
