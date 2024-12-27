import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
const DropdownComponent = () => {
  const [data, setData] = useState([
    { label: 'Visakhapatnam', value: 'Visakhapatnam' },
    { label: 'Vijayawada', value: 'Vijayawada' },
  ]); // Initial items for the dropdown
  const [value, setValue] = useState(null);

  const updateDropdownItems = () => {
    // Replace existing data with new items
    setData([
      { label: 'Visakhapatnam', value: 'visakhapatnam' },
      { label: 'Vijayawada', value: 'vijayawada' },
    ]);
  };

  return (
    <>
      <Dropdown 
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    
    </>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: "75%",
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  reloadIcon: {
    alignSelf: 'center',
    marginTop: 16,
  },
});
