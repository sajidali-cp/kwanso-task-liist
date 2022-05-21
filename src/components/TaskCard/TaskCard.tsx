import React from "react";
import { TaskDetail } from "../../store/types/TaskTypes";
import { CardWrapper, Card, FlexRow, FlexCol } from "./StyledTaskCard";

interface Props {
  task: TaskDetail;
}

export default function TaskCard({ task }: Props) {
  return (
    <CardWrapper>
      <Card>
        <FlexCol>
          <FlexRow>
            <h5>ID :</h5>
            <p>{task.id}</p>
          </FlexRow>
          <FlexRow>
            <h5>Task name :</h5>
            <p>{task.name}</p>
          </FlexRow>
        </FlexCol>
      </Card>
    </CardWrapper>
  );
}
