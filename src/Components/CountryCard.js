export default function CountryCard(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.capital}</p>
            <p>{props.population}</p>
        </div>)
}