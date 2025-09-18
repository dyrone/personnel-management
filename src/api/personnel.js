import axios from 'axios';

const API_URL = 'https://api.example.com/personnel';

// Mock data for development
const mockPersonnelData = [
  { id: 1, name: '张三', age: 28, department: 'IT部门' },
  { id: 2, name: '李四', age: 32, department: '市场部' },
  { id: 3, name: '王五', age: 25, department: '财务部' }
];

export const fetchPersonnel = async () => {
  try {
    // In a real application, this would be an API call
    // const response = await axios.get(API_URL);
    // return response.data;
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPersonnelData);
      }, 500);
    });
  } catch (error) {
    throw new Error('Failed to fetch personnel data');
  }
};

export const addPersonnel = async (personnel) => {
  try {
    // const response = await axios.post(API_URL, personnel);
    // return response.data;
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        const newPersonnel = { 
          id: Date.now(), 
          ...personnel 
        };
        mockPersonnelData.push(newPersonnel);
        resolve(newPersonnel);
      }, 500);
    });
  } catch (error) {
    throw new Error('Failed to add personnel');
  }
};

export const editPersonnel = async (id, personnel) => {
  try {
    // const response = await axios.put(`${API_URL}/${id}`, personnel);
    // return response.data;
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockPersonnelData.findIndex(p => p.id === id);
        if (index !== -1) {
          mockPersonnelData[index] = { id, ...personnel };
        }
        resolve({ id, ...personnel });
      }, 500);
    });
  } catch (error) {
    throw new Error('Failed to edit personnel');
  }
};

export const deletePersonnel = async (id) => {
  try {
    // await axios.delete(`${API_URL}/${id}`);
    
    // Mock implementation  
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockPersonnelData.findIndex(p => p.id === id);
        if (index !== -1) {
          mockPersonnelData.splice(index, 1);
        }
        resolve();
      }, 500);
    });
  } catch (error) {
    throw new Error('Failed to delete personnel');
  }
};
