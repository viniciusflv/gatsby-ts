import { ThemeType } from './interfaces';

export const light: ThemeType = {
  headline: {
    size: '3rem',
    color: '#222222',
    weight: 'bold',
    family: 'Raleway, arial, sans-serif',
  },
  subhead: {
    size: '2rem',
    color: '#222222',
    weight: 'bold',
    family: 'Raleway, arial, sans-serif',
  },
  title: {
    size: '1.5rem',
    color: '#222222',
    weight: 'bold',
    family: 'Raleway, arial, sans-serif',
  },
  subtitle: {
    size: '1rem',
    color: '#222222',
    weight: 'bold',
    family: 'Raleway, arial, sans-serif',
  },
  paragraph: {
    size: '.8rem',
    color: '#222222',
    weight: 'normal',
    family: 'Montserrat, arial, sans-serif',
  },
  span: {
    size: '12px',
    color: '#222222',
    weight: 'normal',
    family: 'Montserrat, arial, sans-serif',
  },
  primaryColor: 'rgb(40,41,54)',
  secondaryColor: '#6272a4',
  backgroundColor: '#f0f0f0',
  code: {
    size: '1rem',
    family:
      '\'Fira Code\', Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    color: 'rgb(40,41,54)',
    backgroundColor: '#ffffff',
    commentColor: 'rgba(98, 114, 164, 1)',
    punctuationColor: 'rgba(98, 114, 164, 1)',
    parameterColor: 'rgb(255,121,86)',
    boolNumberColor: '#ae81ff',
    stringColor: '#6272a4',
    functionColor: 'rgb(52,204,8)',
    variableColor: 'rgb(40,41,54)',
    classColor: 'rgb(0,188,204)',
    keywordColor: '#ff79c6',
  },
};

export const dark: ThemeType = {
  headline: {
    size: '3rem',
    color: '#ffffff',
    weight: 'bold',
    family: 'Raleway, arial, sans-serif',
  },
  subhead: {
    size: '2rem',
    color: '#f0f0f0',
    weight: 'bold',
    family: 'Raleway, arial, sans-serif',
  },
  title: {
    size: '1.5rem',
    color: '#ffffff',
    weight: 'bold',
    family: 'Raleway, arial, sans-serif',
  },
  subtitle: {
    size: '1rem',
    color: '#f0f0f0',
    weight: 'bold',
    family: 'Raleway, arial, sans-serif',
  },
  paragraph: {
    size: '.8rem',
    color: '#ffffff',
    weight: 'normal',
    family: 'Montserrat, arial, sans-serif',
  },
  span: {
    size: '12px',
    color: '#ffffff',
    weight: 'normal',
    family: 'Montserrat, arial, sans-serif',
  },
  primaryColor: 'rgb(40,41,54)',
  secondaryColor: '#6272a4',
  backgroundColor: '#222222',
  code: {
    size: '1rem',
    family:
      '\'Fira Code\', Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    color: '#f8f8f2',
    backgroundColor: 'rgb(40,41,54)',
    commentColor: 'rgba(98, 114, 164, 1)',
    punctuationColor: '#f8f8f2',
    parameterColor: 'rgba(255, 184, 108, 1)',
    boolNumberColor: '#ae81ff',
    stringColor: 'rgba(241, 250, 140, 1)',
    functionColor: 'rgba(80, 250, 123, 1)',
    variableColor: '#f8f8f2',
    classColor: 'rgba(139, 233, 253, 1)',
    keywordColor: '#ff79c6',
  },
};
