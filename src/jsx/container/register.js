import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Img } from "../../constant"
import { CheckBox, InputLabel } from "../component/common/commonUI"


export const SignUpForm = () => {

    const [errorMsg, setErrorMsg] = useState(false);
    const navigate = useNavigate()


    const onRegister = (e) => {
        e.preventDefault();
        const el = document.getElementById('registerForm').elements;
        const mandatoryFields = [
            'email',
            'fullName',
            'role',
            'password'
        ];
        let inValid = mandatoryFields.some(field => (!el[field].value || el[field].value.trim() === ''))

        if (inValid) {
            setErrorMsg("Please fill the required fields");
            return;
        }
        if (el.password.value.length < 8) {
            setErrorMsg('Password should be atleast 8 characters');
            return;
        }

        if (el.password.value.length > 20) {
            setErrorMsg("Password should be maximum 20 characters")
            return;
        }

        const emailValue = el.email.value ;
        const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if (!regex.test(emailValue)) {
            setErrorMsg('Invalid Email')
            return;
        }

        localStorage.setItem('name',el.fullName.value)

        navigate('/')
    }

    return (
        <div className="flex w-full h-full bg-white">
            <div className="w-1/2">
                <div className="w-full h-full flex justify-center ">
                    <div className="w-1/2 flex flex-col justify-center ">
                        <form id="registerForm" className=" w-full  flex flex-col justify-center " onSubmit={onRegister}>
                            <span className="text-3xl font-bold mb-4 p-2">Create your Account ✨</span>
                                {errorMsg && (
                                    <div className="12 p-2">
                                        <div className="text-red-400 font-semibold">{errorMsg}</div>
                                    </div>
                                )}
                            <InputLabel id='email' label='Email Address' mandatory={true} />
                            <InputLabel id='fullName' label='Full Name' mandatory={true} />
                            <InputLabel id='role' label='Your Role' mandatory={true} />
                            <InputLabel id='password' label='Password' type="password" mandatory={true} />
                            <div className="flex justify-between my-3">
                                <CheckBox id="newsletter" label="Email me about product news." />
                                <button className="bg-[#6366F1] rounded-lg py-1 px-3 text-white text-sm font-semibold">Sign Up</button>
                            </div>
                        </form>
                        <hr className="h-px my-3 bg-gray-200 border-0" />
                        <span className="text-[#475569] text-sm font-medium">Have an account? <span className="text-[#6366F1]">Sign In</span></span>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img className="w-full" src={Img.SignUpBackground} />
            </div>
        </div>
    )
}