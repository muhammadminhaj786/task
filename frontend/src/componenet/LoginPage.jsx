import React, { useState } from "react";
import "./LoginPage.css";

import InputField from "../components/InputField";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import apple from "../assets/apple.png";
import leaf from "../assets/leaf.png";
import * as Unicons from "@iconscout/react-unicons";
import {
  UilUser,
  UilEnvelope,
  UilKeyholeCircle,
} from "@iconscout/react-unicons";
import axios from "axios";
import { Form, Formik } from "formik";

const LoginPage = () => {
  const [userData, setUserData] = useState([]);
  const [fullname, SetFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    console.log(SetFullname(e.target.value));
  };
  const handleEmailChange = (e) => {
    console.log(setEmail(e.target.value));
  };
  const handlePassChange = (e) => {
    console.log(setPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    const objToSend = {
      name: fullname,
      email,
      password,
    };
    const response = await axios.post(
      "http://localhost:3001/api/createuser",
      objToSend
    );
    console.log(response);
  };

  return (
    <div className="  main-screen h-[100vh] ">
      <div className="leaf-hid-2 hidden">
        <div className="w-[25%] h-[80%]  mx-auto mt-2">
          <img className="h-[100%] w-[100%]" src={leaf} alt="" />
        </div>
      </div>
      <div className=" w-[50%] sec-main h-[100%] bg-[#E9F8E5] ">
        <div className="my-bg w-[90%] h-[70%] mt-[80px] "></div>
      </div>
      <div className=" second-screen  ">
        <div className="Inner w-[90%] h-[96%] mx-auto mt-5">
          <div className="w-[15%] mt-5 mx-auto leaf-hid">
            <img src={leaf} alt="" />
          </div>
          <div>
            <p className="text-center txt-heading text-black text-[22px] font-bold mt-4">
              Create Account
            </p>
          </div>

          <div className="mt-[36px] sec-2 w-[95%]  mx-auto">
            {/* //////////// formik /////////// */}
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                const response = axios.post(
                  "http://localhost:3001/api/createuser",
                  values
                ).then(response => console.log(response.data.data))
                setSubmitting(false)
                
              }}
            >
              {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
        
       })=>(
        
              <Form onSubmit={handleSubmit}>
                 <div className="">
              <p className="ml-1 ctn-2 text-[#000000]">Full Name user</p>
              <InputField
                icon={<Unicons.UilUser color={"gray"} size={"22px"} />}
                txtname={"Enter Full Name"}
                type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
              />
            </div>
            <div className="mt-5 inp-div">
              <p className="ml-1 ctn-2 text-[#000000]">Email</p>
              <InputField
                icon={<Unicons.UilEnvelope color={"gray"} size={"22px"} />}
                txtname={"Enter Your Email"}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className="mt-5 inp-div">
              <p className="ml-1 ctn-2 text-[#000000]">Password</p>
              <InputField
                icon={<Unicons.UilKeyholeCircle color={"gray"} size={"22px"} />}
                txtname={"Enter Your Password"}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            <div className="mt-7 sign-div">
              <button  className="w-full sign-btn bg-[#73895D] h-[52px] text-[white] rounded-[22px] text-[18px]" type="submit" disabled={isSubmitting}>
              sign-up
           </button>
            </div>


              </Form>
  )}
            </Formik>
           


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
          <div className="mt-5 end-div ">
            <p className="text-[15px] font-bold text-center text-[#4A4A4A]">
              Already have an account?{" "}
              <span className="text-[#73895D]">Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
