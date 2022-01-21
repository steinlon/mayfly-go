var G=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var q=(e,o,d)=>o in e?G(e,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[o]=d,B=(e,o)=>{for(var d in o||(o={}))Y.call(o,d)&&q(e,d,o[d]);if(K)for(var d of K(o))Z.call(o,d)&&q(e,d,o[d]);return e},U=(e,o)=>Q(e,X(o));import{l as H,a4 as x,r as $,a as P,z as ee,o as j,F as W,t as L,d as p,q as s,e as k,j as u,k as n,T as le,w,v as oe,f as h,i as E,n as N,H as y,G as f,I as S,J as T,y as J,E as z,h as F,V as ne,A as te,g as _,P as ae}from"./vendor.1642734948623.js";import{r as R}from"./api.16427349486232.js";import{e as M}from"./enums.1642734948623.js";import{n as ue}from"./assert.1642734948623.js";import{_ as O}from"./index.1642734948623.js";import"./Api.1642734948623.js";import"./Enum.1642734948623.js";const ie=()=>new Promise((e,o)=>{H(()=>{const d=x,b=[];for(const i in d)b.push(`${d[i].name}`);b.length>0?e(b):o("\u672A\u83B7\u53D6\u5230\u503C\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")})}),se={ele:()=>ie()},re={name:"iconSelector",emits:["update:modelValue","get","clear"],props:{prepend:{type:String,default:()=>"Pointer"},placeholder:{type:String,default:()=>"\u8BF7\u8F93\u5165\u5185\u5BB9\u641C\u7D22\u56FE\u6807\u6216\u8005\u9009\u62E9\u56FE\u6807"},size:{type:String,default:()=>"default"},title:{type:String,default:()=>"\u8BF7\u9009\u62E9\u56FE\u6807"},type:{type:String,default:()=>"ele"},disabled:{type:Boolean,default:()=>!1},clearable:{type:Boolean,default:()=>!0},emptyDescription:{type:String,default:()=>"\u65E0\u76F8\u5173\u56FE\u6807"},modelValue:String},setup(e,{emit:o}){const d=$(),b=$(),i=P({fontIconPrefix:"",fontIconVisible:!1,fontIconWidth:0,fontIconSearch:"",fontIconTabsIndex:0,fontIconSheetsList:[],fontIconPlaceholder:"",fontIconType:"ali",fontIconShow:!0}),C=()=>{if(i.fontIconVisible=!0,!e.modelValue)return!1;i.fontIconSearch="",i.fontIconPlaceholder=e.modelValue},I=()=>{i.fontIconVisible=!1,setTimeout(()=>{i.fontIconSheetsList.filter(l=>l===i.fontIconSearch).length<=0&&(i.fontIconSearch="")},300)},D=()=>{if(e.modelValue==="")return!1;i.fontIconPlaceholder=e.modelValue,i.fontIconPrefix=e.modelValue},c=ee(()=>{if(!i.fontIconSearch)return i.fontIconSheetsList;let v=i.fontIconSearch.trim().toLowerCase();return i.fontIconSheetsList.filter(l=>{if(l.toLowerCase().indexOf(v)!==-1)return l})}),a=()=>{H(()=>{i.fontIconWidth=d.value.$el.offsetWidth})},m=()=>{window.addEventListener("resize",()=>{a()})},r=async v=>{i.fontIconSheetsList=[],v==="ali"||v==="ele"&&await se.ele().then(l=>{i.fontIconSheetsList=l}),i.fontIconPlaceholder=e.placeholder,D(),b.value.wrap$.scrollTop=0},t=v=>{i.fontIconType=v,r(v)},g=v=>{i.fontIconPlaceholder=v,i.fontIconVisible=!1,i.fontIconPrefix=v,o("get",i.fontIconPrefix),o("update:modelValue",i.fontIconPrefix)},V=()=>{i.fontIconPrefix="",o("clear",i.fontIconPrefix),o("update:modelValue",i.fontIconPrefix)};return j(()=>{e.type==="all"||t(e.type),m(),a()}),W(()=>e.modelValue,()=>{D()}),B({inputWidthRef:d,selectorScrollbarRef:b,fontIconSheetsFilterList:c,onColClick:g,onIconChange:t,onClearFontIcon:V,onIconFocus:C,onIconBlur:I},L(i))}},de={class:"icon-selector"},me={class:"icon-selector-warp"},fe={class:"icon-selector-warp-title flex"},pe={class:"flex-auto"},ce={key:0,class:"icon-selector-warp-title-tab"},ye={class:"icon-selector-warp-row"},ge={class:"flex-margin"},be={class:"icon-selector-warp-item-value"};function ve(e,o,d,b,i,C){const I=p("SvgIcon"),D=p("el-input"),c=p("el-col"),a=p("el-row"),m=p("el-empty"),r=p("el-scrollbar"),t=p("el-popover");return s(),k("div",de,[u(t,{placement:"bottom",width:450,visible:e.fontIconVisible,"onUpdate:visible":o[4]||(o[4]=g=>e.fontIconVisible=g),"popper-class":"icon-selector-popper"},{reference:n(()=>[u(D,{modelValue:e.fontIconSearch,"onUpdate:modelValue":o[0]||(o[0]=g=>e.fontIconSearch=g),placeholder:e.fontIconPlaceholder,clearable:d.clearable,disabled:d.disabled,size:d.size,ref:"inputWidthRef",onClear:b.onClearFontIcon,onFocus:b.onIconFocus,onBlur:b.onIconBlur},{prepend:n(()=>[u(I,{name:d.prepend,class:"font14"},null,8,["name"])]),_:1},8,["modelValue","placeholder","clearable","disabled","size","onClear","onFocus","onBlur"])]),default:n(()=>[u(le,{name:"el-zoom-in-top"},{default:n(()=>[w(h("div",me,[h("div",fe,[h("div",pe,E(d.title),1),d.type==="all"?(s(),k("div",ce,[h("span",{class:N([{"span-active":e.fontIconType==="ali"},"ml10"]),onClick:o[1]||(o[1]=g=>b.onIconChange("ali")),title:"iconfont \u56FE\u6807"},"ali",2),h("span",{class:N([{"span-active":e.fontIconType==="ele"},"ml10"]),onClick:o[2]||(o[2]=g=>b.onIconChange("ele")),title:"elementPlus \u56FE\u6807"},"ele",2),h("span",{class:N([{"span-active":e.fontIconType==="awe"},"ml10"]),onClick:o[3]||(o[3]=g=>b.onIconChange("awe")),title:"fontawesome \u56FE\u6807"},"awe",2)])):y("",!0)]),h("div",ye,[u(r,{ref:"selectorScrollbarRef"},{default:n(()=>[b.fontIconSheetsFilterList.length>0?(s(),f(a,{key:0,gutter:10},{default:n(()=>[(s(!0),k(S,null,T(b.fontIconSheetsFilterList,(g,V)=>(s(),f(c,{xs:6,sm:4,md:4,lg:4,xl:4,onClick:v=>b.onColClick(g),key:V},{default:n(()=>[h("div",{class:N(["icon-selector-warp-item",{"icon-selector-active":e.fontIconPrefix===g}])},[h("div",ge,[h("div",be,[u(I,{name:g},null,8,["name"])])])],2)]),_:2},1032,["onClick"]))),128))]),_:1})):y("",!0),b.fontIconSheetsFilterList.length<=0?(s(),f(m,{key:1,"image-size":100,description:d.emptyDescription},null,8,["description"])):y("",!0)]),_:1},512)])],512),[[oe,e.fontIconVisible]])]),_:1})]),_:1},8,["visible"])])}var Fe=O(re,[["render",ve]]);const he=J({name:"ResourceEdit",components:{iconSelector:Fe},props:{visible:{type:Boolean},data:{type:[Boolean,Object]},title:{type:String},typeDisabled:{type:Boolean}},setup(e,{emit:o}){const d=$(null),b={routeName:"",icon:"Menu",redirect:"",component:"",isKeepAlive:!0,isHide:!1,isAffix:!1,isIframe:!1},i=P({trueFalseOption:[{label:"\u662F",value:!0},{label:"\u5426",value:!1}],dialogVisible:!1,dialogForm:{title:"",visible:!1,data:{}},props:{value:"id",label:"name",children:"children"},form:{id:null,name:null,pid:null,code:null,type:null,weight:0,meta:{routeName:"",icon:"",redirect:"",component:"",isKeepAlive:!0,isHide:!1,isAffix:!1,isIframe:!1}},btnLoading:!1,rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D44\u6E90\u540D\u79F0",trigger:["change","blur"]}],weight:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E8F\u53F7",trigger:["change","blur"]}]}});W(e,a=>{i.dialogVisible=a.visible,a.data?i.form=B({},a.data):i.form={},i.form.meta||(i.form.meta=b);const m=i.form.meta;i.form.meta.isKeepAlive=!!m.isKeepAlive,i.form.meta.isHide=!!m.isHide,i.form.meta.isAffix=!!m.isAffix,i.form.meta.isIframe=!!m.isIframe});const C=a=>{a&&(i.form.meta.component="RouterParent")},I=()=>{const a=B({},i.form);a.type==1?a.meta=D(a.meta):a.meta=null,a.weight=parseInt(a.weight),d.value.validate(m=>{if(m)R.save.request(a).then(()=>{o("val-change",a),i.btnLoading=!0,z.success("\u4FDD\u5B58\u6210\u529F"),setTimeout(()=>{i.btnLoading=!1},1e3),c()});else return!1})},D=a=>{let m={};return ue(a.routeName,"\u8DEF\u7531\u540D\u4E0D\u80FD\u4E3A\u7A7A"),m.routeName=a.routeName,a.isKeepAlive&&(m.isKeepAlive=!0),a.isHide&&(m.isHide=!0),a.isAffix&&(m.isAffix=!0),a.isIframe&&(m.isIframe=!0),a.link&&(m.link=a.link),a.redirect&&(m.redirect=a.redirect),a.component&&(m.component=a.component),a.icon&&(m.icon=a.icon),m},c=()=>{o("update:visible",!1),o("cancel"),setTimeout(()=>{d.value.resetFields(),i.form={}},200)};return U(B({},L(i)),{enums:M,changeIsIframe:C,menuForm:d,btnOk:I,cancel:c})}}),Ee={class:"menu-dialog"},Ie={style:{"text-align":"center"},class:"dialog-footer mt10"},De=F("\u786E \u5B9A"),Ve=F("\u53D6 \u6D88");function ke(e,o,d,b,i,C){const I=p("el-option"),D=p("el-select"),c=p("el-form-item"),a=p("el-col"),m=p("el-input"),r=p("icon-selector"),t=p("el-row"),g=p("el-form"),V=p("el-button"),v=p("el-dialog");return s(),k("div",Ee,[u(v,{title:e.title,"destroy-on-close":!0,modelValue:e.dialogVisible,"onUpdate:modelValue":o[13]||(o[13]=l=>e.dialogVisible=l),width:"769px"},{default:n(()=>[u(g,{model:e.form,inline:!0,ref:"menuForm",rules:e.rules,"label-width":"95px"},{default:n(()=>[u(t,{gutter:10},{default:n(()=>[u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[u(c,{prop:"type",label:"\u7C7B\u578B",required:""},{default:n(()=>[u(D,{modelValue:e.form.type,"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.type=l),disabled:e.typeDisabled,placeholder:"\u8BF7\u9009\u62E9",width:"w100"},{default:n(()=>[(s(!0),k(S,null,T(e.enums.ResourceTypeEnum,l=>(s(),f(I,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[u(c,{prop:"name",label:"\u540D\u79F0",required:""},{default:n(()=>[u(m,{modelValue:e.form.name,"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.name=l),modelModifiers:{trim:!0},placeholder:"\u8D44\u6E90\u540D[\u83DC\u5355\u540D]","auto-complete":"off"},null,8,["modelValue"])]),_:1})]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[u(c,{prop:"code",label:"path|code"},{default:n(()=>[u(m,{modelValue:e.form.code,"onUpdate:modelValue":o[2]||(o[2]=l=>e.form.code=l),modelModifiers:{trim:!0},placeholder:"\u83DC\u5355\u4E0D\u5E26/\u81EA\u52A8\u62FC\u63A5\u7236\u8DEF\u5F84"},null,8,["modelValue"])]),_:1})]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[u(c,{label:"\u5E8F\u53F7",prop:"weight",required:""},{default:n(()=>[u(m,{modelValue:e.form.weight,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.weight=l),modelModifiers:{trim:!0},type:"number",placeholder:"\u8BF7\u8F93\u5165\u5E8F\u53F7"},null,8,["modelValue"])]),_:1})]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[e.form.type===e.enums.ResourceTypeEnum.MENU.value?(s(),f(c,{key:0,label:"\u56FE\u6807"},{default:n(()=>[u(r,{modelValue:e.form.meta.icon,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.meta.icon=l),type:"ele"},null,8,["modelValue"])]),_:1})):y("",!0)]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[e.form.type===e.enums.ResourceTypeEnum.MENU.value?(s(),f(c,{key:0,prop:"code",label:"\u8DEF\u7531\u540D"},{default:n(()=>[u(m,{modelValue:e.form.meta.routeName,"onUpdate:modelValue":o[5]||(o[5]=l=>e.form.meta.routeName=l),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u540D\u79F0"},null,8,["modelValue"])]),_:1})):y("",!0)]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[e.form.type===e.enums.ResourceTypeEnum.MENU.value?(s(),f(c,{key:0,prop:"code",label:"\u7EC4\u4EF6"},{default:n(()=>[u(m,{modelValue:e.form.meta.component,"onUpdate:modelValue":o[6]||(o[6]=l=>e.form.meta.component=l),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u540D"},null,8,["modelValue"])]),_:1})):y("",!0)]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[e.form.type===e.enums.ResourceTypeEnum.MENU.value?(s(),f(c,{key:0,prop:"code",label:"\u662F\u5426\u7F13\u5B58"},{default:n(()=>[u(D,{modelValue:e.form.meta.isKeepAlive,"onUpdate:modelValue":o[7]||(o[7]=l=>e.form.meta.isKeepAlive=l),placeholder:"\u8BF7\u9009\u62E9",width:"w100"},{default:n(()=>[(s(!0),k(S,null,T(e.trueFalseOption,l=>(s(),f(I,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):y("",!0)]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[e.form.type===e.enums.ResourceTypeEnum.MENU.value?(s(),f(c,{key:0,prop:"code",label:"\u662F\u5426\u9690\u85CF"},{default:n(()=>[u(D,{modelValue:e.form.meta.isHide,"onUpdate:modelValue":o[8]||(o[8]=l=>e.form.meta.isHide=l),placeholder:"\u8BF7\u9009\u62E9",width:"w100"},{default:n(()=>[(s(!0),k(S,null,T(e.trueFalseOption,l=>(s(),f(I,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):y("",!0)]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[e.form.type===e.enums.ResourceTypeEnum.MENU.value?(s(),f(c,{key:0,prop:"code",label:"tag\u4E0D\u53EF\u5220\u9664"},{default:n(()=>[u(D,{modelValue:e.form.meta.isAffix,"onUpdate:modelValue":o[9]||(o[9]=l=>e.form.meta.isAffix=l),placeholder:"\u8BF7\u9009\u62E9",width:"w100"},{default:n(()=>[(s(!0),k(S,null,T(e.trueFalseOption,l=>(s(),f(I,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):y("",!0)]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[e.form.type===e.enums.ResourceTypeEnum.MENU.value?(s(),f(c,{key:0,prop:"code",label:"\u662F\u5426iframe"},{default:n(()=>[u(D,{onChange:e.changeIsIframe,modelValue:e.form.meta.isIframe,"onUpdate:modelValue":o[10]||(o[10]=l=>e.form.meta.isIframe=l),placeholder:"\u8BF7\u9009\u62E9",width:"w100"},{default:n(()=>[(s(!0),k(S,null,T(e.trueFalseOption,l=>(s(),f(I,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["onChange","modelValue"])]),_:1})):y("",!0)]),_:1}),u(a,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb10"},{default:n(()=>[e.form.type===e.enums.ResourceTypeEnum.MENU.value&&e.form.meta.isIframe?(s(),f(c,{key:0,prop:"code",label:"iframe\u5730\u5740",width:"w100"},{default:n(()=>[u(m,{modelValue:e.form.meta.link,"onUpdate:modelValue":o[11]||(o[11]=l=>e.form.meta.link=l),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165iframe url"},null,8,["modelValue"])]),_:1})):y("",!0)]),_:1})]),_:1})]),_:1},8,["model","rules"]),h("div",Ie,[u(V,{type:"primary",loading:e.btnLoading,onClick:e.btnOk},{default:n(()=>[De]),_:1},8,["loading","onClick"]),u(V,{onClick:o[12]||(o[12]=l=>e.cancel())},{default:n(()=>[Ve]),_:1})])]),_:1},8,["title","modelValue"])])}var Ce=O(he,[["render",ke]]);const we=J({name:"ResourceList",components:{ResourceEdit:Ce},setup(){const e=P({menuTypeValue:M.ResourceTypeEnum.MENU.value,permissionTypeValue:M.ResourceTypeEnum.PERMISSION.value,showBtns:!1,rightClickData:{},dialogForm:{title:"",visible:!1,data:{pid:0,type:1,weight:1},typeDisabled:!0},infoDialog:{title:"",visible:!1,data:{meta:{}}},data:[],props:{label:"name",children:"children"},defaultExpandedKeys:[]});j(()=>{o()});const o=async()=>{let r=await R.list.request(null);e.data=r},d=r=>{ae.confirm(`\u6B64\u64CD\u4F5C\u5C06\u5220\u9664 [${r.name}], \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{R.del.request({id:r.id}).then(t=>{console.log(t),z.success("\u5220\u9664\u6210\u529F\uFF01"),o()})})},b=r=>{let t=e.dialogForm;if(t.data={pid:0,type:1,weight:1},!r){t.typeDisabled=!0,t.data.type=e.menuTypeValue,t.title="\u6DFB\u52A0\u9876\u7EA7\u83DC\u5355",t.visible=!0;return}if(t.data.pid=r.id,t.title="\u6DFB\u52A0\u201C"+r.name+"\u201D\u7684\u5B50\u8D44\u6E90 ",r.children===null||r.children.length===0)t.typeDisabled=!1;else{t.typeDisabled=!0;let g=!1;for(let V of r.children)if(V.type===e.permissionTypeValue){g=!0;break}g?t.data.type=e.permissionTypeValue:t.data.type=e.menuTypeValue,t.data.weight=r.children.length+1}t.visible=!0},i=async r=>{e.dialogForm.visible=!0;const t=await R.detail.request({id:r.id});t.meta&&(t.meta=JSON.parse(t.meta)),e.dialogForm.data=t,e.dialogForm.typeDisabled=!0,e.dialogForm.title="\u4FEE\u6539\u201C"+r.name+"\u201D\u83DC\u5355"},C=()=>{o(),e.dialogForm.visible=!1},I=async(r,t)=>{await R.changeStatus.request({id:r.id,status:t}),r.status=t,z.success((t===1?"\u542F\u7528":"\u7981\u7528")+"\u6210\u529F\uFF01")},D=(r,t)=>{const g=t.data.id;e.defaultExpandedKeys.includes(g)||e.defaultExpandedKeys.push(g)},c=(r,t)=>{a(t.data.id);let g=t.childNodes;for(let V of g){if(V.data.type==2)return;V.expanded&&a(V.data.id),c(r,V)}},a=r=>{let t=e.defaultExpandedKeys.indexOf(r);t>-1&&e.defaultExpandedKeys.splice(t,1)},m=async r=>{let t=await R.detail.request({id:r.id});e.infoDialog.data=t,t.meta&&t.meta!=""&&(e.infoDialog.data.meta=JSON.parse(t.meta)),e.infoDialog.visible=!0};return U(B({},L(e)),{enums:M,deleteMenu:d,addResource:b,editResource:i,valChange:C,changeStatus:I,handleNodeExpand:D,handleNodeCollapse:c,info:m})}}),Be={class:"menu"},Se={class:"toolbar"},Te={style:{"font-size":"14px"}},_e=F("\u7EA2\u8272\u5B57\u4F53\u8868\u793A\u7981\u7528\u72B6\u6001"),Re=F("\u6DFB\u52A0"),Ae={class:"custom-tree-node"},Ne={key:0,style:{"font-size":"13px"}},Me=h("span",{style:{color:"#3c8dbc"}},"\u3010",-1),Ue=h("span",{style:{color:"#3c8dbc"}},"\u3011",-1),$e={key:1,style:{"font-size":"13px"}},Pe=h("span",{style:{color:"#3c8dbc"}},"\u3010",-1),Le=h("span",{style:{color:"#3c8dbc"}},"\u3011",-1);function ze(e,o,d,b,i,C){const I=p("SvgIcon"),D=p("el-button"),c=p("el-tag"),a=p("el-link"),m=p("el-tree"),r=p("ResourceEdit"),t=p("el-descriptions-item"),g=p("el-descriptions"),V=p("el-dialog"),v=ne("auth");return s(),k("div",Be,[h("div",Se,[h("div",null,[h("span",Te,[u(I,{name:"info-filled"}),_e])]),w((s(),f(D,{type:"primary",icon:"plus",onClick:o[0]||(o[0]=l=>e.addResource(!1))},{default:n(()=>[Re]),_:1})),[[v,"resource:add"]])]),u(m,{class:"none-select",indent:38,"node-key":"id",props:e.props,data:e.data,onNodeExpand:e.handleNodeExpand,onNodeCollapse:e.handleNodeCollapse,"default-expanded-keys":e.defaultExpandedKeys,"expand-on-click-node":!1},{default:n(({data:l})=>[h("span",Ae,[l.type===e.enums.ResourceTypeEnum.MENU.value?(s(),k("span",Ne,[Me,F(" "+E(l.name)+" ",1),Ue,l.children!==null?(s(),f(c,{key:0,size:"small"},{default:n(()=>[F(E(l.children.length),1)]),_:2},1024)):y("",!0)])):y("",!0),l.type===e.enums.ResourceTypeEnum.PERMISSION.value?(s(),k("span",$e,[Pe,h("span",{style:te(l.status==1?"color: #67c23a;":"color: #f67c6c;")},E(l.name),5),Le])):y("",!0),u(a,{onClick:_(A=>e.info(l),["prevent"]),style:{"margin-left":"25px"},icon:"view",type:"info",underline:!1},null,8,["onClick"]),w(u(a,{onClick:_(A=>e.editResource(l),["prevent"]),class:"ml5",type:"primary",icon:"edit",underline:!1},null,8,["onClick"]),[[v,"resource:update"]]),l.type===e.enums.ResourceTypeEnum.MENU.value?w((s(),f(a,{key:2,onClick:_(A=>e.addResource(l),["prevent"]),icon:"circle-plus",underline:!1,type:"success",class:"ml5"},null,8,["onClick"])),[[v,"resource:add"]]):y("",!0),l.status===1&&l.type===e.enums.ResourceTypeEnum.PERMISSION.value?w((s(),f(a,{key:3,onClick:_(A=>e.changeStatus(l,-1),["prevent"]),icon:"circle-close",underline:!1,type:"warning",class:"ml5"},null,8,["onClick"])),[[v,"resource:changeStatus"]]):y("",!0),l.status===-1&&l.type===e.enums.ResourceTypeEnum.PERMISSION.value?w((s(),f(a,{key:4,onClick:_(A=>e.changeStatus(l,1),["prevent"]),type:"success",icon:"circle-check",underline:!1,plain:"",class:"ml5"},null,8,["onClick"])),[[v,"resource:changeStatus"]]):y("",!0),l.children==null&&l.name!=="\u9996\u9875"?w((s(),f(a,{key:5,onClick:_(A=>e.deleteMenu(l),["prevent"]),type:"danger",icon:"delete",underline:!1,plain:"",class:"ml5"},null,8,["onClick"])),[[v,"resource:del"]]):y("",!0)])]),_:1},8,["props","data","onNodeExpand","onNodeCollapse","default-expanded-keys"]),u(r,{title:e.dialogForm.title,visible:e.dialogForm.visible,"onUpdate:visible":o[1]||(o[1]=l=>e.dialogForm.visible=l),data:e.dialogForm.data,"onUpdate:data":o[2]||(o[2]=l=>e.dialogForm.data=l),typeDisabled:e.dialogForm.typeDisabled,departTree:e.data,type:e.dialogForm.type,onValChange:e.valChange},null,8,["title","visible","data","typeDisabled","departTree","type","onValChange"]),u(V,{modelValue:e.infoDialog.visible,"onUpdate:modelValue":o[3]||(o[3]=l=>e.infoDialog.visible=l)},{default:n(()=>[u(g,{title:"\u8D44\u6E90\u4FE1\u606F",column:2,border:""},{default:n(()=>[u(t,{label:"\u7C7B\u578B"},{default:n(()=>[u(c,{size:"small"},{default:n(()=>[F(E(e.enums.ResourceTypeEnum.getLabelByValue(e.infoDialog.data.type)),1)]),_:1})]),_:1}),u(t,{label:"\u540D\u79F0"},{default:n(()=>[F(E(e.infoDialog.data.name),1)]),_:1}),u(t,{label:"code[\u83DC\u5355path]"},{default:n(()=>[F(E(e.infoDialog.data.code),1)]),_:1}),u(t,{label:"\u5E8F\u53F7"},{default:n(()=>[F(E(e.infoDialog.data.weight),1)]),_:1}),e.infoDialog.data.type==e.menuTypeValue?(s(),f(t,{key:0,label:"\u8DEF\u7531\u540D"},{default:n(()=>[F(E(e.infoDialog.data.meta.routeName),1)]),_:1})):y("",!0),e.infoDialog.data.type==e.menuTypeValue?(s(),f(t,{key:1,label:"\u7EC4\u4EF6"},{default:n(()=>[F(E(e.infoDialog.data.meta.component),1)]),_:1})):y("",!0),e.infoDialog.data.type==e.menuTypeValue?(s(),f(t,{key:2,label:"\u662F\u5426\u7F13\u5B58"},{default:n(()=>[F(E(e.infoDialog.data.meta.isKeepAlive?"\u662F":"\u5426"),1)]),_:1})):y("",!0),e.infoDialog.data.type==e.menuTypeValue?(s(),f(t,{key:3,label:"\u662F\u5426\u9690\u85CF"},{default:n(()=>[F(E(e.infoDialog.data.meta.isHide?"\u662F":"\u5426"),1)]),_:1})):y("",!0),e.infoDialog.data.type==e.menuTypeValue?(s(),f(t,{key:4,label:"tag\u4E0D\u53EF\u5220\u9664"},{default:n(()=>[F(E(e.infoDialog.data.meta.isAffix?"\u662F":"\u5426"),1)]),_:1})):y("",!0),e.infoDialog.data.type==e.menuTypeValue?(s(),f(t,{key:5,label:"\u662F\u5426iframe"},{default:n(()=>[F(E(e.infoDialog.data.meta.isIframe?"\u662F":"\u5426"),1)]),_:1})):y("",!0),e.infoDialog.data.type==e.menuTypeValue&&e.infoDialog.data.meta.isIframe?(s(),f(t,{key:6,label:"iframe url"},{default:n(()=>[F(E(e.infoDialog.data.meta.link),1)]),_:1})):y("",!0),u(t,{label:"\u521B\u5EFA\u8005"},{default:n(()=>[F(E(e.infoDialog.data.creator),1)]),_:1}),u(t,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:n(()=>[F(E(e.$filters.dateFormat(e.infoDialog.data.createTime)),1)]),_:1}),u(t,{label:"\u4FEE\u6539\u8005"},{default:n(()=>[F(E(e.infoDialog.data.modifier),1)]),_:1}),u(t,{label:"\u66F4\u65B0\u65F6\u95F4"},{default:n(()=>[F(E(e.$filters.dateFormat(e.infoDialog.data.updateTime)),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var Qe=O(we,[["render",ze]]);export{Qe as default};