import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";
import Form from "react-bootstrap/Container";
import Col from "react-bootstrap/Container";
import {data} from "../helper/data"
import PlayerCard from "./PlayerCard";
import {useState} from "react";

const CardContainer = () =>{
    const [search, setSearch]= useState("");
    console.log(search);
    return(
        <>
        <Form.Control placeholder="Search Player..." className="w-50 m-auto" type="search" onChange={(e)=>setSearch(e.target.value)} />
        <Container className="card-container rounded-4 my-4 p-3">
            <Row className="g-3 justify-content-center">
            {data.filter((player)=>player.name.toLowerCase().includes(search.trim().toLowerCase())).map((player, i)=>{
                return (
             <Col key={i} md={6} lg={4} xl={3}>
                <PlayerCard {...player}/>
            </Col>
            );})}
            </Row>
        </Container>
        </>
    );
};

export default CardContainer