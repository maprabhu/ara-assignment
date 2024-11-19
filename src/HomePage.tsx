import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import MainContent from './MainContent'
import SiderBar from './SideBar'

function HomePage() {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Segment>
          <MainContent />
        </Segment>
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment>
          <SiderBar />
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default HomePage