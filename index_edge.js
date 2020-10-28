/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'list',
                type: 'image',
                rect: ['-2645px', '-1873px','5410px','4501px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"list.svg",'0px','0px'],
                transform: [[],[],[],['0.06','0.06385']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-383px', '-1645px','887px','4045px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.07','0.07']]
            },
            {
                id: 'Untitled-1',
                type: 'image',
                rect: ['-90px', '280px','300px','243px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px'],
                transform: [[],[],[],['0.4','0.4']]
            },
            {
                id: 'foot',
                type: 'image',
                rect: ['-2575px', '-186px','5270px','1594px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"foot.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'lo',
                type: 'image',
                rect: ['-3530px', '-2272px','7180px','4660px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lo.svg",'0px','0px'],
                transform: [[],[],[],['0.02','0.02']]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-708px', '381px','2360px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],['-90'],[],['0.1','0.1']]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['-362px', '396px','1590px','290px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.svg",'0px','0px'],
                transform: [[],['-90'],[],['0.1','0.1']]
            },
            {
                id: '_3',
                type: 'image',
                rect: ['-916px', '389px','2200px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.svg",'0px','0px'],
                transform: [[],['-90'],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_foot}": [
                ["style", "top", '-186px'],
                ["style", "height", '1594px'],
                ["transform", "scaleY", '0.08'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-2575px'],
                ["style", "width", '5270px']
            ],
            "${__2}": [
                ["style", "top", '396px'],
                ["style", "left", '-632px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${__1}": [
                ["style", "top", '381px'],
                ["style", "left", '-999px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${_lo}": [
                ["style", "top", '-2272px'],
                ["transform", "scaleY", '0.02'],
                ["transform", "scaleX", '0.02'],
                ["style", "opacity", '0'],
                ["style", "left", '-3530px']
            ],
            "${_list}": [
                ["style", "top", '-1873px'],
                ["style", "height", '4501px'],
                ["transform", "scaleY", '0.06385'],
                ["style", "clip", [0,5410,151,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.06'],
                ["style", "opacity", '0'],
                ["style", "left", '-2645px'],
                ["style", "width", '5410px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(231,231,231,1.00)'],
                ["style", "width", '120px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '-1645px'],
                ["transform", "scaleY", '0.07'],
                ["transform", "scaleX", '0.07'],
                ["style", "height", '4045px'],
                ["style", "opacity", '0'],
                ["style", "left", '-255px'],
                ["style", "width", '887px']
            ],
            "${_Untitled-1}": [
                ["style", "top", '81px'],
                ["transform", "scaleY", '0.4'],
                ["style", "height", '243px'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0'],
                ["style", "left", '-90px'],
                ["style", "width", '300px']
            ],
            "${__3}": [
                ["style", "top", '389px'],
                ["style", "left", '-900px'],
                ["transform", "rotateZ", '-90deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13000,
            autoPlay: true,
            timeline: [
                { id: "eid23", tween: [ "style", "${_list}", "opacity", '1', { fromValue: '0'}], position: 2298, duration: 548 },
                { id: "eid30", tween: [ "style", "${_list}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 548 },
                { id: "eid36", tween: [ "style", "${_t}", "left", '-383px', { fromValue: '-255px'}], position: 11000, duration: 702 },
                { id: "eid11", tween: [ "style", "${__1}", "left", '-1121px', { fromValue: '-999px'}], position: 0, duration: 548 },
                { id: "eid12", tween: [ "style", "${__1}", "left", '-1287px', { fromValue: '-1121px'}], position: 2082, duration: 548 },
                { id: "eid35", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 11298, duration: 404 },
                { id: "eid19", tween: [ "style", "${_Untitled-1}", "top", '48px', { fromValue: '81px'}], position: 889, duration: 346 },
                { id: "eid17", tween: [ "style", "${_Untitled-1}", "opacity", '1', { fromValue: '0'}], position: 889, duration: 548 },
                { id: "eid14", tween: [ "style", "${_lo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 548 },
                { id: "eid26", tween: [ "style", "${__2}", "left", '-735px', { fromValue: '-632px'}], position: 5260, duration: 548 },
                { id: "eid27", tween: [ "style", "${__2}", "left", '-900px', { fromValue: '-735px'}], position: 7342, duration: 548 },
                { id: "eid2", tween: [ "style", "${__3}", "left", '-1039px', { fromValue: '-900px'}], position: 2630, duration: 548 },
                { id: "eid4", tween: [ "style", "${__3}", "left", '-1199px', { fromValue: '-1039px'}], position: 4712, duration: 548 },
                { id: "eid21", tween: [ "style", "${_list}", "clip", [0,5410,4501,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,5410,151,0]}], position: 2298, duration: 7315 },
                { id: "eid25", tween: [ "style", "${_foot}", "opacity", '1', { fromValue: '0'}], position: 8633, duration: 548 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-19223356");
