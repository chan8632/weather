import Lottie from "lottie-react";
import weatherWindy from "../assets/Weather-windy.json";
const LodaingWindy = () => {
  return (
    <Lottie
      animationData={weatherWindy}
      loop={true}
      autoplay={true}
      style={{ width: 400, height: 400 }}
    ></Lottie>
  );
};

export default LodaingWindy;
