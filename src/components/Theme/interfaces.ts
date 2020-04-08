interface TextThemeType {
  size: string;
  family: string;
  color: string;
  weight: string;
}

export type ThemeType<T = {}> = T & {
  span: TextThemeType;
  headline: TextThemeType;
  subhead: TextThemeType;
  title: TextThemeType;
  subtitle: TextThemeType;
  paragraph: TextThemeType;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
};
