import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleService from '../../service/articlesservice';
import { useDispatch } from 'react-redux';
import { getArticleDetailFailure, getArticleDetailLoading, getArticleDetailSuccess } from '../../slice/Article';

const ArticleDetail = () => {

    const {slug} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailLoading())
            try {
                const response = await ArticleService.getArticleDetails(slug);
                dispatch(getArticleDetailSuccess(response.article));
            } catch (error) {
                dispatch(getArticleDetailFailure())
            }
        };

        getArticleDetail();
    }, [slug])

    return (
        <div>
            <h1>ID: {slug}</h1>
        </div>
    );
}

export default ArticleDetail;
