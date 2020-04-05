import React, { useContext, useEffect, useState } from 'react';
import { Context as FacultyContext } from '../../context/FacultyContext';
import { Redirect } from 'react-router-dom';

const FacultiesList = () => {
    const { state, getAllFaculties, removeFaculty } = useContext(FacultyContext);
    const { faculties } = state;
    useEffect(() => {
        getAllFaculties();
    }, []);

    const deleteFaculty = id => {
        removeFaculty({ id });
    };
    if (faculties.length === 0) {
        return (
            <div className="card card-body m-5">
                <h2 className="mt-3">No Faculties found</h2>
            </div>
        );
    }

    return (
        <ul className="list-group w-50 mt-5">
            {faculties.map(fac => (
                <li
                    className="list-group-item d-flex justify-content-between"
                    key={fac._id}
                >
                    <button
                        className="btn btn-danger"
                        onClick={deleteFaculty.bind(this, fac._id)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <p className="text-lg-right d-inline">{fac.name}</p>
                </li>
            ))}
        </ul>
    );
};

const FacultiesScreen = () => {

    const { createFaculty } = useContext(FacultyContext);
    const [name, setName] = useState('');
    const addFaculty = () => {
        createFaculty({ name });
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
            <form className="mt-5" onSubmit={addFaculty}>
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
                    Add Faculty
                </button>
            </form>
            <FacultiesList/>
        </div>
    );
};

export default FacultiesScreen;
