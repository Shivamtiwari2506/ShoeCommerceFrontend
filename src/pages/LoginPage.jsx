import React, { useState } from "react";
import { Form, Input, Button, Typography, Upload } from "antd";
import {
  IconUser,
  IconLock,
  IconPhoto,
  IconMailOpened,
  IconPhone,
} from "@tabler/icons-react";
import { UploadOutlined } from "@ant-design/icons";
import { encryptData } from "../common/commonFunction";
import api from "../services/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../redux/actions/userActions";
import Loader from "../utils/Loader";

const { Title, Link } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [isNewUser, setIsNewUser] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      if (isNewUser) {
        const formData = new FormData();
        //while sending data like file use formData
        const payload = {
          userName: values?.userName,
          email: values?.email,
          mobileNumber: values?.mobileNumber,
          password: values?.password,
        };
        formData.append("payload", encryptData(payload));
        if (values?.profileImage) {
          formData.append(
            "profileImageUrl",
            values?.profileImage?.fileList?.[0]?.originFileObj
          );
        }
        setLoading(true);
        const response = await api.post("/users/signup", formData);

        if (response?.data?.success === true) {
          toast.success(response.data.message);
          form.resetFields();
          setImagePreview(null);
          setIsNewUser(false);
          const { accessToken, user_id } = response?.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("userId", encryptData(user_id));
          dispatch(fetchUserData(response?.data?.user_id));
          navigate("/home");
        }
      } else {
        // login flow
        const payload = {
          identifier: values.identifier,
          password: values.password,
        };
        const encryptedPayload = encryptData(payload);
        setLoading(true);
        const response = await api.post("/users/login", {
          payload: encryptedPayload,
        });
        if (response?.data?.success === true) {
          toast.success(response?.data?.message);
          const { accessToken, user_id } = response?.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("userId", encryptData(user_id));
          dispatch(fetchUserData(response?.data?.user_id));
          navigate("/home");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsNewUser(!isNewUser);
    form.resetFields();
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat">
          <div className="max-w-md w-full space-y-8">
            {/* Logo/Image Section */}
            <div className="text-center">
              <img
                src="https://t3.ftcdn.net/jpg/03/15/91/14/360_F_315911434_cEPQiSUyZmSNAtMh6UZf0yorDQnGjvFB.jpg"
                alt="Logo"
                className="mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover shadow-lg"
              />
              <Title level={2} className="mt-4 text-gray-900">
                {isNewUser ? "Create Account" : "Welcome Back"}
              </Title>
              <p className="text-gray-600 text-sm">
                {isNewUser ? "Join us today" : "Sign in to your account"}
              </p>
            </div>

            {/* Form */}
            <Form
              form={form}
              name={isNewUser ? "signup" : "login"}
              onFinish={onFinish}
              layout="vertical"
              className="space-y-4"
              size="large"
            >
              {isNewUser && (
                <>
                  <Form.Item
                    name="profileImage"
                    className="flex flex-col items-center justify-center gap-3"
                  >
                    <>
                      {/* Image Preview */}
                      {imagePreview && (
                        <div className="relative group ml-6 mb-2">
                          <img
                            src={imagePreview}
                            alt="Profile Preview"
                            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setImagePreview(null);
                              form.setFieldValue({ profileImage: null });
                            }}
                            className="absolute inset-0 bg-black/50 text-white flex items-center justify-center 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       rounded-full w-24 h-24"
                          >
                            Remove
                          </button>
                        </div>
                      )}

                      {/* Upload Button */}
                      <Upload
                        showUploadList={false}
                        beforeUpload={(file) => {
                          const reader = new FileReader();
                          reader.onload = (e) =>
                            setImagePreview(e.target.result);
                          form.setFieldsValue({ profileImage: file });
                          reader.readAsDataURL(file);
                          return false;
                        }}
                      >
                        <Button icon={<UploadOutlined />}>
                          {imagePreview ? "Change Photo" : "Upload"}
                        </Button>
                      </Upload>
                    </>
                  </Form.Item>

                  <Form.Item
                    name="userName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<IconUser className="text-gray-400 h-4 w-4" />}
                      placeholder="Username"
                      className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email",
                      },
                    ]}
                  >
                    <Input
                      prefix={
                        <IconMailOpened className="text-gray-400 h-4 w-4" />
                      }
                      placeholder={"enter your email"}
                      className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </Form.Item>

                  <Form.Item
                    name="mobileNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your mobile Number",
                      },
                    ]}
                  >
                    <Input
                      prefix={<IconPhone className="text-gray-400 h-4 w-4" />}
                      placeholder={"enter your mobile Number"}
                      className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </Form.Item>
                </>
              )}

              {!isNewUser && (
                <Form.Item
                  name="identifier"
                  rules={[
                    {
                      required: true,
                      message: `Please input your ${
                        isNewUser
                          ? "email or mobile number"
                          : "email or mobile number"
                      }!`,
                    },
                  ]}
                >
                  <Input
                    prefix={<IconUser className="text-gray-400 h-4 w-4" />}
                    placeholder={"Email or Mobile Number"}
                    className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </Form.Item>
              )}

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<IconLock className="text-gray-400 h-4 w-4" />}
                  placeholder="Password"
                  className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </Form.Item>

              {!isNewUser && (
                <Form.Item className="text-right -mt-2">
                  <Link
                    to="/forgot-password"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Forgot password?
                  </Link>
                </Form.Item>
              )}

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="bg-blue-600 hover:bg-blue-700 rounded-md py-2 text-white font-medium"
                >
                  {isNewUser ? "Sign Up" : "Log In"}
                </Button>
              </Form.Item>
            </Form>

            {/* Toggle Link */}
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                {isNewUser
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <button
                  onClick={toggleMode}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {isNewUser ? "Log in" : "Sign up here"}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
