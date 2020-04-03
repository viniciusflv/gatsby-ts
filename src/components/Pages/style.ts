import styled from 'styled-components';

export const HeadlineStyle = styled.h1`
  font-size: ${({ theme }) => theme.headline.size};
  font-family: ${({ theme }) => theme.headline.family};
  font-weight: ${({ theme }) => theme.headline.weight};
  color: ${({ theme }) => theme.headline.color};
`;

export const SubheadStyle = styled.h2`
  font-size: ${({ theme }) => theme.subhead.size};
  font-family: ${({ theme }) => theme.subhead.family};
  font-weight: ${({ theme }) => theme.subhead.weight};
  color: ${({ theme }) => theme.subhead.color};
`;

export const TitleStyle = styled.h3`
  font-size: ${({ theme }) => theme.title.size};
  font-family: ${({ theme }) => theme.title.family};
  font-weight: ${({ theme }) => theme.title.weight};
  color: ${({ theme }) => theme.title.color};
`;

export const SubtitleStyle = styled.h4`
  font-size: ${({ theme }) => theme.subtitle.size};
  font-family: ${({ theme }) => theme.subtitle.family};
  font-weight: ${({ theme }) => theme.subtitle.weight};
  color: ${({ theme }) => theme.subtitle.color};
`;

export const ParagraphStyle = styled.p`
  font-size: ${({ theme }) => theme.paragraph.size};
  font-family: ${({ theme }) => theme.paragraph.family};
  font-weight: ${({ theme }) => theme.paragraph.weight};
  color: ${({ theme }) => theme.paragraph.color};
`;
