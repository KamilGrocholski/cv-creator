import { ChangeEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes, TextareaHTMLAttributes } from "react"
import './FormField.scss'

interface FormFieldProps {
  label: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
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
        type='text'
        {...props}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export const FormFieldTextArea = ({
  label,
  value,
  onChange,
  placeholder,
  ...props
}: FormFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className='form-field-text-area'>
      <label>{label}</label>
      <textarea
        {...props}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
