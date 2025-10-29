import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), {ssr: false});

export default function Lang() {
    const langs = [
        {value: 'ua', label: 'Укр'},
        {value: 'en', label: 'Eng'},
    ];
    return (
        <Select
            options={langs}
            defaultValue={langs[0]}
            classNamePrefix="lang-select"
            isSearchable={false}
            // menuIsOpen={true}
        />
    )
}