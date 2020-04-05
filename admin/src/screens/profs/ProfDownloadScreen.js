import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context as DownloadContext } from '../../context/DownloadContext';

const DownloadList = () => {
    // Global states
    const { state, getAllDownloads, removeDownload } = useContext(DownloadContext);
    const { downloads } = state;
    const { id } = useParams();
    useEffect(() => {
        getAllDownloads({ profId: id });
    }, []);
    const deleteDownload = (downloadId) => {
        removeDownload({ profId: id, id: downloadId });
    }
    if (downloads.length === 0) {
        return <h3 className="text-center">No download itmes found</h3>;
    }
    return (
        <ul className="list-group">
            {downloads.map(d => (
                <li
                    className="list-group-item d-flex justify-content-between w-75 m-auto"
                    key={d._id}
                >
                    <div>
                        <button
                            className="btn btn-danger"
                            onClick={deleteDownload.bind(this, d._id)}
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                        <a
                            href={d.url}
                            download
                            className="btn btn-outline-dark ml-4 d-inline"
                        >
                            Download
                        </a>
                    </div>
                    <p className="text-right d-inline text-large">{d.title}</p>
                </li>
            ))}
        </ul>
    );
};

const ProfDownloadScreen = () => {
    const { createDownload } = useContext(DownloadContext);
    const { id } = useParams();
    // Local states
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    const handleChange = e => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'url':
                setUrl(e.target.value);
                break;
            default:
                break;
        }
    };
    const addDownload = e => {
        e.preventDefault();
        createDownload({ profId: id, name, url });
    };
    return (
        <div className="container">
            <form className="m-auto w-75" onSubmit={addDownload}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>URL</label>
                    <input
                        className="form-control"
                        name="url"
                        value={url}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-dark mb-5">Add Url</button>
            </form>
            <DownloadList />
        </div>
    );
};

export default ProfDownloadScreen;
