interface TextThemeType {
  size: string;
  family: string;
  color: string;
  weight: string;
}

interface Code {
  boxShadow: string;
  family: string;
  size: string;
  color: string;
  backgroundColor: string;
  commentColor: string;
  punctuationColor: string;
  parameterColor: string;
  boolNumberColor: string;
  stringColor: string;
  functionColor: string;
  variableColor: string;
  classColor: string;
  keywordColor: string;
}

export type ThemeType<T = {}> = T & {
  span: TextThemeType;
  headline: TextThemeType;
  subhead: TextThemeType;
  title: TextThemeType;
  subtitle: TextThemeType;
  paragraph: TextThemeType;
  code: Code;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
};
