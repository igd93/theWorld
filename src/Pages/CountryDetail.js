import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCountryDetail } from "../Services";
import './CountryDetail.css';
export default function CountryDetail(props) {
    const {countryCode} = useParams();
    const[detail, setDetail] = useState({});

    useEffect(() => {
        getCountryDetail(countryCode).then(result => {
            console.log("result.data", result.data);
            setDetail(result.data);
        }, [countryCode]);

    }, [countryCode])
    console.log("countryCode: ", countryCode);
    return (
        <div className="country-detail-wrapper">
            <div>
                <img src={detail.flags?.png} alt={detail.name}/>
            </div>
            <div>
                <div>
                    <p>Name: {detail.name}</p>
                    <p>Region: {detail.region}</p>
                    <p>Population: {detail.population}</p>
                    <p>Capital: {detail.capital}</p>
                    <p>Currencies: {detail.currencies?.map(currency => currency.name).join(',')}</p>
                    <p>Languages: {detail.languages?.map(language => language.name).join(',')}</p>
                </div>
            </div>

        </div>
    )
}