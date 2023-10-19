import MockAdapter from "axios-mock-adapter";
import axios from "axios";

test("HTTP request", async () => {
    const brewData = [
        {
            id: "bd66ac70-2685-4cfc-91f1-ec349c35c9ed",
            name: "Endless Brewing",
            brewery_type: "micro",
            address_1: "20610 Pa-29",
            address_2: null,
            address_3: null,
            city: "Montrose",
            state_province: "Pennsylvania",
            postal_code: "18801",
            country: "United States",
            longitude: null,
            latitude: null,
            phone: "5709670985",
            website_url: "http://www.endlessbrewing.com",
            state: "Pennsylvania",
            street: "20610 Pa-29"
        }
    ]

    let mock = new MockAdapter(axios);

    mock.onGet("https://api.openbrewerydb.org/v1/breweries/random").reply(200, brewData)

    const request = require("supertest");
    const app = require("../../src/app")

    const resp = await request(app).get("/")

    expect(resp.statusCode).toBe(200)
    expect(resp.header["content-type"]).toContain("text/xml")

    const parser = require('xml2json');
    const obj = parser.toJson(resp.text, { object: true });

    expect(obj.brewery.name).toBe("Endless Brewing")

    mock.reset()
})