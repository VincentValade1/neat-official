import '../styles/Tour.css';
import showList from '../datas/tourDates.json';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTowerBroadcast} from '@fortawesome/free-solid-svg-icons'

function Tour() {
    const sortArrayOfObjects = (arr, propertyName, order = 'ascending') => {
        const sortedArr = arr.sort((a, b) => {
            if (a[propertyName] < b[propertyName]) {
              return -1;
            }
            if (a[propertyName] > b[propertyName]) {
              return 1;
            }
            return 0;
        });
      
        if (order === 'descending') {
            return sortedArr.reverse();
        }
      
        return sortedArr;
    };

    const sortedDates = sortArrayOfObjects(showList, "date");
    
    return(
        <>
            <Header />
            <main className="tourMain">
                <h1>UPCOMING SHOWS</h1>
                <ul className='datesDiv'>
                    {sortedDates.map(({date, place, city, country, eventLink}) => 
                        (
                            <li className='dateRow' key={date}>
                                <span>{date} |</span>
                                <span>{place}</span>
                                <span>{city}<br/>{country}</span>
                                {eventLink !== "" ? <a href={eventLink} target="_blank" rel="noreferrer noopener">EVENT LINK</a> : <span className='event-to-come'>EVENT TO COME</span> }
                            </li>
                        )
                    )}
                </ul>
                <span>Updated List <FontAwesomeIcon icon={faTowerBroadcast} fade style={{color: "#ffffff",}} /></span>
                
            </main>
        </> 
    )
}

export default Tour