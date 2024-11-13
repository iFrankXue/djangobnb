'use client';

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";


const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);   
    
    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password,
        }

        const response = await apiService.postWithoutToken('api/auth/login/', JSON.stringify(formData));

        if (response.access) {
            // handleLogin
            handleLogin(response.user.pk, response.access, response.refresh)

            loginModal.close();
            router.push('/');
        } else {
            setErrors(response.non_field_errors || ['Unknown error occurred']);
        }
    }

    const content = (
        <div>
            <form 
                action={submitLogin}
                className="space-y-4"
            >
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type="email" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl" />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl" />

                {errors.map((error, index) => {
                    return (
                        <div
                            key={`error_${index}`} 
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                            {error}
                        </div>
                    )
                })}

                <CustomButton 
                    label='Submit' 
                    onClick={submitLogin}
                />
            </form>
        </div>
    )

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content = {content}
        />
    )
}

export default LoginModal;