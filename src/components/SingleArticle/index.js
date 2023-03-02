import { useParams } from "react-router-dom";
import "./SingleArticle.css";
import { useSelector } from "react-redux";

const SingleArticle = () => {
  const { id } = useParams();
  const articles = useSelector((state) => state.articleState.entries);
  const article = articles.find((article) => article.id === id);

  console.log("ID: ", id);
  console.log("Article: ", articles);
  console.log(article);

  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
