import axios from 'axios';

const API_URL = 'https://api.example.com/personnel';

// Mock data for development - since the API doesn't exist yet
const mockResumeData = {
  1: {
    id: 1,
    name: '张三',
    age: 28,
    gender: 'male',
    birthDate: '1995-06-15',
    phone: '13800138000',
    email: 'zhangsan@example.com',
    address: '北京市朝阳区某某街道123号',
    department: 'IT部门',
    position: '前端工程师',
    education: 'bachelor',
    startDate: '2020-03-01',
    skills: 'React, JavaScript, TypeScript, Node.js, HTML, CSS',
    experience: '2018年毕业于某某大学计算机科学专业，有5年前端开发经验。\n熟练掌握React生态圈技术栈，包括Redux、React Router等。\n参与过多个大型项目的开发，具有良好的代码规范和团队协作能力。',
    summary: '热爱编程，追求技术卓越。具有强烈的责任心和学习能力，能够快速适应新技术和新环境。\n善于沟通，具备良好的团队合作精神。'
  }
};

export const fetchPersonnelResume = async (id) => {
  try {
    // In a real application, this would be an API call
    // const response = await axios.get(`${API_URL}/${id}/resume`);
    // return response.data;
    
    // Mock implementation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const resumeData = mockResumeData[id];
        if (resumeData) {
          resolve(resumeData);
        } else {
          reject(new Error('Resume not found'));
        }
      }, 500);
    });
  } catch (error) {
    throw new Error('Failed to fetch resume data');
  }
};

export const savePersonnelResume = async (id, resumeData) => {
  try {
    // In a real application, this would be an API call
    // const response = await axios.put(`${API_URL}/${id}/resume`, resumeData);
    // return response.data;
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        const savedData = { 
          id: id || Date.now(), 
          ...resumeData 
        };
        // Store in mock data
        mockResumeData[savedData.id] = savedData;
        resolve(savedData);
      }, 500);
    });
  } catch (error) {
    throw new Error('Failed to save resume data');
  }
};

export const fetchAllResumes = async () => {
  try {
    // In a real application, this would be an API call
    // const response = await axios.get(`${API_URL}/resumes`);
    // return response.data;
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.values(mockResumeData));
      }, 500);
    });
  } catch (error) {
    throw new Error('Failed to fetch resumes');
  }
};