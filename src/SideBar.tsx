import React, { useState } from "react";
import { Accordion, Divider, Grid, Icon } from "semantic-ui-react";
import { CloseOutlined, FileDownloadOutlined, SaveOutlined, WorkHistoryOutlined, DirectionsRunOutlined, SystemUpdateAltOutlined } from "@mui/icons-material";

function SiderBar() {
  const [activeIndexs, setActiveIndexs] = useState([0, 5]);

  const handleClick = (e: React.MouseEvent, titleProps: any) => {
    const { index } = titleProps;
    const newIndex = activeIndexs;

    const currentIndexPosition = activeIndexs.indexOf(index);
    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1);
    } else {
      newIndex.push(index);
    }

    setActiveIndexs(Array.from(newIndex));
  };

  return (
    <div>
      <Grid>
        <Grid.Column width={6}>
          <h3>Workflow</h3>
        </Grid.Column>
        <Grid.Column width={10} textAlign="right">
          <CloseOutlined fontSize="large" sx={{ color: "#f234a6" }} />
          <FileDownloadOutlined fontSize="large" sx={{ color: "#f234a6" }} />
          <SystemUpdateAltOutlined fontSize="large" sx={{ color: "#f234a6" }} />
          <SaveOutlined fontSize="large" sx={{ color: "#f234a6" }} />
          <DirectionsRunOutlined fontSize="large" sx={{ color: "#f234a6" }} />
          <WorkHistoryOutlined fontSize="large" sx={{ color: "#f234a6" }} />
        </Grid.Column>
      </Grid>
      <Divider clearing />
      <Accordion>
        <Accordion.Title
          active={activeIndexs.includes(0)}
          index={0}
          onClick={handleClick}
          className="accordion-title"
        >
          <Icon name="dropdown" />
          DATASET SELECTION
        </Accordion.Title>
        <Accordion.Content active={activeIndexs.includes(0)}>
          <p>name: Brick Data</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndexs.includes(1)}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          NEW
        </Accordion.Title>
        <Accordion.Content
          active={activeIndexs.includes(1)}
        ></Accordion.Content>

        <Accordion.Title
          active={activeIndexs.includes(2)}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          AGGREGATE
        </Accordion.Title>
        <Accordion.Content
          active={activeIndexs.includes(2)}
        ></Accordion.Content>

        <Accordion.Title
          active={activeIndexs.includes(3)}
          index={3}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          CLEAN
        </Accordion.Title>
        <Accordion.Content
          active={activeIndexs.includes(3)}
        ></Accordion.Content>

        <Accordion.Title
          active={activeIndexs.includes(4)}
          index={4}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          DEDUPE
        </Accordion.Title>
        <Accordion.Content
          active={activeIndexs.includes(4)}
        ></Accordion.Content>

        <Accordion.Title
          active={activeIndexs.includes(5)}
          index={5}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          JOIN
        </Accordion.Title>
        <Accordion.Content active={activeIndexs.includes(5)}>
          <p>
            <span>type: inner</span>
            <span>extras: [Object Object]</span>
            <span>left_columns: Territory</span>
            <span>right_columns: Territory</span>
            <span>dataset2_name: ETL_N_D2_FRK1</span>
          </p>
        </Accordion.Content>
      </Accordion>
    </div>
  );
}

export default SiderBar;
