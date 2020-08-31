import React from "react"
import { Link } from "gatsby"
import {GitChart} from "../components/gitChart"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Table} from "../components/table"
import {Profile} from "../components/profile"
import {Skill} from "../components/skill"
import {Create} from "../components/create"
import {Mail} from "../components/mail"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{maxWidth:`960px`,marginBottom:`1.45rem`}}>
      <Table/>
      <Profile/>
      <GitChart/>
      <Skill/>
      <Create/>
      <Mail/>
    </div>
  </Layout>
)

export default IndexPage