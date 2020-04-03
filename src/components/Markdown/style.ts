import styled from 'styled-components';

const CodeStyle = styled.section`
  code[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
    height: 100%;
    max-height: 600px;
    max-width: 100vw;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: rgb(40, 41, 54);
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  pre::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  pre::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 8px;
  }

  pre::-webkit-scrollbar-thumb {
    background-color: #6272a4;
    border-radius: 8px;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: rgba(98, 114, 164, 1);
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.parameter,
  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: rgba(255, 184, 108, 1);
  }

  .token.boolean,
  .token.number {
    color: #ae81ff;
  }

  .token.string {
    color: rgba(241, 250, 140, 1);
  }

  .token.selector,
  .token.attr-name,
  .token.char,
  .token.builtin,
  .token.function,
  .token.inserted {
    color: rgba(80, 250, 123, 1);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.builtin,
  .token.atrule,
  .token.attr-value,
  .token.class-name {
    color: rgba(139, 233, 253, 1);
  }

  .token.operator,
  .token.keyword {
    color: #ff79c6;
  }

  .token.regex,
  .token.important {
    color: rgba(255, 184, 108, 1);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

export const MarkdownStyle = styled(CodeStyle)`
  font-stretch: inherit;
  font-family: inherit;
  word-spacing: inherit;
  text-align: inherit;
  text-indent: inherit;
  text-shadow: inherit;
  text-transform: inherit;
  text-decoration: none;
  font-size: 12px;
  font-weight: inherit;
  font-style: inherit;
  color: inherit;
  word-break: inherit;
  white-space: inherit;
  direction: inherit;
  letter-spacing: inherit;
  line-height: unset;
  font-family: ${({ theme }) => theme.span.family};
  font-size: ${({ theme }) => theme.span.size};
  font-weight: ${({ theme }) => theme.span.weight};
  color: ${({ theme }) => theme.span.color};
  h1 {
    font-family: ${({ theme }) => theme.headline.family};
    font-size: ${({ theme }) => theme.headline.size};
    font-weight: ${({ theme }) => theme.headline.weight};
    color: ${({ theme }) => theme.headline.color};
  }
  h2 {
    font-family: ${({ theme }) => theme.subhead.family};
    font-size: ${({ theme }) => theme.subhead.size};
    font-weight: ${({ theme }) => theme.subhead.weight};
    color: ${({ theme }) => theme.subhead.color};
  }
  h3 {
    font-family: ${({ theme }) => theme.title.family};
    font-size: ${({ theme }) => theme.title.size};
    font-weight: ${({ theme }) => theme.title.weight};
    color: ${({ theme }) => theme.title.color};
  }
  h4 {
    font-family: ${({ theme }) => theme.subtitle.family};
    font-size: ${({ theme }) => theme.subtitle.size};
    font-weight: ${({ theme }) => theme.subtitle.weight};
    color: ${({ theme }) => theme.subtitle.color};
  }
  p {
    font-family: ${({ theme }) => theme.paragraph.family};
    font-size: ${({ theme }) => theme.paragraph.size};
    font-weight: ${({ theme }) => theme.paragraph.weight};
    color: ${({ theme }) => theme.paragraph.color};
  }
`;
