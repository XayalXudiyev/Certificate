import React from 'react'
import { Select, Space } from 'antd';

const SelectPerson = () => {
    return (
        <div className='text-3xl'>
            <Space wrap>
                <Select
                    defaultValue="Data Analyst"
                    style={{
                        width: 200,
                        height: 50,
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: '40px',
                    }}
                    dropdownStyle={{
                        fontSize: '40px', // Base size for all dropdown elements
                        '.ant-select-dropdown-menu-item .ant-select-dropdown-menu-item-value, .ant-select-dropdown-menu-item .ant-select-dropdown-menu-item-label': {
                            fontSize: '40px', // Larger font size for values and labels
                        },
                    }}
                    options={[


                        {
                            value: 'Data Analyst',
                            label: 'Data Analyst',
                        },
                        {
                            value: 'participant',
                            label: 'Participant',
                        },
                        {
                            value: 'Data Scientist',
                            label: 'Data Scientist',
                        },
                        {
                            value: 'Junior Data Scientist',
                            label: 'Junior Data Scientist',
                        },

                    ]}
                />
                
            </Space>
        </div>
    )
}

export default SelectPerson