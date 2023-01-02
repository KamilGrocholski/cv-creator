import { ChangeEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"
import './FormField.scss'

interface FormFieldProps {
  label: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

export const FormField = ({
  label,
  value,
  onChange,
  placeholder,
  ...props
}: FormFieldProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className='form-field'>
      <label>{label}</label>
      <input
        {...props}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
