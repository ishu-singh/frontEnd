import React, { useEffect, useState } from "react";
import './MainPage.css'
import Navbar from "./Navbar";

const MainPage = ()=>{

    const [newsData, setNewsData] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null); 
    const [category, setCategory] = useState('general')
    const [search, setSearch] = useState('')

    const timeConverter=(utcDateString)=>{
    
    const utcDate = new Date(utcDateString);

    const istOffset = 5.5 * 60 * 60 * 1000; 
    const istDate = new Date(utcDate.getTime() + istOffset);

    const istDateString = istDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    return istDateString
    }


    const fetchNews = async () => {
        try {
            const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=12&apikey=6a2bfb00cd6dd1e4d344666bd1b2480b&expand=content`, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setNewsData(data.articles);
            console.log("news",data.articles); 
        } catch (error) {
            console.error('There was a problem fetching the data:', error);
        } 
    }

    
    const fetchSearchNews = async () => {
        try {
            const response = await fetch(`https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=25&apikey=6a2bfb00cd6dd1e4d344666bd1b2480b&expand=content`, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setNewsData(data.articles);
            console.log("news",data.articles); 
        } catch (error) {
            console.error('There was a problem fetching the data:', error);
        } 
    }


    useEffect(()=>{
        fetchNews();
    },[category]);

    useEffect(()=>{
        fetchSearchNews()
    },[search])

    const openModal = (news) => {
        setSelectedNews(news); 
    };

    const closeModal = () => {
        setSelectedNews(null); 
    };

    return (
        <>
        <Navbar category={category} setCategory={setCategory} setSearch={setSearch}/>

            {newsData ? (
                <div className="news-cont">
                    {newsData.map(news => (
                        <div className="news-card" key={news.title}>
                            <div className="news-title">{news.title}</div>
                            <div className="news-content">{news.description}</div>
                            <div className="news-date">{timeConverter(news.publishedAt)}</div>
                            <div className="news-more" onClick={() => openModal(news)}>Read More</div>
                        </div>
                    ))}
                </div>
            ) : 'Loading...'}

            {/* Modal */}
            {selectedNews && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="modal-title">{selectedNews.title}</div>
                        <div className="modal-news">{selectedNews.content}</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MainPage;
