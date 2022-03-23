import ChakraSelect from 'react-select';

export const Select = (): React.ReactElement => {
    return (
      <ChakraSelect
          className="select-basic"
          classNamePrefix="select"
          // defaultValue={colourOptions[0]}
          isSearchable={true}
          name="color"
          options={[{ label: 'teste', value: 'teste' }]}
        />
    )
  }

