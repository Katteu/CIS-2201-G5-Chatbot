import React from 'react'

type Props = {
    label: string;
}  

function CustomInput(props: Props & React.InputHTMLAttributes<HTMLInputElement>) {
  const {label, ...rest} = props;
  return (
    <div>
        <p style={{padding: 0, margin: 0}}>{label}</p>
        <input {...rest} style={{paddingLeft: 20, padding: 10}}></input>
    </div>
  )
}

export default CustomInput