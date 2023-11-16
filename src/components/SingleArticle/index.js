import "./SingleArticle.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const params = useParams();
  const articleId = params.id;
  const articles = useSelector((state) => state.articleState.entries);

  const article = articles.find((article) => article.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
