import React, { useContext, useEffect } from 'react';
import { Context as ProfContext } from '../../context/ProfContext';
import { Link } from 'react-router-dom';
import '../../App.css';

const ProfsScreen = () => {
    const { state, getAllProfs, removeProf } = useContext(ProfContext);
    const { profs } = state;
    useEffect(() => {
        getAllProfs();
    }, []);
    const deleteProf = id => {
        removeProf({ id });
    };
    if (profs.length === 0) {
        return (
            <div className="container">
                <h2 className="mt-3">No Profs Found!</h2>
                <Link className="btn btn-dark" to="/add-prof">
                    Add New Prof
                </Link>
            </div>
        );
    }

    return (
        <div className="container">
            <Link className="btn btn-dark m-2" to="/add-prof">
                Add New Prof
            </Link>
            <div className="grid-4">
                {profs.map(prof => (
                    <div key={prof._id} className="card card-body text-center">
                        <img src={prof.imageUrl} className="img-thumbnail" style={{height: 240}}/>
                        <div className="p-1">
                            <h4>
                                {prof.firstName} {prof.lastName}
                            </h4>
                            <p>
                                <strong>دانشکده: </strong>
                                {prof.faculty}
                            </p>
                            <p>
                                <strong>نوع همکاری: </strong>
                                {prof.position}
                            </p>
                            <p>
                                <strong>رشته تحصیلی: </strong> {prof.major}
                            </p>

                            <button
                                className="btn btn-danger m-1"
                                onClick={deleteProf.bind(this, prof._id)}
                            >
                                <i className="fas fa-trash"></i>
                            </button>
                            <Link
                                to={`/profs/${prof._id}`}
                                className="btn btn-dark m-1"
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfsScreen;
