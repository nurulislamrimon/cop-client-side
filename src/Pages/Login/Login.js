import React from 'react';
import auth from '../../firebase.init';
import SetTitle from '../../Utilities/SetTitle';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Utilities/Spinner';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    loading && <Spinner />
    user && navigate('/');
    return (
        <section className='h-[calc(100vh-100px)]'>
            <SetTitle>Login</SetTitle>

            <div className='w-3/4 lg:w-2/4 mx-auto text-center'>
                <h1 className='text-4xl'>Log in</h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </div>

                    <input type="submit" className='btn btn-outline w-full mt-6' />
                </form>

            </div>



        </section>
    );
};

export default Login;