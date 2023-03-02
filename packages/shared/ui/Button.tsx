import { MouseEventHandler } from "react";

export default function Button({ onClick }: { onClick: MouseEventHandler<never>}) {
  return (
    <div onClick={onClick}>
      my <span className="text-blue-400">button</span>
    </div>
  );
}
