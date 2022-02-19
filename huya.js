
  function gt(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      s.enumerable = s.enumerable || !1,
      s.configurable = !0,
      "value"in s && (s.writable = !0),
      Object.defineProperty(t, s.key, s)
    }
  }

var St = function () {
  function t(e) {
  }
  var a;
  var e = t;
  var s = [
    {
    key: "_loadVPlayerUI",
    value: function() {
        var t = this;
        if (!this.isUILoaded) {
            this.isUILoaded = !0;
            var e = Date.now();
            $.ajax({
                url: S.H5ROOT + "vplayerUI.js",
                dataType: "script",
                cache: !0,
                success: function() {
                    var i = Date.now();
                    v.log("vplayerUI loaded in " + (i - e) + "ms");
                    try {
                        S.vplayerUI = t.vplayerUI = new VPlayerUI(t,2202141108)
                    } catch (t) {
                        v.error("vplayerUI init error", t)
                    }
                }
                .bind(this)
            })
        }
      },
    },
    {
    key: "checkLogin",
    value: function(t) {
        S.isLogin != t && (S.isLogin = t,
        S.isLogin || S.resetLoginStatus())
      }
    }];
  gt(e.prototype, s)
  return t
}();

function a() {}
a.prototype.on = function(t, e, i) {
    var a, r;
    if (!e)
        return this;
    for (a = this.__events || (this.__events = {}),
    t = t.split(s); r = t.shift(); )
        (a[r] || (a[r] = [])).push(e, i);
    return this
}
,
a.prototype.once = function(t, e, i) {
    var s = this;
    return this.on(t, (function a() {
        s.off(t, a),
        e.apply(i || s, arguments)
    }
    ), i)
}
,
a.prototype.off = function(t, e, i) {
    var a, n, o, h;
    if (!(a = this.__events))
        return this;
    if (!(t || e || i))
        return delete this.__events,
        this;
    for (t = t ? t.split(s) : r(a); n = t.shift(); )
        if (o = a[n])
            if (e || i)
                for (h = o.length - 2; h >= 0; h -= 2)
                    e && o[h] !== e || i && o[h + 1] !== i || o.splice(h, 2);
            else
                delete a[n];
    return this
}
,
a.prototype.trigger = function(t) {
    var e, i, a, r, o, h, u = [], l = !0;
    if (!(e = this.__events))
        return this;
    for (t = t.split(s),
    o = 1,
    h = arguments.length; o < h; o++)
        u[o - 1] = arguments[o];
    for (; i = t.shift(); )
        (a = e.all) && (a = a.slice()),
        (r = e[i]) && (r = r.slice()),
        "all" !== i && (l = n(r, u, this) && l),
        l = n(a, [i].concat(u), this) && l;
    return l
}
,
a.prototype.emit = a.prototype.trigger;
a.mixTo = function(t) {
  var e;
  e = t,
  t = "[object Function]" === Object.prototype.toString.call(e) ? t.prototype : t;
  var i = a.prototype
    , s = new a;
  !function(t, e) {
      if (t.forEach)
          return t.forEach(e);
      for (var i = 0, s = t.length; i < s; i += 1)
          e(t[i], i, t)
  }(Object.keys(i), (function(e) {
      t[e] = function() {
          return i[e].apply(s, Array.prototype.slice.call(arguments)),
          this
      }
  }
  ))
}

a.mixTo(St);
window.VPlayer = St

