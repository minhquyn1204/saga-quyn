import React from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Index(){
    const router = useRouter();
    function Logout(){
        localStorage.clear();
        router.push('http://localhost:8080')
    }
    return(
        <>
        <h1>Heellll</h1>
        <>{}</>
        <Button onClick={Logout}>logout</Button>
        </>
    )
}