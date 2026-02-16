import Link from 'next/link';
import { memo } from 'react';
import { Streamdown, type Components } from 'streamdown';
import { code } from '@streamdown/code';
import { mermaid } from '@streamdown/mermaid';
import { math } from '@streamdown/math';
import { cjk } from '@streamdown/cjk';
import 'katex/dist/katex.min.css';

const components: Components = {
  a: ({ children, href, ...props }) => {
    return (
      <Link
        className="text-primary hover:underline"
        target="_blank"
        rel="noreferrer"
        href={href ?? '#'}
        {...props}
      >
        {children}
      </Link>
    );
  },
};

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
  return (
    <Streamdown plugins={{ code, mermaid, math, cjk }} components={components}>
      {children}
    </Streamdown>
  );
};

export const Markdown = memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children,
);
