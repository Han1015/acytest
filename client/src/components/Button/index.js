import "./style.scss";

export default function Button({ title, onClick, className, primary = false }) {
  let cls = `btn ${primary ? "btn-primary" : ""} ${className ? className : ""}`;

  return (
    <button className={cls} onClick={onClick}>
      {title}
    </button>
  );
}
