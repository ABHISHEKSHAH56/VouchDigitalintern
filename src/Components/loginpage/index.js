import { Form, Checkbox, Button, Col, Input, message, Row } from "antd";

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";
import React, { useState } from "react";
import "./index.css";

function Login() {
  const [formData, setformData] = useState({
    email: "eve.holt@reqres.in",
    password: "5cityslicka",
  });
  const formHandller = async () => {
    // e.preventDefault();
    console.log(formData);
    await axios
      .post("https://reqres.in/api/login", formData)
      .then((res) => {
         
        setTimeout(() => {
          message.success("Login Success");
        }, 2000);
        setformData({
            email:'',
            password:''
        })
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          const {data}=error.response
          setTimeout(()=>{
              message.error(data.error)
          },2000)
        }
      });
  };
  return (
    <div>
      <Row>
        <Col xl={10} lg={12} md={12} sm={24} xs={24}>
          <div className="modal">
            <div>
              <h1 style={{ fontWeight: "bolder", color: "blue" }}>
                Welcome Back
              </h1>
              <p>lorem2</p>
            </div>
            <div>
              <Form onFinish={formHandller}>
                <Form.Item>
                  <Input
                    size="large"
                    style={{
                        fontWeight:"bold"
                    }}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e)=>setformData({...formData,email:e.target.value})}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    size="large"
                    style={{
                        fontWeight:"bold"
                    }}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    autoComplete="false"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e)=>setformData({...formData,password:e.target.value})}
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="#top" style={{alignSelf:'end'}}>
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                   
                  >
                    Log in
                  </Button>
                  Or <a href="#top">register now!</a>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
        <Col xl={14} lg={12} md={12}>
          <div className="imagestyle"></div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
