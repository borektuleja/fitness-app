export class EmptyNode { }

export class TextNode {
  public constructor(public readonly text: string) { }
}

export class LinkNode {
  public readonly href: string = "";

  public constructor(href: string) {
    const regex = /\?v=([^&]*)&/;
    const match = href.match(regex);

    if (match) {
      this.href = match[1];
    }
  }
}

export type PlanNode = EmptyNode | TextNode | LinkNode;

export function makeContentNodes(content: string): PlanNode[] {
  const regex = /\[l\]([^\[\]]*)\[\/l\]/;
  const lines = content.split("\n");
  const nodes: PlanNode[] = [];

  for (const line of lines) {
    if (line.length <= 1) {
      const node = new EmptyNode();
      nodes.push(node);
    } else {
      const match = line.match(regex);
      if (match) {
        const href = match[1];
        const node = new LinkNode(href);
        nodes.push(node);
      } else {
        const text = line.trim();
        const node = new TextNode(text);
        nodes.push(node);
      }
    }
  }

  return nodes;
}
