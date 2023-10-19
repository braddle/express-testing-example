import axios from "axios";

export default async function getSingleBrewery(): Promise<any> {
    let resp =  await axios.get("https://api.openbrewerydb.org/v1/breweries/random")
    return await resp.data[0]
}