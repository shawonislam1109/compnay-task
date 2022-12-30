import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import AddDAta from './AddDAta';

const EntryData = () => {
    const { user } = useContext(AuthContext)
    const { data: userData = [], refetch, isLoading } = useQuery({
        queryKey: ['userData', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/userDatas?email=${user?.email}`)
            const data = res.json();
            console.log(data)
            return data;
        }
    })
    if (isLoading) {
        <div className='flex justify-center items-center'>
            <button className="btn loading">loading</button>
        </div>
    }

    return (
        <div className='md:w-9/12 mx-auto px-10 md:px-0 mb-10'>
            <h1 className='text-center text-2xl md:text-3xl mt-10 font-bold'><span className='text-violet-500'>User</span> Data </h1>

            <div>
                {
                    userData && userData.map(data => <AddDAta
                        key={data._id}
                        refetch={refetch}
                        data={data}
                    />)
                }
            </div>
        </div>
    );
};

export default EntryData;