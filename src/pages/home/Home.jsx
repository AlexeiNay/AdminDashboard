import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import {userdata} from '../../dummyData'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart
        title= "User Analytics"
        data={userdata}
        grid
        dataKey='Active User'
        />
    </div>
  )
}
