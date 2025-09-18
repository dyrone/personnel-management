import React from 'react';
import { Card, Row, Col, Typography, Divider, Tag, Space } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const ResumeDisplay = ({ resumeData }) => {
  if (!resumeData) {
    return <div>暂无简历数据</div>;
  }

  const {
    name,
    age,
    gender,
    birthDate,
    phone,
    email,
    address,
    department,
    position,
    education,
    startDate,
    skills,
    experience,
    summary
  } = resumeData;

  const educationMap = {
    highschool: '高中',
    associate: '大专',
    bachelor: '本科',
    master: '硕士',
    phd: '博士'
  };

  const genderMap = {
    male: '男',
    female: '女'
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Card
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Title level={2} style={{ margin: '0 0 8px 0', color: '#1890ff' }}>
            {name || '姓名'}
          </Title>
          <Text type="secondary" style={{ fontSize: '16px' }}>
            {position || '职位'} | {department || '部门'}
          </Text>
        </div>

        {/* Personal Information */}
        <Card 
          title={<><UserOutlined /> 个人信息</>} 
          size="small" 
          style={{ marginBottom: '16px' }}
        >
          <Row gutter={[16, 8]}>
            <Col span={8}>
              <Text strong>年龄：</Text>
              <Text>{age || 'N/A'}</Text>
            </Col>
            <Col span={8}>
              <Text strong>性别：</Text>
              <Text>{genderMap[gender] || 'N/A'}</Text>
            </Col>
            <Col span={8}>
              <Text strong>出生日期：</Text>
              <Text>{birthDate || 'N/A'}</Text>
            </Col>
          </Row>
        </Card>

        {/* Contact Information */}
        <Card 
          title="联系方式" 
          size="small" 
          style={{ marginBottom: '16px' }}
        >
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <div>
              <PhoneOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
              <Text strong>电话：</Text>
              <Text>{phone || 'N/A'}</Text>
            </div>
            <div>
              <MailOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
              <Text strong>邮箱：</Text>
              <Text>{email || 'N/A'}</Text>
            </div>
            <div>
              <HomeOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
              <Text strong>地址：</Text>
              <Text>{address || 'N/A'}</Text>
            </div>
          </Space>
        </Card>

        {/* Work Information */}
        <Card 
          title="工作信息" 
          size="small" 
          style={{ marginBottom: '16px' }}
        >
          <Row gutter={[16, 8]}>
            <Col span={12}>
              <Text strong>教育背景：</Text>
              <Text>{educationMap[education] || 'N/A'}</Text>
            </Col>
            <Col span={12}>
              <div>
                <CalendarOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                <Text strong>入职日期：</Text>
                <Text>{startDate || 'N/A'}</Text>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Skills */}
        {skills && (
          <Card 
            title="技能专长" 
            size="small" 
            style={{ marginBottom: '16px' }}
          >
            <div>
              {skills.split(',').map((skill, index) => (
                <Tag key={index} color="blue" style={{ marginBottom: '4px' }}>
                  {skill.trim()}
                </Tag>
              ))}
            </div>
          </Card>
        )}

        {/* Work Experience */}
        {experience && (
          <Card 
            title="工作经历" 
            size="small" 
            style={{ marginBottom: '16px' }}
          >
            <Paragraph style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
              {experience}
            </Paragraph>
          </Card>
        )}

        {/* Personal Summary */}
        {summary && (
          <Card 
            title="个人简介" 
            size="small"
          >
            <Paragraph style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
              {summary}
            </Paragraph>
          </Card>
        )}
      </Card>
    </div>
  );
};

export default ResumeDisplay;