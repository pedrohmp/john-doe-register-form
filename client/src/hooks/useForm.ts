import { useState } from "react";

type HandleChangeInput = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type Customer = {
	cpf: string;
	name: string;
	email: string;
	favoriteColor: string;
	comments?: string;
}

export const colors = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Anil", "Violeta"];

const initialCustomer = {
  cpf: '',
  name:'',
  email:'',
  favoriteColor: colors[0],
  comments:''
}

export const useForm = () => {
	const [values, setValues] = useState<Customer>(initialCustomer);
  const [error, setError] = useState<string>('');
  const [successResponse, setSuccessResponse] = useState<string>('');

  const handleChange = (event: HandleChangeInput) => {
    setValues({...values, [event.target.name] : event.target.value});
  }

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
		setSuccessResponse('')

    if(!values.name || !values.cpf || !values.email || !values.favoriteColor) {
      setError('Preencha os campos obrigatórios *')
      return
    }

    try {
      const response = await fetch('http://localhost:5000/api/customer', {
        body: JSON.stringify(values),
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await response.json();
			setSuccessResponse(data.data.customer.name)
    } catch(err) {
			setError('Ocorreu um erro interno')
    } finally {
			setError('')
      setValues(initialCustomer)
    }   
  }

	return { values, error, successResponse, handleChange, handleSubmit}
	
}