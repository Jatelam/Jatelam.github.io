"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2788],{32:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>_,toc:()=>p});var s=n(4848),a=n(8453);const t={},c="PIPER SDK msgs",_={id:"piper/use/assets/msgs",title:"PIPER SDK msgs",description:"can_id.py \u6587\u4ef6\u4e3a\u6240\u6709canid\u7684\u679a\u4e3e\u7c7b",source:"@site/docs/piper/use/assets/msgs.md",sourceDirName:"piper/use/assets",slug:"/piper/use/assets/msgs",permalink:"/docs/piper/use/assets/msgs",draft:!1,unlisted:!1,editUrl:"https://github.com/Jatelam/Jatelam.github.io/docs/piper/use/assets/msgs.md",tags:[],version:"current",frontMatter:{},sidebar:"piper",previous:{title:"PIPER SDK Interface",permalink:"/docs/piper/use/assets/interface"},next:{title:"PIPER SDK Protocol V1",permalink:"/docs/piper/use/assets/protocol_v1"}},i={},p=[];function o(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"piper-sdk-msgs",children:"PIPER SDK msgs"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"piper_msgs\r\n\u251c\u2500\u2500 __init__.py\r\n\u251c\u2500\u2500 msg_v1\r\n\u2502   \u251c\u2500\u2500 arm_id_type_map.py\r\n\u2502   \u251c\u2500\u2500 arm_messages.py\r\n\u2502   \u251c\u2500\u2500 arm_msg_type.py\r\n\u2502   \u251c\u2500\u2500 can_id.py\r\n\u2502   \u251c\u2500\u2500 feedback\r\n\u2502   \u2502   \u251c\u2500\u2500 arm_crash_protection_rating_feedback.py\r\n\u2502   \u2502   \u251c\u2500\u2500 arm_end_pose.py\r\n\u2502   \u2502   \u251c\u2500\u2500 arm_feedback_current_end_vel_acc_param.py\r\n\u2502   \u2502   \u251c\u2500\u2500 arm_feedback_current_motor_angle_limit_max_spd.py\r\n\u2502   \u2502   \u251c\u2500\u2500 arm_feedback_current_motor_max_acc_limit.py\r\n\u2502   \u2502   \u251c\u2500\u2500 arm_feedback_joint_vel_acc.py\r\n\u2502   \u2502   \u251c\u2500\u2500 arm_high_spd_feedback.py\r\n\u2502   \u2502   \u251c\u2500\u2500 arm_joint_feedback.py\r\n\u2502   \u2502   \u251c\u2500\u2500 arm_low_spd_feedback.py\r\n\u2502   \u2502   \u251c\u2500\u2500 arm_status.py\r\n\u2502   \u2502   \u251c\u2500\u2500 gripper_feedback.py\r\n\u2502   \u2502   \u2514\u2500\u2500 __init__.py\r\n\u2502   \u251c\u2500\u2500 __init__.py\r\n\u2502   \u2514\u2500\u2500 transmit\r\n\u2502       \u251c\u2500\u2500 arm_circular_pattern.py\r\n\u2502       \u251c\u2500\u2500 arm_crash_protection_rating_config.py\r\n\u2502       \u251c\u2500\u2500 arm_end_vel_acc_param_config.py\r\n\u2502       \u251c\u2500\u2500 arm_gripper_ctrl.py\r\n\u2502       \u251c\u2500\u2500 arm_joint_config.py\r\n\u2502       \u251c\u2500\u2500 arm_joint_ctrl.py\r\n\u2502       \u251c\u2500\u2500 arm_light_ctrl.py\r\n\u2502       \u251c\u2500\u2500 arm_master_slave_config.py\r\n\u2502       \u251c\u2500\u2500 arm_motion_ctrl_1.py\r\n\u2502       \u251c\u2500\u2500 arm_motion_ctrl_2.py\r\n\u2502       \u251c\u2500\u2500 arm_motion_ctrl_cartesian.py\r\n\u2502       \u251c\u2500\u2500 arm_motor_angle_limit_max_spd_config.py\r\n\u2502       \u251c\u2500\u2500 arm_motor_enable_disable.py\r\n\u2502       \u251c\u2500\u2500 arm_param_enquiry_and_config.py\r\n\u2502       \u251c\u2500\u2500 arm_search_motor_max_angle_spd_acc_limit.py\r\n\u2502       \u251c\u2500\u2500 arm_set_instruction_response.py\r\n\u2502       \u2514\u2500\u2500 __init__.py\r\n\u2514\u2500\u2500 msg_v2\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"can_id.py"})," \u6587\u4ef6\u4e3a\u6240\u6709canid\u7684\u679a\u4e3e\u7c7b"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"arm_msg_type.py"})," \u6587\u4ef6\u4e3a\u6240\u6709\u6d88\u606f\u7c7b\u578b\u7684\u679a\u4e3e\u7c7b"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"arm_id_type_map.py"})," \u6587\u4ef6\u4e3acanid\u548c\u6d88\u606f\u7c7b\u578b\u7684\u6620\u5c04map"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"arm_messages.py"})," \u6587\u4ef6\u4e3a\u6240\u6709\u81ea\u5b9a\u4e49\u6d88\u606f\u7c7b\u578b\u7684\u6c47\u603b\uff0c\u5176\u4e2d\u7684",(0,s.jsx)(r.code,{children:"PiperMessage"}),"\u662fcan\u6d88\u606f\u548c\u62bd\u8c61\u7c7b\u578b\u7684\u6865\u6881"]}),"\n",(0,s.jsxs)(r.p,{children:["\u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u6839\u636ecanid\u7b5b\u9009\u51fa\u5bf9\u5e94\u7684\u6d88\u606f\u7c7b\u578b\u5e76\u8d4b\u7ed9",(0,s.jsx)(r.code,{children:"PiperMessage"}),"\uff0c\u5c06can\u5e27\u4ecebytes\u7c7b\u578b\u89e3\u6790\u4e3a\u6307\u5b9a\u7684\u6574\u5f62\uff0c\u7136\u540e\u8d4b\u503c\u5230\u5bf9\u5e94\u7684\u6d88\u606f\u7c7b\u578b\u7684\u53d8\u91cf\u4e2d"]}),"\n",(0,s.jsxs)(r.p,{children:["\u53d1\u9001\u6570\u636e\u65f6\uff0c\u5148\u521b\u5efa\u4e00\u4e2a",(0,s.jsx)(r.code,{children:"PiperMessage"}),"\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u4f20\u5165\u6d88\u606f\u7c7b\u578b\u548c\u5bf9\u5e94\u7684\u6d88\u606f\u7c7b\uff0c\u7136\u540e\u6267\u884c\u534f\u8bae\u89e3\u6790\u4e3acan\u5e27\u5e76\u53d1\u9001\u51fa\u53bb"]}),"\n",(0,s.jsxs)(r.p,{children:["\u76ee\u5f55 ",(0,s.jsx)(r.code,{children:"feedback"})," \u4e3a\u6240\u6709\u6709\u5173\u53cd\u9988\u7684\u6d88\u606f"]}),"\n",(0,s.jsxs)(r.p,{children:["\u76ee\u5f55 ",(0,s.jsx)(r.code,{children:"transmit"})," \u4e3a\u6240\u6709\u53d1\u9001\u6709\u5173\u7684\u6d88\u606f"]})]})}function m(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>_});var s=n(6540);const a={},t=s.createContext(a);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function _(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);