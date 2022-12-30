import React, { useState } from 'react';
import EditModal from './EditModal';

const AddDAta = ({ refetch, data }) => {
    const { name, select, email } = data
    const [update, setUpdate] = useState(null)

    const updateData = (data) => {
        setUpdate(data)
    }

    return (
        <div>
            <div className="card mt-5 bg-slate-100 shadow-2xl pt-10">
                <div className="card-body">
                    <h2 className="card-title"> name : {name}</h2>
                    <p className='text-xl font-semibold'><span >Email : </span>{email}</p>
                    <p className='text-xl font-semibold'><span className=''>Sector : </span>{select}</p>

                    <div className="card-actions justify-end">
                        <label onClick={() => updateData(data)} htmlFor="Edit_modal" className="btn btn-primary text-white font-bold">Edit</label>
                    </div>
                </div>
                <div>
                    {
                        <EditModal
                            update={update}
                            refetch={refetch}
                        />
                    }
                </div>
            </div>

        </div>
    );
};

export default AddDAta;