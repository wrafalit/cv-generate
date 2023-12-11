import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { Space, Rate } from 'antd';
const desc = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];


const Tab3Content = () => {
  const [englishChecked, setEnglishChecked] = useState({
    A1: false,
    A2: false,
    B1: false,
    B2: false,
    C1: false,
    C2: false,
  });

  const [germanChecked, setGermanChecked] = useState({
    A1: false,
    A2: false,
    B1: false,
    B2: false,
    C1: false,
    C2: false,
  });

  const handleEnglishChange = (name) => (event) => {
    setEnglishChecked({ ...englishChecked, [name]: event.target.checked });
    if (event.target.checked) {
      setEnglishChecked((prevState) => ({
        ...prevState,
        A1: name === 'A1' ? true : false,
        A2: name === 'A2' ? true : false,
        B1: name === 'B1' ? true : false,
        B2: name === 'B2' ? true : false,
        C1: name === 'C1' ? true : false,
        C2: name === 'C2' ? true : false,
      }));
    }
  };

  const handleGermanChange = (name) => (event) => {
    setGermanChecked({ ...germanChecked, [name]: event.target.checked });
    if (event.target.checked) {
      setGermanChecked((prevState) => ({
        ...prevState,
        A1: name === 'A1' ? true : false,
        A2: name === 'A2' ? true : false,
        B1: name === 'B1' ? true : false,
        B2: name === 'B2' ? true : false,
        C1: name === 'C1' ? true : false,
        C2: name === 'C2' ? true : false,
      }));
    }
  };

  const [value, setValue] = useState(3);

  return (
    <>
      
        <Space>
        <div>English</div>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span>{desc[value - 1]}</span> : ''}
        </Space>
        <p style={{ marginBottom: '20px' }}></p>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox checked={englishChecked.A1} onChange={handleEnglishChange('A1')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          A1
        </Checkbox>
        <Checkbox checked={englishChecked.A2} onChange={handleEnglishChange('A2')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          A2
        </Checkbox>
        <Checkbox checked={englishChecked.B1} onChange={handleEnglishChange('B1')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          B1
        </Checkbox>
        <Checkbox checked={englishChecked.B2} onChange={handleEnglishChange('B2')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          B2
        </Checkbox>
        <Checkbox checked={englishChecked.C1} onChange={handleEnglishChange('C1')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          C1
        </Checkbox>
        <Checkbox checked={englishChecked.C2} onChange={handleEnglishChange('C2')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          C2
        </Checkbox>
      </p>
      <div>German</div>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox checked={germanChecked.A1} onChange={handleGermanChange('A1')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          A1
        </Checkbox>
        <Checkbox checked={germanChecked.A2} onChange={handleGermanChange('A2')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          A2
        </Checkbox>
        <Checkbox checked={germanChecked.B1} onChange={handleGermanChange('B1')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          B1
        </Checkbox>
        <Checkbox checked={germanChecked.B2} onChange={handleGermanChange('B2')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          B2
        </Checkbox>
        <Checkbox checked={germanChecked.C1} onChange={handleGermanChange('C1')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          C1
        </Checkbox>
        <Checkbox checked={germanChecked.C2} onChange={handleGermanChange('C2')} style={{ fontSize: '20px', marginBottom: '10px' }}>
          C2
        </Checkbox>
      </p>
    </>
  );
};

export default Tab3Content;
