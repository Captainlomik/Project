import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routerLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routerLink: 'products',
        icon: 'fal fa-box-open',
        label: 'Products',
        items: [
            {
                routerLink: 'products/level1.1',
                label: 'Level 1.1',
                items: [
                    {
                        routerLink: 'products/level2.1',
                        label: 'Level 2.1'
                    }
                ]
            },
            {
                routerLink: 'products/level1.2',
                label: 'Level 1.2'
            }
        ]
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
        items: [
            {
                routerLink: 'coupens/list',
                label: 'List Coupens'
            },
            {
                routerLink: 'coupens/create',
                label: 'Create Coupens'
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