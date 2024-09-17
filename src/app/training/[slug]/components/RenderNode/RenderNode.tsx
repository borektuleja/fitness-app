import { EmptyNode, type PlanNode, TextNode } from "@/helpers/plan.helpers";

import * as styles from "./styles";

export default function RenderNode({
  node
}: {
  node: PlanNode
}) {
  switch (true) {
    case node instanceof EmptyNode:
      return <br className={styles.empty} />;
    case node instanceof TextNode:
      return <span className={styles.text}>{node.text}</span>;
    default:
      return <iframe title="YouTube" src={`https://youtube.com/embed/${node.href}`} className={styles.video} />;
  }
}
