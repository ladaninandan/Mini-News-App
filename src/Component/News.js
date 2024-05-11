import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Loder from './Loder';
import PropTypes from 'prop-types';
import './Nextbtn.css';

export default function News(props) {
    

    const [articles, setArticles] = useState([]);
    const [loading, setLoding] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9c9ea427207e43cc995db1ba1450edc7&page=${page}&pageSize=${props.pageSize}`;
        setLoding(true);
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(60)
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoding(false);
        props.setProgress(100);
    }
    
    
    
    const handlePreviousClick = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9c9ea427207e43cc995db1ba1450edc7&page=${page - 1}&pageSize=${props.pageSize}`;
        setPage(page - 1);
        setLoding(true);
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json()
        setArticles(parsedData.articles);
        setLoding(false);
        props.setProgress(100);
    }
    
    const handleNextClick = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9c9ea427207e43cc995db1ba1450edc7&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        setLoding(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        setLoding(false);
        setArticles(parsedData.articles);
        props.setProgress(100);
    }
    
    
    useEffect(() => {
        document.title = `${props.category}- News`;
        updateNews();
    }, []);

    return (
        <div>
            <div className='container'>
                <h1 className='text-center my-2 '>feature for news from {props.category}</h1>
                {loading && <Loder />}
                <div className="row ">
                    {!loading && articles.map((element) => {
                        return <div className="col-xl-3 col-lg-4 col-md-6 mb-5  " key={element.url} >
                            <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} urlToImage={element.urlToImage} newsurl={element.url} author={element.author} date={(element.publishedAt)} name={element.source.name} />
                        </div>
                    })}
                </div>
            </div>

            {!loading ? <div className="container ">
                <div aria-label="row ">
                    <div className="col">
                        <div className="d-flex justify-content-between ">
                            <button disabled={page <= 1} className="btn btn-dark rounded-pill btn-sm   " onClick={handlePreviousClick}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-left mx-1" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>Previous</button >
                            <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark rounded-pill " onClick={handleNextClick}>Next<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg></button>
                        </div>
                    </div>
                </div>
            </div> : ""}
        </div>
    )
}

News.defultProps = {
    country: "in",
    pageSize: 20,
    category: "general"
}

News.PropsTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
}

