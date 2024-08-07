'use client'

import React, { useEffect, useState } from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';


const GoogleMap = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [myApiKey, setMyApiKey] = useState(null);
    // const [myMap, setMyMap] = useState(null);
    // const [isMapContainerReady, setIsMapContainerReady] = useState(false);
    
    
  // Fetch API key only once when the component mounts
  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await fetch('/api/get-api-key');
        const data = await response.json();
        setMyApiKey(data.apiKey);
      } catch (error) {
        console.error('Error fetching API key:', error);
        setIsLoading(false);
      }
    };
    fetchApiKey();
  }, []);
  // console.log('my api key:', myApiKey);
  // If API key is not loaded, return a loading indicator
  if (!myApiKey) {
    return <div>Loading...</div>;
  }
  return (
// 32.96980402039903, 35.55106432698545
    <APIProvider apiKey={myApiKey}>
        <Map
        style={{ height: '600px'}}
        defaultCenter={{lat: 32.96980402039903, lng: 35.55106432698545}}
        defaultZoom={13}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        >
            <Marker
              key="1"
              position={{ lat: 32.96980402039903, lng: 35.55106432698545 }}
            />
        </Map>
  </APIProvider>
  );
};

export default GoogleMap;