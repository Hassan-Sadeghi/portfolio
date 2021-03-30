export const HeaderRouters = [
    {path: "/AboutMe", name: "AboutMe", component: resolve => {
        require.ensure(['@/pages/AboutMe.vue'], () => {
            resolve(require('@/pages/AboutMe.vue'));
        });
    }},
    {path: "/Portfolio", name: "Portfolio", component: resolve => {
        require.ensure(['@/pages/Portfolio.vue'], () => {
            resolve(require('@/pages/Portfolio.vue'));
        });
    }},
    {path: "/DownloadCV", name: "DownloadCV", component: resolve => {
        require.ensure(['@/pages/DownloadCV.vue'], () => {
            resolve(require('@/pages/DownloadCV.vue'));
        });
    }}
    //, {path: ""}
];

//...OtherRouters...

