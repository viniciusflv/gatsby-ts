import { ThemeType } from './interfaces';

export const light: ThemeType = {
  headline: { size: '3rem', color: '#222222', weight: 'bold', family: 'Raleway, arial, sans-serif' },
  subhead: { size: '2rem', color: '#222222', weight: 'bold', family: 'Raleway, arial, sans-serif' },
  title: { size: '1.5rem', color: '#222222', weight: 'bold', family: 'Raleway, arial, sans-serif' },
  subtitle: { size: '1rem', color: '#222222', weight: 'bold', family: 'Raleway, arial, sans-serif' },
  paragraph: { size: '.8rem', color: '#222222', weight: 'normal', family: 'Montserrat, arial, sans-serif' },
  span: { size: '12px', color: '#222222', weight: 'normal', family: 'Montserrat, arial, sans-serif' },
  primaryColor: 'rgb(40,41,54)',
  secondaryColor: '#6272a4',
  backgroundColor: '#f0f0f0',
};

export const dark: ThemeType = {
  headline: { size: '3rem', color: '#ffffff', weight: 'bold', family: 'Raleway, arial, sans-serif' },
  subhead: { size: '2rem', color: '#f0f0f0', weight: 'bold', family: 'Raleway, arial, sans-serif' },
  title: { size: '1.5rem', color: '#ffffff', weight: 'bold', family: 'Raleway, arial, sans-serif' },
  subtitle: { size: '1rem', color: '#f0f0f0', weight: 'bold', family: 'Raleway, arial, sans-serif' },
  paragraph: { size: '.8rem', color: '#ffffff', weight: 'normal', family: 'Montserrat, arial, sans-serif' },
  span: { size: '12px', color: '#ffffff', weight: 'normal', family: 'Montserrat, arial, sans-serif' },
  primaryColor: 'rgb(40,41,54)',
  secondaryColor: '#6272a4',
  backgroundColor: '#222222',
};
