import React from 'react'
import { useParams } from 'react-router-dom'
import {Data} from './teams/teams'
const Teampage = () => {
    const {id}=useParams();
    const team=Data.teams.find(team=>(team.id).toString()===id)
  return (
    <div style={{textAlign:`center`}}>
      {
        team &&
        <>
        <img src={team.images.stadium}/>
        {
            team.players.map((player)=>
            <div>
                <h5>{player.name}</h5>
                <h5>{player.nationality.country}</h5>
                <img src={player.images} width='300px'/>
            </div>)
        }
        </>
      }
    </div>
  )
}

export default Teampage
