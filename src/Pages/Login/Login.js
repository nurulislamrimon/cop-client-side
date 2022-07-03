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
        <section className='h-full' >
            <SetTitle>Login</SetTitle>

            <div className='w-3/4 lg:w-2/4 mx-auto text-center' >
                <h1 className='text-4xl' > Log in</h1 >

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label >
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("email", { required: true })} />
                        {errors.email && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                    </div >
                    <div className="form-control w-full" >
                        <label className="label" >
                            <span className="label-text" > What is your name ?</span >
                        </label >
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("password", { required: true })} />
                        {errors.password && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                    </div >

                    <input type="submit" className='btn btn-outline w-full mt-6' />
                </form >

            </div >



        </section >
    );
};

export default Login;