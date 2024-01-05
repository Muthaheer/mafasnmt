import { Img } from "../../../constant"
import { faker } from '@faker-js/faker';


export const TopChannels = () => {

    return (<div className='flex flex-col'>
        <span className=" p-4 text-xl font-semibold">Top Countries </span>
        <hr className="h-px my-2 bg-gray-200 border-0" />
        <div className="px-4">

            <table class="table-auto w-full">
                <thead className="bg-[#F8FAFC] text-[#94A3B8]">
                    <tr className="text-left">
                        <th>SOURCE</th>
                        <th>VISITORS</th>
                        <th>REVENUES</th>
                        <th>SALES</th>
                        <th>CONVERSION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b text-center">
                        <td className="flex py-2"><img className="w-[36px] h-[36px]" src={Img.GithubLogo} /><span className="text-sm pt-2 pl-2 font-medium">Github.com</span></td>
                        <td>2.4K</td>
                        <td className="text-[#10B981]">$3.877</td>
                        <td>267</td>
                        <td className="text-[#0EA5E9]">4.7%</td>
                    </tr>
                    <tr className="border-b text-center py-2">
                        <td className="flex py-2"><img className="w-[36px] h-[36px]" src={Img.TwitterLogo} /><span className="text-sm pt-2 pl-2 font-medium">Twitter</span></td>
                        <td>2.2K</td>
                        <td className="text-[#10B981]">$3.677</td>
                        <td>241</td>
                        <td className="text-[#0EA5E9]">4.4%</td>
                    </tr>
                    <tr className="border-b text-center">
                        <td className="flex py-2"><img className="w-[36px] h-[36px]" src={Img.GoogleLogo} /><span className="text-sm pt-2 pl-2 font-medium">Google (organic)</span></td>
                        <td>2.0K</td>
                        <td className="text-[#10B981]">$3.273</td>
                        <td>236</td>
                        <td className="text-[#0EA5E9]">4.3%</td>
                    </tr>
                    <tr className="border-b text-center">
                        <td className="flex py-2"><img className="w-[36px] h-[36px]" src={Img.VimeoLogo} /><span className="text-sm pt-2 pl-2 font-medium">Vimeo.com</span></td>
                        <td>1.9K</td>
                        <td className="text-[#10B981]">$2.486</td>
                        <td>224</td>
                        <td className="text-[#0EA5E9]">4.2%</td>
                    </tr>
                    <tr className="border-b text-center">
                        <td className="flex py-2"><img className="w-[36px] h-[36px]" src={Img.IHLogo} /><span className="text-sm pt-2 pl-2 font-medium">Indiehackers.com</span></td>
                        <td>1.7K</td>
                        <td className="text-[#10B981]">$2.145</td>
                        <td>207</td>
                        <td className="text-[#0EA5E9]">1.9%</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>)
}

export const Customers = () => {

    return (<div className='flex flex-col'>
        <span className=" p-4 text-xl font-semibold">Top Countries </span>
        <hr className="h-px my-2 bg-gray-200 border-0" />
        <div className="px-4">

            <table class="table-auto w-full">
                <thead className="bg-[#F8FAFC] text-[#94A3B8]">
                    <tr className="text-left">
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>SPENT</th>
                        <th>COUNTRY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b text-center">
                        <td className="flex py-2"><img className="w-[36px] h-[36px] rounded-full" src={faker.image.urlLoremFlickr({ category: 'people' })} /><span className="text-sm pt-2 pl-2 font-medium">Alex Shatov</span></td>
                        <td>alexshatov@gmail.com</td>
                        <td className="text-[#10B981]">$2.249.88</td>
                        <td>US</td>
                    </tr>
                    <tr className="border-b text-center">
                        <td className="flex py-2"><img className="w-[36px] h-[36px] rounded-full" src={faker.image.urlLoremFlickr({ category: 'people' })} /><span className="text-sm pt-2 pl-2 font-medium">{faker.person.fullName()}</span></td>
                        <td>alexshatov@gmail.com</td>
                        <td className="text-[#10B981]">$2.249.88</td>
                        <td>Italy</td>
                    </tr>
                    <tr className="border-b text-center">
                        <td className="flex py-2"><img className="w-[36px] h-[36px] rounded-full" src={faker.image.urlLoremFlickr({ category: 'people' })} /><span className="text-sm pt-2 pl-2 font-medium">{faker.person.fullName()}</span></td>
                        <td>alexshatov@gmail.com</td>
                        <td className="text-[#10B981]">$2.249.88</td>
                        <td>France</td>
                    </tr>
                    <tr className="border-b text-center">
                        <td className="flex py-2"><img className="w-[36px] h-[36px] rounded-full" src={faker.image.urlLoremFlickr({ category: 'people' })} /><span className="text-sm pt-2 pl-2 font-medium">{faker.person.fullName()}</span></td>
                        <td>alexshatov@gmail.com</td>
                        <td className="text-[#10B981]">$2.249.88</td>
                        <td>US</td>
                    </tr>
                    <tr className="border-b text-center">
                        <td className="flex py-2"><img className="w-[36px] h-[36px] rounded-full" src={faker.image.urlLoremFlickr({ category: 'people' })} /><span className="text-sm pt-2 pl-2 font-medium">{faker.person.fullName()}</span></td>
                        <td>alexshatov@gmail.com</td>
                        <td className="text-[#10B981]">$2.249.88</td>
                        <td>Mexico</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>)
}