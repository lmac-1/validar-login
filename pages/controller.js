import React, { useState } from 'react';
import { useForm, useFormState, useWatch } from 'react-hook-form';

// Here we are breaking down what the controller component in react-hook-form does
const Controller = ({ control, register, name, rules, render }) => {
  // Ensures the value is updated by defaultvalue set somewhere else
  const value = useWatch({
    control, name
  })

  const { errors} = useFormState({
    control, name
  });

  // Executes the register function with validation rules
  const props = register(name, rules);
  
  // Renders the field but carries through the props to the Input component
  return render({
    value,
    onChange: (e) => props.onChange({
      target: {
        name,
        value: e.target.value
      }
    }),
    onBlur: props.onBlur,
    name: props.name,
  });
};

const Input = (props) => {
  // Keeps track of state
  const [value, setValue] = React.useState(props.value || '');

    // Allows async updates to happen. If the value changes elsewhere, it will update
  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <input
      name={props.name}
      onChange={(e) => {
        // updates state of input value when it changes
        setValue(e.target.value);
        // Invokes onchange function with event if provided as a prop
        props.onChange && props.onChange(e);
      }}
      value={value}
    />
  );
};

export default function ControllerPage() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const [submittedVal, setSubmittedVal] = useState();
  const onSubmit = (data) => {
    console.log(data);
    setSubmittedVal(data);
  };

  console.log("errors", errors);

  React.useEffect(() => {
    setTimeout(() => {
      setValue('lastName', 'test');
    }, 1000);
  }, [setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} placeholder="First Name" />

        <Controller
          {...{
            control,
            register,
            name: 'lastName',
            rules: {
              required: true,
            },
            render: (props) => <Input {...props} />,
          }}
        />
        {/* <Controller
          {...{
            control,
            register,
            name: "lastName",
            rules: {
              required: true
            },
            render: (props) => <Input {...props} />
          }}
        /> */}

        <input type="submit" />
      </form>
      {submittedVal && (
        <div>
          Submitted Data:
          <br />
          {JSON.stringify(submittedVal)}
        </div>
      )}
    </div>
  );
}
