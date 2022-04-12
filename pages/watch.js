import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, watch, handleSubmit } = useForm({
    // We can define default values for our form to ensure that watch doesn't show undefined
    defaultValues: {
      firstName: 'lucy',
      lastName: 'macartney'
    }
  });
  const onSubmit = (data) => alert(JSON.stringify(data));

  // Subscribes to these two fields and logs to console on every change
  /* Initial render showing as undefined
  This is because it hasn't reached the render function yet and we didn't define any defaults*/
  console.log(watch(['firstName', 'lastName']))
  // we can watch whole form
  console.log(watch());

  // Prevents re-render but still updates the data in the background
  React.useEffect(() => {
    const subscription = watch(() => {
      console.log(data);
    })

    return () => {
      subscription.unsubscribe(); 
    }
  }, [watch])

  // We can predefine a default value by passing a second argument
  //console.log(watch('firstName', 'lucy'))


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} placeholder="First name" />

      <input {...register("lastName", { minLength: 2 })} placeholder="Last name" />

      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      
      <input {...register("checkbox")} type="checkbox" value="A" />
      <input {...register("checkbox")} type="checkbox" value="B" />
      <input {...register("checkbox")} type="checkbox" value="C" />
      
      <input {...register("radio")} type="radio" value="A" />
      <input {...register ("radio")} type="radio" value="B" />
      <input {...register("radio")} type="radio" value="C" />

      <input type="submit" />
    </form>
  );
}