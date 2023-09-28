'use client'

import React, { FC, useState } from 'react';
import Select, { components } from 'react-select';

type OptionType = {
    label: string;
    value: string;
};

const options: OptionType[] = [
    { value: 'mon', label: 'Monday' },
    { value: 'tue', label: 'Tuesday' },
    { value: 'wed', label: 'Wednesday' },
    { value: 'thu', label: 'Thursday' },
    { value: 'fri', label: 'Friday' },
    { value: 'sat', label: 'Saturday' },
    { value: 'sun', label: 'Sunday' },
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

const DaysSelection: FC = () => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    const handleChange = (selectedOption: OptionType | null) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    }

    return (
        <div>
            <div className='text-xs font-arial font-normal text-distlineColor'>
                {'Days of the Week'}
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
                    }}
                    className='mt-2 font-arial text-sm'
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    placeholder="Select days"
                    components={{ IndicatorSeparator: () => null, Option }}

                />
            </div>
        </div>
    );
}

DaysSelection.displayName = 'DaysSelection';

export default DaysSelection;
