import dayjs from "dayjs";
import { ArrowDown } from "../../components/Arrow";
import "./style.scss";

export default function Card({ createTime, title, content }) {
  return (
    <div className="card">
      <p className="card-time">{dayjs(createTime).format("DD/MM/YYYY")}</p>
      <h1 className="card-title">{title}</h1>
      <p className="card-content">{content}</p>
      <p className="card-time">
        {dayjs(createTime).add(10, "day").format("YYYY/MM/DD hh:mm")}
      </p>
      <div className="card-register">
        <span>Register Now</span>
        <div>
          <ArrowDown className="card-register-circle" />
        </div>
      </div>
    </div>
  );
}
