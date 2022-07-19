export default function Home ({images}){
    return (
        <div className="container"> 
            <img src ={images} alt="slika" className='img-fluid mx-auto d-block'/>
        </div>
    )
}
