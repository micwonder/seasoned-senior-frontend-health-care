'use client'

import React, { FC, useState } from 'react';
import Select, { components } from 'react-select';

type OptionType = {
    label: string;
    value: string;
};

const options: OptionType[] = [
    { value: 'Christianity', label: 'Christianity' },
    { value: 'Islam', label: 'Islam' },
    { value: 'Hinduism', label: 'Hinduism' },
    { value: 'Buddhism', label: 'Buddhism' },
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

const ReligionSelection: FC = () => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    const handleChange = (selectedOption: OptionType | null) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    }

    return (
        <div>
            <div className='text-xs font-arial font-normal text-distlineColor'>
                {'Religion'}
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

ReligionSelection.displayName = 'ReligionSelection';

export default ReligionSelection;
