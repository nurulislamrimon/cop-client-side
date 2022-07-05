import { useForm } from "react-hook-form";
import React from 'react';
import { useParams } from 'react-router-dom';
import useMemberId from '../../../CustomHooks/useMemberId';
import SetTitle from "../../../Utilities/SetTitle";

const UpdateMemberInfo = () => {
    const { id } = useParams();
    const { member } = useMemberId(id);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    console.log(member);

    const onSubmit = data => {
        const newData = { memberNo: data.memberNo, name: data.name, balance: { totalDeposit: data.totalDeposit }, picture: data.picture, birth: data.birth, ratio: { aspectRatio: data.aspectRatio, personalDepositRatio: data.personalDepositRatio }, fatherName: data.fatherName, motherName: data.motherName, gender: data.gender, memberType: data.memberType, email: data.email, phone: data.phone, address: data.address }
        console.log(newData);

    };

    return (
        <section className='w-3/4 lg:w-2/4 mx-auto text-center h-full overflow-auto'>
            <SetTitle>{member?.name || ''}</SetTitle>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Member no :</span>
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("memberNo", { required: true })} value={member?.memberNo} />
                    {errors.memberNo && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name :</span>
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("name", { required: true })} value={member?.name} />
                    {errors.name && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Father's name :</span>
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("fatherName", { required: true })} value={member?.fatherName} />
                    {errors.fatherName && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" > Mother's name :</span >
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("motherName", { required: true })} value={member?.motherName} />
                    {errors.motherName && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" > Birth date :</span >
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("birthDate", { required: true })} value={member?.birth} />
                    {errors.birthDate && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" > Email :</span >
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("email", { required: true })} value={member?.email} />
                    {errors.email && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" > Phone:</span >
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("phone", { required: true })} value={member?.phone} />
                    {errors.phone && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" >Aspect Ratio :</span >
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("aspectRatio", { required: true })} value={member?.ratio?.aspectRatio} />
                    {errors.aspectRatio && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" >Deposited Ratio :</span >
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("personalDepositRatio", { required: true })} value={member?.ratio?.personalDepositRatio} />
                    {errors.personalDepositRatio && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" > Picture :</span >
                    </label >
                    <img src={member?.picture} alt={member?.name} width={50} height={50} />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("picture", { required: true })} value={member?.picture} />
                    {errors.picture && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" > Member Type :</span >
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("memberType", { required: true })} value={member?.memberType} />
                    {errors.memberType && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" > Gender :</span >
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("gender", { required: true })} value={member?.gender} />
                    {errors.gender && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" > Total Deposit :</span >
                    </label >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("picture", { required: true })} value={member?.balance?.totalDeposit} />
                    {errors.picture && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >
                <div className="form-control w-full" >
                    <label className="label" >
                        <span className="label-text" > Address :</span >
                    </label >
                    <textarea type="text" placeholder="Type here" className="input input-bordered w-full" {...register("picture", { required: true })} value={member?.address} />
                    {errors.picture && <label className="label" > <small className='text-red-600' > This field is required</small ></label >}
                </div >

                <input type="submit" className='btn btn-outline w-full mt-6' />
            </form >
        </section>
    );
};

export default UpdateMemberInfo;