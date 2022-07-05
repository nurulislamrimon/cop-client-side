import React, { useEffect, useState } from 'react';
import useMembersData from '../../../CustomHooks/useMembersData';
import SetTitle from '../../../Utilities/SetTitle';
import Spinner from '../../../Utilities/Spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';


const MembersEdit = () => {
    const [members, setMembers] = useState([]);

    const editMember = (id) => {

    }

    useEffect(() => {
        fetch(`http://localhost:5000/members`)
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);

    if (members.length === 0) {
        return <Spinner />
    }
    return (
        <section className='h-full overflow-auto mt-5'>
            <SetTitle>Dashboard</SetTitle>


            <div class="overflow-x-auto px-3">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>M.No</th>
                            <th>Name</th>
                            <th className='hidden lg:table-cell'>Father's Name</th>
                            <th className='hidden lg:table-cell'>Mobile</th>
                            <th className='hidden lg:table-cell'>Email</th>
                            <th>M.Type</th>
                            <th className='hidden lg:table-cell'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {members?.result?.map((member, index) =>
                            <tr key={index}>
                                <td>{member?.memberNo}</td>
                                <th>{member?.name}</th>
                                <td className='hidden lg:table-cell'>{member?.fatherName}</td>
                                <td className='hidden lg:table-cell'>{member?.phone}</td>
                                <td className='hidden lg:table-cell'>{member?.email}</td>
                                <td>{member?.memberType}</td>
                                <td className='hidden lg:table-cell'><Link to={`/editMembers/${member?._id}`} className='btn btn-link'>Edit</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section >
    );
};

export default MembersEdit;