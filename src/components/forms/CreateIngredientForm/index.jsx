import { Button, InputAdornment, Stack, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
function CreateIngredientForm(props) {
    const { handleCreate, autoGenId } = props

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: "123",
            name: "",
            des: "",
            quantity: 0,
            price: 0,
            importDate: "",
            expiredDate: "",
            type: "Ingredient"
        }
    })
    return (
        <form onSubmit={handleSubmit((value) => console.log(value))}>
            <Stack spacing={5}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <TextField
                        disabled
                        variant='filled'
                        //id="outlined-disabled"
                        label="ID"
                        {...register("id")}

                    />
                    <TextField
                        //disabled
                        disabled
                        variant='filled'
                        label="Type"
                        {...register("type")}
                    />
                </Stack>
                <Stack justifyContent={'space-between'} direction={'row'} spacing={'20%'}>
                    <TextField
                        required
                        label="Name"
                        //defaultValue="Fill the name"
                        placeholder='Fill the name'

                        {...register("name", { required: "Empty" })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    <TextField
                        required
                        label="Quantity"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={0}
                        {...register("quantity", {
                            required: "requied",
                            validate: (value) => {
                                if (value < 0) return "Quantity can not be negative";
                            }
                        })}
                        error={!!errors.quantity}
                        helperText={errors.quantity?.message}

                    />
                </Stack>
                <TextField

                    label="Description"
                    multiline
                    rows={5}
                    //focused
                    placeholder='Fill the description'
                    {...register("des")}
                />

                <TextField
                    required
                    label="Price"
                    type="number"
                    InputProps={{

                        endAdornment: <InputAdornment position='end'>VND</InputAdornment>
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={0}
                    {...register("price", {
                        required: "requied",
                        validate: (value) => {
                            if (value < 0) return "Price can not be negative";
                        }
                    })}
                    error={!!errors.price}
                    helperText={errors.price?.message}
                />
                <Stack direction={'row'} justifyContent={'space-between'}>
                  
                </Stack>

                <Button type='submit'>Submit</Button>
            </Stack>
        </form>
    )
}

CreateIngredientForm.propTypes = {
    handleCreate: PropTypes.func,
}

export default CreateIngredientForm
