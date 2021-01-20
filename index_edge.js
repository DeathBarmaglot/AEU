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
                id: 't',
                type: 'image',
                rect: ['-386px', '-1642px','887px','4045px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'Untitled-1',
                type: 'image',
                rect: ['-90px', '-60px','300px','243px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px'],
                transform: [[],[],[],['0.4','0.4']]
            },
            {
                id: 'foot',
                type: 'image',
                rect: ['-2576px', '-163px','5270px','1594px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"foot.svg",'0px','0px'],
                transform: [[],[],[],['0.05','0.05']]
            },
            {
                id: 'lo',
                type: 'image',
                rect: ['-3530px', '-2170px','7180px','4660px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lo.svg",'0px','0px'],
                transform: [[],[],[],['0.02','0.02']]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-708px', '236px','2360px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],['-90'],[],['0.15','0.15']]
            },
            {
                id: '_3',
                type: 'image',
                rect: ['-916px', '283px','2200px','320px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.svg",'0px','0px'],
                transform: [[],['-90'],[],['0.22','0.22']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__1}": [
                ["style", "top", '236px'],
                ["transform", "scaleY", '0.15'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.15'],
                ["style", "left", '-999px']
            ],
            "${_lo}": [
                ["style", "top", '-2084px'],
                ["transform", "scaleY", '0.02'],
                ["transform", "scaleX", '0.02'],
                ["style", "opacity", '0'],
                ["style", "left", '-3530px']
            ],
            "${_foot}": [
                ["style", "top", '-163px'],
                ["style", "height", '1594px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.05'],
                ["style", "opacity", '0'],
                ["style", "left", '-2576px'],
                ["style", "width", '5270px']
            ],
            "${__3}": [
                ["style", "top", '283px'],
                ["transform", "scaleY", '0.22'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.22'],
                ["style", "left", '-900px']
            ],
            "${_t}": [
                ["style", "top", '-1622px'],
                ["transform", "scaleX", '0.08'],
                ["transform", "scaleY", '0.08'],
                ["style", "left", '-384px'],
                ["style", "height", '4045px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,5410,151,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '887px']
            ],
            "${_Untitled-1}": [
                ["style", "top", '-60px'],
                ["transform", "scaleY", '0.4'],
                ["style", "height", '243px'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0'],
                ["style", "left", '-90px'],
                ["style", "width", '300px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(231,231,231,1.00)'],
                ["style", "width", '120px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            timeline: [
                { id: "eid51", tween: [ "style", "${_t}", "left", '-496px', { fromValue: '-384px'}], position: 2648, duration: 352 },
                { id: "eid14", tween: [ "style", "${_lo}", "opacity", '1', { fromValue: '0'}], position: 110, duration: 548 },
                { id: "eid59", tween: [ "style", "${_lo}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 548 },
                { id: "eid49", tween: [ "style", "${_lo}", "top", '-2166px', { fromValue: '-2084px'}], position: 0, duration: 346 },
                { id: "eid45", tween: [ "style", "${_t}", "clip", [0,5410,4501,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,5410,151,0]}], position: 140, duration: 994 },
                { id: "eid35", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 375 },
                { id: "eid53", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 304 },
                { id: "eid11", tween: [ "style", "${__1}", "left", '-1119px', { fromValue: '-999px'}], position: 3000, duration: 548 },
                { id: "eid12", tween: [ "style", "${__1}", "left", '-1287px', { fromValue: '-1119px'}], position: 6250, duration: 548 },
                { id: "eid17", tween: [ "style", "${_Untitled-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 548 },
                { id: "eid61", tween: [ "style", "${_Untitled-1}", "opacity", '0', { fromValue: '1'}], position: 10360, duration: 548 },
                { id: "eid2", tween: [ "style", "${__3}", "left", '-1039px', { fromValue: '-900px'}], position: 6798, duration: 336 },
                { id: "eid4", tween: [ "style", "${__3}", "left", '-1199px', { fromValue: '-1039px'}], position: 10000, duration: 548 },
                { id: "eid47", tween: [ "style", "${_t}", "top", '-1629px', { fromValue: '-1622px'}], position: 0, duration: 375 },
                { id: "eid54", tween: [ "style", "${_foot}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 548 },
                { id: "eid60", tween: [ "style", "${_foot}", "opacity", '0', { fromValue: '1'}], position: 10360, duration: 548 }            ]
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
