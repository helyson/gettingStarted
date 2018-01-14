import forEach from "lodash/forEach";

export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";
    $urlRouterProvider.otherwise("/home");
    $urlRouterProvider.when("", "/home");
    let states = [
        {
            name: "welcome",
            url: "/home",
            component: "welcome"
        }

    ];

    forEach(states, state => {
        $stateProvider.state(state);
    });
}