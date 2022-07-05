import React, { useEffect, useState } from 'react';

const useMemberId = (id) => {
    const [member, setMember] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/member/${id}`)
            .then(res => res.json())
            .then(data => setMember(data))
    }, [id])
    return { member, setMember }
};

export default useMemberId;