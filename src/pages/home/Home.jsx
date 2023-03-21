import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userdata } from "../../dummyData";
import WidgetSm from "../../components/widgetsSm/WidgetSm";
import WidgetLg from "../../components/widgetsLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userdata}
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
