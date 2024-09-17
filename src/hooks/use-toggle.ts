import { useState } from "react";

export default function useToggle() {
  const [on, setOn] = useState(false);

  const toggle = (state?: boolean) => setOn((current) => state ?? !current);
  
  return { on, toggle };
}
