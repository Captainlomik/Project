import { INavbarData } from "./helper";

export const navbarData:INavbarData[] = [
    {
        routerLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routerLink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products'
    },
    {
        routerLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routerLink: 'coupens',
        icon: 'fal fa-tags',
        label: 'Coupens', 
        items:[
            {
                routerLink:'coupens/link',
                label:'List Coupens'
            }
        ]
    },
    {
        routerLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },
    {
        routerLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings'
    }
]