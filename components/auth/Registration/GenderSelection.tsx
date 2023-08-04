'use client'

import React, { FC, useState } from 'react';
import Select, { components } from 'react-select';

type OptionType = {
    label: string;
    value: string;
};

const options: OptionType[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
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

const GenderSelection: FC = () => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    const handleChange = (selectedOption: OptionType | null) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    }

    return (
        <div>
            <div className='text-[12px] font-arial font-[400] text-distlineColor'>
                {'Gender'}
            </div>
            <div>
                <Select
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'black',
                            boxShadow: 'none',
                            outline: state.menuIsOpen ? 'none' : 'none',
                            paddingLeft: 4,
                            paddingRight: 4,
                            paddingTop: 5,
                            paddingBottom: 5,
                            '&:hover': {
                                borderColor: 'black'
                            }
                        }),
                    }}
                    className='mt-2'
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    components={{ IndicatorSeparator: () => null, Option }}

                />
            </div>
        </div>
    );
}

GenderSelection.displayName = 'GenderSelection';

export default GenderSelection;
