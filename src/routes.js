import {About, Detail, Home, List} from './pages';
const routes = [
    {
        path:'/',
        component:Home,
        linkText:'首页',
        exact:true,
        isNav:true
    },{
        path:'/list',
        component:List,
        exact:true,
        isNav:true,
        linkText:'列表'
    },{
        path:'/about',
        component:About,
        exact:true,
        isNav:true,
        linkText:'关于'
    },{
        path:'/detail',
        component:Detail,
        linkText:'详情',
    }
]

export default routes;