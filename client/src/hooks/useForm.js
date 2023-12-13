import { useState } from "react";

export default function useForm(submitHandler, initialFormValues) {
    const [formValues, setFormValues] = useState(initialFormValues);

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(formValues);
    };

    return{
        formValues,
        onChange,
        onSubmit
    };
};