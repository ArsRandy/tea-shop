import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MapHeader from '../components/Map/MapHeader'
import MapInfo from '../components/Map/MapInfo'

export default function EventsList() {
  return (
    <>
      <Container fluid className="pt-4 pt-lg-6">
        <Row>
          <Col lg="1" className="offset-lg-1">
            <h1 className="mb-3 vertical-lg-rl h2 text-ff">走訪茶鄉</h1>
          </Col>
          <Col lg="9">
            <MapHeader />
            {/* <MapImg /> */}
            <MapInfo />
          </Col>
        </Row>
      </Container>
    </>
  )
}
