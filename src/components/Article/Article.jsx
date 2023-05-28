import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from '../UI';
import { getArticleLoading } from '../../slice/Article';

const Article = () => {

    const { article, isLoading } = useSelector(state => state.article);
    console.log(isLoading, 'Loading');

    return (
        <div className="album py-5 ">
            {isLoading && <Spinner />}
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {article.map(item => (
                        <div key={item.id} className="col">
                            <div className="card shadow-sm h-100">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                                <div className="card-body">
                                    <p className="card-text fw-bold m-0">{item.title}</p>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-success">View</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                                    </div>
                                    <small className="text-body-secondary fw-bold text-capitalize">{item.author.username}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Article;
