import { SmallPokemon } from '@/interfaces'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'
interface Props{
  pokemon:SmallPokemon
}

export const PokemonCard = ({pokemon}:Props) => {
  const router= useRouter()
  const {id,img,name}= pokemon

  const onClick=()=>{
    router.push(`/pokemon/${pokemon.id}`)
  }
  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
        <Card 
          hoverable
          clickable
          onClick={onClick}
          >
          <Card.Body css={{p:1}}>
            <Card.Image
              src={img}
              width='100%'
              height={140}
            />
          </Card.Body>
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize">{name}</Text>
              <Text>#{id}</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
  )
}
