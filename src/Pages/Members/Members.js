import React, { useState } from 'react';
import SetTitle from '../../Utilities/SetTitle';

const Members = () => {
    const [members, setMembers] = useState([]);
    const limit = 5;
    const page = 2;
    fetch(`http://localhost:5000/members?limit=${limit}&page=${page}`)
        .then(res => res.json())
        .then(data => setMembers(data))
    return (
        <section className='h-[calc(100vh-100px)]' >
            <SetTitle>Members</SetTitle>

            <div className="container grid grid-cols-3 justify-center">
                {members.map((member, index) =>
                    <div key={index} class="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section >
    );
};

export default Members;