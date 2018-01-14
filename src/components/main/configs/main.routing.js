import forEach from "lodash/forEach";

export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";
    let states = [
        {
            name: "product-list",
            url: "/product-list",
            component: "main"
        },
        {
            name: "product-detail",
            url: "/product-detail/:id",
            component: "productDetail"
        }
    ];

    forEach(states, state => {
        $stateProvider.state(state);
    });
}