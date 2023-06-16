import { Suspense, lazy } from 'react';
import { BounceLoader } from 'react-spinners';
import { path } from '../constants/path';


const load = (Component: React.FC) => (props: object) =>
(
  <Suspense
    fallback={
      <div className="w-[100%] my-[20%] flex justify-center items-center">
        <BounceLoader loading color="#0052CC" />
      </div>
    }
  >
    <Component {...props} />
  </Suspense>
);


interface routeInterface {
    path: string;
    component: React.FC;
  }

const Home = load(lazy(() => import('../pages/Home')));


const publicRoutes: routeInterface[] = [
    { path: path.HOME, component: Home },
  ];


export { publicRoutes };
