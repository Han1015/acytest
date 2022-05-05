import "./style.scss";

const TITLE = "Forex Webinars";
const DESCRIPTION =
  "Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader.";

export default function Banner({ title = TITLE, description = DESCRIPTION }) {
  return (
    <div className="banner">
      <h1 className="font28 fontWeight500 banner-title">{title}</h1>
      <p className="banner-description">{description}</p>
    </div>
  );
}
