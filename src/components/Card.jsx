/* eslint-disable */
import './Card.css'

function Card (props) {
    return (
        <div className='card'>
            <img src={props.coverImg} className='card--image'/>
            
                <section>
                    <div className='card--location'>
                        <img src="/location.png" alt="location logo" className='card--location-logo' />
                        <h3>{props.country}</h3>
                    </div>

                    <h1 className='card--place'>{props.place}</h1>
                    <p className='date'>{props.date}</p>
                    <p>{props.note}</p>
                </section>
            
        </div>
    )
}

export default Card