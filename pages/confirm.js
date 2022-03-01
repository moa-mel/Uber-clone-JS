import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components";
import Map from "./components/Map"
import { useRouter } from "next/router"
import { accessToken } from 'mapbox-gl'
import RideSelector from "./components/RideSelector"
import Link from 'next/link'

const confirm = () => {
  const router = useRouter()
  const { pickup, dropoff } = router.query

  const [ pickupCoordinates, setPickupCoordinates ] = useState([0, 0]);
  const [ dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickUpCoordinates = (pickup) => {
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
          new URLSearchParams({
              access_token: "pk.eyJ1IjoidGhlb2xhYWsiLCJhIjoiY2t2a3R0ajRpMDEzYzJxcWY4ZXN4azlsbSJ9.-W4Ax1SOIIGrkmu_swQ92A",
              limit: 1
          })
      )
      .then((response)=>{
          return response.json();
      }).then(data => {
          setPickupCoordinates(data.features[0].center)
      })
  }

  const getDropoffCoodrinates = (dropoff) => {
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
          new URLSearchParams({
              access_token: "pk.eyJ1IjoidGhlb2xhYWsiLCJhIjoiY2t2a3R0ajRpMDEzYzJxcWY4ZXN4azlsbSJ9.-W4Ax1SOIIGrkmu_swQ92A",
              limit: 1
          })
      )
      .then((response)=>{
          return response.json();
      }).then(data => {
          setDropoffCoordinates(data.features[0].center)
      })
  }

  useEffect(()=>{
      if(pickup && dropoff){
          getPickUpCoordinates(pickup)
          getDropoffCoodrinates(dropoff);
      }
  }, [pickup, dropoff])

  return (
    <Wrapper>
      <ButtonContainer>
                <Link href="/search">
                    <BackButton
                        src='https://img.icons8.com/ios-filled/50/000000/left.png'
                    />
                </Link>
            </ButtonContainer>
       {/* Map*/}
       <Map
         pickupCoordinates={pickupCoordinates}
         dropoffCoordinates={dropoffCoordinates}
       />
        
       {/* Ride */}
       <RideContainer>
         {/*Ride Selector */}
          <RideSelector 
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
          />
          {/*Confirm Button */}
          <ConfirmButtonContainer>
            <ConfirmButton>
            Confirm Ride
            </ConfirmButton>
            </ConfirmButtonContainer>
         </RideContainer>
    </Wrapper>
  )
}

export default confirm

const Wrapper = tw.div`
  flex h-screen flex-col
`
const RideContainer = tw.div`
      flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
bg-black text-white text-center py-4 mx-4 mx-auto my-4 w-4/6 text-1xl rounded-md
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-contain 
`