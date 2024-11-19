import React from "react";
import { Button, Grid } from "semantic-ui-react";

function TableHeader({rowCount}: {rowCount: string}) {
  return (
    <>
      <Grid.Column width={12}>
        <Button icon="settings" basic color='violet' content="PROJECT NAME" className="table-header-button" />
        <span>ETL New Demo 2</span>
        <Button icon="database" basic color='violet' content="OUTPUT DATASET NAME"></Button>
        <span>ETL N_D2</span>
        <Button basic color='violet' content="LAST RUN" />
        <span>Not Available</span>
      </Grid.Column>
      <Grid.Column width={4} textAlign="right">
        <p>Rows: {rowCount}</p>
      </Grid.Column>
    </>
  );
}

export default TableHeader;
