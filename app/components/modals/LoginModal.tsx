'use client';

import { useState } from "react";

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal()

    const content = (
        <div>
            <form action="" className="space-y-4">
                <input placeholder="Your e-mail address" type="email" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl" />
                <input placeholder="Your password" type="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton 
                    label='Submit' 
                    onClick={() => console.log('Test')}
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