var eight = function (e, n, t) {
  "use strict";
  var o = [].slice
    , c = function(e) {
      return "function" == typeof e
  }
    , a = function(e) {
      return "string" == typeof e
  };
  function i() {
      return {
          fired: !1,
          data: [],
          callbacks: new $.Callbacks
      }
  }
  n.a = function() {
      var e = {};
      function n(n, t, o) {
          if (!a(n) || !c(t))
              return this;
          var r = e[n] || (e[n] = new i);
          return r.callbacks.add(t),
          o && r.fired && t.apply(this, r.data),
          this
      }
      function t(n, t) {
          var o = arguments.length;
          if (0 === o)
              for (var i in e)
                  e.hasOwnProperty(i) && e[i].callbacks.empty();
          else if (a(n)) {
              var r = e[n];
              r && (1 === o ? r.callbacks.empty() : c(t) && r.callbacks.remove(t))
          }
          return this
      }
      return {
          on: n,
          one: function(e, o, i) {
              if (!a(e) || !c(o))
                  return this;
              n(e, (function n() {
                  o.apply(this, arguments),
                  t(e, n)
              }
              ), i)
          },
          off: t,
          emit: function n(t) {
              if (!a(t))
                  return this;
              var c = e[t] || (e[t] = new i);
              return c.fired = !0,
              c.data = o.call(arguments, 1),
              c.callbacks.fireWith(this, c.data),
              "ALL" !== t && n.apply(this, ["ALL"].concat(o.call(arguments))),
              this
          }
      }
  }
}

h = function(e) {
  var n = hyPlayerConfig.vappid;
  "2" == i.default.liveSourceType && (n = 10507);
  var t = f.a.parseQueryString(location.search)
    , o = "";
  try {
      o = sessionStorage.getItem("ya_eid")
  } catch (e) {
      o = f.a.getCookieVal("ya_eid")
  }
  var c = [];
  try {
      c = JSON.parse(localStorage.getItem("TT_LIVE_STREAM_ORIGIN")) || []
  } catch (e) {}
  var a = [];
  if (c.length) {
      var u = (new Date).getTime() / 1e3;
      c.forEach((function(e) {
          e && e.data && e.data.uid == r.default.lp && e.expire > u && (a = e.data.domain_list)
      }
      ))
  }
  var d = {
      chTopId: i.default.id,
      subChId: i.default.sid,
      pyyid: r.default.yyid,
      profileRoom: i.default.profileRoom,
      pnick: r.default.nick,
      freezeLevel: r.default.freezeLevel,
      deleteOriginalPainting: s.a.deleteOriginalPainting,
      h5gopChannel: s.a.h5gopChannel,
      eu: r.default.lp,
      rso: t.promoter || t.rso || f.a.getCookieVal("ya_rso") || "",
      rso_desc: t.rso_desc || "",
      from: t.from || "",
      vappid: n,
      stream: hyPlayerConfig.stream,
      domain_list: a,
      gameId: i.default.gid,
      screenType: i.default.screenType,
      hasMoments: "NORMAL" === i.default.type || "STAR" === i.default.type ? 1 : 0,
      furl: encodeURIComponent(document.referrer),
      ref: o,
      iSourceType: i.default.liveSourceType,
      avatarImg: r.default.avatar,
      cfg: s.a,
      conf: l.a,
      isShowMmsProgramList: i.default.isShowMmsProgramList,
      isUnion: !!f.a.getCookieVal("promoter"),
      isPayRoom: i.default.isPayRoom,
      isSecret: i.default.isSecret,
      roomPayPassword: i.default.roomPayPassword,
      isForeign: TT.isForeign,
      roomInfo: i.default,
      profileInfo: r.default,
      profileP2POpt: window.TT_PROFILE_P2P_OPT
  };
  t.share_by && t.share_fm && (d.platform = {
      weixin: 2,
      pengyouquan: 1,
      weibo: 3,
      qq: 4,
      kongjian: 5,
      tieba: 6,
      lianjie: 7
  }[t.share_fm] || 7,
  d.platform = "share-" + d.platform),
  i.default.isReplay && $.extend(d, {
      replay: 1,
      isEu: !1,
      doJoin: 0
  }),
  $("#liveRoomObj").html('<div id="videoContainer" style="position: relative;"></div>');
  var m = window.TT_LIVE_TIMING || {};
  m.playerInitBefore = (new Date).getTime();
  var h = new VPlayer($.extend({
      idDom: "#videoContainer",
      register: function(n) {
          e.emit("reg", n)
      }
  }, d));
  m.playerInitAfter = (new Date).getTime(),
  e.emit("initComplete", h)
}

h(eight.a)
