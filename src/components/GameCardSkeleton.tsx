import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <>
      <Card>
        <Skeleton height={"200px"} />
        <CardBody>
          <SkeletonText height={"90px"} padding={5} />
        </CardBody>
      </Card>
    </>
  );
}

export default GameCardSkeleton;
