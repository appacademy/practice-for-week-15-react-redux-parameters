import { useParams } from "react-router-dom";
import "./SingleArticle.css";

const SingleArticle = ({ articles }) => {
  const { id } = useParams("id");
  const article = articles.find((art) => art.id === id);

  return (
    <div className="singleArticle">
      <h1>{article?.title}</h1>
      <img src={article?.imageUrl} alt={article?.title} />
      <p>{article?.body}</p>
    </div>
  );
};

export default SingleArticle;
