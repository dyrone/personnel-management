import React, { useState, useEffect } from 'react';
import { Button, message, Space, Modal } from 'antd';
import { EditOutlined, EyeOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory, useParams } from 'react-router-dom';
import ResumeDisplay from '../components/ResumeDisplay';
import ResumeForm from '../components/ResumeForm';
import { fetchPersonnelResume, savePersonnelResume } from '../api/resume';

const ResumePage = () => {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      loadResumeData(id);
    } else {
      // If no ID provided, start in editing mode
      setIsEditing(true);
      setLoading(false);
    }
  }, [id]);

  const loadResumeData = async (personnelId) => {
    try {
      setLoading(true);
      const data = await fetchPersonnelResume(personnelId);
      setResumeData(data);
    } catch (error) {
      message.error('加载简历失败');
      console.error('Failed to load resume:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (values) => {
    try {
      const savedData = await savePersonnelResume(id, values);
      setResumeData(savedData);
      setIsEditing(false);
      setIsModalVisible(false);
      message.success('简历保存成功');
    } catch (error) {
      message.error('保存简历失败');
      console.error('Failed to save resume:', error);
    }
  };

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const handleBack = () => {
    history.goBack();
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>加载中...</div>;
  }

  return (
    <div>
      {/* Header Actions */}
      <div style={{ 
        padding: '16px 24px', 
        backgroundColor: '#fff', 
        borderBottom: '1px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <Space>
          <Button icon={<ArrowLeftOutlined />} onClick={handleBack}>
            返回
          </Button>
          {!isEditing && resumeData && (
            <Button 
              type="primary" 
              icon={<EditOutlined />} 
              onClick={handleEdit}
            >
              编辑简历
            </Button>
          )}
          {!resumeData && (
            <Button 
              type="primary" 
              icon={<EditOutlined />} 
              onClick={() => setIsModalVisible(true)}
            >
              创建简历
            </Button>
          )}
        </Space>
      </div>

      {/* Main Content */}
      {isEditing && !resumeData ? (
        // Direct editing mode for new resume
        <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
          <ResumeForm onSubmit={handleSave} />
        </div>
      ) : (
        // Display mode
        <ResumeDisplay resumeData={resumeData} />
      )}

      {/* Edit Modal */}
      <Modal
        title="编辑简历"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
        destroyOnClose
      >
        <ResumeForm 
          initialValues={resumeData} 
          onSubmit={handleSave}
        />
      </Modal>
    </div>
  );
};

export default ResumePage;