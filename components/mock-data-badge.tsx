import { Beaker } from "lucide-react";
interface MockDataBadgeProps {
  showIcon?: boolean;
  className?: string;
}
export function MockDataBadge({ showIcon = true, className = "" }: MockDataBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-mono text-yellow-500/70 border border-yellow-500/30 px-1.5 py-0.5 rounded ${className}`}>
      {showIcon && <Beaker className="w-3 h-3" />}
      DEMO
    </span>
  );
}