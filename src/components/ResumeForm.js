import React from 'react';
import { Form, Input, Button, DatePicker, Select, Row, Col, Space } from 'antd';
import dayjs from 'dayjs';

const { TextArea } = Input;
const { Option } = Select;

const ResumeForm = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  // Convert string dates to dayjs objects for DatePicker
  const processedInitialValues = initialValues ? {
    ...initialValues,
    birthDate: initialValues.birthDate ? dayjs(initialValues.birthDate) : null,
    startDate: initialValues.startDate ? dayjs(initialValues.startDate) : null,
  } : null;

  const handleFinish = (values) => {
    // Format dates if they exist
    const formattedValues = {
      ...values,
      birthDate: values.birthDate ? values.birthDate.format('YYYY-MM-DD') : null,
      startDate: values.startDate ? values.startDate.format('YYYY-MM-DD') : null,
    };
    onSubmit(formattedValues);
  };

  return (
    <Form
      form={form}
      initialValues={processedInitialValues}
      onFinish={handleFinish}
      layout="vertical"
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="name"
            label="姓名 (Name)"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="age"
            label="年龄 (Age)"
            rules={[{ required: true, message: '请输入年龄' }]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="gender"
            label="性别 (Gender)"
            rules={[{ required: true, message: '请选择性别' }]}
          >
            <Select placeholder="请选择性别">
              <Option value="male">男</Option>
              <Option value="female">女</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="birthDate"
            label="出生日期 (Birth Date)"
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="phone"
            label="联系电话 (Phone)"
            rules={[{ required: true, message: '请输入联系电话' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="email"
            label="邮箱 (Email)"
            rules={[
              { required: true, message: '请输入邮箱地址' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="address"
        label="住址 (Address)"
        rules={[{ required: true, message: '请输入住址' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="department"
        label="部门 (Department)"
        rules={[{ required: true, message: '请输入部门' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="position"
        label="职位 (Position)"
        rules={[{ required: true, message: '请输入职位' }]}
      >
        <Input />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="education"
            label="教育背景 (Education)"
            rules={[{ required: true, message: '请选择教育背景' }]}
          >
            <Select placeholder="请选择教育背景">
              <Option value="highschool">高中</Option>
              <Option value="associate">大专</Option>
              <Option value="bachelor">本科</Option>
              <Option value="master">硕士</Option>
              <Option value="phd">博士</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="startDate"
            label="入职日期 (Start Date)"
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="skills"
        label="技能 (Skills)"
      >
        <TextArea rows={3} placeholder="请输入相关技能，用逗号分隔" />
      </Form.Item>

      <Form.Item
        name="experience"
        label="工作经历 (Work Experience)"
      >
        <TextArea rows={4} placeholder="请输入工作经历详情" />
      </Form.Item>

      <Form.Item
        name="summary"
        label="个人简介 (Personal Summary)"
      >
        <TextArea rows={3} placeholder="请输入个人简介" />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            保存 (Save)
          </Button>
          <Button onClick={() => form.resetFields()}>
            重置 (Reset)
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ResumeForm;