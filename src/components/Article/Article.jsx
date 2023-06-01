import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../UI";
import { getArticleLoading, getArticleSuccess } from "../../slice/Article";
import { useNavigate } from "react-router-dom";
import ArticleService from "../../service/articlesservice";

const Article = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { article, isLoading } = useSelector((state) => state.article);
  const { loggedIn, user } = useSelector((state) => state.auth);

  const getArticles = async () => {
    dispatch(getArticleLoading());
    try {
      const dataArticles = await ArticleService.getArticles();
      dispatch(getArticleSuccess(dataArticles.articles));
    } catch (error) {
      console.log("Error get Articles");
    }
  };

  const deleteArticle = async (slug) => {
    try {
        await ArticleService.deleteArticle(slug);
        getArticles()
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="album py-5 ">
      {isLoading && <Spinner />}
      <div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {article.map((item) => (
            <div key={item.id} className="col">
              <div className="card shadow-sm h-100">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                </svg>
                <div className="card-body">
                  <p className="card-text fw-bold m-0">{item.title}</p>
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      onClick={() => navigate(`/article/${item.slug}`)}
                      type="button"
                      className="btn btn-sm btn-outline-success"
                    >
                      View
                    </button>
                    {loggedIn && item.author.username === user.username && (
                      <>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteArticle(item.slug)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                  <small className="text-body-secondary fw-bold text-capitalize">
                    {item.author.username}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
