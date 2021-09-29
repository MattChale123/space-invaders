import React from 'react'
import "./Home.css"
import PlayerCharacter from '../components/PlayerCharacter'
import InvaderShip from '../components/InvaderShip'
import { Card, Button } from 'react-bootstrap'


export default function Home() {

    
    return (
        <div>
            <h1>Welcome!</h1>
            <div className="container">
                <Card className="cardcontent">
                    <Card.Body className="cardbody">
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                    </Card.Body>
                    <Card.Body className="cardbody">
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                    </Card.Body>
                    <Card.Body className="cardbody">
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                    </Card.Body>
                    <Card.Body className="cardbody">
                        <InvaderShip />
                        <InvaderShip />
                        <InvaderShip />
                    </Card.Body>
                    <Card.Body className="cardbody">
                        <InvaderShip />
                        <InvaderShip />
                    </Card.Body>
                    <Card.Body className="cardbody">
                        <InvaderShip />
                    </Card.Body>
                    <Card.Body className="player">
                        <PlayerCharacter />
                    </Card.Body>
                </Card>
                <br />
                <Button>Play!</Button>
            </div>  
        </div>
        
    )
}
