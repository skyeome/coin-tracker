import { Helmet } from "react-helmet-async";

interface IHeadProps {
  title:string | undefined;
}

export default function Head({title}:IHeadProps){
  return (
    <Helmet>
      <title>{title} | Coin Tracker</title>
      <script src="https://kit.fontawesome.com/93e3d88eaf.js" crossOrigin="anonymous" />
    </Helmet>
  );
}