const md5 = require("blueimp-md5");

let headers = {
  Host: "xcx.xybsyw.com",
  Connection: "keep-alive",
  "User-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
  "Accept-Encoding": "gzip, deflate, br, zstd",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
  "content-type": "application/x-www-form-urlencoded",
  v: "1.6.36"
};

// ====== 网页上源码 ======
const d = new RegExp("[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]");
const m = (e) => {
  let t = [
      "`",
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "+",
      "=",
      "|",
      "{",
      "}",
      "'",
      ":",
      ";",
      "'",
      ",",
      "[",
      "]",
      ".",
      "<",
      ">",
      "/",
      "?",
      "~",
      "！",
      "@",
      "#",
      "￥",
      "%",
      "…",
      "…",
      "&",
      "*",
      "（",
      "）",
      "—",
      "—",
      "+",
      "|",
      "{",
      "}",
      "【",
      "】",
      "‘",
      "；",
      "：",
      "”",
      "“",
      "’",
      "。",
      "，",
      "、",
      "？",
      '"'
    ],
    n = [
      "content",
      "practicePurpose",
      "practiceContent",
      "practiceRequirement",
      "otherRequirement",
      "practiceDescript",
      "securityBook",
      "responsibilities",
      "selfAppraisal",
      "file",
      "image",
      "images"
    ];
  for (var a in e) {
    let o = e[a] + "";
    o &&
      o.split("").some((e, o) => {
        if (t.indexOf(e) > -1) return -1 == n.indexOf(a) && n.push(a), !0;
      });
  }
  return n;
};
const A = () => {
  let e = [
    "front/enterprise/loadEnterprise.action",
    "front/post/EnterprisePostLoad.action",
    "helpcenter/video/VideoPlayAuth.action",
    "login/teacher/sendMobileOrEmailCode.action",
    "login/student/sendMobileCode.action"
  ];
  return e;
};
const g = (e) => {
  if (void 0 == e) return {};
  for (var t = Object.keys(e).sort(), n = {}, a = 0; a < t.length; a++) n[t[a]] = e[t[a]];
  return n;
};
const h = (e, t) => {
  var n,
    a,
    o = e.slice(0),
    i = e.length,
    r = i - t;
  while (i-- > r) (a = Math.floor((i + 1) * Math.random())), (n = o[a]), (o[a] = o[i]), (o[i] = n);
  return o.slice(r);
};
const b = (e, t) => {
  let n = [
      "5",
      "b",
      "f",
      "A",
      "J",
      "Q",
      "g",
      "a",
      "l",
      "p",
      "s",
      "q",
      "H",
      "4",
      "L",
      "Q",
      "g",
      "1",
      "6",
      "Q",
      "Z",
      "v",
      "w",
      "b",
      "c",
      "e",
      "2",
      "2",
      "m",
      "l",
      "E",
      "g",
      "G",
      "H",
      "I",
      "r",
      "o",
      "s",
      "d",
      "5",
      "7",
      "x",
      "t",
      "J",
      "S",
      "T",
      "F",
      "v",
      "w",
      "4",
      "8",
      "9",
      "0",
      "K",
      "E",
      "3",
      "4",
      "0",
      "m",
      "r",
      "i",
      "n"
    ],
    a = [];
  for (let u = 0; u < 62; u++) a.push(u + "");
  let o = Math.round(new Date().getTime() / 1e3),
    i = h(a, 20),
    r = "";
  i.forEach((e, t) => {
    r += n[e];
  });
  let c = g(e);
  var s = "";
  for (var l in c)
    -1 != m(e).indexOf(l) || d.test(c[l]) || (null != c[l] && "" !== c[l] && '""' !== c[l] && (s += c[l]));
  return (
    (s += o),
    (s += r),
    (s = s.replace(/\s+/g, "")),
    (s = s.replace(/\n+/g, "")),
    (s = s.replace(/\r+/g, "")),
    (s = s.replace(/</g, "")),
    (s = s.replace(/>/g, "")),
    (s = s.replace(/&/g, "")),
    (s = s.replace(/-/g, "")),
    (s = s.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "")),
    (s = encodeURIComponent(s)),
    (s = md5(s)),
    {
      md5: s,
      tstr: o,
      iArrStr: i && i.length > 0 ? i.join("_") : ""
    }
  );
};
const f = (e, t) => {
  if (!e) return;
  let n = [
      "5",
      "b",
      "f",
      "A",
      "J",
      "Q",
      "g",
      "a",
      "l",
      "p",
      "s",
      "q",
      "H",
      "4",
      "L",
      "Q",
      "g",
      "1",
      "6",
      "Q",
      "Z",
      "v",
      "w",
      "b",
      "c",
      "e",
      "2",
      "2",
      "m",
      "l",
      "E",
      "g",
      "G",
      "H",
      "I",
      "r",
      "o",
      "s",
      "d",
      "5",
      "7",
      "x",
      "t",
      "J",
      "S",
      "T",
      "F",
      "v",
      "w",
      "4",
      "8",
      "9",
      "0",
      "K",
      "E",
      "3",
      "4",
      "0",
      "m",
      "r",
      "i",
      "n"
    ],
    a = e.t,
    o = e.s.split("_"),
    i = "";
  o.forEach((e, t) => {
    i += n[e];
  });
  var r = "";
  return (
    (r += a),
    (r += i),
    (r = r.replace(/\s+/g, "")),
    (r = r.replace(/\n+/g, "")),
    (r = r.replace(/\r+/g, "")),
    (r = r.replace(/</g, "")),
    (r = r.replace(/>/g, "")),
    (r = r.replace(/&/g, "")),
    (r = r.replace(/-/g, "")),
    (r = r.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "")),
    (r = encodeURIComponent(r)),
    (r = md5(r)),
    r == e.m
  );
};
var M = {
  getTokenData: b,
  checkToken: f,
  nocheckArrs: m,
  checkUrl: A
};

const getHeaders = (url, data) => {
  let n = M.nocheckArrs(data).join(","),
    a = M.getTokenData(data, url);
  M.checkUrl();
  (headers.n = n), (headers.m = a.md5), (headers.t = a.tstr), (headers.s = a.iArrStr);
  return headers;
};

// ======================

/* 
// 测试
const url = "https://xcx.xybsyw.com/client/alumni/AlumniView.action";
console.log(
  getHeaders(url, {
    page: 1,
    pageSize: 15,
    type: 0
  })
);
*/

module.exports = { getHeaders };
