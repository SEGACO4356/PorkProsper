import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { CreateUser, DeleteUser, UpdateUser, getUser } from "../../../api/UsersApi"
import { useNavigate, useParams } from "react-router-dom"
import style from "./UsersFormPage.module.css"
import toast from "react-hot-toast"
const UsersFormPage = () => {

  const { register, handleSubmit, watch, formState: {
    errors

  }, setValue, reset, setError, clearErrors } = useForm()
  const navigate = useNavigate()
  const params = useParams()
  setValue

  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  
  useEffect(() => {
    if (!params.id && password !== confirmPassword) {
      setError('confirmPassword', {
        type: 'mismatch',
        message: 'Passwords do not match',
      });
    } else {
      clearErrors('confirmPassword');
    }
  }, [password, confirmPassword, setError, clearErrors, params.id]);


  const OnSubmit = handleSubmit(async (data) => {
    if (!params.id && data.password !== data.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

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
        setValue('confirmPassword', res.data.confirmPassword)
        setValue('email', res.data.email)
        setValue('phone', res.data.phone)
        setValue('address', res.data.address)
        setValue('description', res.data.description)
        console.log(res);
      } else {
        reset({
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
          phone: '',
          address: '',
          description: '',
        });
      }
    }
    loadUser()
  }, [params.id])

  return (
    <>
      <main>
        <form onSubmit={OnSubmit}>
          <div className={style.fatherContainer}>
            <div className={style.containerSon}>
              {
                params.id ? <p>Edit User</p> : <p>Create User</p>
              }
              <input type="text" placeholder='Username' {...register('username', { required: true })} />
              {errors.username && <span>Username is required</span>}
              <input type="password" placeholder="Password" {...register('password', { required: params.id ? false : true })} disabled={!!params.id} />
              {errors.password && <span>Password is required</span>}
              {!params.id && (
                <>
                  <input type="password" placeholder='Confirm Password' {...register('confirmPassword', { required: true })} />
                  {errors.confirmPassword && <span>{String(errors.confirmPassword.message)}</span>}
                </>
              )}

              <input type="email" placeholder='Email' {...register('email', { required: true })} />
              {errors.email && <span>Email is required</span>}
              <input type="number" placeholder='Phone Number' {...register('phone', { required: true })} />
              {errors.phone && <span>Phone Number is required</span>}
              <input type="text" placeholder='Adress' {...register('address', { required: true })} />
              {errors.address && <span>Address is required</span>}
              <textarea rows={3} placeholder='Description' {...register('description', { required: true })}></textarea>
              {errors.description && <span>Description is required</span>}
            </div>
            <div className={style.buttonsContainer}>
              <button onClick={OnSubmit}>Save</button>
              {
                params.id && <button onClick={async () => {
                  const accepted = window.confirm('Are you sure you want to delete this user?')
                  if (accepted) {
                    await DeleteUser(params.id)
                    toast.success('User deleted')
                    navigate('/users')
                    window.location.reload()
                  }
                }}>Delete</button>

              }
            </div>
          </div>
        </form>

      </main>
    </>
  )
}

export default UsersFormPage