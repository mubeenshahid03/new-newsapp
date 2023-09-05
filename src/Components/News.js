import React, { useState, useEffect } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)
    const [totalResult, settotalResult] = useState(0)

    const updateNews = async () => {
        props.handleprogress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=4cc70a7d00144146ba7cffe6dab358bf&page=${page + 1}&pageSize=${props.pageSize}`

        setloading(true)
        let data = await fetch(url)
        props.handleprogress(40)
        let parsedData = await data.json()
        setloading(false)
        props.handleprogress(60)
        setarticles(parsedData.articles)
        props.handleprogress(80)
        // console.log(articles)
        { document.title = props.category + " | feedly " }
        settotalResult(parsedData.totalResults)
        props.handleprogress(100)

    }
    // const handleForwad=()=>{
    //     setloading(true)
    //     setpage(page+1)

    // updateNews()
    // setloading(false)

    // }
    // const handlePrevious=()=>{
    //     setloading(true)
    //     setpage(page-1)

    //     updateNews()
    //     setloading(false)
    // }





    useEffect(() => {
        updateNews()
    }, [])


    const fetchMoreData = async () => {
        setpage(page + 1)

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c60b40dfdcf64401a8ff876b579724e9&pageSize=${props.pageSize}&page=${page}`
        setloading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setloading(false)
        setarticles(articles.concat(parsedData.articles))
        settotalResult(parsedData.totalResults)

    }



    //     setarticles({parsedData})
    //     console.log(articles)  

    return (

        <div>

            <div className='container my-5'>
                <h1 className='text-center pt-5 ' > <span style={{ color: '#4AE344' }} > Feedly</span> - Top {props.category} Headlines </h1>
                <p className='text-secondary text-center'> Here you find the top headlines </p>
            </div>
            {loading && <Spinner />}


            <div >


                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResult}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className='row'>
                            {articles.map((element) => {
                                return <div className='col md-4 my-5' key={element.url}>
                                    <Newsitems newsUrl={element.url} source={element.source.name} date={element.publishedAt} author={element.author} imurl={!element.urlToImage ? "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/Bittrex.jpg?ve=1&tl=1" : element.urlToImage} title={element.title} description={element.description} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>


        </div>
    )
}

export default News