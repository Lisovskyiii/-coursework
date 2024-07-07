import { FieldHookConfig, useField } from 'formik';
import { Input } from 'ui/input';

type ExtendedFieldHook = FieldHookConfig<string> & {
  label?: string;
  type: string;
  classLabel?: string;
  classInput?: string;
};

export const FormField = ({
  type,
  label,
  classInput,
  classLabel,
  ...props
}: ExtendedFieldHook): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <>
      {label ? (
        <label className={classLabel} htmlFor={props.name}>
          {label}
        </label>
      ) : null}

      <Input type={type} className={classInput} {...props} {...field} />
      {meta.touched && meta.error ? (
        <div style={{ color: '#e53e3e', marginTop: 5, fontSize: 12 }}>{meta.error}</div>
      ) : null}
    </>
  );
};
