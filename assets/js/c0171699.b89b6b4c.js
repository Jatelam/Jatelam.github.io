"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6721],{5689:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(4848),n=t(8453);const s={slug:"/piper/gazebo",sidebar_position:6},o="PIPER gazebo \u4eff\u771f",c={id:"use/assets/gazebo",title:"PIPER gazebo \u4eff\u771f",description:"rviz",source:"@site/docs/piper/use/assets/gazebo.md",sourceDirName:"use/assets",slug:"/piper/gazebo",permalink:"/piper/piper/gazebo",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/jatelam.github.io/docs/piper/use/assets/gazebo.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/piper/gazebo",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"ROS2 humble",permalink:"/piper/piper/roshumble"},next:{title:"PIPER issac sim",permalink:"/piper/piper/isaac"}},d={},a=[{value:"rviz",id:"rviz",level:3},{value:"gazebo",id:"gazebo",level:3}];function A(e){const i={code:"code",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"piper-gazebo-\u4eff\u771f",children:"PIPER gazebo \u4eff\u771f"})}),"\n",(0,r.jsx)(i.h3,{id:"rviz",children:"rviz"}),"\n",(0,r.jsxs)(i.p,{children:["\u901a\u8fc7\u8fd0\u884c ",(0,r.jsx)(i.code,{children:"display_xacro.launch"})," \u6253\u5f00rviz"]}),"\n",(0,r.jsx)(i.p,{children:"\u65b0\u5efa\u7ec8\u7aef\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"cd Piper_ros\r\nsource devel/setup.bash\r\nroslaunch piper_description display_xacro.launch\n"})}),"\n",(0,r.jsxs)(i.p,{children:["\u8fd0\u884c\u540e\u4f1a\u53d1\u5e03",(0,r.jsx)(i.code,{children:"/joint_states"}),",\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(i.code,{children:"rostopic echo /joint_states"})," \u67e5\u770b"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:" ",src:t(8478).A+"",width:"208",height:"147"})}),"\n",(0,r.jsxs)(i.p,{children:["\u540c\u65f6\u4f1a\u5f39\u51fa\u4e24\u4e2a\u9875\u9762\u5982\u4e0b\uff0c\u6ed1\u52a8\u6761\u6570\u503c\u5bf9\u5e94",(0,r.jsx)(i.code,{children:"/joint_states"}),"\u6570\u503c\uff0c\u62d6\u52a8\u6ed1\u52a8\u6761\u53ef\u4ee5\u6539\u53d8\u5176\u6570\u503c\uff0crviz\u4e2d\u7684\u6a21\u578b\u4e5f\u4f1a\u968f\u52a8"]}),"\n",(0,r.jsx)(i.p,{children:"\u6709\u65f6\u5019\u6ed1\u52a8\u6761\u7a97\u53e3\u6ca1\u770b\u5230\uff0c\u770b\u4e0bdock\u680f\u662f\u5426\u6709\u7a97\u53e3\uff0c\u53ef\u80fd\u662f\u88ab\u5176\u5b83\u9875\u9762\u8986\u76d6\u4e86"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:" ",src:t(74).A+"",width:"1198",height:"881"})}),"\n",(0,r.jsx)(i.h3,{id:"gazebo",children:"gazebo"}),"\n",(0,r.jsxs)(i.p,{children:["\u901a\u8fc7\u8fd0\u884c ",(0,r.jsx)(i.code,{children:"gazebo_xacro.launch"})," \u6253\u5f00rviz\r\n\u65b0\u5efa\u7ec8\u7aef\u8f93\u5165\u4ee5\u4e0b\u6307\u4ee4:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"cd Piper_ros\r\nsource devel/setup.bash\r\nroslaunch piper_description gazebo_xacro.launch\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:" ",src:t(4909).A+"",width:"1840",height:"1044"})}),"\n",(0,r.jsx)(i.p,{children:"\u8fd0\u884c\u540e\u4f1a\u53d1\u5e03"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"/piper_description/joint_states\r\n/piper_description/joint1_position_controller/command\r\n/piper_description/joint2_position_controller/command\r\n/piper_description/joint3_position_controller/command\r\n/piper_description/joint4_position_controller/command\r\n/piper_description/joint5_position_controller/command\r\n/piper_description/joint6_position_controller/command\r\n/piper_description/joint7_position_controller/command\r\n/piper_description/joint8_position_controller/command\n"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"/piper_description/joint_states"})," \u662fgazebo\u7684\u673a\u68b0\u81c2\u5173\u8282\u72b6\u6001\u7684\u865a\u62df\u53cd\u9988\u8bdd\u9898\uff0c\u5176\u4f59\u7684\u4e3agazebo\u7684\u8ba2\u9605\u8282\u70b9"]}),"\n",(0,r.jsx)(i.p,{children:"\u8fd9\u51e0\u4e2acommand\u8bdd\u9898\u7528\u6765\u63a7\u5236gazebo\u4e2d\u7684\u673a\u68b0\u81c2\u8fd0\u52a8\uff0c\u5173\u8282\u5728xacro\u4e2d\u7684\u9650\u4f4d\u5982\u4e0b\uff0c\u5176\u4e2d\uff0c1\uff5e6\u5173\u8282\u5355\u4f4d\u4e3a\u5f27\u5ea6\uff0c7\u30018\u5173\u8282\u5355\u4f4d\u4e3am\uff0c\u56e0\u4e3a7\u30018\u5173\u8282\u5bf9\u5e94\u5939\u722a"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"joint_name"}),(0,r.jsx)(i.th,{children:"limit"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"joint1"}),(0,r.jsx)(i.td,{children:"[-2.618,2.618]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"joint2"}),(0,r.jsx)(i.td,{children:"[0,3.14]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"joint3"}),(0,r.jsx)(i.td,{children:"[-2.697,0]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"joint4"}),(0,r.jsx)(i.td,{children:"[-1.832,1.832]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"joint5"}),(0,r.jsx)(i.td,{children:"[-1.22,1.22]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"joint6"}),(0,r.jsx)(i.td,{children:"[-3.14,3.14]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"joint7"}),(0,r.jsx)(i.td,{children:"[0,0.038]"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"joint8"}),(0,r.jsx)(i.td,{children:"[-0.038,0]"})]})]})]}),"\n",(0,r.jsx)(i.p,{children:"\u5047\u5982\u60f3\u8981\u4ee4\u5173\u82821\u8fd0\u52a890\u5ea6\uff0c\u53d1\u9001"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:'rostopic pub /piper_description/joint1_position_controller/command std_msgs/Float64 "data: 1.57"\n'})}),"\n",(0,r.jsx)(i.p,{children:"\u53ef\u4ee5\u770b\u5230\u673a\u68b0\u81c2link1\u65cb\u8f6c\u4e8690\u5ea6"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:" ",src:t(1537).A+"",width:"1851",height:"1047"})})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}},4909:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/piper_gazebo-116d65f558772d82ab69ec582d9be709.jpg"},1537:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/piper_gazebo_90-63b75e23ccf4caca21ab7abee4aa835a.jpg"},74:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/piper_rviz-4048c3811b2677e3a9a8c97cef9a4cd0.jpg"},8478:(e,i,t)=>{t.d(i,{A:()=>r});const r="data:image/jpeg;base64,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"},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>c});var r=t(6540);const n={},s=r.createContext(n);function o(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);