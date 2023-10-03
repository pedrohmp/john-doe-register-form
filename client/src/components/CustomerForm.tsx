import { colors, useForm } from '../hooks/useForm';

export const CustomerForm = () => {
	const { error, values, successResponse, handleSubmit, handleChange } = useForm()

	return (
		<form onSubmit={handleSubmit}>
			<label>
				*Nome:
				<input name="name" type="text" value={values.name} onChange={handleChange} />
			</label>
			<label>
				*Cpf:
				<input name="cpf" type="text" value={values.cpf} onChange={handleChange} />
			</label>
			<label>
				*Email:
				<input name="email" type="email" value={values.email} onChange={handleChange} />
			</label>

			<label>
				Cor favorita:
				<select name="favoriteColor" value={values.favoriteColor} onChange={handleChange}>
					{colors.map((color) => <option key={color} value={color}>{color}</option>)}
				</select>
			</label>

			<label htmlFor="message">Mensagem:</label>
			<textarea id="comments" name="comments" value={values.comments} onChange={handleChange} rows={5} cols={33} />

			<div>
				<p className='error'>{error}</p>
				<input type="submit" value="Submit" />
				{successResponse && <p className='success'>{successResponse} criado com sucesso!</p>}
			</div>
		</form>
	)
}