(()=>{var t={387:function(t){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(r,n,i){var s,u=function(t,r,n){void 0===n&&(n={});var i=new Date(t),s=function(t,r){void 0===r&&(r={});var n=r.timeZoneName||"short",i=t+"|"+n,s=e[i];return s||(s=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),e[i]=s),s}(r,n);return s.formatToParts(i)},a=function(e,r){for(var n=u(e,r),s=[],a=0;a<n.length;a+=1){var o=n[a],c=o.type,f=o.value,h=t[c];h>=0&&(s[h]=parseInt(f,10))}var l=s[3],d=24===l?0:l,$=s[0]+"-"+s[1]+"-"+s[2]+" "+d+":"+s[4]+":"+s[5]+":000",m=+e;return(i.utc($).valueOf()-(m-=m%1e3))/6e4},o=n.prototype;o.tz=function(t,e){void 0===t&&(t=s);var r=this.utcOffset(),n=this.toDate(),u=n.toLocaleString("en-US",{timeZone:t}),a=Math.round((n-new Date(u))/1e3/60),o=i(u,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(n.getTimezoneOffset()/15)-a,!0);if(e){var c=o.utcOffset();o=o.add(r-c,"minute")}return o.$x.$timezone=t,o},o.offsetName=function(t){var e=this.$x.$timezone||i.tz.guess(),r=u(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var c=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return c.call(this,t,e);var r=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(r,t,e).tz(this.$x.$timezone,!0)},i.tz=function(t,e,r){var n=r&&e,u=r||e||s,o=a(+i(),u);if("string"!=typeof t)return i(t).tz(u);var c=function(t,e,r){var n=t-60*e*1e3,i=a(n,r);if(e===i)return[n,e];var s=a(n-=60*(i-e)*1e3,r);return i===s?[n,i]:[t-60*Math.min(i,s)*1e3,Math.max(i,s)]}(i.utc(t,n).valueOf(),o,u),f=c[0],h=c[1],l=i(f).utcOffset(h);return l.$x.$timezone=u,l},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(t){s=t}}}()},178:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g;return function(n,i,s){var u=i.prototype;s.utc=function(t){return new i({date:t,utc:!0,args:arguments})},u.utc=function(e){var r=s(this.toDate(),{locale:this.$L,utc:!0});return e?r.add(this.utcOffset(),t):r},u.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var a=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var o=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else o.call(this)};var c=u.utcOffset;u.utcOffset=function(n,i){var s=this.$utils().u;if(s(n))return this.$u?0:s(this.$offset)?c.call(this):this.$offset;if("string"==typeof n&&(n=function(t){void 0===t&&(t="");var n=t.match(e);if(!n)return null;var i=(""+n[0]).match(r)||["-",0,0],s=i[0],u=60*+i[1]+ +i[2];return 0===u?0:"+"===s?u:-u}(n),null===n))return this;var u=Math.abs(n)<=16?60*n:n,a=this;if(i)return a.$offset=u,a.$u=0===n,a;if(0!==n){var o=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(u+o,t)).$offset=u,a.$x.$localOffset=o}else a=this.utc();return a};var f=u.format;u.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,e)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var h=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var l=u.diff;u.diff=function(t,e,r){if(t&&this.$u===t.$u)return l.call(this,t,e,r);var n=this.local(),i=s(t).local();return l.call(n,i,e,r)}}}()}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",l="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;const v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}};var M=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t};const g={s:M,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+M(n,2,"0")+":"+M(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),s=r-i<0,u=e.clone().add(n+(s?-1:1),c);return+(-(n+(r-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:l,h:u,m:s,s:i,ms:n,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};var y="en",D={};D[y]=v;var S="$isDayjsObject",p=function(t){return t instanceof w||!(!t||!t[S])},O=function t(e,r,n){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),r&&(D[s]=r,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!n&&i&&(y=i),i||!n&&y},b=function(t,e){if(p(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new w(r)},T=g;T.l=O,T.i=p,T.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function r(t){this.$L=O(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[S]=!0}var v=r.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(T.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return T},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,e){var r=b(t);return this.startOf(e)<=r&&r<=this.endOf(e)},v.isAfter=function(t,e){return b(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<b(t)},v.$g=function(t,e,r){return T.u(t)?this[e]:this.set(r,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var r=this,n=!!T.u(e)||e,f=T.p(t),d=function(t,e){var i=T.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(a)},$=function(t,e){return T.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,v=this.$M,M=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case h:return n?d(1,0):d(31,11);case c:return n?d(1,v):d(0,v+1);case o:var y=this.$locale().weekStart||0,D=(m<y?m+7:m)-y;return d(n?M-D:M+(6-D),v);case a:case l:return $(g+"Hours",0);case u:return $(g+"Minutes",1);case s:return $(g+"Seconds",2);case i:return $(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var r,o=T.p(t),f="set"+(this.$u?"UTC":""),d=(r={},r[a]=f+"Date",r[l]=f+"Date",r[c]=f+"Month",r[h]=f+"FullYear",r[u]=f+"Hours",r[s]=f+"Minutes",r[i]=f+"Seconds",r[n]=f+"Milliseconds",r)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var m=this.clone().set(l,1);m.$d[d]($),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[T.p(t)]()},v.add=function(r,n){var f,l=this;r=Number(r);var d=T.p(n),$=function(t){var e=b(l);return T.w(e.date(e.date()+Math.round(t*r)),l)};if(d===c)return this.set(c,this.$M+r);if(d===h)return this.set(h,this.$y+r);if(d===a)return $(1);if(d===o)return $(7);var m=(f={},f[s]=t,f[u]=e,f[i]=1e3,f)[d]||1,v=this.$d.getTime()+r*m;return T.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=T.z(this),s=this.$H,u=this.$m,a=this.$M,o=r.weekdays,c=r.months,f=r.meridiem,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].slice(0,s)},l=function(t){return T.s(s%12||12,t,"0")},$=f||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return T.s(e.$y,4,"0");case"M":return a+1;case"MM":return T.s(a+1,2,"0");case"MMM":return h(r.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return T.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(r.weekdaysMin,e.$W,o,2);case"ddd":return h(r.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return T.s(s,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return T.s(u,2,"0");case"s":return String(e.$s);case"ss":return T.s(e.$s,2,"0");case"SSS":return T.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,n,l){var d,$=this,m=T.p(n),v=b(r),M=(v.utcOffset()-this.utcOffset())*t,g=this-v,y=function(){return T.m($,v)};switch(m){case h:d=y()/12;break;case c:d=y();break;case f:d=y()/3;break;case o:d=(g-M)/6048e5;break;case a:d=(g-M)/864e5;break;case u:d=g/e;break;case s:d=g/t;break;case i:d=g/1e3;break;default:d=g}return l?d:T.a(d)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return D[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=O(t,e,!0);return n&&(r.$L=n),r},v.clone=function(){return T.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},r}(),k=w.prototype;b.prototype=k,[["$ms",n],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",l]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,w,b),t.$i=!0),b},b.locale=O,b.isDayjs=p,b.unix=function(t){return b(1e3*t)},b.en=D[y],b.Ls=D,b.p={};const H=b,x=r(178),Y=r(387);H.extend(x),H.extend(Y);let z=H.tz.guess(),L=H.tz(H.utc(),z);function C(){L=H.tz(H.utc(),z),function(){let t;switch(L.day()){case 0:t="Sun";break;case 1:t="Mon";break;case 2:t="Tue";break;case 3:t="Wed";break;case 4:t="Thur";break;case 5:t="Fri";break;case 6:t="Sat"}document.querySelector("#day").innerHTML=t}(),function(){let t;switch(L.month()){case 0:t="Jan";break;case 1:t="Feb";break;case 2:t="Mar";break;case 3:t="Apr";break;case 4:t="May";break;case 5:t="Jun";break;case 6:t="Jul";break;case 7:t="Aug";break;case 8:t="Sept";break;case 9:t="Oct";break;case 10:t="Nov";break;case 11:t="Dec";break;default:t="Err"}document.querySelector("#month").innerHTML=t}(),function(){let t=`${L.date()}`;document.querySelector("#date").innerHTML=t}(),function(){let t=`${L.year()}`;document.querySelector("#year").innerHTML=t}(),function(){let t;0===L.hour()||12===L.hour()?t="12":L.hour()<12?t=`${L.hour()}`:L.hour()>12&&(t=""+(L.hour()-12)),document.querySelector("#hour").innerHTML=t}(),function(){let t=`${L.minute()}`;t.length<2&&(t="0"+t),document.querySelector("#minute").innerHTML=t}(),function(){let t;t=L.hour()<12?"AM":"PM",document.querySelector("#am-pm").innerHTML=t}()}C(),setInterval((()=>C()),250),document.querySelector("#timezone").innerHTML=`${z}`})()})();