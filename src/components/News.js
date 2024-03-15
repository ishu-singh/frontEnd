import React from "react"
import './News.css'

const Card = ({im}) =>{


    return(
        <div className='card-container'> 
            <div className="card-img-cont">
                <img alt='img' src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/03/root-11-1709668221.jpg' className='news-img'/>
            </div>
            <div className="card-haedline">
                Headline here
            </div>
            <div className='card-content'>
                News Content
            </div>
            <div className='read-cont'>
                <button className="read-more">
                    Read more
                </button>
            </div>
        </div>

    )
}





const News = () => {

    const url = 'https://gnews.io/api/v4/search?q=None&category=sports&lang=en&country=in&max=10&apikey=bbcf29f2357d2c2e23db4ef521412054';
    var im;
    fetch(url)
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON data
        return response.json();
      })
      .then(data => {
        // Log the data
        console.log(data.articles[0].image);
        im = data.articles[0].image
      })
      .catch(error => {
        // Handle any errors
        console.error('There was a problem with the fetch operation:', error);
      });
    

    return(
        <div className="news-page">
        <div className='news'>
        <Card im={im}/>
        
        <Card/>

        <Card/>

        <Card/>
        </div>
        </div>
    )
}


export default News;