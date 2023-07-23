import g1 from '../../../assets/g1.avif'
import g2 from '../../../assets/g2.avif'
import g3 from '../../../assets/g3.jpg'
import g4 from '../../../assets/g4.jpg'
import g5 from '../../../assets/g5.jpg'
import g6 from '../../../assets/g13.jpg'
import g7 from '../../../assets/g7.jpg'
import g8 from '../../../assets/g8.jpg'
import g9 from '../../../assets/g9.jpg'
import g10 from '../../../assets/g10.jpg'
import g11 from '../../../assets/g11.jpg'
import g12 from '../../../assets/g12.png'
import g13 from '../../../assets/g15.jpg'
import g14 from '../../../assets/img6.jpg'
import g15 from '../../../assets/g14.jpg'
// import g2 from '../../../assets/g2.avif'
import './Gallery.css'



const Gallery = () => {
    return (
        <div className=''>
            <h2 className="text-center mb-10 text-4xl my-28">___Graduate Gallery___</h2>

            <div className="box">

                <div className="dream">
                    <img src={g1} alt="" />
                    <img src={g13} alt="" />
                    <img src={g2} alt="" />
                    <img src={g3} alt="" />
                    

                </div>

                <div className="dream">
                    <img src={g6} alt="" />
                    <img src={g8} alt="" />
                    <img src={g15} alt="" />
                    
                </div>

                <div className="dream">
                    <img src={g11} alt="" />
                    <img src={g12} alt="" />
                    <img src={g14} alt="" />
                    <img src={g5} alt="" />
                    
                </div>

            </div>



            {/* <div className="grid-wrapper">
                <div>
                    <img className='img1' src={g1} alt="" />
                </div>
                <div>
                    <img className='img1' src={g2} alt="" />
                </div>
                <div>
                    <img className='img1 wide' src={g3} alt="" />
                </div>
                <div>
                    <img className='img1' src={g4} alt="" />
                </div>
                <div>
                    <img className='img1 tall' src={g5} alt="" />
                </div>
                <div>
                    <img className='img1' src={g6} alt="" />
                </div>
                <div>
                    <img className='img1' src={g7} alt="" />
                </div>
                <div>
                    <img className='img1 big' src={g8} alt="" />
                </div>
                <div>
                    <img className='img1' src={g9} alt="" />
                </div>
                <div>
                    <img className='img1' src={g10} alt="" />
                </div>
                <div>
                    <img className='img1' src={g11} alt="" />
                </div>
                <div>
                    <img className='img1' src={g12} alt="" />
                </div>
               
            </div> */}
        </div>
    );
};

export default Gallery;