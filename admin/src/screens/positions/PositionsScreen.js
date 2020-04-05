import React, { useContext, useEffect, useState } from 'react';
import { Context as PositionContext } from '../../context/PositionContext';
import { Link } from 'react-router-dom';

const PositionsList = () => {
    const { state, getAllPositions, removePosition } = useContext(PositionContext);
    const { positions } = state;
    useEffect(() => {
        getAllPositions();
    }, []);

    const deletePosition = id => {
        removePosition({ id });
    };
    if (positions.length === 0) {
        return (
            <div className="card card-body m-5">
                <h2 className="mt-3">No positions found</h2>
            </div>
        );
    }

    return (
        <ul className="list-group w-50 mt-5">
            {positions.map(pos => (
                <li
                    className="list-group-item d-flex justify-content-between"
                    key={pos._id}
                >
                    <button
                        className="btn btn-danger"
                        onClick={deletePosition.bind(this, pos._id)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <p className="text-right d-inline text-large">{pos.name}</p>
                </li>
            ))}
        </ul>
    );
};

const PositionsScreen = () => {
    const { createPosition } = useContext(PositionContext);
    const [name, setName] = useState('');
    const addPosition = () => {
        createPosition({ name });
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
            <form className="mt-5" onSubmit={addPosition}>
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
                    Add position
                </button>
            </form>
            <PositionsList />
        </div>
    );
};

export default PositionsScreen;
