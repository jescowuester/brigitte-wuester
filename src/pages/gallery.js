import React from "react"
import { Layout, HeroImage, Text, Box } from "~components"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const Card = styled(Box)`
  box-shadow: ${p => p.theme.shadows.z3};
  background: ${p => p.theme.colors.white};
  height: 500px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  text-align: center;
`

const Body = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div``

const IndexPage = () => (
  <Layout>
    <SEO
      title="Gallery"
      keywords={[
        `Keramik`,
        `Brigitte Wuester`,
        `Aidling`,
        `Riegsee`,
        `Art`,
        `Kunst`,
        `Pottery`,
        `Skulptur`
      ]}
    />
    <Body>
      <Card pl="550px" pr="50px" width="70%">
        <HeroImage />
        <Text fontSize="40px" color="brown" mb="30px" as="h1">
          Brigitte Wuester
        </Text>
        <Content>
          <Text as="p">
            „Wahrscheinlich ist wichtig, dass die Sachen einfach und komplex
            sind. Es ist nicht so, dass das Komplexe durch eine komplizierte
            Form ausgedrückt wird, sondern das Komplexe ist vielleicht besser
            durch eine einfache Form auszudrücken. In der Einfachheit und
            Reduzierung ist für mich eine größere Vielfalt enthalten als in
            einer nach außen hin vielgestaltigen, komplizierten Form.“
          </Text>
          <Text mt="20px" as="p">
            Norbert Prangenberg (1949-2012)
          </Text>
        </Content>
      </Card>
    </Body>
  </Layout>
)

export default IndexPage
