export default function Home ({images}){
    return (
        <div className="container"> 
            <img src ={images} alt="slika" className='home-img img-fluid center-block d-block mx-auto'/>
        </div>
    )
}
