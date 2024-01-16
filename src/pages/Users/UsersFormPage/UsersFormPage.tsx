import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { CreateUser, DeleteUser, UpdateUser, getUser } from "../../../api/UsersApi"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
const UsersFormPage = () => {

  const { register, handleSubmit, formState: {
    errors

  }, setValue } = useForm()
  const navigate = useNavigate()
  const params = useParams()
  setValue

  const OnSubmit = handleSubmit(async (data) => {
    if (params.id) {
        await UpdateUser(params.id, data)
        toast.success('User updated')
      console.log(data);
      
    } else {
      await CreateUser(data)
      toast.success('User created')
    }
    navigate('/users')
  })

  useEffect(() => {
    async function loadUser() {
      if (params.id) {
        console.log('Obtainign data');
        const res = await getUser(params.id)
        setValue('username', res.data.username)
        setValue('password', res.data.password)
        setValue('email', res.data.email)
        setValue('phone', res.data.phone)
        setValue('address', res.data.address)
        setValue('description', res.data.description)
        console.log(res);
        
      }
    }
    loadUser()
  }, [])

  return (
    <>
      <main>
        <form onSubmit={OnSubmit}>
          <input type="text" placeholder='Username' {...register('username', { required: true })} />
          {errors.username && <span>Username is required</span>}
          <input type="password" placeholder="Password" {...register('password', { required: params.id ? false : true })} disabled={!!params.id}/>
          {errors.password && <span>Password is required</span>}
          <input type="email" placeholder='Email' {...register('email', { required: true })} />
          {errors.email && <span>Email is required</span>}
          <input type="number" placeholder='Phone Number' {...register('phone', { required: true })} />
          {errors.phone && <span>Phone Number is required</span>}
          <input type="text" placeholder='Adress' {...register('address', { required: true })} />
          {errors.address && <span>Address is required</span>}
          <textarea rows={3} placeholder='Description' {...register('description', { required: true })}></textarea>
          {errors.description && <span>Description is required</span>}
          <button>Save</button>
        </form>
        {
          params.id && <button onClick={async () => {
            const accepted = window.confirm('Are you sure you want to delete this user?')
            if (accepted) {
              await DeleteUser(params.id)
              toast.success('User deleted')
              navigate('/users')
            }
          }}>Delete</button>

        }
      </main>
    </>
  )
}

export default UsersFormPage