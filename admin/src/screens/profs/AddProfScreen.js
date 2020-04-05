import React, { useContext, useEffect, useState } from 'react';
import { Context as ProfContext } from '../../context/ProfContext';
import { Context as FacultyContext } from '../../context/FacultyContext';
import { Context as PositionContext } from '../../context/PositionContext';
import { Context as MajorContext } from '../../context/MajorContext';

import { useHistory } from 'react-router-dom';

const AddProfScreen = () => {
    const { goBack } = useHistory();
    // Context
    const { createProf } = useContext(ProfContext);
    const facultyContext = useContext(FacultyContext);
    const positionContext = useContext(PositionContext);
    const majorContext = useContext(MajorContext);
    useEffect(() => {
        facultyContext.getAllFaculties();
        positionContext.getAllPositions();
        majorContext.getAllMajors();
    }, []);
    // Global states
    const { faculties } = facultyContext.state;
    const { positions } = positionContext.state;
    const { majors } = majorContext.state;
    // Component states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = useState(0);
    const [faculty, setFaculty] = useState(0);
    const [position, setPosition] = useState(0);
    const [researchField, setResearchField] = useState('');
    const [bio, setBio] = useState('');
    const handleChange = e => {
        switch (e.target.name) {
            case 'firstName':
                setFirstName(e.target.value);
                break;
            case 'lastName':
                setLastName(e.target.value);
                break;
            case 'imageUrl':
                setImageUrl(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'major':
                setMajor(e.target.value);
                break;
            case 'faculty':
                setFaculty(e.target.value);
                break;
            case 'position':
                setPosition(e.target.value);
                break;
            case 'researchField':
                setResearchField(e.target.value);
                break;
            case 'bio':
                setBio(e.target.value);
                break;
        }
    };
    const addProf = e => {
        e.preventDefault();
        const newProf = {
            firstName,
            lastName,
            imageUrl,
            email,
            major,
            faculty,
            position,
            researchField,
            bio
        };
        createProf(newProf);
        goBack();
    };
    return (
        <div className="container">
            <div className="w-50 m-auto">
                <form onSubmit={addProf}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            className="form-control"
                            onChange={handleChange}
                            name="firstName"
                            value={firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            className="form-control"
                            onChange={handleChange}
                            name="lastName"
                            value={lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image URL</label>
                        <input
                            className="form-control"
                            onChange={handleChange}
                            name="imageUrl"
                            value={imageUrl}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            onChange={handleChange}
                            name="email"
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Major</label>
                        <select
                            className="form-control"
                            onChange={handleChange}
                            name="major"
                            value={major}
                        >
                            <option disabled value={0}>
                                Select a major
                            </option>
                            {majors.map(major => (
                                <option key={major._id} value={major.name}>
                                    {major.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Faculty</label>
                        <select
                            className="form-control"
                            onChange={handleChange}
                            name="faculty"
                            value={faculty}
                        >
                            <option disabled value={0}>
                                Select a faculty
                            </option>
                            {faculties.map(fac => (
                                <option key={fac._id} value={fac.name}>
                                    {fac.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Position</label>
                        <select
                            className="form-control"
                            onChange={handleChange}
                            name="position"
                            value={position}
                        >
                            <option disabled value={0}>
                                Select a position
                            </option>
                            {positions.map(pos => (
                                <option key={pos._id} value={pos.name}>
                                    {pos.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Research Field</label>
                        <input
                            className="form-control"
                            onChange={handleChange}
                            name="researchField"
                            value={researchField}
                        />
                    </div>
                    <div className="form-group">
                        <label>Bio</label>
                        <textarea
                            className="form-control"
                            onChange={handleChange}
                            name="bio"
                            value={bio}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">
                        Add Prof
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProfScreen;
