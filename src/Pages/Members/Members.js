import React, { useEffect, useState } from 'react';
import SetTitle from '../../Utilities/SetTitle';
import Spinner from '../../Utilities/Spinner';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(0);
    const pageNumber = new Array(Math.ceil((members?.count || 1) / limit))
    console.log(page);

    useEffect(() => {
        fetch(`http://localhost:5000/members?limit=${limit}&page=${page}`)
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [limit, page])
    return (
        <section className='h-full overflow-auto mt-5'>
            <SetTitle>Members</SetTitle>
            <div className='flex justify-between'>
                <div className="flex items-center text-3xl">
                    <select name="membersDLimit" className='btn btn-ghost' id="limit" defaultValue={5} onChange={(e) => setLimit(e.target.value)}>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="btn-group justify-center items-center">
                    {[...pageNumber.keys()].map(n => <button class={`btn ${page === n && 'btn-active'}`} onClick={e => setPage(e.target.innerText - 1)}>{n + 1}</button>)}
                </div>
            </div>
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
        </section >
    );
};

export default Members;