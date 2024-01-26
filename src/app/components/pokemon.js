'use client'
import Image from "next/image";
import style from "./pokemon.module.css";
import { useEffect, useState } from "react";
function Pokemon() {
    const [pokemon, setPokemon] = useState("./vercel.svg")
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [ability, setAbility] = useState("")
    const [type, setType] = useState("")
    const [stat, setStat] = useState("")
    const [sprites, setSprites] = useState("")
    const [resources, setResources] = useState("")
    const [height, setHeight]=useState("")
    const [weight, setWeight]=useState("")
    const [attack, setAttack]=useState("")
    const url = "https://pokeapi.co/api/v2/pokemon/chinchou"
    useEffect(() => {
        fetch(url).then(res => res.json())
            .then(data => {
                setPokemon(data.sprites.front_default),
                setName(data.species.name),
                setId(data.id),
                setAbility(data.abilities[1].ability.name),
                setType(data.types[0].type.name), 
                setHeight(data.height),
                setWeight(data.weight),
                setStat(data.stats[0].stat.name),
                setAttack(data.attack),
                setSprites(data.sprites.front_default),
                setResources(data.resources)
            })
    }, [])


    return (
        <div className={style.pokemon}>
            <h1>My pokemon</h1>
            <h2>{name}</h2>
            <div className={style.id}><h3>#{id}</h3></div>
            <Image src={pokemon} alt="pokemon" width="350" height="350" />
            <h1>About</h1>

            <h1>type {type}</h1>
            <h1>height {height} m</h1>
            <h1>weight {weight} kg</h1>
            <h1>Ability{ability}</h1>
            <h1>Stat </h1>
            <h1>Hp {stat}</h1>
            <h1>Attack {attack}</h1>
            <h1>Defense</h1>
            <h1>Speed</h1>


        </div>
    )
}
export default Pokemon;