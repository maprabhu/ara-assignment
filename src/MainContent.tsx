import React, { useState } from "react";
import { Grid, Segment, Button, Icon, Menu, Divider } from "semantic-ui-react";
import TableHeader from "./TableHeader";
import DataTable from "./DataTable";
import data from "./data.json";

function MainContent() {
  const [activeItem, setActiveItem] = useState("Data");

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveItem(e.currentTarget.innerText);
  };

  return (
    <Grid>
      <Grid.Column width={16}>
        {/* <Segment> */}
        <Grid>
          <Grid.Column width={12}>
            <Menu compact>
              <Menu.Item
                key="data"
                icon="table"
                content="Data"
                active={activeItem === "Data"}
                onClick={handleItemClick}
              />
              <Menu.Item
                key="summary"
                icon="chart line"
                content="Summary"
                active={activeItem === "Summary"}
                onClick={handleItemClick}
              />
              <Menu.Item
                key="logs"
                icon="file text"
                content="Logs"
                active={activeItem === "Logs"}
                onClick={handleItemClick}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <Button icon labelPosition="left" disabled>
              <Icon name="save" size="large" />
              Download
            </Button>
          </Grid.Column>
        </Grid>
        <Segment>
          <Grid padded>
            <Grid.Row>
              <TableHeader rowCount={data.row_count} />
            </Grid.Row>
            <Divider clearing />
            <Grid.Row>
              <DataTable data={data} />
            </Grid.Row>
          </Grid>
        </Segment>
        {/* </Segment> */}
      </Grid.Column>
    </Grid>
  );
}

export default MainContent;
