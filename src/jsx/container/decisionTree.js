import { WelcomeBoard } from "../component/common/commonUI"
import { SteppedLineTo } from 'react-lineto';
import DT from "../component/tree/sizeNode";
import { useEffect } from "react";
import  { useNavigate} from 'react-router-dom'
 

export const CDT = () => {
    const navigate = useNavigate()

    useEffect(()=> {
        const name = localStorage.getItem('name');
        if(!name) {
            navigate('/signup')
        }
    },[])

    return (
        <div className="flex w-full justify-around  p-4 bg-slate-100">
            <div className="flex  flex-col w-[1024px]">
                <WelcomeBoard />
                <div className="flex justify-between my-6">
                    <span className="text-4xl font-medium">Customer Decision Tree</span><span className="text-[#0EA5E9] mt-4">Last Refresh : 17th Nov’23, 23:53</span>
                </div>
                <div className="flex justify-end">
                    <span className="text-white bg-[#D9D9D9] px-2 py-1 font-semibold text-xl rounded-lg mt-1">Formulation : Vol x Val% / Space %</span>
                </div>

                <div className="flex mt-4 w-[1024px]">
                    <span className="text-xl w-1/12 mt-6 text-[#F6CE41]">ORIGIN</span>
                    <div className=" w-11/12 flex w-full mx-6 justify-between border border-[#ABABAB] bg-[#D9D9D90A] border-dashed p-2">
                        <div className="flex flex-col px-8 py-2 border-2 border-[#F6CE41] rounded-full"><span className="text-[#757575]">Premium</span><span className="">30%  / 45%</span></div>
                        <div className="flex flex-col px-8 py-2 border-2 border-[#F6CE41] rounded-full"><span className="text-[#757575]">MainStream</span><span className="">30%  / 45%</span></div>
                        
                        <div className="LowBudget flex flex-col px-8 py-2 border-2 border-[#F6CE41] rounded-full"><span className="text-[#757575]">Low Budget</span><span className="">30%  / 45%</span></div>
                        <div className="flex flex-col px-8 py-2 border-2 border-[#F6CE41] rounded-full"><span className="text-[#757575]">Entry</span><span className="">30%  / 45%</span></div>
                    </div>
                </div>
                <div className="flex mt-8  w-[1024px] ">
                    <span className="text-xl w-1/12 mt-6 text-[#41D987]">BRAND</span>
                    <div className="w-11/12 text-sm  w-full mx-6  border border-[#ABABAB] bg-[#D9D9D90A] border-dashed p-2">
                        <div className="flex justify-end mr-14">
                            <div className="Local flex flex-col px-8 ml-8 py-2 border-2 border-[#41D987] rounded-full"><span className="text-[#757575]">Local</span><span className="">30%  / 45%</span></div>
                            <div className="International flex flex-col px-8 ml-8 py-2 border-2 border-[#41D987] rounded-full"><span className="text-[#757575]">International</span><span className="">30%  / 45%</span></div>
                            <div className="Region flex flex-col px-8 ml-8 py-2 border-2 border-[#41D987] rounded-full"><span className="text-[#757575]">Region</span><span className="">30%  / 45%</span></div>
                        </div>
                    </div>

                </div>
                <SteppedLineTo from="LowBudget" to="Local" fromAnchor="bottom center" toAnchor= "top center" orientation="v"  borderColor="black" borderWidth="1px"/>
                <SteppedLineTo from="LowBudget" to="International" fromAnchor="bottom center" toAnchor= "top center" orientation="v" borderColor="black" borderWidth="1px"/>
                <SteppedLineTo from="LowBudget" to="Region" fromAnchor="bottom center" toAnchor= "top center" orientation="v" borderColor="black" borderWidth="1px"/>

                <div className="flex mt-8 w-[1024px] ">
                    <span className="text-xl w-1/12 mt-6 text-[#4D41D9]">TYPE</span>
                    <div className="w-11/12 text-sm flex w-full mx-6 justify-center border border-[#ABABAB] bg-[#D9D9D90A] border-dashed p-2">
                        <div className="CATA flex  mr-6 border border-[#4D41D9] p-2 rounded-full ">
                            <div className="flex flex-col px-8 mx-3 py-2 rounded-full bg-[#ABABAB] text-white"><span className="text-white">Brand 1</span><span className="">30%  / 45%</span></div>
                            <div className="flex flex-col px-8 mx-3 py-2 rounded-full bg-[#ABABAB] text-white"><span className="text-white">Brand 2</span><span className="">30%  / 45%</span></div>
                        </div>
                        <div className="CATB flex  border border-[#4D41D9]  p-2 rounded-full">
                            <div className="flex flex-col px-8 mx-3 py-2 rounded-full bg-[#ABABAB] text-white"><span className="text-white">Brand 3</span><span className="">30%  / 45%</span></div>
                            <div className="flex flex-col px-8 mx-3 py-2 rounded-full bg-[#ABABAB] text-white"><span className="text-white">Brand 4</span><span className="">30%  / 45%</span></div>
                            <div className="flex flex-col px-8 mx-3 py-2 rounded-full bg-[#ABABAB] text-white"><span className="text-white">Brand 5</span><span className="">30%  / 45%</span></div>
                        </div>
                    </div>

                </div>
                <SteppedLineTo from="International" to="CATA" fromAnchor="bottom center" toAnchor= "top center" orientation="v" borderColor="black" borderWidth="1px"/>
                <SteppedLineTo from="International" to="CATB" fromAnchor="bottom center" toAnchor= "top center" orientation="v" borderColor="black" borderWidth="1px"/>
                <div className="flex mt-8 w-[1024px] ">
                    <span className="text-xl w-1/12 mt-6 text-[#4D41D9]">SIZE</span>
                    <div className="w-11/12 text-sm flex w-full mx-6 justify-between  border border-[#ABABAB] bg-[#D9D9D90A] border-dashed p-2">
                        <DT/>
                        {/* <div className=" flex justify-start mr-6 p-2 rounded-full ">
                            <div className="flex flex-col px-12 mx-2 py-2 rounded-full bg-[#97979778] text-white"><span className="text-white">Size 1</span></div>
                            <div className="flex flex-col px-12 mx-2 py-2 rounded-full bg-[#97979778] text-white"><span className="text-white">Size 2</span></div>
                        </div>
                        <div className="flex justify-end   p-2 rounded-full">
                            <div className="flex flex-col px-12 mx-2 py-2 rounded-full bg-[#97979778] text-white"><span className="text-white">Size 3</span></div>
                            <div className="flex flex-col px-12 mx-2 py-2 rounded-full bg-[#97979778] text-white"><span className="text-white">Size 4</span></div>
                            <div className="flex flex-col px-12 mx-2 py-2 rounded-full bg-[#97979778] text-white"><span className="text-white">Size 5</span></div>
                        </div> */}
                    </div>

                </div>

            </div>
        </div>

    )


}