import {createBrowserRouter} from "react-router-dom";


const routes : [
    {path:"/pool",element:<PoolPage/>},
    {path:"/",element:<AuthorizationPage/>},
    {path:"/profile",element: <ProfilePage/>},
    {path:"/staking",element: <StakingPage/>}
]
const router = createBrowserRouter(routes);
export {router};