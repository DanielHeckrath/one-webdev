import {
    Prism as SyntaxHighlighter,
    SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { prism as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FC } from 'react';

type CodeBlockProps = Pick<SyntaxHighlighterProps, 'children' | 'language'>;

const CodeBlock: FC<CodeBlockProps> = ({
    children,
    language = 'javascript',
}) => {
    if (!Array.isArray(children)) {
        children = [children];
    }
    return (
        <SyntaxHighlighter language={language} style={theme}>
            {children.map((child) => {
                const indents = child.match(/^[^\S\n\r]*(?=\S)/gm);

                if (!indents || !indents[0].length) {
                    return child.trim();
                }

                indents.sort(function (a, b) {
                    return a.length - b.length;
                });

                if (!indents[0].length) {
                    return child.trim();
                }

                return child.replace(RegExp('^' + indents[0], 'gm'), '').trim();
            })}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
