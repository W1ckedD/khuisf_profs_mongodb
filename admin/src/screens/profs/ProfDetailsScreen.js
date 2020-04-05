import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context as ProfContext } from '../../context/ProfContext';
import '../../App.css';

const ProfDetailsScreen = () => {
    const { state, getProfById } = useContext(ProfContext);
    const { prof } = state;
    const { id } = useParams();
    useEffect(() => {
        getProfById({ id });
    }, []);
    if (!prof) {
        return (
            <div className="container text-center">
                <h3>Loading...</h3>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="card card-body">
                <div className="d-flex justify-content-between p-2">
                    <Link
                        className="btn btn-dark d-inline h-25"
                        to={`/downloads/${prof._id}`}
                    >
                        دانلود فایل
                    </Link>
                    <img
                        src={prof.imageUrl}
                        className="img-thumbnail ml-auto w-25 mb-2"
                    />
                </div>
                <hr />
                <div className="grid-2 text-right">
                    <h4>
                        <strong>نام خانوادگی: </strong>
                        {prof.lastName}
                    </h4>
                    <h4>
                        <strong>نام: </strong>
                        {prof.firstName}
                    </h4>
                    <h4>
                        <strong>رشته تحصیلی: </strong>
                        {prof.major}
                    </h4>
                    <h4>
                        <strong>نوع همکاری: </strong>
                        {prof.position}
                    </h4>
                    <h4>
                        <strong>دانشکده: </strong>
                        {prof.faculty}
                    </h4>
                    <h4>
                        {prof.email}
                        <strong> :ایمیل</strong>
                    </h4>
                </div>
                <p className="text-right font-weight-bold mt-3">:شرح حال</p>
                <p className="text-right">{prof.bio}</p>
            </div>
        </div>
    );
};

export default ProfDetailsScreen;
