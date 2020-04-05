import React, { useContext, useEffect, useState } from 'react';
import { Context as MajorContext } from '../../context/MajorContext';


const MajorsList = () => {
    const { state, getAllMajors, removeMajor } = useContext(MajorContext);
    const { majors } = state;
    useEffect(() => {
        getAllMajors();
    }, []);

    const deleteMajor = id => {
        removeMajor({ id });
    };
    if (majors.length === 0) {
        return (
            <div className="card card-body m-5">
                <h2 className="mt-3">No Majors found</h2>
            </div>
        );
    }

    return (
        <ul className="list-group w-50 mt-5">
            {majors.map(major => (
                <li
                    className="list-group-item d-flex justify-content-between"
                    key={major._id}
                >
                    <button
                        className="btn btn-danger"
                        onClick={deleteMajor.bind(this, major._id)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <p className="text-right d-inline text-large">{major.name}</p>
                </li>
            ))}
        </ul>
    );
};

const MajorsScreen = () => {
    const { createMajor } = useContext(MajorContext);
    const [name, setName] = useState('');
    const addMajor = () => {
        createMajor({ name });
    };
    const handleChange = e => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            default:
                break;
        }
    };
    return (
        <div className="container d-flex justify-content-between flex-row">
            <form className="mt-5" onSubmit={addMajor}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        className="form-control text-right"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-dark m-3" type="submit">
                    Add Major
                </button>
            </form>
            <MajorsList/>
        </div>
    );
};

export default MajorsScreen;
