import{aw as e,ax as s}from"./index.js?v=1723125373998";const{t:t}=e.global,a=e=>s.post("/files?action=GetDir",e),i=e=>s.post("/files?action=GetDir",{...e,disk:!0}),o=e=>s.post("/files?action=DeleteFile",e,{requestOptions:{loading:t("WP.api.tamper_8"),successMessage:!0}}),l=()=>s.post("/files?action=Get_Recycle_bin"),n=e=>s.post("/files?action=GetFileBody",e),p=e=>s.post("/files?action=SaveFileBody",e,{requestOptions:{loading:t("Site.Api.Index_2"),errorMessage:{close:!0}}}),c=(e,t)=>s.post("/files?action=upload",e,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:e=>{null==t||t(e)}}),r=e=>s.post("/files?action=DeleteFile",e,{requestOptions:{loading:"Deleting file, please wait...",successMessage:!0}});export{o as a,a as b,l as c,r as d,i as e,n as g,p as s,c as u};