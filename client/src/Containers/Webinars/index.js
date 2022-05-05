import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card";
import { getPostsListAsync } from "./webinarsSlice";
import "./style.scss";

export default function Webinars() {
  const { postsList } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsListAsync());
  }, []);
  return (
    <div className="webinars">
      <div className="webinars-content">
        {postsList.slice(0, 6).map((item) => (
          <Card
            createTime={item.created_at}
            title={item.title}
            content={JSON.parse(item.content).blocks[0].text}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
