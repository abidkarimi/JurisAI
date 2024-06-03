import React, { useState } from "react";
import axios from "axios";
import { ClockIcon } from "@heroicons/react/24/outline";
import GoogleMapReact from "google-map-react";

const GoogleAPIs = () => {
  const [suggestions, setSuggestions] = useState([{
    place_id: "",
    description: ""
  }]);

  const handleSearch = async (query: any) => {
    // const value = query.target.value;
    console.log("Handle Searchaa ", query)

    try {
      const response = await axios.get('/api/places', {
        params: { input: query },
      });
      console.log("Responsea:", response.data);
      // Handle response data here
    } catch (error) {
      console.error(error);
    }
    // try {
    //     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    //     console.log(`Ceckign${proxyUrl }`)
    //   // const response = await axios.get(
    //   //   `https://maps.googleapis.com/maps/api/place/autocomplete/json?input='usa'&key=AIzaSyDSS70hvcoWwGoJWnYfsNM8eOTzdybk-rg`
    //   // );
    //   const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
    //     params: {
    //         input: 'usa',
    //         key: 'AIzaSyDSS70hvcoWwGoJWnYfsNM8eOTzdybk-rg', // Replace with your API key
    //         types: '(cities)', // Specify the types of results you want
    //     },
    // });

    //   setSuggestions(response.data.predictions);
    // } catch (error) {
    //   console.error("Error fetching autocomplete suggestions:", error);
    // }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div>
        {suggestions.map((item) => (
          <span key={item.place_id}>
            <ClockIcon className="h-4 w-4 sm:h-6 sm:w-6" />
            {item.description}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GoogleAPIs;
