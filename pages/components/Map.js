import React from 'react'
import { useEffect } from "react";
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 
  'pk.eyJ1IjoidGhlb2xhYWsiLCJhIjoiY2t2a3R0ajRpMDEzYzJxcWY4ZXN4azlsbSJ9.-W4Ax1SOIIGrkmu_swQ92A';

const Map = (props) => {

    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [4.530315, 7.520767],
          zoom: 14,
          });

        if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates);
        }

       if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates);
        }

       /* if(props.pickupCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.pickupCoordinates,
                props.dropoffCoordinates
            ], {
                padding: 60
            })
        } */
      }, [props.pickupCoordinates, props.dropoffCoordinates])

    const addToMap = (map) => {
        const marker1 = new mapboxgl.Marker()
        .setLngLat([4.530315, 7.520767])
        .addTo(map);
    }

    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
 flex-1
`