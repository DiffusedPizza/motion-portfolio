//FONTS
import {Sora} from '@next/font/google'

//Font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

//COMPONENTS
import Nav from '../components/Nav';


const Layout = ({children}) => {
  return <div>
    <Nav />
  </div>;
};

export default Layout;
