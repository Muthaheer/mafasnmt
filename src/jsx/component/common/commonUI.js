
export const InputLabel = ({ id, label, type = 'text', mandatory }) => <div>
    <div className="p-2">
        <label className=" text-gray-700 text-sm font-semibold py-2" for={id}>
            {label} 
        </label>
        {mandatory && <span className="text-red-500 text-sm font-semibold py-2	">*</span>}
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id={id} type={type} />
    </div>
</div>


export const CheckBox = ({id, label}) => <div class="flex items-center p-2">
    <input  id={id} type="checkbox" value="" className="w-4 h-4 text-[#6366F1] bg-gray-100 border-gray-300 rounded" />
    <label for="checked-checkbox" className="ms-2 text-sm font-medium text-[#475569]">{label}</label>
</div>

export const WelcomeBoard = () => {
    const userName = localStorage.getItem('name') ?? 'User'

    return (<div className="p-4 bg-[#C7D2FE] ">
    <div className="flex flex-col font-normal">
    <span className="text-3xl">Good afternoon, {userName} 👋</span>
    <span className="text-base text-[#475569]">Here is what’s happening with your projects today:</span>
    </div>
    
</div>)
}