function Banner({page}){
    return(
        <div className='banner'>
            {page === "home" ? 
                <div className='bannerContainer bannerContainer__home'>
                    <h1 className='bannerTitle'>Chez vous, partout, et ailleurs</h1>
                </div>
                :
                <div className='bannerContainer bannerContainer__about'></div>
            }
            
        </div>
    )
}
 
export default Banner