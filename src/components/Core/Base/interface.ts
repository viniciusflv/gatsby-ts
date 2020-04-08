export type BaseProps<T = {}> = T
& React.HTMLAttributes<T>
& {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  theme?: any;
  content?: string;
  grow?: string;
  outline?: string;
  transition?: string;
  cursor?: string;
  pointerEvents?: string;
  opacity?: string;
  display?: string;
  visibility?: string;
  zIndex?: string;
  alignSelf?: string;
};
