import axios from 'axios';
import React, { useState } from 'react';

const useMembersData = (limit, page) => {
    const [members, setMembers] = useState([]);

    const run = async () => {
        const { data, loading } = await axios.get(`http://localhost:5000/members?limit=${limit}&page=${page}`);
        setMembers(data);
        return { members, setMembers, loading }
    }
    run()

}

export default useMembersData;