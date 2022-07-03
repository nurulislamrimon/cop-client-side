import React, { useEffect, useState } from 'react';
import SetTitle from '../../Utilities/SetTitle';

const Members = () => {
    const [members, setMembers] = useState([]);
    const limit = 10;
    const page = 2;

    useEffect(() => {
        fetch(`http://localhost:5000/members?limit=${limit}&page=${page}`)
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [limit, page])
    console.log(members?.count);
    return (
        <section className='h-full overflow-auto'>
            <SetTitle>Members</SetTitle>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 p-5 justify-center mx-auto gap-5">
                {members?.result?.map((member, index) =>
                    <div key={index} class="card mx-w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={member?.picture} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{member?.name}</h2>
                            <p>{member?.fatherName}</p>
                            <p>{member?.email}</p>
                            <p>{member?.phone}</p>
                        </div>
                    </div>
                )}
            </div>
            <div class="btn-group justify-center">
                <button class="btn">1</button>
                <button class="btn btn-active">2</button>
                <button class="btn">3</button>
                <button class="btn">4</button>
            </div>
        </section >
    );
};

export default Members;