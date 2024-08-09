import { Link } from "react-router-dom";
import { styler } from "@styler";

const Home = () => {
  styler()
  return (
    <div className="flex gap-1rem p-1rem">
      <Link to="/page/vulturex">VultureX</Link>
      <Link to="/page/greenowl">Green Owl</Link>
      <Link to="/page/meadow">Meadow Co</Link>
    </div>
  );
};

export default Home;
