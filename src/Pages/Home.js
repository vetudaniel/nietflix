import {Link} from 'react-router-dom';
import '../index.css'
import './Home.css'
import Movies from './Movies'


export default function Home() {
    return (
        <>
            <div className="wrap">
                <div className="cta">
                    <h1>Welcome to Niet<span>Flix</span></h1>
                    <p>Browser over <span>10000 TV Series, Movies, Documentaries</span> and much more <span>30 days for FREE</span>.</p>
                    <p>Supporting resolutions from <span>720p up to 4k ULTRA HD</span> and the best sound platform to day.</p>
                    <Link to={'/getstarted'}>
                    <button className="loginBtn ctaBtn">Try For Free</button>
                    </Link>
                </div>
            </div>
            <div className="skew">
            </div>
            <Movies />
        </>
    )
}


