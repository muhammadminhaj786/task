import React, { useState } from "react";
import "./LoginPage.css";

import InputField from "../components/InputField";
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import apple from '../assets/apple.png'
import leaf from '../assets/leaf.png'
import * as Unicons from '@iconscout/react-unicons';
import {  UilUser, UilEnvelope, UilKeyholeCircle} from '@iconscout/react-unicons';


const LoginPage = () => {

  const [userData , setUserData] = useState([])

  return (
    <div className="  main-screen h-[100vh] ">
      <div className="leaf-hid-2 hidden">
      <div className="w-[25%] h-[80%]  mx-auto mt-2"><img className="h-[100%] w-[100%]" src={leaf} alt="" /></div>
      </div>
      <div className=" w-[50%] sec-main h-[100%] bg-[#E9F8E5] ">
        <div className="my-bg w-[90%] h-[70%] mt-[80px] "></div>
      </div>
      <div className=" second-screen  ">
        <div className="Inner w-[90%] h-[96%] mx-auto mt-5">
          <div className="w-[15%] mt-5 mx-auto leaf-hid"><img src={leaf} alt="" /></div>
          <div>
            <p className="text-center txt-heading text-black text-[22px] font-bold mt-4">
              Create Account
            </p>
          </div>
          <div className="mt-[36px] sec-2 w-[95%]  mx-auto">
            <div className="">
              <p className="ml-1 ctn-2 text-[#000000]">Full Name  user</p>
              <InputField  icon={<Unicons.UilUser color={'gray'} size={'22px'} />}  txtname={'Enter Full Name'}/>
            </div>
            <div className="mt-5 inp-div">
              <p className="ml-1 ctn-2 text-[#000000]">Email</p>
              <InputField  icon={<Unicons.UilEnvelope color={'gray'} size={'22px'} />}  txtname={'Enter Your Email'}/>
            </div>
            <div className="mt-5 inp-div">
              <p className="ml-1 ctn-2 text-[#000000]">Password</p>
              <InputField  icon={<Unicons.UilKeyholeCircle color={'gray'} size={'22px'} />}  txtname={'Enter Your Password'}/>
            </div>
            <div className="mt-7 sign-div">
              <button className="w-full sign-btn bg-[#73895D] h-[52px] text-[white] rounded-[22px] text-[18px]">
                sign-up
              </button>
            </div>
          </div>
          <div className="mt-4 or-div">
            <p className="text-2xl ctn-3 text-[#B0BAC3] text-center">- OR -</p>
          </div>
          <div className="mt-4 img-div w-[180px] mx-auto ">
              <div className="flex gap-8  h-[38px] ">
                <img className="h-[100%]" src={google} alt="" />
                <img className="h-[100%]" src={facebook} alt="" />
                <img className="h-[100%]" src={apple} alt="" />

              </div>
          </div>
          <div className="mt-5 end-div "><p className="text-[15px] font-bold text-center text-[#4A4A4A]">Already have an account?  <span className="text-[#73895D]">Login</span></p></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
