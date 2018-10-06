declare interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGAElement>> {}

declare module '*.svg' {
  const content: SvgrComponent;
  export default content;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.bmp';
