import { Routes, Route } from "react-router-dom";
import { ArticleDetail, Home, Login, Navbar, Registrasiya } from "./components/index";
import AuthService from "./service/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { siginUserSuccsess } from "./slice/Auth";
import { getItem } from "./helpers/Persistence-storage";
import ArticleService from "./service/articlesservice";
import { getArticleLoading, getArticleSuccess } from "./slice/Article";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(siginUserSuccsess(response.user));
    } catch (error) {
      console.log("Error");
    }
  };

  const getArticles = async () => {
    dispatch(getArticleLoading());
    try {
      const dataArticles = await ArticleService.getArticles();
      dispatch(getArticleSuccess(dataArticles.articles));
    } catch (error) {
      console.log("Error get Articles");
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
    getArticles();
  }, []);

  return (
    <main className="">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registrasiya />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
