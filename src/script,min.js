window.ProtectImageJS=new Object,window.ProtectImageJS.init=function(){function e(e){e.preventDefault(),e.stopPropagation()}var t=document.getElementsByTagName("img"),n=t.length;for(let r=0;r<n;r++){var o=t[r];if(o.hasAttribute("protected")){var a=document.createElement("canvas");a.width=o.width,a.height=o.height,a.getContext("2d").drawImage(o,0,0),o.parentNode.insertBefore(a,o),o.src="",a.addEventListener("contextmenu",e),a.cssText=document.defaultView.getComputedStyle(o).cssText}}},window.ProtectImageJS.selective=function(e){function t(e){e.preventDefault(),e.stopPropagation()}var n=e.length;for(let r=0;r<n;r++){var o=e[r],a=document.createElement("canvas");a.width=o.width,a.height=o.height,a.getContext("2d").drawImage(o,0,0),o.parentNode.insertBefore(a,o),o.src="",a.addEventListener("contextmenu",t),a.cssText=document.defaultView.getComputedStyle(o).cssText}};
