import React,{useEffect, useState} from 'react';
import axios from '../axios';
import './banner.css'
import TextTruncate from 'react-text-truncate';
const baseUrlForBanner="https://image.tmdb.org/t/p/original";

function Banner({fetchUrl}) {
    const [banner,setBanner]=useState([]);
    useEffect(()=>{
        async function getBanner(){
            const bannerRequest=await axios.get(fetchUrl);
            setBanner(bannerRequest.data.results[Math.floor(Math.random()*bannerRequest.data.results.length-1)]);
        };
        getBanner();
    },[]);

    
  return (
    <header className='banner'
     style={{
         backgroundImage:`url("https://image.tmdb.org/t/p/original${banner?.backdrop_path}"`,
         backgroundSize:'cover',
         backgroundPosition:'center'
         }}>
        <div className="bannerContents">
            <div className="bannerTitleContainer">
                <h1 className='bannerTitle'>{banner?.title || banner?.name || banner?.original_Name}</h1>
            </div>
            <div className="bannerButtons">
                <button className="banner-button">Play</button>
                <button className="banner-button">MyList</button>
            </div>
            <div className="bannerDescription">
                <TextTruncate line={3}
                 truncateText="…"
                 text={banner?.overview} /> 
            </div>    
        </div>
        <div className="fadedBottom"></div>
    </header>
  )
}

export default Banner;