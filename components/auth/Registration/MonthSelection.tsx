'use client'

import React, { FC, useState } from 'react';
import Select, { components } from 'react-select';

type OptionType = {
    label: string;
    value: string;
};

const options: OptionType[] = [
    { value: 'Month1', label: '1 Month' },
    { value: 'Month2', label: '2 Months' },
    { value: 'Month3', label: '3 Months' },
    { value: 'Month4', label: '4 Months' },
    { value: 'Month5', label: '5 Months' },
    { value: 'Month6', label: '6 Months' },
    { value: 'Month7', label: '7 Months' },
    { value: 'Month8', label: '8 Months' },
    { value: 'Month9', label: '9 Months' },
    { value: 'Month10', label: '10 Months' },
    { value: 'Month11', label: '11 Months' },
    { value: 'Month12', label: '12 Months' },
];

const Option: FC<any> = (props) => {
    return (
        <components.Option {...props}>
            <p className='py-[7px] text-center'>
                {props.data.label}
            </p>
        </components.Option>
    );
};

const MonthSelection: FC = () => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    const handleChange = (selectedOption: OptionType | null) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    }

    return (
        <div>
            <div className='text-xs font-arial font-normal text-distlineColor'>
                {'Month'}
            </div>
            <div>
                <Select
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: '#828282',
                            borderRadius: '6px',
                            boxShadow: 'none',
                            outline: state.menuIsOpen ? 'none' : 'none',
                            paddingLeft: 4,
                            paddingRight: 4,
                            paddingTop: 5,
                            paddingBottom: 5,
                            '&:hover': {
                                borderColor: '#828282'
                            }
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            // Change background color for selected option
                            backgroundColor: state.isSelected ? '#CB5A6F' : 'white',
                            color: state.isSelected ? 'white' : 'black',
                            '&:hover': {
                                // Change background color on hover
                                backgroundColor: '#E5ACB7',
                                color: 'white',
                            },
                        }),
                    }}
                    className='mt-2 font-arial text-sm'
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    components={{ IndicatorSeparator: () => null, Option }}

                />
            </div>
        </div>
    );
}

MonthSelection.displayName = 'MonthSelection';

export default MonthSelection;
