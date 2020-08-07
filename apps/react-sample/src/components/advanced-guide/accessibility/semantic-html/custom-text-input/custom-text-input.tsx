import React from 'react';

/* eslint-disable-next-line */
export interface CustomTextInputProps {
  inputRef: React.MutableRefObject<any>
}


export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  inputRef
}) => {
  return (
    <input type="text" ref={inputRef} />
  );
};

/* eslint-disable-next-line */
export interface CustomTextInputParentProps {}

export const CustomTextInputParent: React.FC<CustomTextInputParentProps> = () => {
  const inputRef = React.useRef(null)
  React.useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <CustomTextInput inputRef={inputRef} />
  )
}

export default CustomTextInput;
