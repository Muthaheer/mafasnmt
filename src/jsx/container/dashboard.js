import { DIBarChart, StackedBarChart, StackedSingleBarChart } from "../component/chart/barChart"
import { AvgOrderValue, LineBox, LineBoxWithLegend } from "../component/chart/lineChart"
import { Img } from "../../constant";
import { TopCountries } from "../component/chart/doughnutChart";
import { Customers, TopChannels } from "../component/common/table";
import { ActivityTimeline, Timeline } from "../component/common/timeline";
import { WelcomeBoard } from "../component/common/commonUI";
import  { useNavigate} from 'react-router-dom'
import { useEffect } from "react";



const Dashboard = () => {

    const navigate = useNavigate()

    useEffect(()=> {
        const name = localStorage.getItem('name');
        if(!name) {
            navigate('/signup')
        }
    },[])
    return (
        <div className="p-4 ">
            <WelcomeBoard />
            <div className="grid grid-cols-3 gap-4 pt-2 ">
                <LineBox name="Acne Plus" icon={Img.ArrowPurpleLogo} value='$24.780' percChange='49'/>
                <LineBox name="Acne Advanced" icon={Img.ArrowBlueLogo} value='$17.489' percChange='-14'/>
                <LineBox name="Acne Professional" icon={Img.ArrowGreyLogo} value='$9.962' percChange='29'/>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2 ">
                <div className="flex flex-col shadow border-[#E2E8F0] bg-white">
                    <DIBarChart/>    
                </div>
                <div className="flex flex-col shadow border-[#E2E8F0] bg-white">
                    <LineBoxWithLegend name="AVG Order Value" value="$72" percChange="32"/>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4 pt-2 ">
                <div className="flex flex-col col-span-2  shadow border-[#E2E8F0] bg-white h-[375px]">
                    <TopCountries/>    
                </div>
                <div className="flex flex-col col-span-3 shadow border-[#E2E8F0] bg-white">
                    <TopChannels />    
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2 ">
                <div className="flex flex-col  shadow border-[#E2E8F0] bg-white">
                <LineBoxWithLegend name="Sales Over Time (all stores)" value="1.482" percChange="-22"/>    
                </div>

                <div className="flex flex-col shadow border-[#E2E8F0] bg-white">
                    <StackedBarChart/>
                    </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2 ">
                <div className="flex flex-col shadow border-[#E2E8F0] bg-white">
                    <Customers/>    
                </div>
                <div className="flex flex-col shadow border-[#E2E8F0] bg-white">
                    <StackedSingleBarChart />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2 ">
                <div className="flex flex-col shadow border-[#E2E8F0] bg-white">
                    <ActivityTimeline/>    
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard