import "./featured.scss";
import title from "../../Images/title.png";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";

const Featured = ({type}) => {
  return (
    <div className="featured">
      <img
        src="https://pixabay.com/get/g833f0df3209d9cf1f7ceb60968cd5936c6ec846caaeca03eb541b6cf13dae8d4dde16571e3ff966866dfad5a42b06185611c88ddd24b3d4ff11ed92d75db47444ef03600b75a8ad061dfc270d67ecb89_1920.jpg"
        alt="featured"
      ></img>
      <div className="info">
        <img src={title} alt="title"></img>
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          ducimus
          <br /> voluptas, doloremque excepturi neque magni quas aperiam
          cupiditate, officiis
          <br /> tenetur vero quisquam vitae culpa aspernatur et tempora
          perferendis dolore <br />
          ea? oloremque excepturi neque magni
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
