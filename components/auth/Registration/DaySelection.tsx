'use client'

import React, { FC, useState } from 'react';
import Select, { components } from 'react-select';

type OptionType = {
    label: string;
    value: string;
};

const options: OptionType[] = [
    { value: 'day1', label: '1 day' },
    { value: 'day2', label: '2 days' },
    { value: 'day3', label: '3 days' },
    { value: 'day4', label: '4 days' },
    { value: 'day5', label: '5 days' },
    { value: 'day6', label: '6 days' },
    { value: 'day7', label: '7 days' },
    { value: 'day8', label: '8 days' },
    { value: 'day9', label: '9 days' },
    { value: 'day10', label: '10 days' },
    { value: 'day11', label: '11 days' },
    { value: 'day12', label: '12 days' },
    { value: 'day13', label: '13 days' },
    { value: 'day14', label: '14 days' },
    { value: 'day15', label: '15 days' },
    { value: 'day16', label: '16 days' },
    { value: 'day17', label: '17 days' },
    { value: 'day18', label: '18 days' },
    { value: 'day19', label: '19 days' },
    { value: 'day20', label: '20 days' },
    { value: 'day21', label: '21 days' },
    { value: 'day22', label: '22 days' },
    { value: 'day23', label: '23 days' },
    { value: 'day24', label: '24 days' },
    { value: 'day25', label: '25 days' },
    { value: 'day26', label: '26 days' },
    { value: 'day27', label: '27 days' },
    { value: 'day28', label: '28 days' },
    { value: 'day29', label: '29 days' },
    { value: 'day30', label: '30 days' },
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

const DaySelection: FC = () => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    const handleChange = (selectedOption: OptionType | null) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    }

    return (
        <div>
            <div className='text-xs font-arial font-normal text-distlineColor'>
                {'Days'}
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

DaySelection.displayName = 'DaySelection';

export default DaySelection;
