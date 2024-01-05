import { Img } from "../../../constant"


export const TopNav = () => {
    const userName = localStorage.getItem('name') ?? 'User'
    return (<nav className="bg-[#FFFFFF] shadow  border-[#E2E8F0] p-4 flex justify-end">
    <img src={Img.UserLogo} /><span className='mt-1 ml-2'>{userName}</span>
  </nav>)
}