"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2127],{2938:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var l=n(4848),s=n(8453);const i={slug:"/ws/navigation/visual_path",sidebar_position:6},r=void 0,d={id:"WEBSOCKET-API/\u83b7\u53d6\u5bfc\u822a\u76f8\u5173\u72b6\u6001/\u83b7\u53d6\u5bfc\u822a\u89c4\u5212\u8def\u5f84",title:"\u83b7\u53d6\u5bfc\u822a\u89c4\u5212\u8def\u5f84",description:"\u83b7\u53d6\u5bfc\u822a\u89c4\u5212\u8def\u5f84",source:"@site/docs/WEBSOCKET-API/\u83b7\u53d6\u5bfc\u822a\u76f8\u5173\u72b6\u6001/\u83b7\u53d6\u5bfc\u822a\u89c4\u5212\u8def\u5f84.md",sourceDirName:"WEBSOCKET-API/\u83b7\u53d6\u5bfc\u822a\u76f8\u5173\u72b6\u6001",slug:"/ws/navigation/visual_path",permalink:"/docs/ws/navigation/visual_path",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/Jatelam.github.io/docs/WEBSOCKET-API/\u83b7\u53d6\u5bfc\u822a\u76f8\u5173\u72b6\u6001/\u83b7\u53d6\u5bfc\u822a\u89c4\u5212\u8def\u5f84.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/ws/navigation/visual_path",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u673a\u5668\u4eba\u4f4d\u7f6e",permalink:"/docs/ws/navigation/location"},next:{title:"2D\u70b9\u4e91\u4e09\u5408\u4e00",permalink:"/docs/ws/navigation/scan_info"}},c={},x=[{value:"\u83b7\u53d6\u5bfc\u822a\u89c4\u5212\u8def\u5f84",id:"\u83b7\u53d6\u5bfc\u822a\u89c4\u5212\u8def\u5f84",level:4}];function o(t){const e={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h4,{id:"\u83b7\u53d6\u5bfc\u822a\u89c4\u5212\u8def\u5f84",children:"\u83b7\u53d6\u5bfc\u822a\u89c4\u5212\u8def\u5f84"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u63a5\u53e3\u8bf4\u660e:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u83b7\u53d6\u673a\u5668\u4eba\u5e95\u76d8\u5f53\u524d\u8fdb\u884c\u4e2d\u7684\u4efb\u52a1\u4f5c\u4e1a\u89c4\u5212\u8def\u5f84"}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6ce8\u610f"}),"\uff0c\u53ea\u6709\u5904\u4e8e\u5bfc\u822a\u4e14\u8bbe\u7f6e\u4efb\u52a1\u65f6\u72b6\u6001\u6709\u6548\uff0c\u67e5\u770b\u662f\u5426\u5f00\u542f\u5bfc\u822a\u8bf7\u53c2\u8003\u63a5\u53e3 ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/docs/ws/robot/slam_status",children:"\u8bbe\u5907\u5f53\u524d\u72b6\u6001"})}),",\u4ec5\u5f53\u5f00\u59cb\u4efb\u52a1\u4e4b\u540e\u66f4\u65b0\u5e94\u7b54\u6570\u636e\uff0c10hz\uff08\u6bcf\u79d210\u6b21\uff09"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8bf7\u6c42\u6570\u636e"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{   \r\n    "op": "subscribe",\r\n    "topic": "/run_management/visual_path",\r\n    "type":"nav_msgs/Path" \r\n}\n'})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5e94\u7b54\u6570\u636e:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\r\n    "op": "publish",\r\n    "topic": "/run_management/visual_path",\r\n    "msg": {\r\n        "header": {\r\n            "stamp": {\r\n                "secs": 1681805920,\r\n                "nsecs": 64378373\r\n            },\r\n            "frame_id": "map",\r\n            "seq": 1098806\r\n        },\r\n        "poses": [\r\n            {\r\n                "header": {\r\n                    "stamp": {\r\n                        "secs": 1681115920,\r\n                        "nsecs": 64378373\r\n                    },\r\n                    "frame_id": "map",\r\n                    "seq": 1098806\r\n                },\r\n                "pose": {\r\n                    "position": {\r\n                        "x": 0,\r\n                        "y": 0,\r\n                        "z": 0\r\n                    },\r\n                    "orientation": {\r\n                        "x": 0,\r\n                        "y": 0,\r\n                        "z": 0,\r\n                        "w": 1\r\n                    }\r\n                }\r\n            }\r\n        ]\r\n    }\r\n}\n'})}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u5b57\u6bb5\u540d"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"op"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:'\u56de\u590d\u64cd\u4f5c\u7c7b\u578b"subscribe",\u56fa\u5b9a\u662f"publish"'})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"topic"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u8bdd\u9898\u540d\u79f0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"header"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsxs)(e.td,{style:{textAlign:"left"},children:["\u65f6\u95f4\u6233        \u8be6\u60c5\u53ef\u53c2\u8003 ",(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/docs/ws/protocol/note",children:"\u65f6\u95f4\u6233"})})]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"poses"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u8def\u5f84\u70b9\u6570\u7ec4, pose\u4fe1\u606f\u5217\u8868,\u5355\u4e2apose\u8be6\u60c5\u53c2\u8003\u4e0b\u65b9pose\u8868"})]})]})]}),"\n",(0,l.jsx)(e.p,{children:"pose\u53c2\u6570\u8868"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u5b57\u6bb5\u540d"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u7c7b\u578b"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"position"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"\u4f4d\u7f6e\u70b9\u5750\u6807\u4fe1\u606f"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"position.x"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"x\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"position.y"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"y\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"position.z"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"z\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"orientation"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsxs)(e.td,{style:{textAlign:"left"},children:["\u4f4d\u7f6e\u70b9\u65b9\u5411\u56db\u5143\u6570\u4fe1\u606f,",(0,l.jsx)("div",{children:"\u4ee5\u56db\u5143\u6570\u5f62\u5f0f\u8868\u793a\u81ea\u7531\u7a7a\u95f4\u4e2d\u7684\u65b9\u5411."})]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"orientation.x"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"x\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"orientation.y"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"y\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"orientation.z"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"z\u8f74\u7684\u503c"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"orientation.w"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"float"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"w\u8f74\u7684\u503c"})]})]})]}),"\n"]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(o,{...t})}):o(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>d});var l=n(6540);const s={},i=l.createContext(s);function r(t){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),l.createElement(i.Provider,{value:e},t.children)}}}]);