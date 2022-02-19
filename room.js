!function(e) {
  function n(n) {
      for (var t, o, a = n[0], i = n[1], r = 0, u = []; r < a.length; r++)
          o = a[r],
          Object.prototype.hasOwnProperty.call(c, o) && c[o] && u.push(c[o][0]),
          c[o] = 0;
      for (t in i)
          Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
      for (s && s(n); u.length; )
          u.shift()()
  }
  var t = {}
    , o = {
      270: 0,
      11: 0,
      14: 0,
      16: 0,
      33: 0,
      89: 0,
      286: 0,
      312: 0,
      457: 0,
      459: 0
  }
    , c = {
      270: 0,
      11: 0,
      14: 0,
      16: 0,
      33: 0,
      89: 0,
      286: 0,
      312: 0,
      457: 0,
      459: 0
  };
  function a(n) {
      if (t[n])
          return t[n].exports;
      var o = t[n] = {
          i: n,
          l: !1,
          exports: {}
      };
      return e[n].call(o.exports, o, o.exports, a),
      o.l = !0,
      o.exports
  }
  a.e = function(e) {
      var n = [];
      o[e] ? n.push(o[e]) : 0 !== o[e] && {
          10: 1,
          80: 1,
          82: 1,
          83: 1,
          96: 1,
          97: 1,
          118: 1,
          119: 1,
          121: 1,
          182: 1,
          184: 1,
          186: 1,
          188: 1,
          189: 1,
          194: 1,
          213: 1,
          235: 1,
          238: 1,
          243: 1,
          246: 1,
          247: 1,
          250: 1,
          251: 1,
          252: 1,
          253: 1,
          254: 1,
          255: 1,
          280: 1,
          322: 1,
          333: 1,
          336: 1,
          342: 1,
          359: 1,
          366: 1,
          368: 1,
          369: 1,
          371: 1,
          372: 1,
          373: 1,
          375: 1,
          377: 1,
          383: 1,
          395: 1,
          420: 1,
          447: 1,
          463: 1,
          464: 1,
          466: 1,
          477: 1,
          482: 1,
          484: 1,
          485: 1,
          487: 1,
          491: 1,
          493: 1,
          494: 1,
          495: 1,
          499: 1,
          501: 1,
          502: 1,
          503: 1,
          504: 1,
          513: 1
      }[e] && n.push(o[e] = new Promise((function(n, t) {
          for (var c = ({
              0: "node_modules/@huyafed/lib-loader/chunk",
              1: "assets/modules/lib-loader/chunk",
              2: "assets/modules/ya-report/chunk",
              3: "node_modules/object-assign/chunk",
              4: "node_modules/react-dom/chunk",
              5: "node_modules/react/chunk",
              6: "node_modules/scheduler/chunk",
              7: "node_modules/css-loader/chunk",
              8: "node_modules/classnames/chunk",
              9: "node_modules/style-loader/chunk",
              10: "widget/dialog/chunk",
              11: "node_modules/tslib/chunk",
              12: "assets/modules/customReactHooks/chunk",
              13: "assets/modules/conf/chunk",
              14: "assets/modules/tools/chunk",
              15: "node_modules/process/chunk",
              16: "assets/modules/Event/chunk",
              18: "assets/modules/react-dom/chunk",
              19: "assets/modules/react/chunk",
              20: "assets/modules/roomShield/chunk",
              21: "assets/modules/formatNumber/chunk",
              22: "assets/modules/emoticon/chunk",
              23: "assets/modules/sidebar/chunk",
              24: "components/message/chunk",
              25: "components/message/icon/chunk",
              26: "widget/sidebar/chunk",
              27: "assets/modules/follow/chunk",
              28: "assets/modules/followList/chunk",
              29: "node_modules/hoist-non-react-statics/chunk",
              30: "node_modules/react-is/chunk",
              31: "assets/lib/scrollpane.js",
              32: "node_modules/@huyafed/emoticon-parser/chunk",
              34: "assets/modules/chat/chunk",
              35: "assets/modules/fansBadge/NormalFansBadge/chunk",
              36: "assets/modules/chatPanelFilter/chunk",
              37: "assets/modules/roomCustomBadge/chunk",
              38: "node_modules/@emotion/is-prop-valid/chunk",
              39: "node_modules/@emotion/memoize/chunk",
              40: "node_modules/@emotion/stylis/chunk",
              41: "node_modules/@emotion/unitless/chunk",
              42: "node_modules/@huyafed/custom-badge/chunk",
              43: "node_modules/shallowequal/chunk",
              44: "node_modules/styled-components/chunk",
              45: "assets/modules/fansBadge/TrialFansBadge/chunk",
              46: "assets/modules/fansBadge/chunk",
              47: "assets/modules/loadZipFile/chunk",
              48: "assets/modules/roomEmoticon/chunk",
              49: "components/MmdModal/chunk",
              50: "components/MmdModal/img/chunk",
              55: "node_modules/base64-js/chunk",
              56: "node_modules/buffer/chunk",
              58: "node_modules/ieee754/chunk",
              59: "node_modules/isarray/chunk",
              60: "node_modules/jszip-utils/chunk",
              61: "node_modules/jszip/chunk",
              62: "node_modules/setimmediate/chunk",
              63: "node_modules/timers-browserify/chunk",
              65: "assets/modules/auditor/chunk",
              66: "components/Avatar/chunk",
              67: "components/MmdPanel/chunk",
              68: "components/RoomChatPanelPortal/chunk",
              69: "assets/modules/BlockWords/chunk",
              71: "assets/modules/momentVideoList/chunk",
              72: "assets/modules/roomBlockWords/chunk",
              73: "assets/modules/roomEmoticon/emoticonGamble/chunk",
              74: "assets/modules/roomMounts/chunk",
              75: "assets/modules/teamMedal/chunk",
              76: "assets/modules/topUp/chunk",
              77: "components/MmdForm/chunk",
              78: "components/MmdForm/img/chunk",
              79: "components/PortalGlobal/chunk",
              80: "components/popup/chunk",
              81: "node_modules/video-animation-player/chunk",
              82: "widget/fans-icon/chunk",
              83: "widget/superFans-recharge/chunk",
              84: "assets/modules/PlainTextEditor/chunk",
              85: "assets/modules/ProcessorClass/chunk",
              86: "assets/modules/bindPhone/chunk",
              87: "assets/modules/livePerfReport/chunk",
              88: "assets/modules/livePlayerEnvReport/chunk",
              89: "assets/modules/postMessageEvent/chunk",
              90: "assets/modules/qrcode/chunk",
              91: "assets/modules/roomCommonService/chunk",
              92: "assets/modules/roomPostMessageService/chunk",
              93: "assets/modules/roomStatistics/chunk",
              94: "assets/modules/smog/chunk",
              95: "node_modules/@babel/runtime/chunk",
              96: "widget/bindPhone/chunk",
              97: "widget/bindPhoneByHuya/chunk",
              98: "widget/recharge/chunk",
              99: "assets/img/noble_icon/chunk",
              100: "assets/modules/DefineValue/chunk",
              101: "assets/modules/FlexSpace/chunk",
              102: "assets/modules/chatAnimationProcessor/chunk",
              103: "assets/modules/formatTime/chunk",
              104: "assets/modules/h5playeOnloadReport/chunk",
              106: "assets/modules/liveRoomDurationReport/chunk",
              107: "assets/modules/liveRoomPvReport/chunk",
              108: "assets/modules/roomFans/chunk",
              109: "assets/modules/roomFollow/chunk",
              110: "assets/modules/roomHeaderResponsive/chunk",
              111: "assets/modules/roomReport/chunk",
              113: "components/FansBadgeLogo/chunk",
              116: "components/RoomSidebarPopupLayer/chunk",
              117: "node_modules/@huyafed/ad-report/chunk",
              118: "widget/chatTips/chunk",
              119: "widget/noble-recharge/chunk",
              120: "widget/safetyCertificate/chunk",
              121: "widget/speakTipsBindPhone/chunk",
              122: "assets/modules/DefineState/chunk",
              123: "assets/modules/MomentFavor/chunk",
              124: "assets/modules/MomentItem/chunk",
              125: "assets/modules/Moments/chunk",
              126: "assets/modules/PostMessageServer/chunk",
              127: "assets/modules/SquareMoment/chunk",
              128: "assets/modules/drag/chunk",
              129: "assets/modules/feedbacker/chunk",
              130: "assets/modules/react-redux/chunk",
              131: "assets/modules/redux-thunk/chunk",
              132: "assets/modules/redux/chunk",
              133: "assets/modules/roomMeme/chunk",
              134: "assets/modules/roomMomentStore/chunk",
              135: "assets/modules/taf/chunk",
              136: "assets/modules/taf/favorMoment/chunk",
              137: "assets/modules/taf/getLiveRoomRecTopic/chunk",
              138: "assets/modules/taf/getMomentListByTopic/chunk",
              139: "assets/modules/taf/momentVote/chunk",
              140: "assets/modules/taf/reportMoment/chunk",
              143: "components/Lv/chunk",
              144: "components/Lv/img/chunk",
              145: "components/NobleMedal/chunk",
              146: "components/PictureViewer/chunk",
              147: "components/PictureViewer/img/chunk",
              148: "components/RoomPersonalRecom/chunk",
              149: "components/RoomPersonalRecom/img/chunk",
              150: "components/Scrollbar/chunk",
              151: "components/SquareMoment/Comment/chunk",
              152: "components/SquareMoment/Context/chunk",
              153: "components/SquareMoment/Expose/chunk",
              154: "components/SquareMoment/Expose/img/chunk",
              155: "components/SquareMoment/Favor/chunk",
              156: "components/SquareMoment/Favor/img/chunk",
              157: "components/SquareMoment/Moment/chunk",
              158: "components/SquareMoment/Moment/img/chunk",
              159: "components/SquareMoment/MomentList/chunk",
              160: "components/SquareMoment/MomentList/img/chunk",
              161: "components/SquareMoment/Nav/chunk",
              162: "components/SquareMoment/Nav/img/chunk",
              163: "components/SquareMoment/Pic/chunk",
              164: "components/SquareMoment/Share/chunk",
              165: "components/SquareMoment/Share/img/chunk",
              166: "components/SquareMoment/Text/chunk",
              167: "components/SquareMoment/Vote/chunk",
              168: "components/roomKeeperModal/Block/chunk",
              169: "components/roomKeeperModal/Keeper/chunk",
              170: "components/roomKeeperModal/Mute/chunk",
              171: "components/roomKeeperModal/VFans/chunk",
              172: "components/roomKeeperModal/Warning/chunk",
              173: "components/roomKeeperModal/chunk",
              174: "node_modules/@huyafed/web-signal-sdk/chunk",
              175: "node_modules/@performance/feedback/chunk",
              176: "node_modules/@performance/feedbackWithUI/chunk",
              177: "node_modules/axios/chunk",
              178: "node_modules/js-cookie/chunk",
              179: "node_modules/react-redux/chunk",
              180: "node_modules/redux-thunk/chunk",
              181: "node_modules/redux/chunk",
              182: "widget/MomentVideo/chunk",
              183: "widget/MomentVideo/tpl/chunk",
              184: "widget/MomentVideoEnd/chunk",
              185: "widget/MomentVideoEnd/tmpl/chunk",
              186: "widget/classify-recom/chunk",
              187: "widget/classify-recom/tmpl/chunk",
              188: "widget/momentLottery/chunk",
              189: "widget/momentShare/chunk",
              190: "widget/room-moments-anchor/chunk",
              191: "widget/room-moments-hot/chunk",
              192: "widget/room-moments-item/Violation/chunk",
              193: "widget/room-moments-item/Violation/img/chunk",
              194: "widget/room-moments-item/chunk",
              195: "widget/room-moments/chunk",
              197: "assets/img/noble_bg/chunk",
              198: "assets/lib/swf_hiido_hiidostatic.js",
              199: "assets/modules/fansBadge/reactHooks/chunk",
              200: "assets/modules/gift/chunk",
              201: "assets/modules/guide/chunk",
              202: "assets/modules/hyext-lib-loader/chunk",
              203: "assets/modules/liveRoomStatus/chunk",
              204: "assets/modules/liveStreamOrigin/chunk",
              205: "assets/modules/reactRdx/chunk",
              206: "assets/modules/roomActivity/chunk",
              207: "assets/modules/roomEasterEgg/chunk",
              208: "assets/modules/roomFaceDirector/chunk",
              209: "assets/modules/roomHyExtComp/chunk",
              210: "assets/modules/roomSpeechEditor/chunk",
              211: "assets/modules/roomWeekRank/chunk",
              212: "components/FansBadgeDashboard/Details/chunk",
              213: "components/FansBadgeDashboard/chunk",
              214: "components/FansBadgeDashboard/img/chunk",
              215: "components/MmdLoading/chunk",
              216: "components/MmdPagination/chunk",
              217: "components/MmdPagination/img/chunk",
              218: "components/ModalApplyTvVip/chunk",
              219: "components/ModalMemePayment/chunk",
              220: "components/ModalMemePayment/img/chunk",
              221: "components/RoomKeeperWorkbench/Modal/Ignore/chunk",
              222: "components/RoomKeeperWorkbench/Modal/Mute/chunk",
              223: "components/RoomKeeperWorkbench/chunk",
              224: "components/RoomKeeperWorkbench/img/chunk",
              225: "components/UserCard/Card/chunk",
              226: "components/UserCard/Card/img/chunk",
              227: "components/UserCard/Menu/chunk",
              228: "components/UserCard/Menu/img/chunk",
              229: "components/UserCard/chunk",
              230: "components/UserCard/img/chunk",
              231: "node_modules/prop-types/chunk",
              232: "node_modules/qr.js/chunk",
              233: "node_modules/qrcode.react/chunk",
              234: "node_modules/react-transition-group/chunk",
              235: "widget/DiyActLayer/chunk",
              236: "widget/animationStyle/chunk",
              237: "widget/animationStyle/tmpl/chunk",
              238: "widget/delivery/chunk",
              239: "widget/delivery/img/chunk",
              240: "widget/delivery/tmpl/chunk",
              243: "widget/noble/chunk",
              246: "widget/room-backToTop/chunk",
              247: "widget/room-energy/chunk",
              248: "widget/room-energy/img/chunk",
              249: "widget/room-energy/tmpl/chunk",
              250: "widget/room-union/chunk",
              251: "widget/roomGg0/chunk",
              252: "widget/roomGg1/chunk",
              253: "widget/roomGg2/chunk",
              254: "widget/roomMsgOfKing/chunk",
              255: "widget/weeklyStar/chunk",
              280: "assets/css/room/gift.scss",
              281: "assets/img/defaultImg/chunk",
              283: "assets/img/room/gift/chunk",
              284: "assets/lib/clipboard.js",
              287: "assets/modules/chatRoom/chunk",
              288: "assets/modules/documentVisibility/chunk",
              289: "assets/modules/firstRecharge/chunk",
              290: "assets/modules/generalMethod/chunk",
              291: "assets/modules/global/chunk",
              292: "assets/modules/guessReport/chunk",
              293: "assets/modules/guideBill/chunk",
              299: "assets/modules/roomActSPFX/chunk",
              300: "assets/modules/roomMotorcade/chunk",
              301: "assets/modules/roomMotorcadeActivity/chunk",
              302: "assets/modules/roomNotice/chunk",
              303: "assets/modules/roomOrnament/ReactService/chunk",
              304: "assets/modules/roomOrnament/chunk",
              306: "assets/modules/roomTenant/chunk",
              307: "assets/modules/roomTreasureBox/chunk",
              308: "assets/modules/roomVipList/chunk",
              309: "assets/modules/room_core/chunk",
              310: "assets/modules/subscribeByTaf/chunk",
              311: "assets/modules/topUpPayment/chunk",
              313: "assets/modules/videoScale/chunk",
              314: "assets/modules/watchHistory/chunk",
              315: "components/CommunityContainer/chunk",
              316: "components/CommunityContainer/img/chunk",
              317: "components/CommunityDetailContainer/chunk",
              318: "components/CommunityEntry/chunk",
              319: "components/CommunityFloatBall/chunk",
              320: "components/CommunityFloatBall/img/chunk",
              321: "components/CommunityServices/chunk",
              322: "components/EmotShelf/chunk",
              323: "components/FaceDirector/LiveProgram/chunk",
              324: "components/FaceDirector/LiveProgram/img/chunk",
              325: "components/FaceDirector/ProgramList/Program/chunk",
              326: "components/FaceDirector/ProgramList/Program/img/chunk",
              327: "components/FaceDirector/ProgramList/chunk",
              328: "components/FaceDirector/ProgramList/img/chunk",
              329: "components/FaceDirector/SubBtn/chunk",
              330: "components/FaceDirector/SubBtn/img/chunk",
              331: "components/FaceDirector/chunk",
              332: "components/FaceDirector/img/chunk",
              333: "components/GameBuy/chunk",
              336: "components/GamePromote/chunk",
              337: "components/GiftCustomEffect/chunk",
              338: "components/GiftCustomEffect/img/chunk",
              339: "components/GiftDrawEffect/chunk",
              340: "components/GiftVideoEffect/chunk",
              341: "components/GiftVideoEffect/img/chunk",
              342: "components/ImagePreview/chunk",
              344: "components/MatchCommunity/Context/chunk",
              345: "components/MatchCommunity/Empty/chunk",
              346: "components/MatchCommunity/Error/chunk",
              347: "components/MatchCommunity/LoadMore/chunk",
              348: "components/MatchCommunity/Loaded/chunk",
              349: "components/MatchCommunity/Loading/chunk",
              350: "components/MatchCommunity/Modal/Confirm/chunk",
              351: "components/MatchCommunity/Modal/chunk",
              352: "components/MatchCommunity/MomentMenu/chunk",
              353: "components/MatchCommunity/SectionContext/chunk",
              354: "components/MatchCommunity/SectionMomentList/chunk",
              355: "components/MatchCommunity/UserContext/chunk",
              356: "components/MatchCommunity/UserMomentList/chunk",
              357: "components/MatchCommunity/useReport/chunk",
              358: "components/OnTVLottery/actions/chunk",
              359: "components/OnTVLottery/chunk",
              360: "components/OnTVLottery/reducers/chunk",
              361: "components/OnTVLottery/views/OnTVMemeChoice/chunk",
              362: "components/OnTVLottery/views/OnTVMemeChoice/img/chunk",
              363: "components/OnTVLottery/views/chunk",
              364: "components/PostCard/chunk",
              365: "components/PostCard/img/chunk",
              366: "components/PostCommentList/CommentItem/chunk",
              367: "components/PostCommentList/FirstComment/chunk",
              368: "components/PostCommentList/SecondComment/chunk",
              369: "components/PostCommentList/chunk",
              370: "components/PostCommentList/store/chunk",
              371: "components/PostContent/chunk",
              372: "components/PostDetail/Reply/chunk",
              373: "components/PostDetail/chunk",
              374: "components/PostDetail/store/chunk",
              375: "components/PostLike/chunk",
              376: "components/PostLike/store/chunk",
              377: "components/PostPublish/chunk",
              378: "components/PostVote/chunk",
              381: "components/RoomActEffect/chunk",
              382: "components/RoomActEffect/img/chunk",
              383: "components/RoomAnchorLv/chunk",
              384: "components/RoomBlockWords/chunk",
              385: "components/RoomBlockWords/img/chunk",
              386: "components/RoomBusinessGame/chunk",
              387: "components/RoomChat/chunk",
              388: "components/RoomChatSpeaker/chunk",
              389: "components/RoomEasterEgg/chunk",
              390: "components/RoomEasterEgg/img/chunk",
              391: "components/RoomEmoticon/EmoticonAction/chunk",
              392: "components/RoomEmoticon/EmoticonHistoryPanel/chunk",
              393: "components/RoomEmoticon/chunk",
              394: "components/RoomEmoticon/img/chunk",
              395: "components/RoomFollow/chunk",
              396: "components/RoomFollow/img/chunk",
              397: "components/RoomGuardNotice/chunk",
              398: "components/RoomMemePanel/chunk",
              399: "components/RoomMemePanel/img/chunk",
              400: "components/RoomMotorcade/chunk",
              401: "components/RoomMotorcade/img/chunk",
              402: "components/RoomMotorcadeActivity/chunk",
              403: "components/RoomMountsAnimation/chunk",
              404: "components/RoomMountsAnimation/img/chunk",
              405: "components/RoomNobleEnter/chunk",
              406: "components/RoomNobleEnter/img/chunk",
              407: "components/RoomOrnamentPanel/chunk",
              408: "components/RoomOrnamentPanel/img/chunk",
              409: "components/RoomRank/RankFans/chunk",
              410: "components/RoomRank/RankFans/img/chunk",
              411: "components/RoomRank/RankNabob/chunk",
              412: "components/RoomRank/RankNabob/img/chunk",
              413: "components/RoomRank/RankNoble/chunk",
              414: "components/RoomRank/RankNoble/img/chunk",
              415: "components/RoomRank/RankSuperFans/chunk",
              416: "components/RoomRank/RankSuperFans/img/chunk",
              417: "components/RoomRank/SlideDownView/chunk",
              418: "components/RoomRank/UserBrowser/chunk",
              419: "components/RoomRank/chunk",
              420: "components/RoomShare/chunk",
              421: "components/RoomShield/chunk",
              422: "components/RoomTreasureBox/chunk",
              423: "components/RoomTreasureBox/img/chunk",
              424: "components/RoomUdbOffline/chunk",
              425: "components/RoomUserUpgradeNotice/chunk",
              426: "components/RoomUserUpgradeNotice/img/chunk",
              428: "components/TeamMedal/chunk",
              429: "components/TeamMedal/img/chunk",
              441: "components/communityStore/chunk",
              442: "components/communityStore/momFavor/chunk",
              443: "components/communityStore/router/chunk",
              444: "components/communityStore/vote/chunk",
              445: "components/gameMateOrderTips/chunk",
              446: "components/gameMateOrderTips/img/chunk",
              447: "components/roomAppGuide/chunk",
              453: "components/roomMute/chunk",
              454: "components/styled-mixin/chunk",
              455: "node_modules/@huyafed/feedback-bridge/chunk",
              456: "node_modules/copy-to-clipboard/chunk",
              459: "node_modules/events/chunk",
              460: "node_modules/toggle-selection/chunk",
              463: "widget/createLayer/chunk",
              464: "widget/fansBadgeAnchor/chunk",
              466: "widget/getBadgeFaith/chunk",
              468: "widget/illegalReport/chunk",
              477: "widget/missAsiaPk/chunk",
              478: "widget/noble/img/chunk",
              479: "widget/noble/tmpl/chunk",
              480: "widget/payLiveRoom/chunk",
              481: "widget/payLiveRoom/img/chunk",
              482: "widget/pushGuide/chunk",
              484: "widget/room-chat-notice/chunk",
              485: "widget/room-guide-playbill/chunk",
              486: "widget/room-guide-playbill/tmpl/chunk",
              487: "widget/room-guide/chunk",
              488: "widget/room-guide/tmpl/chunk",
              489: "widget/room-host/chunk",
              491: "widget/room-speech-guide/chunk",
              493: "widget/roomGetPrize/chunk",
              494: "widget/roomGgChat/chunk",
              495: "widget/roomGgTop/chunk",
              499: "widget/roomMiniPlayer/chunk",
              501: "widget/roomReportMsg/chunk",
              502: "widget/superFans-fansDay/chunk",
              503: "widget/superFansRank/chunk",
              504: "widget/treasureChest/chunk",
              505: "widget/treasureChest/img/chunk",
              506: "widget/uploadInformation/chunk",
              513: "widget/weekStar/chunk",
              514: "widget/weekStar/img/chunk",
              515: "widget/weekStar/tmpl/chunk"
          }[e] || e) + "_" + {
              0: "31d6c",
              1: "31d6c",
              2: "31d6c",
              3: "31d6c",
              4: "31d6c",
              5: "31d6c",
              6: "31d6c",
              7: "31d6c",
              8: "31d6c",
              9: "31d6c",
              10: "43d7b",
              11: "31d6c",
              12: "31d6c",
              13: "31d6c",
              14: "31d6c",
              15: "31d6c",
              16: "31d6c",
              18: "31d6c",
              19: "31d6c",
              20: "31d6c",
              21: "31d6c",
              22: "31d6c",
              23: "31d6c",
              24: "31d6c",
              25: "31d6c",
              26: "31d6c",
              27: "31d6c",
              28: "31d6c",
              29: "31d6c",
              30: "31d6c",
              31: "31d6c",
              32: "31d6c",
              34: "31d6c",
              35: "31d6c",
              36: "31d6c",
              37: "31d6c",
              38: "31d6c",
              39: "31d6c",
              40: "31d6c",
              41: "31d6c",
              42: "31d6c",
              43: "31d6c",
              44: "31d6c",
              45: "31d6c",
              46: "31d6c",
              47: "31d6c",
              48: "31d6c",
              49: "31d6c",
              50: "31d6c",
              55: "31d6c",
              56: "31d6c",
              58: "31d6c",
              59: "31d6c",
              60: "31d6c",
              61: "31d6c",
              62: "31d6c",
              63: "31d6c",
              65: "31d6c",
              66: "31d6c",
              67: "31d6c",
              68: "31d6c",
              69: "31d6c",
              71: "31d6c",
              72: "31d6c",
              73: "31d6c",
              74: "31d6c",
              75: "31d6c",
              76: "31d6c",
              77: "31d6c",
              78: "31d6c",
              79: "31d6c",
              80: "68859",
              81: "31d6c",
              82: "d3bd0",
              83: "5a00f",
              84: "31d6c",
              85: "31d6c",
              86: "31d6c",
              87: "31d6c",
              88: "31d6c",
              89: "31d6c",
              90: "31d6c",
              91: "31d6c",
              92: "31d6c",
              93: "31d6c",
              94: "31d6c",
              95: "31d6c",
              96: "586f5",
              97: "99923",
              98: "31d6c",
              99: "31d6c",
              100: "31d6c",
              101: "31d6c",
              102: "31d6c",
              103: "31d6c",
              104: "31d6c",
              106: "31d6c",
              107: "31d6c",
              108: "31d6c",
              109: "31d6c",
              110: "31d6c",
              111: "31d6c",
              113: "31d6c",
              116: "31d6c",
              117: "31d6c",
              118: "ef1f8",
              119: "dd4fb",
              120: "31d6c",
              121: "c1128",
              122: "31d6c",
              123: "31d6c",
              124: "31d6c",
              125: "31d6c",
              126: "31d6c",
              127: "31d6c",
              128: "31d6c",
              129: "31d6c",
              130: "31d6c",
              131: "31d6c",
              132: "31d6c",
              133: "31d6c",
              134: "31d6c",
              135: "31d6c",
              136: "31d6c",
              137: "31d6c",
              138: "31d6c",
              139: "31d6c",
              140: "31d6c",
              143: "31d6c",
              144: "31d6c",
              145: "31d6c",
              146: "31d6c",
              147: "31d6c",
              148: "31d6c",
              149: "31d6c",
              150: "31d6c",
              151: "31d6c",
              152: "31d6c",
              153: "31d6c",
              154: "31d6c",
              155: "31d6c",
              156: "31d6c",
              157: "31d6c",
              158: "31d6c",
              159: "31d6c",
              160: "31d6c",
              161: "31d6c",
              162: "31d6c",
              163: "31d6c",
              164: "31d6c",
              165: "31d6c",
              166: "31d6c",
              167: "31d6c",
              168: "31d6c",
              169: "31d6c",
              170: "31d6c",
              171: "31d6c",
              172: "31d6c",
              173: "31d6c",
              174: "31d6c",
              175: "31d6c",
              176: "31d6c",
              177: "31d6c",
              178: "31d6c",
              179: "31d6c",
              180: "31d6c",
              181: "31d6c",
              182: "50bdc",
              183: "31d6c",
              184: "2bbe1",
              185: "31d6c",
              186: "bde21",
              187: "31d6c",
              188: "c0ebe",
              189: "97e3a",
              190: "31d6c",
              191: "31d6c",
              192: "31d6c",
              193: "31d6c",
              194: "3a31e",
              195: "31d6c",
              197: "31d6c",
              198: "31d6c",
              199: "31d6c",
              200: "31d6c",
              201: "31d6c",
              202: "31d6c",
              203: "31d6c",
              204: "31d6c",
              205: "31d6c",
              206: "31d6c",
              207: "31d6c",
              208: "31d6c",
              209: "31d6c",
              210: "31d6c",
              211: "31d6c",
              212: "31d6c",
              213: "9b05c",
              214: "31d6c",
              215: "31d6c",
              216: "31d6c",
              217: "31d6c",
              218: "31d6c",
              219: "31d6c",
              220: "31d6c",
              221: "31d6c",
              222: "31d6c",
              223: "31d6c",
              224: "31d6c",
              225: "31d6c",
              226: "31d6c",
              227: "31d6c",
              228: "31d6c",
              229: "31d6c",
              230: "31d6c",
              231: "31d6c",
              232: "31d6c",
              233: "31d6c",
              234: "31d6c",
              235: "5d27e",
              236: "31d6c",
              237: "31d6c",
              238: "2e438",
              239: "31d6c",
              240: "31d6c",
              243: "14290",
              246: "82666",
              247: "b0e6a",
              248: "31d6c",
              249: "31d6c",
              250: "8975b",
              251: "80159",
              252: "9e61d",
              253: "95123",
              254: "a2031",
              255: "eb90e",
              280: "8c92c",
              281: "31d6c",
              283: "31d6c",
              284: "31d6c",
              287: "31d6c",
              288: "31d6c",
              289: "31d6c",
              290: "31d6c",
              291: "31d6c",
              292: "31d6c",
              293: "31d6c",
              299: "31d6c",
              300: "31d6c",
              301: "31d6c",
              302: "31d6c",
              303: "31d6c",
              304: "31d6c",
              306: "31d6c",
              307: "31d6c",
              308: "31d6c",
              309: "31d6c",
              310: "31d6c",
              311: "31d6c",
              313: "31d6c",
              314: "31d6c",
              315: "31d6c",
              316: "31d6c",
              317: "31d6c",
              318: "31d6c",
              319: "31d6c",
              320: "31d6c",
              321: "31d6c",
              322: "94db5",
              323: "31d6c",
              324: "31d6c",
              325: "31d6c",
              326: "31d6c",
              327: "31d6c",
              328: "31d6c",
              329: "31d6c",
              330: "31d6c",
              331: "31d6c",
              332: "31d6c",
              333: "66b52",
              336: "0e3be",
              337: "31d6c",
              338: "31d6c",
              339: "31d6c",
              340: "31d6c",
              341: "31d6c",
              342: "315a4",
              344: "31d6c",
              345: "31d6c",
              346: "31d6c",
              347: "31d6c",
              348: "31d6c",
              349: "31d6c",
              350: "31d6c",
              351: "31d6c",
              352: "31d6c",
              353: "31d6c",
              354: "31d6c",
              355: "31d6c",
              356: "31d6c",
              357: "31d6c",
              358: "31d6c",
              359: "73226",
              360: "31d6c",
              361: "31d6c",
              362: "31d6c",
              363: "31d6c",
              364: "31d6c",
              365: "31d6c",
              366: "43d54",
              367: "31d6c",
              368: "2af11",
              369: "6294d",
              370: "31d6c",
              371: "c3efd",
              372: "b7182",
              373: "f8105",
              374: "31d6c",
              375: "e2761",
              376: "31d6c",
              377: "e231e",
              378: "31d6c",
              381: "31d6c",
              382: "31d6c",
              383: "ca33f",
              384: "31d6c",
              385: "31d6c",
              386: "31d6c",
              387: "31d6c",
              388: "31d6c",
              389: "31d6c",
              390: "31d6c",
              391: "31d6c",
              392: "31d6c",
              393: "31d6c",
              394: "31d6c",
              395: "70ea9",
              396: "31d6c",
              397: "31d6c",
              398: "31d6c",
              399: "31d6c",
              400: "31d6c",
              401: "31d6c",
              402: "31d6c",
              403: "31d6c",
              404: "31d6c",
              405: "31d6c",
              406: "31d6c",
              407: "31d6c",
              408: "31d6c",
              409: "31d6c",
              410: "31d6c",
              411: "31d6c",
              412: "31d6c",
              413: "31d6c",
              414: "31d6c",
              415: "31d6c",
              416: "31d6c",
              417: "31d6c",
              418: "31d6c",
              419: "31d6c",
              420: "24ef8",
              421: "31d6c",
              422: "31d6c",
              423: "31d6c",
              424: "31d6c",
              425: "31d6c",
              426: "31d6c",
              428: "31d6c",
              429: "31d6c",
              441: "31d6c",
              442: "31d6c",
              443: "31d6c",
              444: "31d6c",
              445: "31d6c",
              446: "31d6c",
              447: "08428",
              453: "31d6c",
              454: "31d6c",
              455: "31d6c",
              456: "31d6c",
              459: "31d6c",
              460: "31d6c",
              463: "cc491",
              464: "c0e1d",
              466: "77a90",
              468: "31d6c",
              477: "990fa",
              478: "31d6c",
              479: "31d6c",
              480: "31d6c",
              481: "31d6c",
              482: "abea1",
              484: "7e745",
              485: "59bc3",
              486: "31d6c",
              487: "38ca9",
              488: "31d6c",
              489: "31d6c",
              491: "967be",
              493: "e64b0",
              494: "bc3c5",
              495: "66674",
              499: "376d9",
              501: "218ce",
              502: "e63da",
              503: "e7881",
              504: "0f761",
              505: "31d6c",
              506: "31d6c",
              513: "f076c",
              514: "31d6c",
              515: "31d6c"
          }[e] + ".css", i = a.p + c, r = document.getElementsByTagName("link"), u = 0; u < r.length; u++) {
              var s = (l = r[u]).getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (s === c || s === i))
                  return n()
          }
          var d = document.getElementsByTagName("style");
          for (u = 0; u < d.length; u++) {
              var l;
              if ((s = (l = d[u]).getAttribute("data-href")) === c || s === i)
                  return n()
          }
          var m = document.createElement("link");
          m.rel = "stylesheet",
          m.type = "text/css",
          m.onload = n,
          m.onerror = function(n) {
              var c = n && n.target && n.target.src || i
                , a = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
              a.code = "CSS_CHUNK_LOAD_FAILED",
              a.request = c,
              delete o[e],
              m.parentNode.removeChild(m),
              t(a)
          }
          ,
          m.href = i,
          document.getElementsByTagName("head")[0].appendChild(m)
      }
      )).then((function() {
          o[e] = 0
      }
      )));
      var t = c[e];
      if (0 !== t)
          if (t)
              n.push(t[2]);
          else {
              var i = new Promise((function(n, o) {
                  t = c[e] = [n, o]
              }
              ));
              n.push(t[2] = i);
              var r, u = document.createElement("script");
              u.charset = "utf-8",
              u.timeout = 120,
              a.nc && u.setAttribute("nonce", a.nc),
              u.src = function(e) {
                  return a.p + "" + ({
                      0: "node_modules/@huyafed/lib-loader/chunk",
                      1: "assets/modules/lib-loader/chunk",
                      2: "assets/modules/ya-report/chunk",
                      3: "node_modules/object-assign/chunk",
                      4: "node_modules/react-dom/chunk",
                      5: "node_modules/react/chunk",
                      6: "node_modules/scheduler/chunk",
                      7: "node_modules/css-loader/chunk",
                      8: "node_modules/classnames/chunk",
                      9: "node_modules/style-loader/chunk",
                      10: "widget/dialog/chunk",
                      11: "node_modules/tslib/chunk",
                      12: "assets/modules/customReactHooks/chunk",
                      13: "assets/modules/conf/chunk",
                      14: "assets/modules/tools/chunk",
                      15: "node_modules/process/chunk",
                      16: "assets/modules/Event/chunk",
                      18: "assets/modules/react-dom/chunk",
                      19: "assets/modules/react/chunk",
                      20: "assets/modules/roomShield/chunk",
                      21: "assets/modules/formatNumber/chunk",
                      22: "assets/modules/emoticon/chunk",
                      23: "assets/modules/sidebar/chunk",
                      24: "components/message/chunk",
                      25: "components/message/icon/chunk",
                      26: "widget/sidebar/chunk",
                      27: "assets/modules/follow/chunk",
                      28: "assets/modules/followList/chunk",
                      29: "node_modules/hoist-non-react-statics/chunk",
                      30: "node_modules/react-is/chunk",
                      31: "assets/lib/scrollpane.js",
                      32: "node_modules/@huyafed/emoticon-parser/chunk",
                      34: "assets/modules/chat/chunk",
                      35: "assets/modules/fansBadge/NormalFansBadge/chunk",
                      36: "assets/modules/chatPanelFilter/chunk",
                      37: "assets/modules/roomCustomBadge/chunk",
                      38: "node_modules/@emotion/is-prop-valid/chunk",
                      39: "node_modules/@emotion/memoize/chunk",
                      40: "node_modules/@emotion/stylis/chunk",
                      41: "node_modules/@emotion/unitless/chunk",
                      42: "node_modules/@huyafed/custom-badge/chunk",
                      43: "node_modules/shallowequal/chunk",
                      44: "node_modules/styled-components/chunk",
                      45: "assets/modules/fansBadge/TrialFansBadge/chunk",
                      46: "assets/modules/fansBadge/chunk",
                      47: "assets/modules/loadZipFile/chunk",
                      48: "assets/modules/roomEmoticon/chunk",
                      49: "components/MmdModal/chunk",
                      50: "components/MmdModal/img/chunk",
                      55: "node_modules/base64-js/chunk",
                      56: "node_modules/buffer/chunk",
                      58: "node_modules/ieee754/chunk",
                      59: "node_modules/isarray/chunk",
                      60: "node_modules/jszip-utils/chunk",
                      61: "node_modules/jszip/chunk",
                      62: "node_modules/setimmediate/chunk",
                      63: "node_modules/timers-browserify/chunk",
                      65: "assets/modules/auditor/chunk",
                      66: "components/Avatar/chunk",
                      67: "components/MmdPanel/chunk",
                      68: "components/RoomChatPanelPortal/chunk",
                      69: "assets/modules/BlockWords/chunk",
                      71: "assets/modules/momentVideoList/chunk",
                      72: "assets/modules/roomBlockWords/chunk",
                      73: "assets/modules/roomEmoticon/emoticonGamble/chunk",
                      74: "assets/modules/roomMounts/chunk",
                      75: "assets/modules/teamMedal/chunk",
                      76: "assets/modules/topUp/chunk",
                      77: "components/MmdForm/chunk",
                      78: "components/MmdForm/img/chunk",
                      79: "components/PortalGlobal/chunk",
                      80: "components/popup/chunk",
                      81: "node_modules/video-animation-player/chunk",
                      82: "widget/fans-icon/chunk",
                      83: "widget/superFans-recharge/chunk",
                      84: "assets/modules/PlainTextEditor/chunk",
                      85: "assets/modules/ProcessorClass/chunk",
                      86: "assets/modules/bindPhone/chunk",
                      87: "assets/modules/livePerfReport/chunk",
                      88: "assets/modules/livePlayerEnvReport/chunk",
                      89: "assets/modules/postMessageEvent/chunk",
                      90: "assets/modules/qrcode/chunk",
                      91: "assets/modules/roomCommonService/chunk",
                      92: "assets/modules/roomPostMessageService/chunk",
                      93: "assets/modules/roomStatistics/chunk",
                      94: "assets/modules/smog/chunk",
                      95: "node_modules/@babel/runtime/chunk",
                      96: "widget/bindPhone/chunk",
                      97: "widget/bindPhoneByHuya/chunk",
                      98: "widget/recharge/chunk",
                      99: "assets/img/noble_icon/chunk",
                      100: "assets/modules/DefineValue/chunk",
                      101: "assets/modules/FlexSpace/chunk",
                      102: "assets/modules/chatAnimationProcessor/chunk",
                      103: "assets/modules/formatTime/chunk",
                      104: "assets/modules/h5playeOnloadReport/chunk",
                      106: "assets/modules/liveRoomDurationReport/chunk",
                      107: "assets/modules/liveRoomPvReport/chunk",
                      108: "assets/modules/roomFans/chunk",
                      109: "assets/modules/roomFollow/chunk",
                      110: "assets/modules/roomHeaderResponsive/chunk",
                      111: "assets/modules/roomReport/chunk",
                      113: "components/FansBadgeLogo/chunk",
                      116: "components/RoomSidebarPopupLayer/chunk",
                      117: "node_modules/@huyafed/ad-report/chunk",
                      118: "widget/chatTips/chunk",
                      119: "widget/noble-recharge/chunk",
                      120: "widget/safetyCertificate/chunk",
                      121: "widget/speakTipsBindPhone/chunk",
                      122: "assets/modules/DefineState/chunk",
                      123: "assets/modules/MomentFavor/chunk",
                      124: "assets/modules/MomentItem/chunk",
                      125: "assets/modules/Moments/chunk",
                      126: "assets/modules/PostMessageServer/chunk",
                      127: "assets/modules/SquareMoment/chunk",
                      128: "assets/modules/drag/chunk",
                      129: "assets/modules/feedbacker/chunk",
                      130: "assets/modules/react-redux/chunk",
                      131: "assets/modules/redux-thunk/chunk",
                      132: "assets/modules/redux/chunk",
                      133: "assets/modules/roomMeme/chunk",
                      134: "assets/modules/roomMomentStore/chunk",
                      135: "assets/modules/taf/chunk",
                      136: "assets/modules/taf/favorMoment/chunk",
                      137: "assets/modules/taf/getLiveRoomRecTopic/chunk",
                      138: "assets/modules/taf/getMomentListByTopic/chunk",
                      139: "assets/modules/taf/momentVote/chunk",
                      140: "assets/modules/taf/reportMoment/chunk",
                      143: "components/Lv/chunk",
                      144: "components/Lv/img/chunk",
                      145: "components/NobleMedal/chunk",
                      146: "components/PictureViewer/chunk",
                      147: "components/PictureViewer/img/chunk",
                      148: "components/RoomPersonalRecom/chunk",
                      149: "components/RoomPersonalRecom/img/chunk",
                      150: "components/Scrollbar/chunk",
                      151: "components/SquareMoment/Comment/chunk",
                      152: "components/SquareMoment/Context/chunk",
                      153: "components/SquareMoment/Expose/chunk",
                      154: "components/SquareMoment/Expose/img/chunk",
                      155: "components/SquareMoment/Favor/chunk",
                      156: "components/SquareMoment/Favor/img/chunk",
                      157: "components/SquareMoment/Moment/chunk",
                      158: "components/SquareMoment/Moment/img/chunk",
                      159: "components/SquareMoment/MomentList/chunk",
                      160: "components/SquareMoment/MomentList/img/chunk",
                      161: "components/SquareMoment/Nav/chunk",
                      162: "components/SquareMoment/Nav/img/chunk",
                      163: "components/SquareMoment/Pic/chunk",
                      164: "components/SquareMoment/Share/chunk",
                      165: "components/SquareMoment/Share/img/chunk",
                      166: "components/SquareMoment/Text/chunk",
                      167: "components/SquareMoment/Vote/chunk",
                      168: "components/roomKeeperModal/Block/chunk",
                      169: "components/roomKeeperModal/Keeper/chunk",
                      170: "components/roomKeeperModal/Mute/chunk",
                      171: "components/roomKeeperModal/VFans/chunk",
                      172: "components/roomKeeperModal/Warning/chunk",
                      173: "components/roomKeeperModal/chunk",
                      174: "node_modules/@huyafed/web-signal-sdk/chunk",
                      175: "node_modules/@performance/feedback/chunk",
                      176: "node_modules/@performance/feedbackWithUI/chunk",
                      177: "node_modules/axios/chunk",
                      178: "node_modules/js-cookie/chunk",
                      179: "node_modules/react-redux/chunk",
                      180: "node_modules/redux-thunk/chunk",
                      181: "node_modules/redux/chunk",
                      182: "widget/MomentVideo/chunk",
                      183: "widget/MomentVideo/tpl/chunk",
                      184: "widget/MomentVideoEnd/chunk",
                      185: "widget/MomentVideoEnd/tmpl/chunk",
                      186: "widget/classify-recom/chunk",
                      187: "widget/classify-recom/tmpl/chunk",
                      188: "widget/momentLottery/chunk",
                      189: "widget/momentShare/chunk",
                      190: "widget/room-moments-anchor/chunk",
                      191: "widget/room-moments-hot/chunk",
                      192: "widget/room-moments-item/Violation/chunk",
                      193: "widget/room-moments-item/Violation/img/chunk",
                      194: "widget/room-moments-item/chunk",
                      195: "widget/room-moments/chunk",
                      197: "assets/img/noble_bg/chunk",
                      198: "assets/lib/swf_hiido_hiidostatic.js",
                      199: "assets/modules/fansBadge/reactHooks/chunk",
                      200: "assets/modules/gift/chunk",
                      201: "assets/modules/guide/chunk",
                      202: "assets/modules/hyext-lib-loader/chunk",
                      203: "assets/modules/liveRoomStatus/chunk",
                      204: "assets/modules/liveStreamOrigin/chunk",
                      205: "assets/modules/reactRdx/chunk",
                      206: "assets/modules/roomActivity/chunk",
                      207: "assets/modules/roomEasterEgg/chunk",
                      208: "assets/modules/roomFaceDirector/chunk",
                      209: "assets/modules/roomHyExtComp/chunk",
                      210: "assets/modules/roomSpeechEditor/chunk",
                      211: "assets/modules/roomWeekRank/chunk",
                      212: "components/FansBadgeDashboard/Details/chunk",
                      213: "components/FansBadgeDashboard/chunk",
                      214: "components/FansBadgeDashboard/img/chunk",
                      215: "components/MmdLoading/chunk",
                      216: "components/MmdPagination/chunk",
                      217: "components/MmdPagination/img/chunk",
                      218: "components/ModalApplyTvVip/chunk",
                      219: "components/ModalMemePayment/chunk",
                      220: "components/ModalMemePayment/img/chunk",
                      221: "components/RoomKeeperWorkbench/Modal/Ignore/chunk",
                      222: "components/RoomKeeperWorkbench/Modal/Mute/chunk",
                      223: "components/RoomKeeperWorkbench/chunk",
                      224: "components/RoomKeeperWorkbench/img/chunk",
                      225: "components/UserCard/Card/chunk",
                      226: "components/UserCard/Card/img/chunk",
                      227: "components/UserCard/Menu/chunk",
                      228: "components/UserCard/Menu/img/chunk",
                      229: "components/UserCard/chunk",
                      230: "components/UserCard/img/chunk",
                      231: "node_modules/prop-types/chunk",
                      232: "node_modules/qr.js/chunk",
                      233: "node_modules/qrcode.react/chunk",
                      234: "node_modules/react-transition-group/chunk",
                      235: "widget/DiyActLayer/chunk",
                      236: "widget/animationStyle/chunk",
                      237: "widget/animationStyle/tmpl/chunk",
                      238: "widget/delivery/chunk",
                      239: "widget/delivery/img/chunk",
                      240: "widget/delivery/tmpl/chunk",
                      243: "widget/noble/chunk",
                      246: "widget/room-backToTop/chunk",
                      247: "widget/room-energy/chunk",
                      248: "widget/room-energy/img/chunk",
                      249: "widget/room-energy/tmpl/chunk",
                      250: "widget/room-union/chunk",
                      251: "widget/roomGg0/chunk",
                      252: "widget/roomGg1/chunk",
                      253: "widget/roomGg2/chunk",
                      254: "widget/roomMsgOfKing/chunk",
                      255: "widget/weeklyStar/chunk",
                      280: "assets/css/room/gift.scss",
                      281: "assets/img/defaultImg/chunk",
                      283: "assets/img/room/gift/chunk",
                      284: "assets/lib/clipboard.js",
                      287: "assets/modules/chatRoom/chunk",
                      288: "assets/modules/documentVisibility/chunk",
                      289: "assets/modules/firstRecharge/chunk",
                      290: "assets/modules/generalMethod/chunk",
                      291: "assets/modules/global/chunk",
                      292: "assets/modules/guessReport/chunk",
                      293: "assets/modules/guideBill/chunk",
                      299: "assets/modules/roomActSPFX/chunk",
                      300: "assets/modules/roomMotorcade/chunk",
                      301: "assets/modules/roomMotorcadeActivity/chunk",
                      302: "assets/modules/roomNotice/chunk",
                      303: "assets/modules/roomOrnament/ReactService/chunk",
                      304: "assets/modules/roomOrnament/chunk",
                      306: "assets/modules/roomTenant/chunk",
                      307: "assets/modules/roomTreasureBox/chunk",
                      308: "assets/modules/roomVipList/chunk",
                      309: "assets/modules/room_core/chunk",
                      310: "assets/modules/subscribeByTaf/chunk",
                      311: "assets/modules/topUpPayment/chunk",
                      313: "assets/modules/videoScale/chunk",
                      314: "assets/modules/watchHistory/chunk",
                      315: "components/CommunityContainer/chunk",
                      316: "components/CommunityContainer/img/chunk",
                      317: "components/CommunityDetailContainer/chunk",
                      318: "components/CommunityEntry/chunk",
                      319: "components/CommunityFloatBall/chunk",
                      320: "components/CommunityFloatBall/img/chunk",
                      321: "components/CommunityServices/chunk",
                      322: "components/EmotShelf/chunk",
                      323: "components/FaceDirector/LiveProgram/chunk",
                      324: "components/FaceDirector/LiveProgram/img/chunk",
                      325: "components/FaceDirector/ProgramList/Program/chunk",
                      326: "components/FaceDirector/ProgramList/Program/img/chunk",
                      327: "components/FaceDirector/ProgramList/chunk",
                      328: "components/FaceDirector/ProgramList/img/chunk",
                      329: "components/FaceDirector/SubBtn/chunk",
                      330: "components/FaceDirector/SubBtn/img/chunk",
                      331: "components/FaceDirector/chunk",
                      332: "components/FaceDirector/img/chunk",
                      333: "components/GameBuy/chunk",
                      336: "components/GamePromote/chunk",
                      337: "components/GiftCustomEffect/chunk",
                      338: "components/GiftCustomEffect/img/chunk",
                      339: "components/GiftDrawEffect/chunk",
                      340: "components/GiftVideoEffect/chunk",
                      341: "components/GiftVideoEffect/img/chunk",
                      342: "components/ImagePreview/chunk",
                      344: "components/MatchCommunity/Context/chunk",
                      345: "components/MatchCommunity/Empty/chunk",
                      346: "components/MatchCommunity/Error/chunk",
                      347: "components/MatchCommunity/LoadMore/chunk",
                      348: "components/MatchCommunity/Loaded/chunk",
                      349: "components/MatchCommunity/Loading/chunk",
                      350: "components/MatchCommunity/Modal/Confirm/chunk",
                      351: "components/MatchCommunity/Modal/chunk",
                      352: "components/MatchCommunity/MomentMenu/chunk",
                      353: "components/MatchCommunity/SectionContext/chunk",
                      354: "components/MatchCommunity/SectionMomentList/chunk",
                      355: "components/MatchCommunity/UserContext/chunk",
                      356: "components/MatchCommunity/UserMomentList/chunk",
                      357: "components/MatchCommunity/useReport/chunk",
                      358: "components/OnTVLottery/actions/chunk",
                      359: "components/OnTVLottery/chunk",
                      360: "components/OnTVLottery/reducers/chunk",
                      361: "components/OnTVLottery/views/OnTVMemeChoice/chunk",
                      362: "components/OnTVLottery/views/OnTVMemeChoice/img/chunk",
                      363: "components/OnTVLottery/views/chunk",
                      364: "components/PostCard/chunk",
                      365: "components/PostCard/img/chunk",
                      366: "components/PostCommentList/CommentItem/chunk",
                      367: "components/PostCommentList/FirstComment/chunk",
                      368: "components/PostCommentList/SecondComment/chunk",
                      369: "components/PostCommentList/chunk",
                      370: "components/PostCommentList/store/chunk",
                      371: "components/PostContent/chunk",
                      372: "components/PostDetail/Reply/chunk",
                      373: "components/PostDetail/chunk",
                      374: "components/PostDetail/store/chunk",
                      375: "components/PostLike/chunk",
                      376: "components/PostLike/store/chunk",
                      377: "components/PostPublish/chunk",
                      378: "components/PostVote/chunk",
                      381: "components/RoomActEffect/chunk",
                      382: "components/RoomActEffect/img/chunk",
                      383: "components/RoomAnchorLv/chunk",
                      384: "components/RoomBlockWords/chunk",
                      385: "components/RoomBlockWords/img/chunk",
                      386: "components/RoomBusinessGame/chunk",
                      387: "components/RoomChat/chunk",
                      388: "components/RoomChatSpeaker/chunk",
                      389: "components/RoomEasterEgg/chunk",
                      390: "components/RoomEasterEgg/img/chunk",
                      391: "components/RoomEmoticon/EmoticonAction/chunk",
                      392: "components/RoomEmoticon/EmoticonHistoryPanel/chunk",
                      393: "components/RoomEmoticon/chunk",
                      394: "components/RoomEmoticon/img/chunk",
                      395: "components/RoomFollow/chunk",
                      396: "components/RoomFollow/img/chunk",
                      397: "components/RoomGuardNotice/chunk",
                      398: "components/RoomMemePanel/chunk",
                      399: "components/RoomMemePanel/img/chunk",
                      400: "components/RoomMotorcade/chunk",
                      401: "components/RoomMotorcade/img/chunk",
                      402: "components/RoomMotorcadeActivity/chunk",
                      403: "components/RoomMountsAnimation/chunk",
                      404: "components/RoomMountsAnimation/img/chunk",
                      405: "components/RoomNobleEnter/chunk",
                      406: "components/RoomNobleEnter/img/chunk",
                      407: "components/RoomOrnamentPanel/chunk",
                      408: "components/RoomOrnamentPanel/img/chunk",
                      409: "components/RoomRank/RankFans/chunk",
                      410: "components/RoomRank/RankFans/img/chunk",
                      411: "components/RoomRank/RankNabob/chunk",
                      412: "components/RoomRank/RankNabob/img/chunk",
                      413: "components/RoomRank/RankNoble/chunk",
                      414: "components/RoomRank/RankNoble/img/chunk",
                      415: "components/RoomRank/RankSuperFans/chunk",
                      416: "components/RoomRank/RankSuperFans/img/chunk",
                      417: "components/RoomRank/SlideDownView/chunk",
                      418: "components/RoomRank/UserBrowser/chunk",
                      419: "components/RoomRank/chunk",
                      420: "components/RoomShare/chunk",
                      421: "components/RoomShield/chunk",
                      422: "components/RoomTreasureBox/chunk",
                      423: "components/RoomTreasureBox/img/chunk",
                      424: "components/RoomUdbOffline/chunk",
                      425: "components/RoomUserUpgradeNotice/chunk",
                      426: "components/RoomUserUpgradeNotice/img/chunk",
                      428: "components/TeamMedal/chunk",
                      429: "components/TeamMedal/img/chunk",
                      441: "components/communityStore/chunk",
                      442: "components/communityStore/momFavor/chunk",
                      443: "components/communityStore/router/chunk",
                      444: "components/communityStore/vote/chunk",
                      445: "components/gameMateOrderTips/chunk",
                      446: "components/gameMateOrderTips/img/chunk",
                      447: "components/roomAppGuide/chunk",
                      453: "components/roomMute/chunk",
                      454: "components/styled-mixin/chunk",
                      455: "node_modules/@huyafed/feedback-bridge/chunk",
                      456: "node_modules/copy-to-clipboard/chunk",
                      459: "node_modules/events/chunk",
                      460: "node_modules/toggle-selection/chunk",
                      463: "widget/createLayer/chunk",
                      464: "widget/fansBadgeAnchor/chunk",
                      466: "widget/getBadgeFaith/chunk",
                      468: "widget/illegalReport/chunk",
                      477: "widget/missAsiaPk/chunk",
                      478: "widget/noble/img/chunk",
                      479: "widget/noble/tmpl/chunk",
                      480: "widget/payLiveRoom/chunk",
                      481: "widget/payLiveRoom/img/chunk",
                      482: "widget/pushGuide/chunk",
                      484: "widget/room-chat-notice/chunk",
                      485: "widget/room-guide-playbill/chunk",
                      486: "widget/room-guide-playbill/tmpl/chunk",
                      487: "widget/room-guide/chunk",
                      488: "widget/room-guide/tmpl/chunk",
                      489: "widget/room-host/chunk",
                      491: "widget/room-speech-guide/chunk",
                      493: "widget/roomGetPrize/chunk",
                      494: "widget/roomGgChat/chunk",
                      495: "widget/roomGgTop/chunk",
                      499: "widget/roomMiniPlayer/chunk",
                      501: "widget/roomReportMsg/chunk",
                      502: "widget/superFans-fansDay/chunk",
                      503: "widget/superFansRank/chunk",
                      504: "widget/treasureChest/chunk",
                      505: "widget/treasureChest/img/chunk",
                      506: "widget/uploadInformation/chunk",
                      513: "widget/weekStar/chunk",
                      514: "widget/weekStar/img/chunk",
                      515: "widget/weekStar/tmpl/chunk"
                  }[e] || e) + "_" + {
                      0: "660a2",
                      1: "b04f3",
                      2: "3fb71",
                      3: "be63e",
                      4: "6f71f",
                      5: "7541b",
                      6: "5d3f5",
                      7: "1887d",
                      8: "f30fb",
                      9: "25903",
                      10: "f0674",
                      11: "a3da9",
                      12: "2f0c7",
                      13: "2071b",
                      14: "0a31f",
                      15: "ab69b",
                      16: "b2aee",
                      18: "2b032",
                      19: "b4cee",
                      20: "afbbf",
                      21: "8f40e",
                      22: "30f5d",
                      23: "1f272",
                      24: "3ec74",
                      25: "28227",
                      26: "b0f86",
                      27: "a8462",
                      28: "87252",
                      29: "60480",
                      30: "b3631",
                      31: "efaf6",
                      32: "16492",
                      34: "95680",
                      35: "62d0b",
                      36: "a5370",
                      37: "1c571",
                      38: "a1d23",
                      39: "88c0a",
                      40: "046c3",
                      41: "26287",
                      42: "c47a4",
                      43: "b5f1d",
                      44: "46820",
                      45: "d5858",
                      46: "0eaa0",
                      47: "5f6b2",
                      48: "f28e4",
                      49: "3de69",
                      50: "ef20a",
                      55: "d63da",
                      56: "16210",
                      58: "501dc",
                      59: "1c9a4",
                      60: "efb3d",
                      61: "1185b",
                      62: "11cd5",
                      63: "a839a",
                      65: "90c1a",
                      66: "c4c99",
                      67: "0f7ce",
                      68: "148ca",
                      69: "4f879",
                      71: "dad02",
                      72: "f36a8",
                      73: "80873",
                      74: "a8468",
                      75: "c4d8b",
                      76: "554bf",
                      77: "ea548",
                      78: "8eb2b",
                      79: "af62f",
                      80: "086ba",
                      81: "551a9",
                      82: "a89f5",
                      83: "4cb44",
                      84: "bb2f8",
                      85: "b88cc",
                      86: "6d438",
                      87: "e0895",
                      88: "56885",
                      89: "2c713",
                      90: "47384",
                      91: "7d6f2",
                      92: "26620",
                      93: "7800d",
                      94: "49e69",
                      95: "551fb",
                      96: "1fd46",
                      97: "06d04",
                      98: "368d2",
                      99: "53894",
                      100: "10ed8",
                      101: "64260",
                      102: "798ab",
                      103: "fde2c",
                      104: "9892f",
                      106: "c735b",
                      107: "d40f5",
                      108: "74ab5",
                      109: "06b87",
                      110: "8af88",
                      111: "c524f",
                      113: "5ff24",
                      116: "30114",
                      117: "03bc7",
                      118: "54ca6",
                      119: "99a4c",
                      120: "8c820",
                      121: "f593d",
                      122: "ef610",
                      123: "95bbe",
                      124: "b5a4d",
                      125: "d9d66",
                      126: "ea585",
                      127: "9762c",
                      128: "4fe5d",
                      129: "5f9ae",
                      130: "cb2c1",
                      131: "140e0",
                      132: "edd96",
                      133: "4e45c",
                      134: "08ead",
                      135: "13f0e",
                      136: "a155a",
                      137: "a57bc",
                      138: "fc9e0",
                      139: "4760c",
                      140: "32599",
                      143: "302ef",
                      144: "ce88b",
                      145: "53720",
                      146: "8b224",
                      147: "2b70e",
                      148: "30931",
                      149: "971ec",
                      150: "438c4",
                      151: "3f50f",
                      152: "157bc",
                      153: "6657e",
                      154: "dd5ad",
                      155: "4deee",
                      156: "b8ed0",
                      157: "815bf",
                      158: "99e27",
                      159: "0c28f",
                      160: "12772",
                      161: "7f3cd",
                      162: "8371b",
                      163: "d6564",
                      164: "f2cb0",
                      165: "47e49",
                      166: "9d06b",
                      167: "845ee",
                      168: "3c9be",
                      169: "a8e06",
                      170: "4027f",
                      171: "fcfda",
                      172: "93347",
                      173: "f2c00",
                      174: "69b05",
                      175: "1b41a",
                      176: "9a0a0",
                      177: "1efb4",
                      178: "774c2",
                      179: "2c094",
                      180: "4c284",
                      181: "b1524",
                      182: "6e42a",
                      183: "735ce",
                      184: "b5f1e",
                      185: "489a8",
                      186: "06c76",
                      187: "3525e",
                      188: "845a8",
                      189: "42be5",
                      190: "ec07b",
                      191: "50418",
                      192: "a7832",
                      193: "d3fbf",
                      194: "0bcc6",
                      195: "a9aa5",
                      197: "af95f",
                      198: "c10ae",
                      199: "3df31",
                      200: "69c0a",
                      201: "cc949",
                      202: "0729b",
                      203: "c745d",
                      204: "39b0f",
                      205: "accd8",
                      206: "667fd",
                      207: "92057",
                      208: "9105a",
                      209: "fa5a3",
                      210: "da78d",
                      211: "ff45f",
                      212: "c3dab",
                      213: "1eadb",
                      214: "5cd2c",
                      215: "26a6c",
                      216: "1deb6",
                      217: "5cab8",
                      218: "91c60",
                      219: "e0420",
                      220: "0cc8f",
                      221: "5bcd1",
                      222: "33748",
                      223: "baca2",
                      224: "8cf93",
                      225: "cc880",
                      226: "4652a",
                      227: "b7e0a",
                      228: "edbef",
                      229: "9037a",
                      230: "a5945",
                      231: "c13af",
                      232: "bd0fe",
                      233: "10b03",
                      234: "a8937",
                      235: "972b4",
                      236: "0bd48",
                      237: "325f6",
                      238: "574a2",
                      239: "fa627",
                      240: "d43d2",
                      243: "2b542",
                      246: "78962",
                      247: "54630",
                      248: "4fcaa",
                      249: "9ecab",
                      250: "d6e30",
                      251: "5b2ee",
                      252: "7a841",
                      253: "cee22",
                      254: "c8645",
                      255: "93782",
                      280: "e0d24",
                      281: "e83cf",
                      283: "eb737",
                      284: "b08de",
                      287: "c07a5",
                      288: "04743",
                      289: "41e77",
                      290: "00cf0",
                      291: "fae4d",
                      292: "1021b",
                      293: "004c2",
                      299: "25841",
                      300: "99b4b",
                      301: "dff93",
                      302: "82da5",
                      303: "9fff0",
                      304: "87b21",
                      306: "77615",
                      307: "ad078",
                      308: "a2d41",
                      309: "26030",
                      310: "61d0b",
                      311: "2a579",
                      313: "9fc54",
                      314: "e1bc9",
                      315: "f0675",
                      316: "e1b35",
                      317: "110e0",
                      318: "6ada9",
                      319: "06727",
                      320: "6eb2a",
                      321: "ced0b",
                      322: "2d000",
                      323: "93ff8",
                      324: "9cad8",
                      325: "5c1db",
                      326: "694d7",
                      327: "94587",
                      328: "0782a",
                      329: "6324a",
                      330: "fd69b",
                      331: "ea58d",
                      332: "c5f14",
                      333: "58a7c",
                      336: "cd85b",
                      337: "5d565",
                      338: "3a798",
                      339: "0b8bd",
                      340: "72293",
                      341: "4ef07",
                      342: "48a20",
                      344: "464df",
                      345: "ae6cc",
                      346: "96b5b",
                      347: "c1632",
                      348: "953a0",
                      349: "fd212",
                      350: "7b8c7",
                      351: "62d9b",
                      352: "403a9",
                      353: "be451",
                      354: "08793",
                      355: "896da",
                      356: "21537",
                      357: "17f0f",
                      358: "08cee",
                      359: "1935b",
                      360: "f5a80",
                      361: "776c9",
                      362: "c89fa",
                      363: "169ee",
                      364: "f3e88",
                      365: "c9d81",
                      366: "06418",
                      367: "212ce",
                      368: "b8c36",
                      369: "36614",
                      370: "27065",
                      371: "7057f",
                      372: "1b399",
                      373: "c8e5e",
                      374: "8387f",
                      375: "e34f6",
                      376: "ebbbb",
                      377: "9e3b6",
                      378: "c3f3d",
                      381: "a9a31",
                      382: "7e39c",
                      383: "65150",
                      384: "ad95f",
                      385: "47dbe",
                      386: "e41a4",
                      387: "07b8a",
                      388: "ddb4e",
                      389: "52278",
                      390: "2a3b5",
                      391: "8f7c1",
                      392: "5afe4",
                      393: "7890e",
                      394: "09baa",
                      395: "c38cb",
                      396: "97a5c",
                      397: "c8454",
                      398: "9293e",
                      399: "c1f97",
                      400: "f891d",
                      401: "70ec4",
                      402: "c7e45",
                      403: "f856d",
                      404: "431f7",
                      405: "10f3c",
                      406: "bad9d",
                      407: "716a1",
                      408: "d7410",
                      409: "b83c3",
                      410: "e03e1",
                      411: "3eeac",
                      412: "66975",
                      413: "e2d26",
                      414: "ababc",
                      415: "f984c",
                      416: "6cd66",
                      417: "998ec",
                      418: "abcbb",
                      419: "bffb0",
                      420: "d45f6",
                      421: "21c8d",
                      422: "0dbd5",
                      423: "d5857",
                      424: "07d02",
                      425: "fd1fd",
                      426: "4203b",
                      428: "b8989",
                      429: "f43bf",
                      441: "55703",
                      442: "5fd83",
                      443: "d70e8",
                      444: "985fd",
                      445: "afd87",
                      446: "339ba",
                      447: "d0201",
                      453: "cac99",
                      454: "8cce4",
                      455: "23bfe",
                      456: "1e530",
                      459: "6daf1",
                      460: "ceb98",
                      463: "9e6cf",
                      464: "4de77",
                      466: "446e8",
                      468: "f62e8",
                      477: "2cd05",
                      478: "64678",
                      479: "896f5",
                      480: "3c11b",
                      481: "840c2",
                      482: "8023f",
                      484: "3488e",
                      485: "3f813",
                      486: "c1022",
                      487: "7ecd6",
                      488: "0f139",
                      489: "d1cce",
                      491: "0aa93",
                      493: "a656f",
                      494: "cfe48",
                      495: "1c4b1",
                      499: "77fbc",
                      501: "3ad8a",
                      502: "580e6",
                      503: "0af49",
                      504: "053bd",
                      505: "fbcd2",
                      506: "14a20",
                      513: "2ee54",
                      514: "bea46",
                      515: "ff170"
                  }[e] + ".js"
              }(e);
              var s = new Error;
              r = function(n) {
                  u.onerror = u.onload = null,
                  clearTimeout(d);
                  var t = c[e];
                  if (0 !== t) {
                      if (t) {
                          var o = n && ("load" === n.type ? "missing" : n.type)
                            , a = n && n.target && n.target.src;
                          s.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")",
                          s.name = "ChunkLoadError",
                          s.type = o,
                          s.request = a,
                          t[1](s)
                      }
                      c[e] = void 0
                  }
              }
              ;
              var d = setTimeout((function() {
                  r({
                      type: "timeout",
                      target: u
                  })
              }
              ), 12e4);
              u.onerror = u.onload = r,
              document.head.appendChild(u)
          }
      return Promise.all(n)
  }
  ,
  a.m = e,
  a.c = t,
  a.d = function(e, n, t) {
      a.o(e, n) || Object.defineProperty(e, n, {
          enumerable: !0,
          get: t
      })
  }
  ,
  a.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }
  ,
  a.t = function(e, n) {
      if (1 & n && (e = a(e)),
      8 & n)
          return e;
      if (4 & n && "object" == typeof e && e && e.__esModule)
          return e;
      var t = Object.create(null);
      if (a.r(t),
      Object.defineProperty(t, "default", {
          enumerable: !0,
          value: e
      }),
      2 & n && "string" != typeof e)
          for (var o in e)
              a.d(t, o, function(n) {
                  return e[n]
              }
              .bind(null, o));
      return t
  }
  ,
  a.n = function(e) {
      var n = e && e.__esModule ? function() {
          return e.default
      }
      : function() {
          return e
      }
      ;
      return a.d(n, "a", n),
      n
  }
  ,
  a.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
  }
  ,
  a.p = "https://a.msstatic.com/huya/main3/",
  a.oe = function(e) {
      throw console.error(e),
      e
  }
  ;
  var i = window.HUYA_MAIN_APP_WEBPACK_JSONP = window.HUYA_MAIN_APP_WEBPACK_JSONP || []
    , r = i.push.bind(i);
  i.push = n,
  i = i.slice();
  for (var u = 0; u < i.length; u++)
      n(i[u]);
  var s = r;
  a(a.s = 192)
}({
  0: function(e, n, t) {
      "use strict";
      t.r(n);
      t(47);
      var o = t(31)
        , c = t(40)
        , a = t.n(c)
        , i = t(2)
        , r = t(3)
        , u = t(6)
        , s = t.n(u)
        , d = t(27)
        , l = t.n(d)
        , m = t(5)
        , f = t.n(m)
        , h = function(e) {
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
        , p = t(8);
      function g(e) {
          return "function" == typeof e
      }
      function k(e) {
          return "string" == typeof e
      }
      var v, b = {};
      function y(e) {
          var n = $.extend({
              type: "FLASH",
              canIuseH5: !1
          }, e)
            , t = n.type
            , o = "H5" === t
            , c = "FLASH" === t
            , a = b[t]()
            , u = new p.a
            , d = new p.a;
          d.on("reg", (function(e) {
              if (o)
                  e.on("all", (function() {
                      u.emit.apply(u, arguments)
                  }
                  ));
              else if (c) {
                  var n = "TT_PLAYER_FLASH_EVENT_LISTENER_" + Math.floor(1e10 * Math.random());
                  window[n] = function(e) {
                      try {
                          u.emit(e.jsKey, e)
                      } catch (e) {
                          try {
                              console.log(e)
                          } catch (e) {}
                      }
                  }
                  ;
                  try {
                      e.registerCallBack("all", n)
                  } catch (e) {}
              }
          }
          ));
          var l, m = null, v = (l = $.Deferred(),
          d.on("initComplete", (function(e) {
              l.resolveWith(u, [m = e])
          }
          )),
          function(e) {
              return l.done(w(e)),
              "resolved" === l.state()
          }
          ), y = function() {
              var e = $.Deferred();
              return u.on("gamelivePubTextInitComplete", (function() {
                  e.resolveWith(u, [m])
              }
              )),
              function(n) {
                  return e.done(w(n)),
                  "resolved" === e.state()
              }
          }(), _ = function() {
              var e = $.Deferred();
              return u.on("videoOnLoad", (function() {
                  e.resolveWith(u, [m])
              }
              )),
              function(n) {
                  return e.done(w(n)),
                  "resolved" === e.state()
              }
          }(), P = function(e, n) {
              var t;
              if (m && e && k(e))
                  return o ? g(m[e]) ? t = m[e](n) : g(m.callByJs) && (t = m.callByJs(e, n)) : c && (t = m.callAs(e, n)),
                  t
          }, T = a.then(), L = 0;
          return a.done((function() {
              o ? L ? h(d) : setTimeout((function() {
                  h(d)
              }
              ), 0) : c && function(e, n) {
                  var t = hyPlayerConfig.WEBYYSWF
                    , o = (hyPlayerConfig.WEBYYHOST,
                  hyPlayerConfig.vappid)
                    , c = s.a.flashDomain + s.a.flashVersion + "/main.swf";
                  "2" == i.default.liveSourceType && (o = 10507);
                  var a = f.a.parseQueryString(location.search);
                  window.jsTime = (new Date).getTime();
                  var u = "";
                  try {
                      u = sessionStorage.getItem("ya_eid")
                  } catch (e) {
                      u = f.a.getCookieVal("ya_eid")
                  }
                  var d, l = {
                      topSid: i.default.id,
                      subSid: i.default.sid,
                      pyyid: r.default.yyid,
                      pnick: r.default.nick,
                      eu: r.default.lp,
                      profileRoom: i.default.profileRoom,
                      freezeLevel: r.default.freezeLevel,
                      type: t,
                      _yyAuth: "12",
                      rso: a.promoter || a.rso || f.a.getCookieVal("ya_rso") || "",
                      rso_desc: a.rso_desc || "",
                      from: a.from || "",
                      vappid: o,
                      gameId: i.default.gid,
                      furl: encodeURIComponent(document.referrer),
                      referer: encodeURIComponent(location.href),
                      ref: u,
                      pageFull: 1,
                      iSourceType: i.default.liveSourceType,
                      screenType: i.default.screenType,
                      normalpub: 1,
                      avatarImg: r.default.avatar,
                      isEmbed: !!window.IS_UNION,
                      canIuseH5: n.canIuseH5,
                      isUnion: !!f.a.getCookieVal("promoter"),
                      isPayRoom: i.default.isPayRoom,
                      isSecret: i.default.isSecret,
                      playerConfig: encodeURIComponent(s.a.playerConfig),
                      isForeign: TT.isForeign
                  };
                  function m(e) {
                      var n = this;
                      $("#liveRoomObj").html('<div id="flashRoomObj"></div>'),
                      $.extend(!0, this, e),
                      window.initComplete = function() {
                          n.init()
                      }
                      ,
                      this.load()
                  }
                  a.share_by && a.share_fm && (l.platform = {
                      weixin: 2,
                      pengyouquan: 1,
                      weibo: 3,
                      qq: 4,
                      kongjian: 5,
                      tieba: 6,
                      lianjie: 7
                  }[a.share_fm] || 7,
                  l.platform = "share-" + l.platform),
                  i.default.isReplay && $.extend(l, {
                      replay: 1,
                      isEu: !1,
                      doJoin: 0
                  }),
                  m.prototype = {
                      swfPath: "",
                      swfVs: "10.1",
                      swfvar: null,
                      id: "flashRoomObj",
                      swfSetting: {
                          quality: "high",
                          bgcolor: "#000000",
                          allowScriptAccess: "always",
                          allowFullScreen: "true",
                          allowFullScreenInteractive: "true",
                          wmode: "opaque",
                          menu: "false"
                      },
                      type: "flash",
                      load: function() {
                          var e = this;
                          return window.swfobject && swfobject.hasFlashPlayerVersion(e.swfVs) ? (swfobject.embedSWF(e.swfPath, e.id, "100%", "100%", e.swfVs, null, e.swfvar, e.swfSetting, {
                              name: e.id
                          }, (function(e) {
                              e && e.ref && "onload"in e.ref && (e.ref.onload = function() {}
                              ),
                              huyacreateObject.apply(this, arguments)
                          }
                          ), huyaflashCallback),
                          this) : this
                      },
                      init: function() {
                          var n = this;
                          n.getMovie().callAs("addJsKey", !0),
                          e.emit("reg", n.getMovie()),
                          e.emit("initComplete", n.getMovie())
                      },
                      getMovie: function() {
                          return d || (d = $.browser.msie ? window[this.id] : document[this.id])
                      }
                  },
                  window.playerFlashGetStreamInfo = function() {
                      return hyPlayerConfig.stream
                  }
                  ,
                  new m({
                      swfPath: c,
                      swfvar: l
                  })
              }(d, {
                  canIuseH5: n.canIuseH5
              })
          }
          )),
          L = 1,
          $.extend(u, {
              type: t,
              isH5: o,
              isFlash: c,
              onload: function(e) {
                  return T.done(w(e)),
                  "resolved" === T.state()
              },
              initComplete: v,
              ready: y,
              videoOnLoad: _,
              call: P,
              get: function(e) {
                  if (m && k(e))
                      return m[e]
              },
              getMyInfo: function() {
                  if (y()) {
                      var e = P("getMyInfo");
                      return e ? {
                          uid: e.lUid || e.uid,
                          nick: e.sNick || e.nickname
                      } : null
                  }
              }
          }),
          u
      }
      function w(e) {
          return function() {
              if ("function" == typeof e)
                  try {
                      e.apply(this, arguments)
                  } catch (e) {
                      try {
                          console.log(e)
                      } catch (e) {}
                  }
          }
      }
      v = a()({
          gid: i.default.gid,
          pid: r.default.lp
      }),
      b.H5 = function() {
          var e, n;
          return (e = document.createElement("link")).rel = "stylesheet",
          e.href = v.css,
          document.getElementsByTagName("head")[0].appendChild(e),
          n = v.js,
          $.ajax({
              url: n,
              dataType: "script",
              cache: !0
          })
      }
      ,
      b.FLASH = function() {
          return new $.Deferred((function(e) {
              t.e(198).then(t.t.bind(null, 1468, 7)).then((function() {
                  e.resolve()
              }
              ))
          }
          ))
      }
      ,
      y.TYPE_H5 = "H5",
      y.TYPE_FLASH = "FLASH";
      var _ = y;
      function P(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, o = new Array(n); t < n; t++)
              o[t] = e[t];
          return o
      }
      var T, L, M = Object(o.a)({
          forceParamH5: "playerh5=1",
          forceParamFlash: "playerflash=1",
          errorStorageKey: "h5ErrorTime"
      }), S = (L = 2,
      function(e) {
          if (Array.isArray(e))
              return e
      }(T = M) || function(e, n) {
          var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != t) {
              var o, c, a = [], i = !0, r = !1;
              try {
                  for (t = t.call(e); !(i = (o = t.next()).done) && (a.push(o.value),
                  !n || a.length !== n); i = !0)
                      ;
              } catch (e) {
                  r = !0,
                  c = e
              } finally {
                  try {
                      i || null == t.return || t.return()
                  } finally {
                      if (r)
                          throw c
                  }
              }
              return a
          }
      }(T, L) || function(e, n) {
          if (e) {
              if ("string" == typeof e)
                  return P(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? P(e, n) : void 0
          }
      }(T, L) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()), C = S[0], O = S[1], R = new _({
          type: C ? _.TYPE_H5 : _.TYPE_FLASH,
          canIuseH5: O
      }), E = window.TT_LIVE_TIMING || {};
      E.playerLoadStart = (new Date).getTime(),
      window.performanceInfo.firstScreenTime = E.playerLoadStart,
      window.performanceInfo.subPageview = "room",
      window.performanceInfo._hmt.push(["reportApiTime", "huya-main-room", "end", E.playerLoadStart]),
      R.isFlash && R.on("flashReportProductEvent", (function(e) {
          try {
              ya.reportProductEvent(e.param)
          } catch (e) {}
      }
      )),
      R.onload((function() {
          E.videoLoadStart = E.playerLoadEnd = (new Date).getTime()
      }
      )),
      R.videoOnLoad((function() {
          E.videoLoadEnd = (new Date).getTime()
      }
      )),
      R.isH5 && R.on("playerError", (function() {
          if (window.localStorage) {
              var e = localStorage.getItem("h5ErrorTime")
                , n = (new Date).getTime();
              e && n - e > 864e5 && localStorage.setItem("h5ErrorTime", n)
          }
          -1 === location.search.indexOf("playerh5=1") && (location.href = location.href + (-1 != location.search.indexOf("?") ? "&" : "?") + "playerflash=1")
      }
      )),
      R.displayMode = 0,
      R.on("pageFullScreen", (function(e) {
          var n = e.param.flag;
          n != R.displayMode && R.emit("displayModeChange", R.displayMode = n)
      }
      )),
      R.initComplete((function() {
          try {
              TT.login.check((function(e) {
                  R.call("checkLogin", e)
              }
              ))
          } catch (e) {}
      }
      ));
      n.default = window.TTP = R
  },
  1: function(e, n, t) {
      "use strict";
      var o = t(2)
        , c = t(0)
        , a = t(16)
        , i = t(4)
        , r = t.n(i);
      n.a = new function() {
          var e = new $.Deferred((function(e) {
              o.default.isOn || o.default.isReplay ? (c.default.videoOnLoad((function() {
                  e.resolve()
              }
              )),
              setTimeout((function() {
                  e.resolve()
              }
              ), 1500)) : setTimeout((function() {
                  e.resolve()
              }
              ), 16)
          }
          ))
            , n = e.then()
            , t = $.when(new $.Deferred((function(e) {
              $(window).on("load", (function() {
                  e.resolve()
              }
              )),
              setTimeout((function() {
                  e.resolve()
              }
              ), 5e3)
          }
          )), e.then());
          return $.extend(this, {
              videoOnLoad: function(e) {
                  return n.done((function() {
                      a.default.push(e)
                  }
                  ))
              },
              onload: function(e) {
                  return t.done((function() {
                      a.default.push(e)
                  }
                  ))
              },
              lazyLoad: function(e) {
                  if (e && ("function" == typeof e || "function" == typeof e.executor)) {
                      var o, c, i;
                      "function" == typeof e ? o = e : (o = e.executor,
                      c = e.force,
                      i = e.type);
                      var u = r.a.once((function() {
                          return new $.Deferred((function(e) {
                              o(e.resolve, e.reject)
                          }
                          )).promise()
                      }
                      ));
                      "function" == typeof c && a.default.push((function() {
                          c(u)
                      }
                      )),
                      "VIDEO" === i ? n.done((function() {
                          a.default.push(u)
                      }
                      )) : t.done((function() {
                          a.default.push(u)
                      }
                      ))
                  }
              }
          })
      }
  },
  10: function(e, n, t) {
      localStorage.getItem("HUYA_DEBUG") || function() {
          function e(e) {
              e.preventDefault()
          }
          Object.keys(console).forEach((function(e) {
              "function" == typeof console[e] && (console[e] = function() {}
              )
          }
          )),
          window.addEventListener("unhandledrejection", e),
          window.addEventListener("error", e)
      }()
  },
  11: function(e, n, t) {
      "use strict";
      t(10);
      function o(e) {
          var n = c((function() {
              return new $.Deferred((function(n) {
                  e.executor(n.resolve, n.reject)
              }
              )).promise()
          }
          ));
          e.force(n),
          e.trigger || (e.trigger = function(e) {
              $(window).on("load", e),
              setTimeout(e, 3500)
          }
          ),
          e.trigger(n)
      }
      function c(e) {
          var n, t;
          return function() {
              return t || (t = !0,
              n = e.apply(this, arguments)),
              n
          }
      }
      o({
          executor: function(e) {
              window.TT_ROOM_DATA || t.e(291).then(t.t.bind(null, 1466, 7)).then(e)
          },
          force: function(e) {}
      }),
      o({
          executor: function(e) {
              Promise.all([t.e(16), t.e(14), t.e(204)]).then(t.bind(null, 97)).then((function(n) {
                  var t = n.default;
                  e(t)
              }
              ))
          },
          force: function(e) {
              var n = [];
              function t(e) {
                  e && (n = n.concat(e))
              }
              TT.event.on("TT_ROOM_ENTRANCE_EXPOSURE", t),
              TT.event.one("TT_ROOM_ENTRANCE_EXPOSURE", (function() {
                  e().done((function(e) {
                      setTimeout((function() {
                          e.add(n),
                          n = null,
                          TT.event.off("TT_ROOM_ENTRANCE_EXPOSURE", t),
                          TT.event.on("TT_ROOM_ENTRANCE_EXPOSURE", e.add)
                      }
                      ), 0)
                  }
                  ))
              }
              ))
          }
      });
      var a = navigator.userAgent.toLowerCase();
      /msie/.test(a) && !/opera/.test(a) || o({
          executor: function() {
              Promise.all([t.e(10), t.e(89), t.e(506)]).then(t.bind(null, 1467))
          },
          force: function(e) {
              e()
          }
      });
      var i = {
          normal: "//a.msstatic.com/huya/main/assets/img/default_avatar.jpg",
          "84x84": "//a.msstatic.com/huya/main/assets/img/default/84x84.jpg",
          "240x360": "//a.msstatic.com/huya/main/assets/img/default/240x360.jpg",
          "338x190": "//a.msstatic.com/huya/main/assets/img/default/338x190.jpg",
          "280x100": "//a.msstatic.com/huya/main/assets/img/default/280x100.jpg",
          "330x210": "//a.msstatic.com/huya/main/assets/img/default/330x210.jpg",
          "160x100": "//a.msstatic.com/huya/main/assets/img/default/160x100.jpg",
          "195x70": "//a.msstatic.com/huya/main/assets/img/default/195x70.jpg",
          pcgame: "//a.msstatic.com/huya/main/assets/img/default_game_pc.jpg",
          vhuyagif: "//v.huya.com/style/img/editor-avatar.gif",
          special: "-"
      };
      document.addEventListener("error", (function(e) {
          var n = e.target
            , t = e.target.getAttribute("data-default-img")
            , o = e.target.getAttribute("data-default-url") || i.normal;
          "img" === n.tagName.toLowerCase() && t && (i.hasOwnProperty(t) && (n.src = "special" == t ? o : i[t]),
          n.onerror = null)
      }
      ), !0),
      setTimeout((function() {
          Promise.all([t.e(11), t.e(15), t.e(14), t.e(177), t.e(176), t.e(175), t.e(178), t.e(129)]).then(t.t.bind(null, 87, 7)).then((function(e) {
              var n = e.createFeedbackerSingleInstance;
              window.TT_PROFILE_INFO ? n({
                  anchorId: window.TT_PROFILE_INFO.lp
              }) : n()
          }
          )),
          Promise.all([t.e(0), t.e(1), t.e(11)]).then(t.t.bind(null, 26, 7)).then((function(e) {
              e.default.load("udbDeviceFinger").then((function() {
                  window.initFingerprint && window.initFingerprint()
              }
              ))
          }
          ))
      }
      ), 1200);
      var r = c((function() {
          return new Promise((function(e) {
              Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(24), t.e(25), t.e(459)]).then(t.bind(null, 291)).then((function(n) {
                  setTimeout((function() {
                      return e(n)
                  }
                  ), 100)
              }
              ))
          }
          ))
      }
      ));
      TT.event.on("TT_ALERT_MESSAGE", (function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info";
          r().then((function(t) {
              var o = t.default;
              n && "function" == typeof o[n] ? o[n]("".concat(e)) : o.info("".concat(e))
          }
          ))
      }
      )),
      window.alert = function(e, n) {
          TT.event.emit("TT_ALERT_MESSAGE", e, n)
      }
      ;
      try {
          if (window.HUYA_SSR_TYPE && localStorage.getItem("HUYA_SSR_FLAG_STATUS")) {
              var u = document.createElement("span");
              Object.assign(u.style, {
                  position: "fixed",
                  right: "20px",
                  bottom: "10px",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "red",
                  zIndex: 9999
              }),
              document.body.appendChild(u)
          }
      } catch (e) {}
  },
  12: function(e, n, t) {
      "use strict";
      t.r(n),
      t.d(n, "__extends", (function() {
          return c
      }
      )),
      t.d(n, "__assign", (function() {
          return a
      }
      )),
      t.d(n, "__rest", (function() {
          return i
      }
      )),
      t.d(n, "__decorate", (function() {
          return r
      }
      )),
      t.d(n, "__param", (function() {
          return u
      }
      )),
      t.d(n, "__metadata", (function() {
          return s
      }
      )),
      t.d(n, "__awaiter", (function() {
          return d
      }
      )),
      t.d(n, "__generator", (function() {
          return l
      }
      )),
      t.d(n, "__createBinding", (function() {
          return m
      }
      )),
      t.d(n, "__exportStar", (function() {
          return f
      }
      )),
      t.d(n, "__values", (function() {
          return h
      }
      )),
      t.d(n, "__read", (function() {
          return p
      }
      )),
      t.d(n, "__spread", (function() {
          return g
      }
      )),
      t.d(n, "__spreadArrays", (function() {
          return k
      }
      )),
      t.d(n, "__spreadArray", (function() {
          return v
      }
      )),
      t.d(n, "__await", (function() {
          return b
      }
      )),
      t.d(n, "__asyncGenerator", (function() {
          return y
      }
      )),
      t.d(n, "__asyncDelegator", (function() {
          return w
      }
      )),
      t.d(n, "__asyncValues", (function() {
          return _
      }
      )),
      t.d(n, "__makeTemplateObject", (function() {
          return P
      }
      )),
      t.d(n, "__importStar", (function() {
          return L
      }
      )),
      t.d(n, "__importDefault", (function() {
          return M
      }
      )),
      t.d(n, "__classPrivateFieldGet", (function() {
          return S
      }
      )),
      t.d(n, "__classPrivateFieldSet", (function() {
          return C
      }
      ));
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      var o = function(e, n) {
          return (o = Object.setPrototypeOf || {
              __proto__: []
          }instanceof Array && function(e, n) {
              e.__proto__ = n
          }
          || function(e, n) {
              for (var t in n)
                  Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
          }
          )(e, n)
      };
      function c(e, n) {
          if ("function" != typeof n && null !== n)
              throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
          function t() {
              this.constructor = e
          }
          o(e, n),
          e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
          new t)
      }
      var a = function() {
          return (a = Object.assign || function(e) {
              for (var n, t = 1, o = arguments.length; t < o; t++)
                  for (var c in n = arguments[t])
                      Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c]);
              return e
          }
          ).apply(this, arguments)
      };
      function i(e, n) {
          var t = {};
          for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var c = 0;
              for (o = Object.getOwnPropertySymbols(e); c < o.length; c++)
                  n.indexOf(o[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[c]) && (t[o[c]] = e[o[c]])
          }
          return t
      }
      function r(e, n, t, o) {
          var c, a = arguments.length, i = a < 3 ? n : null === o ? o = Object.getOwnPropertyDescriptor(n, t) : o;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              i = Reflect.decorate(e, n, t, o);
          else
              for (var r = e.length - 1; r >= 0; r--)
                  (c = e[r]) && (i = (a < 3 ? c(i) : a > 3 ? c(n, t, i) : c(n, t)) || i);
          return a > 3 && i && Object.defineProperty(n, t, i),
          i
      }
      function u(e, n) {
          return function(t, o) {
              n(t, o, e)
          }
      }
      function s(e, n) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
              return Reflect.metadata(e, n)
      }
      function d(e, n, t, o) {
          return new (t || (t = Promise))((function(c, a) {
              function i(e) {
                  try {
                      u(o.next(e))
                  } catch (e) {
                      a(e)
                  }
              }
              function r(e) {
                  try {
                      u(o.throw(e))
                  } catch (e) {
                      a(e)
                  }
              }
              function u(e) {
                  var n;
                  e.done ? c(e.value) : (n = e.value,
                  n instanceof t ? n : new t((function(e) {
                      e(n)
                  }
                  ))).then(i, r)
              }
              u((o = o.apply(e, n || [])).next())
          }
          ))
      }
      function l(e, n) {
          var t, o, c, a, i = {
              label: 0,
              sent: function() {
                  if (1 & c[0])
                      throw c[1];
                  return c[1]
              },
              trys: [],
              ops: []
          };
          return a = {
              next: r(0),
              throw: r(1),
              return: r(2)
          },
          "function" == typeof Symbol && (a[Symbol.iterator] = function() {
              return this
          }
          ),
          a;
          function r(a) {
              return function(r) {
                  return function(a) {
                      if (t)
                          throw new TypeError("Generator is already executing.");
                      for (; i; )
                          try {
                              if (t = 1,
                              o && (c = 2 & a[0] ? o.return : a[0] ? o.throw || ((c = o.return) && c.call(o),
                              0) : o.next) && !(c = c.call(o, a[1])).done)
                                  return c;
                              switch (o = 0,
                              c && (a = [2 & a[0], c.value]),
                              a[0]) {
                              case 0:
                              case 1:
                                  c = a;
                                  break;
                              case 4:
                                  return i.label++,
                                  {
                                      value: a[1],
                                      done: !1
                                  };
                              case 5:
                                  i.label++,
                                  o = a[1],
                                  a = [0];
                                  continue;
                              case 7:
                                  a = i.ops.pop(),
                                  i.trys.pop();
                                  continue;
                              default:
                                  if (!(c = i.trys,
                                  (c = c.length > 0 && c[c.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                      i = 0;
                                      continue
                                  }
                                  if (3 === a[0] && (!c || a[1] > c[0] && a[1] < c[3])) {
                                      i.label = a[1];
                                      break
                                  }
                                  if (6 === a[0] && i.label < c[1]) {
                                      i.label = c[1],
                                      c = a;
                                      break
                                  }
                                  if (c && i.label < c[2]) {
                                      i.label = c[2],
                                      i.ops.push(a);
                                      break
                                  }
                                  c[2] && i.ops.pop(),
                                  i.trys.pop();
                                  continue
                              }
                              a = n.call(e, i)
                          } catch (e) {
                              a = [6, e],
                              o = 0
                          } finally {
                              t = c = 0
                          }
                      if (5 & a[0])
                          throw a[1];
                      return {
                          value: a[0] ? a[1] : void 0,
                          done: !0
                      }
                  }([a, r])
              }
          }
      }
      var m = Object.create ? function(e, n, t, o) {
          void 0 === o && (o = t),
          Object.defineProperty(e, o, {
              enumerable: !0,
              get: function() {
                  return n[t]
              }
          })
      }
      : function(e, n, t, o) {
          void 0 === o && (o = t),
          e[o] = n[t]
      }
      ;
      function f(e, n) {
          for (var t in e)
              "default" === t || Object.prototype.hasOwnProperty.call(n, t) || m(n, e, t)
      }
      function h(e) {
          var n = "function" == typeof Symbol && Symbol.iterator
            , t = n && e[n]
            , o = 0;
          if (t)
              return t.call(e);
          if (e && "number" == typeof e.length)
              return {
                  next: function() {
                      return e && o >= e.length && (e = void 0),
                      {
                          value: e && e[o++],
                          done: !e
                      }
                  }
              };
          throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
      function p(e, n) {
          var t = "function" == typeof Symbol && e[Symbol.iterator];
          if (!t)
              return e;
          var o, c, a = t.call(e), i = [];
          try {
              for (; (void 0 === n || n-- > 0) && !(o = a.next()).done; )
                  i.push(o.value)
          } catch (e) {
              c = {
                  error: e
              }
          } finally {
              try {
                  o && !o.done && (t = a.return) && t.call(a)
              } finally {
                  if (c)
                      throw c.error
              }
          }
          return i
      }
      function g() {
          for (var e = [], n = 0; n < arguments.length; n++)
              e = e.concat(p(arguments[n]));
          return e
      }
      function k() {
          for (var e = 0, n = 0, t = arguments.length; n < t; n++)
              e += arguments[n].length;
          var o = Array(e)
            , c = 0;
          for (n = 0; n < t; n++)
              for (var a = arguments[n], i = 0, r = a.length; i < r; i++,
              c++)
                  o[c] = a[i];
          return o
      }
      function v(e, n, t) {
          if (t || 2 === arguments.length)
              for (var o, c = 0, a = n.length; c < a; c++)
                  !o && c in n || (o || (o = Array.prototype.slice.call(n, 0, c)),
                  o[c] = n[c]);
          return e.concat(o || Array.prototype.slice.call(n))
      }
      function b(e) {
          return this instanceof b ? (this.v = e,
          this) : new b(e)
      }
      function y(e, n, t) {
          if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
          var o, c = t.apply(e, n || []), a = [];
          return o = {},
          i("next"),
          i("throw"),
          i("return"),
          o[Symbol.asyncIterator] = function() {
              return this
          }
          ,
          o;
          function i(e) {
              c[e] && (o[e] = function(n) {
                  return new Promise((function(t, o) {
                      a.push([e, n, t, o]) > 1 || r(e, n)
                  }
                  ))
              }
              )
          }
          function r(e, n) {
              try {
                  (t = c[e](n)).value instanceof b ? Promise.resolve(t.value.v).then(u, s) : d(a[0][2], t)
              } catch (e) {
                  d(a[0][3], e)
              }
              var t
          }
          function u(e) {
              r("next", e)
          }
          function s(e) {
              r("throw", e)
          }
          function d(e, n) {
              e(n),
              a.shift(),
              a.length && r(a[0][0], a[0][1])
          }
      }
      function w(e) {
          var n, t;
          return n = {},
          o("next"),
          o("throw", (function(e) {
              throw e
          }
          )),
          o("return"),
          n[Symbol.iterator] = function() {
              return this
          }
          ,
          n;
          function o(o, c) {
              n[o] = e[o] ? function(n) {
                  return (t = !t) ? {
                      value: b(e[o](n)),
                      done: "return" === o
                  } : c ? c(n) : n
              }
              : c
          }
      }
      function _(e) {
          if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
          var n, t = e[Symbol.asyncIterator];
          return t ? t.call(e) : (e = h(e),
          n = {},
          o("next"),
          o("throw"),
          o("return"),
          n[Symbol.asyncIterator] = function() {
              return this
          }
          ,
          n);
          function o(t) {
              n[t] = e[t] && function(n) {
                  return new Promise((function(o, c) {
                      (function(e, n, t, o) {
                          Promise.resolve(o).then((function(n) {
                              e({
                                  value: n,
                                  done: t
                              })
                          }
                          ), n)
                      }
                      )(o, c, (n = e[t](n)).done, n.value)
                  }
                  ))
              }
          }
      }
      function P(e, n) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", {
              value: n
          }) : e.raw = n,
          e
      }
      var T = Object.create ? function(e, n) {
          Object.defineProperty(e, "default", {
              enumerable: !0,
              value: n
          })
      }
      : function(e, n) {
          e.default = n
      }
      ;
      function L(e) {
          if (e && e.__esModule)
              return e;
          var n = {};
          if (null != e)
              for (var t in e)
                  "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && m(n, e, t);
          return T(n, e),
          n
      }
      function M(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function S(e, n, t, o) {
          if ("a" === t && !o)
              throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof n ? e !== n || !o : !n.has(e))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === t ? o : "a" === t ? o.call(e) : o ? o.value : n.get(e)
      }
      function C(e, n, t, o, c) {
          if ("m" === o)
              throw new TypeError("Private method is not writable");
          if ("a" === o && !c)
              throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof n ? e !== n || !c : !n.has(e))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === o ? c.call(e, t) : c ? c.value = t : n.set(e, t),
          t
      }
  },
  13: function(e, n, t) {
      "use strict";
      (function(n) {
          var t = "undefined" == typeof window ? n : window
            , o = t.external
            , c = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/
            , a = /\bbb10\b.+?\bversion\/([\d.]+)/
            , i = /\bblackberry\b.+\bversion\/([\d.]+)/
            , r = /\bblackberry\d+\/([\d.]+)/
            , u = [["wp", function(e) {
              return -1 !== e.indexOf("windows phone ") ? /\bwindows phone (?:os )?([0-9.]+)/ : -1 !== e.indexOf("xblwp") ? /\bxblwp([0-9.]+)/ : -1 !== e.indexOf("zunewp") ? /\bzunewp([0-9.]+)/ : "windows phone"
          }
          ], ["windows", /\bwindows nt ([0-9.]+)/], ["macosx", /\bmac os x ([0-9._]+)/], ["ios", function(e) {
              return /\bcpu(?: iphone)? os /.test(e) ? /\bcpu(?: iphone)? os ([0-9._]+)/ : -1 !== e.indexOf("iph os ") ? /\biph os ([0-9_]+)/ : /\bios\b/
          }
          ], ["yunos", /\baliyunos ([0-9.]+)/], ["android", function(e) {
              return e.indexOf("android") >= 0 ? /\bandroid[ \/-]?([0-9.x]+)?/ : e.indexOf("adr") >= 0 ? e.indexOf("mqqbrowser") >= 0 ? /\badr[ ]\(linux; u; ([0-9.]+)?/ : /\badr(?:[ ]([0-9.]+))?/ : "android"
          }
          ], ["chromeos", /\bcros i686 ([0-9.]+)/], ["linux", "linux"], ["windowsce", /\bwindows ce(?: ([0-9.]+))?/], ["symbian", /\bsymbian(?:os)?\/([0-9.]+)/], ["blackberry", function(e) {
              var n = e.match(a) || e.match(i) || e.match(r);
              return n ? {
                  version: n[1]
              } : "blackberry"
          }
          ]];
          function s(e) {
              if (o)
                  try {
                      var n = o.twGetRunPath.toLowerCase()
                        , c = o.twGetSecurityID(t)
                        , a = o.twGetVersion(c);
                      if (n && -1 === n.indexOf(e))
                          return !1;
                      if (a)
                          return {
                              version: a
                          }
                  } catch (e) {}
          }
          var d = [["edgehtml", /edge\/([0-9.]+)/], ["trident", c], ["blink", function() {
              return "chrome"in t && "CSS"in t && /\bapplewebkit[\/]?([0-9.+]+)/
          }
          ], ["webkit", /\bapplewebkit[\/]?([0-9.+]+)/], ["gecko", function(e) {
              var n = e.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/);
              if (n)
                  return {
                      version: n[1] + "." + n[2]
                  }
          }
          ], ["presto", /\bpresto\/([0-9.]+)/], ["androidwebkit", /\bandroidwebkit\/([0-9.]+)/], ["coolpadwebkit", /\bcoolpadwebkit\/([0-9.]+)/], ["u2", /\bu2\/([0-9.]+)/], ["u3", /\bu3\/([0-9.]+)/]]
            , l = [["edge", /edge\/([0-9.]+)/], ["sogou", function(e) {
              return e.indexOf("sogoumobilebrowser") >= 0 ? /sogoumobilebrowser\/([0-9.]+)/ : e.indexOf("sogoumse") >= 0 || / se ([0-9.x]+)/
          }
          ], ["theworld", function() {
              var e = s("theworld");
              return void 0 !== e ? e : /theworld(?: ([\d.])+)?/
          }
          ], ["360", function(e) {
              var n = s("360se");
              return void 0 !== n ? n : -1 !== e.indexOf("360 aphone browser") ? /\b360 aphone browser \(([^\)]+)\)/ : /\b360(?:se|ee|chrome|browser)\b/
          }
          ], ["maxthon", function() {
              try {
                  if (o && (o.mxVersion || o.max_version))
                      return {
                          version: o.mxVersion || o.max_version
                      }
              } catch (e) {}
              return /\b(?:maxthon|mxbrowser)(?:[ \/]([0-9.]+))?/
          }
          ], ["micromessenger", /\bmicromessenger\/([\d.]+)/], ["qq", /\bm?qqbrowser\/([0-9.]+)/], ["green", "greenbrowser"], ["tt", /\btencenttraveler ([0-9.]+)/], ["liebao", function(e) {
              if (e.indexOf("liebaofast") >= 0)
                  return /\bliebaofast\/([0-9.]+)/;
              if (-1 === e.indexOf("lbbrowser"))
                  return !1;
              var n = void 0;
              try {
                  o && o.LiebaoGetVersion && (n = o.LiebaoGetVersion())
              } catch (e) {}
              return {
                  version: n || "-1"
              }
          }
          ], ["tao", /\btaobrowser\/([0-9.]+)/], ["coolnovo", /\bcoolnovo\/([0-9.]+)/], ["saayaa", "saayaa"], ["baidu", /\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/], ["ie", c], ["mi", /\bmiuibrowser\/([0-9.]+)/], ["opera", function(e) {
              var n = /\bopera.+version\/([0-9.ab]+)/;
              return n.test(e) ? n : /\bopr\/([0-9.]+)/
          }
          ], ["oupeng", /\boupeng\/([0-9.]+)/], ["yandex", /yabrowser\/([0-9.]+)/], ["ali-ap", function(e) {
              return e.indexOf("aliapp") > 0 ? /\baliapp\(ap\/([0-9.]+)\)/ : /\balipayclient\/([0-9.]+)\b/
          }
          ], ["ali-ap-pd", /\baliapp\(ap-pd\/([0-9.]+)\)/], ["ali-am", /\baliapp\(am\/([0-9.]+)\)/], ["ali-tb", /\baliapp\(tb\/([0-9.]+)\)/], ["ali-tb-pd", /\baliapp\(tb-pd\/([0-9.]+)\)/], ["ali-tm", /\baliapp\(tm\/([0-9.]+)\)/], ["ali-tm-pd", /\baliapp\(tm-pd\/([0-9.]+)\)/], ["uc", function(e) {
              return e.indexOf("ucbrowser/") >= 0 ? /\bucbrowser\/([0-9.]+)/ : e.indexOf("ubrowser/") >= 0 ? /\bubrowser\/([0-9.]+)/ : /\buc\/[0-9]/.test(e) ? /\buc\/([0-9.]+)/ : e.indexOf("ucweb") >= 0 ? /\bucweb([0-9.]+)?/ : /\b(?:ucbrowser|uc)\b/
          }
          ], ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/], ["android", function(e) {
              if (-1 !== e.indexOf("android"))
                  return /\bversion\/([0-9.]+(?: beta)?)/
          }
          ], ["blackberry", function(e) {
              var n = e.match(a) || e.match(i) || e.match(r);
              return n ? {
                  version: n[1]
              } : "blackberry"
          }
          ], ["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//], ["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/], ["firefox", /\bfirefox\/([0-9.ab]+)/], ["nokia", /\bnokiabrowser\/([0-9.]+)/]];
          e.exports = {
              device: [["nokia", function(e) {
                  return -1 !== e.indexOf("nokia ") ? /\bnokia ([0-9]+)?/ : /\bnokia([a-z0-9]+)?/
              }
              ], ["samsung", function(e) {
                  return -1 !== e.indexOf("samsung") ? /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/ : /\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
              }
              ], ["wp", function(e) {
                  return -1 !== e.indexOf("windows phone ") || -1 !== e.indexOf("xblwp") || -1 !== e.indexOf("zunewp") || -1 !== e.indexOf("windows ce")
              }
              ], ["pc", "windows"], ["ipad", "ipad"], ["ipod", "ipod"], ["iphone", /\biphone\b|\biph(\d)/], ["mac", "macintosh"], ["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/], ["hongmi", /\bhm[ \-]?([a-z0-9]+)/], ["aliyun", /\baliyunos\b(?:[\-](\d+))?/], ["meizu", function(e) {
                  return e.indexOf("meizu") >= 0 ? /\bmeizu[\/ ]([a-z0-9]+)\b/ : /\bm([0-9cx]{1,4})\b/
              }
              ], ["nexus", /\bnexus ([0-9s.]+)/], ["huawei", function(e) {
                  var n = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
                  return -1 !== e.indexOf("huawei-huawei") ? /\bhuawei\-huawei\-([a-z0-9\-]+)/ : n.test(e) ? n : /\bhuawei[ _\-]?([a-z0-9]+)/
              }
              ], ["lenovo", function(e) {
                  return -1 !== e.indexOf("lenovo-lenovo") ? /\blenovo\-lenovo[ \-]([a-z0-9]+)/ : /\blenovo[ \-]?([a-z0-9]+)/
              }
              ], ["zte", function(e) {
                  return /\bzte\-[tu]/.test(e) ? /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ : /\bzte[ _\-]?([a-su-z0-9\+]+)/
              }
              ], ["vivo", /\bvivo(?: ([a-z0-9]+))?/], ["htc", function(e) {
                  return /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e) ? /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ : /\bhtc[ _\-]?([a-z0-9 ]+)/
              }
              ], ["oppo", /\boppo[_]([a-z0-9]+)/], ["konka", /\bkonka[_\-]([a-z0-9]+)/], ["sonyericsson", /\bmt([a-z0-9]+)/], ["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/], ["lg", /\blg[\-]([a-z0-9]+)/], ["android", /\bandroid\b|\badr\b/], ["blackberry", function(e) {
                  return e.indexOf("blackberry") >= 0 ? /\bblackberry\s?(\d+)/ : "bb10"
              }
              ]],
              os: u,
              browser: l,
              engine: d,
              re_msie: c
          }
      }
      ).call(this, t(45))
  },
  16: function(e, n, t) {
      "use strict";
      t.r(n);
      var o = null
        , c = null;
      !function(e) {
          o = e.requestAnimationFrame,
          c = e.requestAnimationFrame;
          for (var n = ["webkit", "moz", "ms", "o"], t = 0; t < n.length && !o; ++t)
              o = e[n[t] + "RequestAnimationFrame"],
              c = e[n[t] + "CancelAnimationFrame"] || e[n[t] + "CancelRequestAnimationFrame"];
          var a = 0;
          o || (o = function(n, t) {
              var o = (new Date).getTime()
                , c = Math.max(0, 16 - (o - a))
                , i = e.setTimeout((function() {
                  n(o + c)
              }
              ), c);
              return a = o + c,
              i
          }
          ),
          c || (c = function(e) {
              clearTimeout(e)
          }
          )
      }(window),
      n.default = new function() {
          var e = [];
          this.push = function(t) {
              "function" == typeof t && (e.push(t),
              function t() {
                  null === n && e.length > 0 && (n = o((function() {
                      try {
                          e.shift()()
                      } catch (e) {
                          console.error(e)
                      }
                      n = null,
                      t()
                  }
                  )))
              }())
          }
          ;
          var n = null
      }
  },
  19: function(e, n, t) {
      "use strict";
      var o, c = "object" == typeof Reflect ? Reflect : null, a = c && "function" == typeof c.apply ? c.apply : function(e, n, t) {
          return Function.prototype.apply.call(e, n, t)
      }
      ;
      o = c && "function" == typeof c.ownKeys ? c.ownKeys : Object.getOwnPropertySymbols ? function(e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
      }
      : function(e) {
          return Object.getOwnPropertyNames(e)
      }
      ;
      var i = Number.isNaN || function(e) {
          return e != e
      }
      ;
      function r() {
          r.init.call(this)
      }
      e.exports = r,
      e.exports.once = function(e, n) {
          return new Promise((function(t, o) {
              function c(t) {
                  e.removeListener(n, a),
                  o(t)
              }
              function a() {
                  "function" == typeof e.removeListener && e.removeListener("error", c),
                  t([].slice.call(arguments))
              }
              k(e, n, a, {
                  once: !0
              }),
              "error" !== n && function(e, n, t) {
                  "function" == typeof e.on && k(e, "error", n, t)
              }(e, c, {
                  once: !0
              })
          }
          ))
      }
      ,
      r.EventEmitter = r,
      r.prototype._events = void 0,
      r.prototype._eventsCount = 0,
      r.prototype._maxListeners = void 0;
      var u = 10;
      function s(e) {
          if ("function" != typeof e)
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
      }
      function d(e) {
          return void 0 === e._maxListeners ? r.defaultMaxListeners : e._maxListeners
      }
      function l(e, n, t, o) {
          var c, a, i, r;
          if (s(t),
          void 0 === (a = e._events) ? (a = e._events = Object.create(null),
          e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", n, t.listener ? t.listener : t),
          a = e._events),
          i = a[n]),
          void 0 === i)
              i = a[n] = t,
              ++e._eventsCount;
          else if ("function" == typeof i ? i = a[n] = o ? [t, i] : [i, t] : o ? i.unshift(t) : i.push(t),
          (c = d(e)) > 0 && i.length > c && !i.warned) {
              i.warned = !0;
              var u = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(n) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              u.name = "MaxListenersExceededWarning",
              u.emitter = e,
              u.type = n,
              u.count = i.length,
              r = u,
              console && console.warn && console.warn(r)
          }
          return e
      }
      function m() {
          if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn),
              this.fired = !0,
              0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
      }
      function f(e, n, t) {
          var o = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: n,
              listener: t
          }
            , c = m.bind(o);
          return c.listener = t,
          o.wrapFn = c,
          c
      }
      function h(e, n, t) {
          var o = e._events;
          if (void 0 === o)
              return [];
          var c = o[n];
          return void 0 === c ? [] : "function" == typeof c ? t ? [c.listener || c] : [c] : t ? function(e) {
              for (var n = new Array(e.length), t = 0; t < n.length; ++t)
                  n[t] = e[t].listener || e[t];
              return n
          }(c) : g(c, c.length)
      }
      function p(e) {
          var n = this._events;
          if (void 0 !== n) {
              var t = n[e];
              if ("function" == typeof t)
                  return 1;
              if (void 0 !== t)
                  return t.length
          }
          return 0
      }
      function g(e, n) {
          for (var t = new Array(n), o = 0; o < n; ++o)
              t[o] = e[o];
          return t
      }
      function k(e, n, t, o) {
          if ("function" == typeof e.on)
              o.once ? e.once(n, t) : e.on(n, t);
          else {
              if ("function" != typeof e.addEventListener)
                  throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
              e.addEventListener(n, (function c(a) {
                  o.once && e.removeEventListener(n, c),
                  t(a)
              }
              ))
          }
      }
      Object.defineProperty(r, "defaultMaxListeners", {
          enumerable: !0,
          get: function() {
              return u
          },
          set: function(e) {
              if ("number" != typeof e || e < 0 || i(e))
                  throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
              u = e
          }
      }),
      r.init = function() {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
          this._eventsCount = 0),
          this._maxListeners = this._maxListeners || void 0
      }
      ,
      r.prototype.setMaxListeners = function(e) {
          if ("number" != typeof e || e < 0 || i(e))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
          return this._maxListeners = e,
          this
      }
      ,
      r.prototype.getMaxListeners = function() {
          return d(this)
      }
      ,
      r.prototype.emit = function(e) {
          for (var n = [], t = 1; t < arguments.length; t++)
              n.push(arguments[t]);
          var o = "error" === e
            , c = this._events;
          if (void 0 !== c)
              o = o && void 0 === c.error;
          else if (!o)
              return !1;
          if (o) {
              var i;
              if (n.length > 0 && (i = n[0]),
              i instanceof Error)
                  throw i;
              var r = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
              throw r.context = i,
              r
          }
          var u = c[e];
          if (void 0 === u)
              return !1;
          if ("function" == typeof u)
              a(u, this, n);
          else {
              var s = u.length
                , d = g(u, s);
              for (t = 0; t < s; ++t)
                  a(d[t], this, n)
          }
          return !0
      }
      ,
      r.prototype.addListener = function(e, n) {
          return l(this, e, n, !1)
      }
      ,
      r.prototype.on = r.prototype.addListener,
      r.prototype.prependListener = function(e, n) {
          return l(this, e, n, !0)
      }
      ,
      r.prototype.once = function(e, n) {
          return s(n),
          this.on(e, f(this, e, n)),
          this
      }
      ,
      r.prototype.prependOnceListener = function(e, n) {
          return s(n),
          this.prependListener(e, f(this, e, n)),
          this
      }
      ,
      r.prototype.removeListener = function(e, n) {
          var t, o, c, a, i;
          if (s(n),
          void 0 === (o = this._events))
              return this;
          if (void 0 === (t = o[e]))
              return this;
          if (t === n || t.listener === n)
              0 == --this._eventsCount ? this._events = Object.create(null) : (delete o[e],
              o.removeListener && this.emit("removeListener", e, t.listener || n));
          else if ("function" != typeof t) {
              for (c = -1,
              a = t.length - 1; a >= 0; a--)
                  if (t[a] === n || t[a].listener === n) {
                      i = t[a].listener,
                      c = a;
                      break
                  }
              if (c < 0)
                  return this;
              0 === c ? t.shift() : function(e, n) {
                  for (; n + 1 < e.length; n++)
                      e[n] = e[n + 1];
                  e.pop()
              }(t, c),
              1 === t.length && (o[e] = t[0]),
              void 0 !== o.removeListener && this.emit("removeListener", e, i || n)
          }
          return this
      }
      ,
      r.prototype.off = r.prototype.removeListener,
      r.prototype.removeAllListeners = function(e) {
          var n, t, o;
          if (void 0 === (t = this._events))
              return this;
          if (void 0 === t.removeListener)
              return 0 === arguments.length ? (this._events = Object.create(null),
              this._eventsCount = 0) : void 0 !== t[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete t[e]),
              this;
          if (0 === arguments.length) {
              var c, a = Object.keys(t);
              for (o = 0; o < a.length; ++o)
                  "removeListener" !== (c = a[o]) && this.removeAllListeners(c);
              return this.removeAllListeners("removeListener"),
              this._events = Object.create(null),
              this._eventsCount = 0,
              this
          }
          if ("function" == typeof (n = t[e]))
              this.removeListener(e, n);
          else if (void 0 !== n)
              for (o = n.length - 1; o >= 0; o--)
                  this.removeListener(e, n[o]);
          return this
      }
      ,
      r.prototype.listeners = function(e) {
          return h(this, e, !0)
      }
      ,
      r.prototype.rawListeners = function(e) {
          return h(this, e, !1)
      }
      ,
      r.listenerCount = function(e, n) {
          return "function" == typeof e.listenerCount ? e.listenerCount(n) : p.call(e, n)
      }
      ,
      r.prototype.listenerCount = p,
      r.prototype.eventNames = function() {
          return this._eventsCount > 0 ? o(this._events) : []
      }
  },
  192: function(e, n, t) {
      "use strict";
      t.r(n);
      t(193),
      t(20),
      t(11);
      var o = t(0)
        , c = t(2)
        , a = t(3)
        , i = t(4)
        , r = t.n(i)
        , u = t(1);
      t(62);
      u.a.videoOnLoad((function() {
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(13), t.e(26), t.e(23)]).then(t.bind(null, 66)).then((function(e) {
              new (0,
              e.default)({
                  gid: c.default.gid
              })
          }
          ))
      }
      )),
      u.a.videoOnLoad((function() {
          t.e(246).then(t.bind(null, 174))
      }
      )),
      u.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(10), t.e(12), t.e(18), t.e(19), t.e(22), t.e(24), t.e(27), t.e(28), t.e(25), t.e(32), t.e(21), t.e(66), t.e(80), t.e(79), t.e(90), t.e(71), t.e(162), t.e(195), t.e(182), t.e(157), t.e(184), t.e(188), t.e(189), t.e(194), t.e(192), t.e(146), t.e(151), t.e(153), t.e(155), t.e(159), t.e(161), t.e(163), t.e(164), t.e(166), t.e(167), t.e(147), t.e(158), t.e(174), t.e(125), t.e(190), t.e(191), t.e(183), t.e(154), t.e(156), t.e(165), t.e(193), t.e(127), t.e(123), t.e(124), t.e(136), t.e(137), t.e(138), t.e(139), t.e(140), t.e(185), t.e(160), t.e(122), t.e(134), t.e(135), t.e(152)]).then(t.t.bind(null, 175, 7)),
          t.e(71).then(t.bind(null, 168)).then((function(e) {
              var n = e.default;
              n.one("play", (function() {
                  o.default.call("shipinPause")
              }
              )),
              o.default.on("videoStatusChange", (function(e) {
                  0 == e.videoStatus && n.pause()
              }
              ))
          }
          ))
      }
      )),
      u.a.videoOnLoad((function() {
          t.e(250).then(t.bind(null, 182))
      }
      )),
      u.a.videoOnLoad((function() {
          return Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(12), t.e(21), t.e(148), t.e(149)]).then(t.t.bind(null, 176, 7))
      }
      )),
      u.a.videoOnLoad((function() {
          r.a.exposure(document.getElementById("classify-recom"), (function(e) {
              Promise.all([t.e(21), t.e(186), t.e(187)]).then(t.bind(null, 177)).then((function(e) {
                  new (0,
                  e.default)({
                      $container: $("#classify-recom"),
                      gid: c.default.gid
                  })
              }
              ))
          }
          ), -60, $("#main_col"))
      }
      )),
      u.a.onload((function() {
          t.e(20).then(t.t.bind(null, 44, 7)).then((function(e) {
              e.default.cfg[3e4] || Promise.all([t.e(20), t.e(495)]).then(t.bind(null, 272)).then((function(e) {
                  (0,
                  e.default)(a.default.lp, c.default.gid, "#J_roomGgTop", (function(e) {
                      !e && Promise.all([t.e(20), t.e(251)]).then(t.bind(null, 178)).then((function(e) {
                          (0,
                          e.default)(a.default.lp, c.default.gid, "#J_roomBd")
                      }
                      ))
                  }
                  ))
              }
              ))
          }
          )),
          t.e(252).then(t.bind(null, 179)).then((function(e) {
              (0,
              e.default)(a.default.lp, c.default.gid, "#J_roomGg1")
          }
          )),
          t.e(253).then(t.bind(null, 180)).then((function(e) {
              (0,
              e.default)(a.default.lp, c.default.gid, "#J_roomGg2")
          }
          ))
      }
      )),
      u.a.onload((function() {
          Promise.all([t.e(87), t.e(88), t.e(104), t.e(106), t.e(107), t.e(111)]).then(t.bind(null, 164)).then((function(e) {
              (0,
              e.default)({
                  roomType: 0
              })
          }
          ))
      }
      )),
      u.a.videoOnLoad((function() {
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(93)]).then(t.bind(null, 156)).then((function(e) {
              var n = e.default
                , t = null;
              c.default.isOn && (t = {
                  eid: "pageview/zhibo",
                  eid_desc: "pageview/直播间"
              }),
              c.default.isReplay && (t = {
                  eid: "pageview/replay",
                  eid_desc: "pageview/重播间"
              }),
              c.default.isOff && (t = {
                  eid: "pageview/notzhibo",
                  eid_desc: "pageview/非直播间"
              }),
              n(t)
          }
          ))
      }
      ))
  },
  193: function(e, n, t) {},
  2: function(e, n, t) {
      "use strict";
      t.r(n),
      n.default = window.TT_ROOM_DATA
  },
  20: function(e, n, t) {},
  22: function(e, n, t) {
      "use strict";
      var o = t(46)
        , c = t(13)
        , a = (navigator.userAgent || "") + " " + (navigator.appVersion || "") + " " + (navigator.vendor || "")
        , i = new o(c);
      function r(e) {
          var n = i.parse(e)
            , t = function(e) {
              if (!c.re_msie.test(e))
                  return null;
              var n, t, o = void 0, a = void 0, i = void 0;
              if (-1 !== e.indexOf("trident/") && (o = /\btrident\/([0-9.]+)/.exec(e)) && o.length >= 2) {
                  a = o[1];
                  var r = o[1].split(".");
                  r[0] = parseInt(r[0], 10) + 4,
                  i = r.join(".")
              }
              t = (o = c.re_msie.exec(e))[1];
              var u = o[1].split(".");
              return void 0 === i && (i = t),
              u[0] = parseInt(u[0], 10) - 4,
              n = u.join("."),
              void 0 === a && (a = n),
              {
                  browserVersion: i,
                  browserMode: t,
                  engineVersion: a,
                  engineMode: n,
                  compatible: a !== n
              }
          }(e);
          if (t) {
              var o = n.engine.name
                , a = t.engineVersion || t.engineMode
                , r = parseFloat(a)
                , u = t.engineMode;
              n.engine = {
                  name: o,
                  version: r,
                  fullVersion: a,
                  mode: parseFloat(u),
                  fullMode: u,
                  compatible: !!t && t.compatible
              },
              n.engine[n.engine.name] = r;
              var s = n.browser.name
                , d = n.browser.fullVersion;
              "ie" === s && (d = t.browserVersion);
              var l = t.browserMode
                , m = parseFloat(d);
              n.browser = {
                  name: s,
                  version: m,
                  fullVersion: d,
                  mode: parseFloat(l),
                  fullMode: l,
                  compatible: !!t && t.compatible
              },
              n.browser[s] = m
          }
          return n
      }
      var u = r(a);
      u.parse = r,
      e.exports = u
  },
  23: function(e, n, t) {
      "use strict";
      t.r(n);
      var o = window.TT_FE_CONF || {};
      n.default = o
  },
  27: function(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
          value: !0
      });
      var o = window.TT_PLAYER_CONF;
      n.default = o
  },
  3: function(e, n, t) {
      "use strict";
      t.r(n),
      n.default = window.TT_PROFILE_INFO
  },
  30: function(e, n, t) {
      "use strict";
      var o = t(13)
        , c = t.n(o)
        , a = {
          result: "Chrome",
          details: {
              Chrome: 5,
              Chromium: 0,
              _360SE: 0,
              _360EE: 0
          },
          sorted: ["Chrome", "360SE", "360EE", "Chromium"],
          exec: function() {
              var e = {
                  Chrome: 5,
                  Chromium: 0,
                  _360SE: 0,
                  _360EE: 0
              }
                , n = window.navigator.userAgent;
              if (/Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(n)) {
                  if ("Win32" == window.navigator.platform) {
                      if (window.clientInformation.languages || (e._360SE += 8),
                      /zh/i.test(navigator.language) && (e._360SE += 3,
                      e._360EE += 3),
                      window.clientInformation.languages) {
                          var t = window.clientInformation.languages.length;
                          t >= 3 ? (e.Chrome += 10,
                          e.Chromium += 6) : 2 == t ? (e.Chrome += 3,
                          e.Chromium += 6,
                          e._360EE += 6) : 1 == t && (e.Chrome += 4,
                          e.Chromium += 4)
                      }
                      if (window.navigator.plugins && window.navigator.plugins.length)
                          for (var o in window.navigator.plugins)
                              "np-mswmp.dll" == window.navigator.plugins[o].filename && (e._360SE += 20,
                              e._360EE += 20);
                      window.chrome && window.chrome.webstore ? Object.keys(window.chrome.webstore).length <= 1 ? e._360SE += 7 : 2 == Object.keys(window.chrome.webstore).length && (e._360SE += 4,
                      e.Chromium += 3) : (e._360SE += 20,
                      e._360EE += 20),
                      window.navigator.plugins && (window.navigator.plugins.length >= 30 ? (e._360EE += 7,
                      e._360SE += 7,
                      e.Chrome += 7) : window.navigator.plugins.length < 30 && window.navigator.plugins.length > 10 ? (e._360EE += 3,
                      e._360SE += 3,
                      e.Chrome += 3) : window.navigator.plugins.length <= 10 && (e.Chromium += 6))
                  } else
                      e._360SE -= 50,
                      e._360EE -= 50,
                      /Linux/i.test(window.navigator.userAgent) && (e.Chromium += 5);
                  var c = 0
                    , a = void 0;
                  if (window.navigator.plugins)
                      for (var o in window.navigator.plugins)
                          if (a = /^(.+) PDF Viewer$/.exec(window.navigator.plugins[o].name)) {
                              if ("Chrome" == a[1]) {
                                  e.Chrome += 6,
                                  e._360SE += 6,
                                  c = 1;
                                  break
                              }
                              if ("Chromium" == a[1]) {
                                  e.Chromium += 10,
                                  e._360EE += 6,
                                  c = 1;
                                  break
                              }
                          }
                  c || (e.Chromium += 9)
              }
              var i = {};
              i.Chrome = e.Chrome,
              i.Chromium = e.Chromium,
              i["360SE"] = e._360SE,
              i["360EE"] = e._360EE;
              var r = [];
              for (var u in i)
                  r.push([u, i[u]]);
              r.sort((function(e, n) {
                  return n[1] - e[1]
              }
              )),
              this.sorted = r,
              this.details = e,
              this.result = r[0][0]
          }
      };
      c.a.browser.unshift(["baiduspider-render", /baiduspider-render\/([0-9.]+)/]),
      c.a.browser.unshift(["headlesschrome", /headlesschrome\/([0-9.]+)/]),
      c.a.browser.unshift(["edg", /edg\/([0-9.]+)/]),
      c.a.browser.unshift(["360ee", function(e) {
          var n = / (?:chrome|crios|crmo)\/([0-9.]+)/.exec(e);
          if (n) {
              var t = "-1";
              n.length >= 2 && n[1] && (t = n[1].replace(/_/g, "."));
              var o = parseInt(t.split(".")[0], 10);
              if (o && o > 0 && o <= 86 && function() {
                  try {
                      return a.exec(),
                      "360SE" === a.result || "360EE" === a.result
                  } catch (e) {
                      console.log(e)
                  }
              }())
                  return {
                      version: t
                  }
          }
      }
      ]);
      var i = t(22)
        , r = t.n(i);
      window.TT_ENV_DETECTOR = r.a;
      n.a = r.a
  },
  31: function(e, n, t) {
      "use strict";
      var o, c, a, i = t(30);
      n.a = (o = function(e) {
          var n = e.forceParamH5
            , t = e.forceParamFlash
            , o = (e.errorStorageKey,
          -1 != location.search.indexOf(n))
            , c = -1 != location.search.indexOf(t)
            , a = function() {
              var e = navigator.userAgent.toLocaleLowerCase()
                , n = e.match(/chrome\/([\d.]+)/);
              if (n && parseInt(n[1]) >= 45 && e.indexOf("edge") < 0)
                  return !0;
              var t = e.match(/firefox\/([0-9]+)\./);
              if (t && parseInt(t[1]) >= 65 && e.indexOf("edge") < 0)
                  return !0;
              var o = e.match(/edge\/([0-9]+)\./);
              if (o && parseInt(o[1]) >= 18)
                  return !0;
              var c = i.a.browser
                , a = c.name
                , r = void 0 === a ? "" : a
                , u = c.fullVersion
                , s = (void 0 === u ? "" : u).match(/^\d+(\.\d+)?/)
                , d = s ? s[0] : ""
                , l = {
                  chrome: "43",
                  firefox: "43",
                  maxthon: "5",
                  qq: "9",
                  safari: "10.1",
                  uc: "5.7",
                  edge: "15.15063"
              };
              return !!(l[r] && d && parseFloat(d) >= parseFloat(l[r])) || void 0
          }() && !function() {
              var e = !1
                , n = navigator.userAgent;
              if (/2345chrome/.test(n) || /2345Explorer/.test(n))
                  e = !0;
              else
                  try {
                      window.external.RCCoralGetItemCacheType(),
                      e = !0
                  } catch (e) {}
              return e
          }();
          return [o || !c && a, a]
      }
      ,
      function() {
          return a || (a = !0,
          c = o.apply(this, arguments)),
          c
      }
      )
  },
  32: function(e, n, t) {
      "use strict";
      t.r(n);
      var o = {}
        , c = new RegExp("(".concat([".msstatic.com", ".yaoguo.com", ".huya.com"].join("|").replace(/\./g, "\\."), ")$"));
      if ("postMessage"in window)
          "addEventListener"in document ? window.addEventListener("message", (function(e) {
              c.test(e.origin) && i.call(this, e.data)
          }
          ), !1) : "attachEvent"in document && window.attachEvent("onmessage", (function(e) {
              c.test(e.origin) && i.call(this, e.data)
          }
          ));
      else {
          var a = window.navigator.onmessage;
          window.navigator.onmessage = function() {
              i.call(this, arguments),
              "function" == typeof a && a.call(this, arguments)
          }
      }
      function i(e) {
          if ("string" == typeof e)
              try {
                  e = $.parseJSON(e)
              } catch (e) {}
          if ($.isPlainObject(e)) {
              var n = o[e.code];
              n && n.fire(e.data)
          } else
              try {
                  console.log("'data' must be a json!")
              } catch (e) {}
      }
      n.default = {
          on: function(e, n) {
              return o[e] || (o[e] = $.Callbacks()),
              o[e].add(n),
              this
          },
          off: function(e, n) {
              var t = arguments.length;
              if (0 === t)
                  for (var c in o)
                      o.hasOwnProperty(c) && o[c].empty();
              else {
                  var a = o[e];
                  a && (1 === t ? a.empty() : a.remove(n))
              }
              return this
          }
      }
  },
  33: function(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
          value: !0
      });
      var o = t(12)
        , c = t(38);
      (0,
      o.__exportStar)(t(38), n),
      n.default = new c.ChatMessage
  },
  34: function(e, n, t) {
      "use strict";
      t.r(n),
      t.d(n, "giftShelfMap", (function() {
          return a
      }
      ));
      var o = t(0)
        , c = new Promise((function(e, n) {
          o.default.on("getGifObj", (function(n) {
              for (var t = $.isArray(n.param) ? n.param : n.param.vPropsItemList.value, o = {}, c = 0, a = t.length; c < a; c++)
                  o[t[c].iPropsId] = t[c];
              e(o)
          }
          ), !0)
      }
      ));
      n.default = c;
      var a = {};
      c.then((function(e) {
          a = e
      }
      ))
  },
  35: function(e, n, t) {
      "use strict";
      var o = t(4)
        , c = t.n(o)
        , a = t(1)
        , i = c.a.lazyPromise((function(e) {
          t.e(463).then(t.bind(null, 143)).then((function() {
              e(window.Createlayer)
          }
          ))
      }
      ));
      a.a.onload(i),
      n.a = i
  },
  38: function(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
          value: !0
      }),
      n.parseHTML = n.createMessage = n.ChatMessage = void 0;
      var o = t(12)
        , c = (0,
      o.__importDefault)(t(19))
        , a = t(4)
        , i = t(63)
        , r = function(e) {
          function n() {
              var n = e.call(this) || this;
              return n.gc_enable = !0,
              n.msgCache = [],
              n.msgList = [],
              n.ashBin = null,
              n.fragment = null,
              n.root = null,
              n.show = (0,
              a.throttle)(n.show.bind(n), 200),
              n
          }
          return (0,
          o.__extends)(n, e),
          n.prototype.append = function(e) {
              if (e) {
                  var t = "function" == typeof e ? n.createMessage(e) : e;
                  this.msgCache.push(t),
                  this.show()
              }
          }
          ,
          n.prototype.show = function() {
              var e = this;
              if (!(this.msgCache.length <= 0)) {
                  null === this.root && (this.root = document.getElementById("chat-room__list")),
                  null === this.fragment && (this.fragment = document.createDocumentFragment());
                  var n = this.msgCache;
                  this.msgCache = [],
                  n.forEach((function(n) {
                      e.fragment.appendChild(n.elm)
                  }
                  )),
                  this.emit("willMount", this.fragment),
                  this.root.appendChild(this.fragment),
                  this.msgList = this.msgList.concat(n),
                  n.forEach((function(e) {
                      try {
                          e.didMount()
                      } catch (e) {
                          console.error(e)
                      }
                  }
                  )),
                  this.gc(),
                  this.emit("msg", n)
              }
          }
          ,
          n.prototype.push = function(e) {
              if (e) {
                  var t = "function" == typeof e ? n.createMessage(e) : e;
                  null === this.root && (this.root = document.getElementById("chat-room__list")),
                  this.root.appendChild(t.elm),
                  this.msgList.push(t);
                  try {
                      t.didMount()
                  } catch (e) {
                      console.error(e)
                  }
                  this.gc(),
                  this.emit("msg", [t])
              }
          }
          ,
          n.prototype.find = function(e) {
              return this.msgList.find((function(n) {
                  return e == n.id
              }
              )) || this.msgCache.find((function(n) {
                  return e == n.id
              }
              ))
          }
          ,
          n.prototype.gc = function() {
              var e = this.msgList.length - 100;
              this.gc_enable && e > 0 && this.del(e)
          }
          ,
          n.prototype.gc_close = function() {
              this.gc_enable = !1
          }
          ,
          n.prototype.gc_open = function() {
              this.gc_enable = !0
          }
          ,
          n.prototype.del = function(e) {
              var n = this
                , t = this.msgList.splice(0, e);
              return t.length > 0 && (null === this.ashBin && (this.ashBin = new i.AshBin),
              t.forEach((function(e) {
                  try {
                      e.unMount()
                  } catch (e) {
                      console.error(e)
                  }
                  n.ashBin.add(e.elm)
              }
              ))),
              t
          }
          ,
          n.prototype.clear = function() {
              this.del(this.msgList.length),
              this.emit("cls")
          }
          ,
          n.createMessage = function(e) {
              var t, o = function() {}, c = function() {};
              try {
                  t = e((function(e) {
                      "function" == typeof e && (o = e)
                  }
                  ), (function(e) {
                      "function" == typeof e && (c = e)
                  }
                  ))
              } catch (e) {
                  console.error(e)
              }
              var a = n.mid += 1
                , i = t instanceof HTMLElement ? t : document.createElement("div");
              return i.setAttribute("data-cmid", "".concat(a)),
              {
                  elm: i,
                  didMount: o,
                  unMount: c,
                  id: a
              }
          }
          ,
          n.parseHTML = function(e) {
              null === n.tmp && (n.tmp = document.createElement("div")),
              n.tmp.innerHTML = e;
              for (var t = [], o = 0, c = n.tmp.children.length; o < c; o++)
                  t[o] = n.tmp.children[o];
              return t
          }
          ,
          n.mid = 0,
          n.tmp = null,
          n
      }(c.default);
      n.ChatMessage = r,
      n.createMessage = r.createMessage,
      n.parseHTML = r.parseHTML
  },
  4: function(e, n, t) {
      var o = n.once = function(e) {
          var n, t;
          return function() {
              return t || (t = !0,
              n = e.apply(this, arguments)),
              n
          }
      }
      ;
      n.getUid = o((function() {
          return HUYA_UTIL.getCookieVal("udb_uid")
      }
      )),
      n.createTimestamp = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (new Date).getTime();
          return Math.floor(e / 1e3)
      }
      ,
      n.replaceRegExpMetacharacters = function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
              return "\\".concat(e)
          }
            , t = "^$.*+?=!:|\\/()[]{}"
            , o = new RegExp("\\".concat(t.split("").join("|\\")),"g");
          return e.replace(o, n)
      }
      ;
      var c = n.lazyPromise = function(e) {
          var n = o((function() {
              var n = new $.Deferred;
              return e((function() {
                  n.resolveWith(this, arguments)
              }
              ), (function() {
                  n.rejectWith(this, arguments)
              }
              )),
              function(e, t) {
                  return n.done(e).fail(t).promise()
              }
          }
          ));
          return function(e, t) {
              return n()(e, t)
          }
      }
        , a = n.getScript = function(e, n, t) {
          var o = document
            , c = o.head || o.getElementsByTagName("head")[0] || o.documentElement
            , a = o.createElement("script");
          function i() {
              r(),
              "function" == typeof n && n()
          }
          function r() {
              a.onload = a.onreadystatechange = a.onerror = null,
              a = null
          }
          "onload"in a ? a.onload = i : a.onreadystatechange = function() {
              /loaded|complete/.test(a.readyState) && i()
          }
          ,
          "onerror"in a && (a.onerror = function() {
              r(),
              "function" == typeof t && t()
          }
          ),
          a.charset = "utf-8",
          a.type = "text/javascript",
          a.async = !0,
          a.src = e,
          c.appendChild(a)
      }
        , i = (n.lazyLoadScript = function(e) {
          return c((function(n, t) {
              a(e, n, t)
          }
          ))
      }
      ,
      n.jsonp = function(e) {
          e = $.extend({
              url: "",
              data: {},
              jsonpCallback: "callback",
              cache: !1
          }, e);
          var n = $.extend({}, e.data)
            , t = n[e.jsonpCallback] = "jsonp_callback_" + Math.floor(1e10 * Math.random());
          e.cache || (n._ = Math.floor(1e10 * Math.random()));
          var o = $.Deferred();
          window[t] = function(e) {
              window[t] = null,
              o.resolve(e)
          }
          ;
          var c = e.url + (-1 == e.url.indexOf("?") ? "?" : "&") + $.param(n);
          return a(c, (function() {}
          ), (function() {
              o.reject()
          }
          )),
          o.promise()
      }
      ,
      n.debounce = function(e, n, t) {
          var o = null
            , c = function() {
              o && clearTimeout(o);
              var c = this
                , a = arguments;
              return t ? (o || e.apply(c, a),
              o = setTimeout((function() {
                  o = null
              }
              ), n)) : o = setTimeout((function() {
                  o = null,
                  e.apply(c, a)
              }
              ), n),
              c
          };
          return c.cancel = function() {
              clearTimeout(o),
              o = null
          }
          ,
          c
      }
      );
      n.throttle = function(e, n) {
          var t = !0
            , o = null
            , c = null
            , a = null;
          function i() {
              c = arguments,
              a = this,
              o || (o = setTimeout((function() {
                  o = null,
                  e.apply(a, c),
                  a = c = null
              }
              ), t ? 0 : n),
              t && (t = !1))
          }
          return i.cancel = function() {
              clearTimeout(o),
              o = a = c = null
          }
          ,
          i
      }
      ,
      n.loadImg = function(e, n, t, o) {
          if (e)
              return n = n || function() {}
              ,
              t = t || function() {}
              ,
              (o = o || new Image).readyState ? o.onreadystatechange = function() {
                  /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null,
                  n(o))
              }
              : o.onload = function() {
                  n(o)
              }
              ,
              o.onerror = function() {
                  t(o)
              }
              ,
              o.src = e,
              o
      }
      ,
      n.DJBHash = function(e) {
          if (e) {
              var n, t = 5381;
              if (e = e + "") {
                  for (var o = 0, c = e.length; o < c; ++o)
                      t += (t << 5) + e.charAt(o).charCodeAt();
                  n = 2147483647 & t
              }
              return n
          }
      }
      ,
      n.importStyle = function(e, n) {
          if (!document.getElementById(n)) {
              var t = document.createElement("style");
              return n && (t.id = n),
              document.getElementsByTagName("head")[0].appendChild(t),
              t.type = "text/css",
              t.styleSheet ? t.styleSheet.cssText += e : t.appendChild(document.createTextNode(e)),
              t
          }
      }
      ,
      n.exposure = function(e, n, t, o) {
          if ((e = $(e)).length) {
              n = "function" == typeof n ? n : function() {}
              ,
              t = t || 0;
              var c = o ? $(o) : $(window)
                , a = i((function() {
                  e.offset().top <= c.scrollTop() + c.height() + t && (c.off("scroll", a),
                  n(e))
              }
              ), 60);
              c.on("scroll", a),
              a()
          }
      }
      ;
      n.toRgb = function(e) {
          var n = ""
            , t = "";
          return $.isNumeric(e) && ("number" != typeof e && (e = parseInt(e, 10)),
          e >= 0 && (n = ("000000" + (t = e.toString(16))).slice(t.length))),
          n.toUpperCase()
      }
      ,
      n.format = function(e) {
          return $.isNumeric(e) ? (e + "").replace(/(\d)(?=(\d{3})+$)/g, "$1,") : e
      }
      ;
      var r = n.createSingleElm = o((function() {
          return document.createElement("div")
      }
      ));
      n.supportsStyle = function(e, n) {
          for (var t = r().style, o = ["ms", "O", "Moz", "webkit", ""], c = o.length, a = e.replace(/^./, (function(e) {
              return e.toUpperCase()
          }
          )); c--; ) {
              var i = o[c] ? o[c] + a : e;
              if (i in t)
                  return n && n(o[c], i),
                  !0
          }
          return !1
      }
      ;
      n.unescape = function(e) {
          return "string" != typeof e ? e : e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
      }
      ;
      n.escapeHTMLSpecialChars = function(e) {
          return "string" != typeof e ? e : e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
      }
      ,
      n.decodeHTMLSpecialChars = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "".concat(e).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"')
      }
      ,
      n.padStart00 = function(e) {
          return ("00" + e).slice((e + "").length)
      }
      ,
      n.formatPopulation = function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "万"
            , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
          return "number" == typeof e && e >= t ? "".concat((e / t).toFixed(1)).concat(n) : "".concat(e)
      }
      ,
      n.placeholderReplace = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
            , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(n).forEach((function(t) {
              var o = n[t];
              void 0 !== o && (e = e.replace(new RegExp("<".concat(t, ">|&lt;").concat(t, "&gt;")), "".concat(o)))
          }
          )),
          e
      }
      ,
      n.huyaVideoLandingUrl = function(e) {
          return "https://".concat("v.huya.com", "/play/").concat(e, ".html")
      }
      ,
      n.isMac = function() {
          return navigator.platform.toUpperCase().indexOf("MAC") >= 0
      }
      ,
      n.isMacLike = function() {
          return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
      }
  },
  40: function(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
          value: !0
      });
      var o = t(12)
        , c = (0,
      o.__importDefault)(t(6))
        , a = (0,
      o.__importDefault)(t(27));
      n.default = function(e) {
          return a.default && (t = a.default,
          i = (o = e).gid,
          r = o.pid,
          (u = function() {
              var e = [];
              try {
                  var n = HUYA_UTIL.unescape(t.grayPidVersion);
                  e = [].concat(JSON.parse(n).pid || [])
              } catch (n) {
                  e = []
              }
              var o = e.find((function(e) {
                  return !!e && -1 != "".concat(e.pid).split(",").indexOf("".concat(r))
              }
              ));
              return o && o.ver
          }() || function() {
              var e = [];
              try {
                  var n = HUYA_UTIL.unescape(t.grayGameIdVersion);
                  e = [].concat(JSON.parse(n).gid || [])
              } catch (n) {
                  e = []
              }
              var o = e.find((function(e) {
                  return !!e && -1 != "".concat(e.gid).split(",").indexOf("".concat(i))
              }
              ));
              return o && o.ver
          }() || t.h5playerVersion) ? {
              css: t.h5playerDomian + u + "/vplayer.css",
              js: t.h5playerDomian + u + "/vplayer.js"
          } : null) || {
              css: (n = c.default).h5domain + n.h5PlayerIncludeSDK + "/vplayer.css",
              js: n.h5domain + n.h5PlayerIncludeSDK + "/vplayer.js"
          };
          var n, t, o, i, r, u
      }
  },
  45: function(e, n) {
      var t;
      t = function() {
          return this
      }();
      try {
          t = t || new Function("return this")()
      } catch (e) {
          "object" == typeof window && (t = window)
      }
      e.exports = t
  },
  46: function(e, n, t) {
      "use strict";
      var o = function() {
          function e(e, n) {
              for (var t = 0; t < n.length; t++) {
                  var o = n[t];
                  o.enumerable = o.enumerable || !1,
                  o.configurable = !0,
                  "value"in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o)
              }
          }
          return function(n, t, o) {
              return t && e(n.prototype, t),
              o && e(n, o),
              n
          }
      }();
      var c = {
          name: "na",
          version: "-1"
      };
      function a(e) {
          return function(n) {
              return Object.prototype.toString.call(n) === "[object " + e + "]"
          }
      }
      var i = a("String")
        , r = a("RegExp")
        , u = a("Object")
        , s = a("Function");
      function d(e, n, t, o) {
          var a = c;
          !function(e, n) {
              for (var t = 0, o = e.length; t < o && !1 !== n.call(e, e[t], t); t++)
                  ;
          }(n, (function(n) {
              var t = function(e, n, t) {
                  var o = s(n) ? n.call(null, t) : n;
                  if (!o)
                      return null;
                  var c = {
                      name: e,
                      version: "-1",
                      codename: ""
                  };
                  if (!0 === o)
                      return c;
                  if (i(o)) {
                      if (-1 !== t.indexOf(o))
                          return c
                  } else {
                      if (u(o))
                          return o.hasOwnProperty("version") && (c.version = o.version),
                          c;
                      if (r(o)) {
                          var a = o.exec(t);
                          if (a)
                              return a.length >= 2 && a[1] ? c.version = a[1].replace(/_/g, ".") : c.version = "-1",
                              c
                      }
                  }
              }(n[0], n[1], e);
              if (t)
                  return a = t,
                  !1
          }
          )),
          t.call(o, a.name, a.version)
      }
      var l = function() {
          function e(n) {
              !function(e, n) {
                  if (!(e instanceof n))
                      throw new TypeError("Cannot call a class as a function")
              }(this, e),
              this._rules = n
          }
          return o(e, [{
              key: "parse",
              value: function(e) {
                  e = (e || "").toLowerCase();
                  var n = {};
                  d(e, this._rules.device, (function(e, t) {
                      var o = parseFloat(t);
                      n.device = {
                          name: e,
                          version: o,
                          fullVersion: t
                      },
                      n.device[e] = o
                  }
                  ), n),
                  d(e, this._rules.os, (function(e, t) {
                      var o = parseFloat(t);
                      n.os = {
                          name: e,
                          version: o,
                          fullVersion: t
                      },
                      n.os[e] = o
                  }
                  ), n);
                  var t = this.IEMode(e);
                  return d(e, this._rules.engine, (function(e, o) {
                      var c = o;
                      t && (o = t.engineVersion || t.engineMode,
                      c = t.engineMode);
                      var a = parseFloat(o);
                      n.engine = {
                          name: e,
                          version: a,
                          fullVersion: o,
                          mode: parseFloat(c),
                          fullMode: c,
                          compatible: !!t && t.compatible
                      },
                      n.engine[e] = a
                  }
                  ), n),
                  d(e, this._rules.browser, (function(e, o) {
                      var c = o;
                      t && ("ie" === e && (o = t.browserVersion),
                      c = t.browserMode);
                      var a = parseFloat(o);
                      n.browser = {
                          name: e,
                          version: a,
                          fullVersion: o,
                          mode: parseFloat(c),
                          fullMode: c,
                          compatible: !!t && t.compatible
                      },
                      n.browser[e] = a
                  }
                  ), n),
                  n
              }
          }, {
              key: "IEMode",
              value: function(e) {
                  if (!this._rules.re_msie.test(e))
                      return null;
                  var n, t, o = void 0, c = void 0, a = void 0;
                  if (-1 !== e.indexOf("trident/") && (o = /\btrident\/([0-9.]+)/.exec(e)) && o.length >= 2) {
                      c = o[1];
                      var i = o[1].split(".");
                      i[0] = parseInt(i[0], 10) + 4,
                      a = i.join(".")
                  }
                  t = (o = this._rules.re_msie.exec(e))[1];
                  var r = o[1].split(".");
                  return void 0 === a && (a = t),
                  r[0] = parseInt(r[0], 10) - 4,
                  n = r.join("."),
                  void 0 === c && (c = n),
                  {
                      browserVersion: a,
                      browserMode: t,
                      engineVersion: c,
                      engineMode: n,
                      compatible: c !== n
                  }
              }
          }]),
          e
      }();
      e.exports = l
  },
  47: function(e, n) {
      if (window.useEncodeStream)
          try {
              "home_index" == window.encodeStreamTag ? slideStream = slideStream && JSON.parse(window.atob(slideStream)) : hyPlayerConfig.stream = hyPlayerConfig.stream && JSON.parse(window.atob(hyPlayerConfig.stream))
          } catch (e) {
              performanceInfo._hmt.push(["reportApiMess", "encodeStreamError", JSON.stringify(e), 404])
          }
  },
  5: function(e, n) {
      n.parseQueryString = function(e) {
          var n, t = {};
          if (-1 != (n = e.indexOf("?")))
              for (var o = e.substring(n + 1, e.length).split("&"), c = [], a = 0, i = o.length; a < i; a++)
                  t[(c = o[a].split("="))[0]] = c[1];
          return t
      }
      ,
      n.getCookieVal = function(e) {
          for (var n = document.cookie ? document.cookie.split("; ") : [], t = 0; t < n.length; t += 1) {
              var o = n[t].split("=");
              if (o[0] == e)
                  return decodeURIComponent(o[1])
          }
          return ""
      }
  },
  50: function(e, n, t) {
      "use strict";
      var o = t(8)
        , c = t(0);
      var a = new o.a;
      c.default.isH5 && c.default.ready((function(e) {
          ["10040", "42008", "getLinkMicPresenterListByUid", "6201", "1130052"].forEach((function(n) {
              e.addTafListener(n, (function(e) {
                  return a.emit(n, e)
              }
              ))
          }
          ))
      }
      )),
      c.default.isH5 && c.default.ready((function(e) {
          return e.addTafListener("6110", d)
      }
      ));
      var i, r, u, s = (i = function() {
          return HUYA_UTIL.getCookieVal("udb_uid")
      }
      ,
      function() {
          return u || (u = !0,
          r = i.apply(this, arguments)),
          r
      }
      );
      function d(e) {
          var n = e.lUid;
          n && s() && s() == n && a.emit("myNobleEnter", e)
      }
      n.a = a
  },
  54: function(e, n, t) {
      "use strict";
      n.a = window.TT_META_DATA
  },
  6: function(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
          value: !0
      });
      var o = window.TT_PLAYER_CFG;
      n.default = o
  },
  62: function(e, n, t) {
      "use strict";
      var o = t(1)
        , c = t(0)
        , a = t(2)
        , i = (t(54),
      t(3))
        , r = t(23)
        , u = t(4)
        , s = t.n(u)
        , d = t(32)
        , l = (t(50),
      t(34),
      t(33))
        , m = t.n(l)
        , f = t(35);
      function h(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              n && (o = o.filter((function(n) {
                  return Object.getOwnPropertyDescriptor(e, n).enumerable
              }
              ))),
              t.push.apply(t, o)
          }
          return t
      }
      function p(e) {
          for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2 ? h(Object(t), !0).forEach((function(n) {
                  g(e, n, t[n])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach((function(n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }
              ))
          }
          return e
      }
      function g(e, n, t) {
          return n in e ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[n] = t,
          e
      }
      function k(e, n) {
          return function(e) {
              if (Array.isArray(e))
                  return e
          }(e) || function(e, n) {
              var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (null == t)
                  return;
              var o, c, a = [], i = !0, r = !1;
              try {
                  for (t = t.call(e); !(i = (o = t.next()).done) && (a.push(o.value),
                  !n || a.length !== n); i = !0)
                      ;
              } catch (e) {
                  r = !0,
                  c = e
              } finally {
                  try {
                      i || null == t.return || t.return()
                  } finally {
                      if (r)
                          throw c
                  }
              }
              return a
          }(e, n) || function(e, n) {
              if (!e)
                  return;
              if ("string" == typeof e)
                  return v(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t)
                  return Array.from(e);
              if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                  return v(e, n)
          }(e, n) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
      }
      function v(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, o = new Array(n); t < n; t++)
              o[t] = e[t];
          return o
      }
      var b = s.a.getUid()
        , y = !1;
      !function(e, n) {
          try {
              var t = JSON.parse(HUYA_UTIL.unescape(e))
                , o = t.target
                , c = t.value
                , a = parseInt("".concat(c))
                , i = o.findIndex((function(e) {
                  return e == n
              }
              ));
              if (y = i >= 0) {
                  $("#J_mainRoom").css("min-width", "".concat(a + 10 + 340, "px")),
                  $("#J_spbg").css("min-width", "".concat(a + 10 + 340 + 80, "px"))
              }
          } catch (e) {}
      }(r.default.videoWidth, i.default.lp),
      c.default.isH5 && o.a.videoOnLoad((function() {
          Promise.all([t.e(0), t.e(10), t.e(27), t.e(28), t.e(109), t.e(209), t.e(202)]).then(t.t.bind(null, 78, 7)).then((function(e) {
              var n = e.getInstance;
              n(),
              c.default.on("openHyExt", (function(e) {
                  var t = e.id
                    , o = e.param;
                  n().then((function(e) {
                      e.showPanel(t, o)
                  }
                  ))
              }
              ))
          }
          ))
      }
      )),
      function() {
          function e() {
              $(".mod-sidebar").hide(),
              $("#J_mainWrap").css({
                  paddingLeft: 0
              }),
              DUYA_SUB.publish("resizeWide")
          }
          if (5883 == a.default.gid)
              e();
          else {
              0,
              $.ajax({
                  url: "//liveapi.huya.com/cache/room/roomMonitor",
                  data: {
                      pid: i.default.lp,
                      from: "live"
                  },
                  dataType: "json",
                  cache: !0,
                  xhrFields: {
                      withCredentials: !0
                  },
                  __forceTrace: !0
              }).done((function(n) {
                  var t = n.status
                    , o = (n.msg,
                  n.data);
                  200 == t && o && o.isHideLeftNav && e()
              }
              ))
          }
      }(),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(10), t.e(12), t.e(15), t.e(20), t.e(34), t.e(27), t.e(28), t.e(61), t.e(56), t.e(49), t.e(62), t.e(60), t.e(55), t.e(58), t.e(63), t.e(47), t.e(59), t.e(50), t.e(81), t.e(73), t.e(66), t.e(85), t.e(116), t.e(109), t.e(102), t.e(209), t.e(202), t.e(382), t.e(401), t.e(400), t.e(299), t.e(381), t.e(397), t.e(422), t.e(300), t.e(301), t.e(307), t.e(402), t.e(423), t.e(309)]).then(t.t.bind(null, 98, 7))
      }
      )),
      Promise.all([t.e(42), t.e(37)]).then(t.t.bind(null, 74, 7)).then((function(e) {
          var n = e.CustomFansBadge;
          o.a.videoOnLoad((function() {
              n.fetchCustomBadge()
          }
          ))
      }
      )),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(92), t.e(126)]).then(t.t.bind(null, 37, 7))
      }
      )),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(22), t.e(48)]).then(t.t.bind(null, 75, 7)).then((function(e) {
              e.default.fetchExpressionEmoticonPackage().then((function(e) {
                  c.default.ready((function() {
                      c.default.call("setFaceData", e.packages),
                      c.default.call("setEmoticonData", e)
                  }
                  ))
              }
              ))
          }
          ))
      }
      )),
      c.default.on("playerSafeVerification", (function(e) {
          Promise.all([t.e(10), t.e(120)]).then(t.bind(null, 85)).then((function(n) {
              (0,
              n.default)(e.url)
          }
          ))
      }
      )),
      o.a.videoOnLoad((function() {
          t.e(482).then(t.bind(null, 99))
      }
      )),
      c.default.isH5 && a.default.isPayRoom && o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(10), t.e(12), t.e(76), t.e(203), t.e(98), t.e(481), t.e(480), t.e(306)]).then(t.bind(null, 100))
      }
      )),
      c.default.isH5 && o.a.lazyLoad({
          executor: function(e) {
              Promise.all([Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(218)]).then(t.bind(null, 86)), t.e(91).then(t.bind(null, 79))]).then(e)
          },
          force: function(e) {
              function n(n) {
                  var t = n.url
                    , o = n.buySource
                    , c = n.liveType
                    , a = n.width
                    , r = n.height;
                  e().done((function(e) {
                      var n = k(e, 2)
                        , u = n[0].mount;
                      (0,
                      n[1].getUserLevelInfo)().then((function(e) {
                          u({
                              url: t,
                              param: {
                                  sHYId: e.tUserProfile.tUserBase.sHuyaId,
                                  profileUid: i.default.lp,
                                  buySource: o
                              },
                              liveType: c,
                              width: a,
                              height: r
                          })
                      }
                      ))
                  }
                  ))
              }
              c.default.on("openVip", (function(e) {
                  var t, o = e || {}, c = o.url, a = o.liveType;
                  switch (o.from) {
                  case 0:
                      t = "liveroom-trytips";
                      break;
                  case 1:
                      t = "liveroom-endoftry"
                  }
                  n({
                      url: c,
                      buySource: t,
                      liveType: a
                  })
              }
              )),
              TT.event.on("TT_ROOM_VIP_OPEN", (function(e) {
                  var t = e || {}
                    , o = t.url
                    , c = t.liveType;
                  n({
                      url: o,
                      buySource: t.from,
                      liveType: c,
                      width: t.width,
                      height: t.height
                  })
              }
              ))
          }
      }),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(505), t.e(504)]).then(t.bind(null, 101))
      }
      ));
      var w = s.a.once((function() {
          return Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(12), t.e(81), t.e(116), t.e(207), t.e(389), t.e(390)]).then(t.t.bind(null, 102, 7))
      }
      ));
      o.a.videoOnLoad((function() {
          t.e(207).then(t.t.bind(null, 89, 7)).then((function(e) {
              var n = e.default;
              n.on("Notice", (function(e) {
                  w().then((function(n) {
                      (0,
                      n.handleNotice)(e)
                  }
                  ))
              }
              )),
              n.on("ToastNotice", (function(e) {
                  w().then((function(n) {
                      (0,
                      n.handleToastNotice)(e)
                  }
                  ))
              }
              ))
          }
          ))
      }
      )),
      o.a.videoOnLoad((function() {
          c.default.ready((function() {
              Promise.all([t.e(72), t.e(69)]).then(t.bind(null, 77)).then((function(e) {
                  var n = e.default;
                  function t() {
                      var e = [].concat(n.global.list).concat(n.local.list);
                      c.default.call("blockWordsUpdate", e)
                  }
                  t(),
                  n.global.on("ALL", t),
                  n.local.on("ALL", t)
              }
              ))
          }
          ))
      }
      ));
      var _ = document.getElementById("J_roomWeeklyRankListRoot");
      _ && o.a.videoOnLoad((function() {
          Promise.all([t.e(211).then(t.t.bind(null, 90, 7)), Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(12), t.e(15), t.e(24), t.e(25), t.e(35), t.e(42), t.e(37), t.e(61), t.e(56), t.e(65), t.e(46), t.e(49), t.e(62), t.e(45), t.e(60), t.e(55), t.e(58), t.e(63), t.e(47), t.e(59), t.e(50), t.e(81), t.e(77), t.e(74), t.e(91), t.e(78), t.e(99), t.e(79), t.e(143), t.e(169), t.e(170), t.e(168), t.e(171), t.e(172), t.e(113), t.e(145), t.e(144), t.e(150), t.e(119), t.e(173), t.e(225), t.e(229), t.e(227), t.e(211), t.e(226), t.e(237), t.e(197), t.e(236), t.e(228), t.e(230), t.e(412), t.e(419), t.e(410), t.e(416), t.e(308), t.e(409), t.e(415), t.e(411), t.e(413), t.e(417), t.e(414), t.e(418)]).then(t.t.bind(null, 103, 7))]).then((function(e) {
              var n = k(e, 2)
                , t = n[0].default
                , o = n[1].mount;
              t.getRemoteData().then((function() {
                  $(_).removeClass("room-weeklyRankList-content-loading"),
                  o(_)
              }
              ))
          }
          ))
      }
      )),
      o.a.lazyLoad({
          executor: function(e) {
              t.e(119).then(t.bind(null, 57)).then((function(n) {
                  var t = n.default;
                  return e(t)
              }
              ))
          },
          force: function(e) {
              TT.event.on("NOBLE_APPLY", (function() {
                  e().done((function(e) {
                      return e(i.default.lp, a.default.id, a.default.sid, a.default.gid)
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              t.e(83).then(t.bind(null, 51)).then((function(n) {
                  var t = n.default;
                  return e(t)
              }
              ))
          },
          force: function(e) {
              TT.event.on("SUPERFANS_APPLY", (function() {
                  e().done((function(e) {
                      return e(i.default.lp, a.default.id, a.default.sid, a.default.gid)
                  }
                  ))
              }
              ))
          }
      }),
      o.a.videoOnLoad((function() {
          $.ajax({
              url: "//api.huya.com/subscribe/getSubscribeStatus",
              data: {
                  from_key: b,
                  from_type: 1,
                  to_key: i.default.lp,
                  to_type: 2
              },
              dataType: "jsonp"
          }).done((function(e) {
              0 == e.result && (b && Promise.all([t.e(27), t.e(28), t.e(109)]).then(t.bind(null, 84)).then((function(n) {
                  var o = n.default;
                  1 == e.status ? o._on() : 0 == e.status && o._off(),
                  o.change((function(e) {
                      t.e(108).then(t.bind(null, 36)).then((function(n) {
                          var t = n.default;
                          t.update(t.count + (e ? 1 : -1))
                      }
                      ))
                  }
                  ))
              }
              )),
              t.e(108).then(t.bind(null, 36)).then((function(n) {
                  n.default.update(e.subscribe_count)
              }
              )))
          }
          ))
      }
      )),
      b ? o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(8), t.e(0), t.e(1), t.e(2), t.e(18), t.e(19), t.e(27), t.e(28), t.e(109), t.e(108), t.e(395), t.e(396)]).then(t.bind(null, 104))
      }
      )) : ($("#yyliveRk_game_newsBut").on("click", (function(e) {
          e.preventDefault(),
          TT.login.login()
      }
      )),
      o.a.videoOnLoad((function() {
          t.e(108).then(t.bind(null, 36)).then((function(e) {
              var n = e.default;
              $("#activityCount").text(n.count),
              n.on("change", (function() {
                  $("#activityCount").text(n.count)
              }
              ))
          }
          ))
      }
      ))),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(101), t.e(110)]).then(t.bind(null, 81)),
          t.e(302).then(t.t.bind(null, 105, 7)),
          t.e(489).then(t.bind(null, 106))
      }
      )),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(8), t.e(0), t.e(1), t.e(2), t.e(18), t.e(19), t.e(383)]).then(t.bind(null, 145))
      }
      )),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(22), t.e(32), t.e(48), t.e(84), t.e(210), t.e(388)]).then(t.t.bind(null, 107, 7)).then((function(e) {
              (0,
              e.mount)()
          }
          ))
      }
      )),
      o.a.videoOnLoad((function() {
          t.e(75).then(t.bind(null, 83)).then((function(e) {
              var n = e.default
                , o = $("#chatHostPic");
              n.getTeamMedalConfig().then((function(e) {
                  0 == e.matchId ? Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(12), t.e(35), t.e(42), t.e(37), t.e(46), t.e(45), t.e(83), t.e(113), t.e(103), t.e(212), t.e(213), t.e(215), t.e(214), t.e(199)]).then(t.t.bind(null, 58, 7)).then((function(e) {
                      var n = e.default;
                      o.removeClass("chat-host-pic-loading"),
                      n(o[0])
                  }
                  )) : Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(12), t.e(75), t.e(429), t.e(428)]).then(t.bind(null, 108)).then((function(e) {
                      var n = e.default;
                      o.removeClass("chat-host-pic-loading"),
                      n(o[0])
                  }
                  ))
              }
              )).catch((function(e) {
                  Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(12), t.e(35), t.e(42), t.e(37), t.e(46), t.e(45), t.e(83), t.e(113), t.e(103), t.e(212), t.e(213), t.e(215), t.e(214), t.e(199)]).then(t.t.bind(null, 58, 7)).then((function(e) {
                      var n = e.default;
                      o.removeClass("chat-host-pic-loading"),
                      n(o[0])
                  }
                  ))
              }
              ))
          }
          ))
      }
      )),
      o.a.videoOnLoad((function() {
          return Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(10), t.e(12), t.e(15), t.e(20), t.e(22), t.e(34), t.e(30), t.e(29), t.e(35), t.e(32), t.e(44), t.e(40), t.e(42), t.e(38), t.e(37), t.e(48), t.e(43), t.e(41), t.e(39), t.e(65), t.e(46), t.e(49), t.e(45), t.e(50), t.e(82), t.e(75), t.e(72), t.e(73), t.e(67), t.e(69), t.e(84), t.e(94), t.e(96), t.e(97), t.e(86), t.e(116), t.e(121), t.e(118), t.e(100), t.e(200), t.e(210), t.e(393), t.e(391), t.e(392), t.e(394)]).then(t.t.bind(null, 109, 7))
      }
      )),
      o.a.videoOnLoad((function() {
          t.e(133).then(t.t.bind(null, 93, 7)).then((function(e) {
              e.default.fetchMemeInfo().then((function(e) {
                  0 === e.iRetCode && Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(10), t.e(15), t.e(20), t.e(22), t.e(34), t.e(30), t.e(29), t.e(35), t.e(32), t.e(44), t.e(40), t.e(42), t.e(38), t.e(37), t.e(48), t.e(43), t.e(41), t.e(39), t.e(65), t.e(46), t.e(45), t.e(82), t.e(75), t.e(72), t.e(73), t.e(67), t.e(68), t.e(69), t.e(84), t.e(94), t.e(96), t.e(97), t.e(86), t.e(121), t.e(118), t.e(100), t.e(79), t.e(133), t.e(150), t.e(219), t.e(220), t.e(399), t.e(398)]).then(t.t.bind(null, 110, 7)).then((function(e) {
                      (0,
                      e.mount)()
                  }
                  ))
              }
              ))
          }
          ))
      }
      )),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(12), t.e(15), t.e(24), t.e(30), t.e(29), t.e(25), t.e(44), t.e(40), t.e(38), t.e(43), t.e(41), t.e(39), t.e(67), t.e(68), t.e(150), t.e(407), t.e(408), t.e(304), t.e(303)]).then(t.t.bind(null, 111, 7)).then((function(e) {
              (0,
              e.mount)()
          }
          ))
      }
      )),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(15), t.e(61), t.e(56), t.e(62), t.e(60), t.e(55), t.e(58), t.e(63), t.e(47), t.e(59), t.e(74)]).then(t.t.bind(null, 49, 7)).then((function(e) {
                  return e.default.getInfo()
              }
              )),
              Promise.all([t.e(20), t.e(34), t.e(85), t.e(102), t.e(243), t.e(478), t.e(479)]).then(t.bind(null, 147)),
              t.e(119).then(t.bind(null, 57)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              $(".open-guizu").on("click", (function(n) {
                  n.preventDefault(),
                  e().done((function(e) {
                      e(i.default.lp, a.default.id, a.default.sid, a.default.gid)
                  }
                  ))
              }
              )),
              c.default.on("clickNobleRecharge", (function() {
                  e().done((function(e) {
                      e(i.default.lp, a.default.id, a.default.sid, a.default.gid)
                  }
                  ))
              }
              ))
          },
          type: "VIDEO"
      }),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(15), t.e(61), t.e(56), t.e(62), t.e(60), t.e(55), t.e(58), t.e(63), t.e(47), t.e(59), t.e(74)]).then(t.t.bind(null, 49, 7)).then((function(e) {
              e.default.on("UserDIYMountsChange", (function(e) {
                  Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(12), t.e(15), t.e(20), t.e(34), t.e(61), t.e(56), t.e(62), t.e(60), t.e(55), t.e(58), t.e(63), t.e(47), t.e(59), t.e(81), t.e(74), t.e(66), t.e(85), t.e(99), t.e(102), t.e(145), t.e(403), t.e(404)]).then(t.t.bind(null, 112, 7)).then((function(n) {
                      (0,
                      n.handleUserDIYMountsChange)(e)
                  }
                  ))
              }
              ))
          }
          ))
      }
      )),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(35), t.e(46), t.e(45), t.e(83), t.e(502)]).then(t.bind(null, 113)),
              t.e(83).then(t.bind(null, 51)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              $(".open-superFans").on("click", (function(n) {
                  n.preventDefault(),
                  e().done((function(e) {
                      e(i.default.lp, a.default.id, a.default.sid, a.default.gid)
                  }
                  ))
              }
              )),
              c.default.on("clickSuperFansRecharge", (function() {
                  e().done((function(e) {
                      e(i.default.lp, a.default.id, a.default.sid, a.default.gid)
                  }
                  ))
              }
              ))
          },
          type: "VIDEO"
      }),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(34), t.e(36), t.e(287), t.e(464)]).then(t.bind(null, 146))
      }
      ));
      m.a.append((function(e, n) {
          var t = document.createTextNode("系统消息：虎牙依法对直播内容进行24小时巡查，禁止传播违法违规、封建迷信、暴力血腥、低俗色情、招嫖诈骗、违禁品等不良信息，禁止未成年人直播或打赏，坚决维护青少年群体精神文明健康。请勿轻信各类招聘征婚、代练代抽、刷钻、购买礼包码、游戏币等广告信息，且如主播在推广商品中诱导私下交易，请谨慎判断，以免上当受骗。")
            , o = document.createElement("div");
          return Object.assign(o.style, {
              color: "#3c0",
              padding: "4px 9px"
          }),
          o.appendChild(t),
          o
      }
      )),
      a.default.isOn && Promise.all([t.e(7), t.e(8), t.e(9), t.e(22), t.e(35), t.e(32), t.e(48), t.e(82), t.e(94)]).then(t.bind(null, 91)),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(10), t.e(20), t.e(22), t.e(34), t.e(35), t.e(32), t.e(42), t.e(37), t.e(48), t.e(65), t.e(46), t.e(45), t.e(82), t.e(75), t.e(72), t.e(73), t.e(69), t.e(84), t.e(94), t.e(96), t.e(97), t.e(86), t.e(121), t.e(118), t.e(100)]).then(t.bind(null, 82))
      }
      )),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(10), t.e(20), t.e(22), t.e(34), t.e(35), t.e(32), t.e(42), t.e(37), t.e(48), t.e(36), t.e(65), t.e(46), t.e(45), t.e(82), t.e(75), t.e(72), t.e(73), t.e(69), t.e(84), t.e(94), t.e(96), t.e(97), t.e(86), t.e(85), t.e(121), t.e(118), t.e(100), t.e(254)]).then(t.bind(null, 114))
      }
      )),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(8), t.e(0), t.e(1), t.e(2), t.e(10), t.e(18), t.e(19), t.e(232), t.e(233), t.e(231), t.e(420), t.e(456), t.e(460)]).then(t.bind(null, 115)).then((function(n) {
                  var t = n.default;
                  e && e(t),
                  console.log("use react share")
              }
              ))
          },
          force: function(e) {
              $("#share-entrance").one("mouseover", (function() {
                  e().done((function(e) {
                      $("#pop-box-share").removeClass("room-mod-loading"),
                      e()
                  }
                  ))
              }
              ))
          }
      }),
      a.default.isOff || o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(10), t.e(468)]).then(t.bind(null, 116)).then(e)
          },
          force: function(e) {
              $("#J_illegalReport").on("click", (function() {
                  TT.sudo((function() {
                      e().done((function(e) {
                          return (0,
                          e.default)()
                      }
                      ))
                  }
                  )),
                  Promise.all([t.e(0), t.e(1), t.e(2)]).then(t.bind(null, 15)).then((function(e) {
                      (0,
                      e.reportEvent)({
                          eid: "click/zhibo/jubao",
                          eid_desc: "点击/直播间/举报"
                      })
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(0), t.e(1), t.e(2), t.e(18), t.e(19), t.e(13), t.e(232), t.e(233), t.e(231), t.e(447)]).then(t.bind(null, 117)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              $(".jump-to-phone").one("mouseenter", (function() {
                  e().done((function(e) {
                      $("#J_AppGuideBox").removeClass("room-mod-loading"),
                      e()
                  }
                  ))
              }
              ))
          }
      }),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(8), t.e(0), t.e(1), t.e(2), t.e(18), t.e(19), t.e(101), t.e(110), t.e(336)]).then(t.bind(null, 118))
      }
      )),
      2 == a.default.bussType && document.addEventListener && (console.log("use react game"),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(0), t.e(1), t.e(2), t.e(10), t.e(18), t.e(19), t.e(101), t.e(110), t.e(333)]).then(t.bind(null, 119))
      }
      ))),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(10), t.e(96), t.e(97), t.e(86)]).then(t.bind(null, 92)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("bindPhone", (function() {
                  e().done((function(e) {
                      e().fail((function(e) {
                          "IGNORANCE" !== e && TT.event.emit("TT_ALERT_MESSAGE", "手机绑定失败，请稍后重试！(".concat(e, ")"), "error")
                      }
                      ))
                  }
                  ))
              }
              ))
          }
      }),
      1 == (1 & a.default.liveCompatibleFlag) && o.a.videoOnLoad((function() {
          t.e(313).then(t.bind(null, 120))
      }
      )),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(15), t.e(20), t.e(34), t.e(30), t.e(29), t.e(44), t.e(40), t.e(38), t.e(43), t.e(41), t.e(39), t.e(61), t.e(56), t.e(62), t.e(60), t.e(55), t.e(58), t.e(63), t.e(47), t.e(59), t.e(81), t.e(66), t.e(85), t.e(99), t.e(102), t.e(145), t.e(200), t.e(338), t.e(341), t.e(337), t.e(340), t.e(283), t.e(339), t.e(280)]).then(t.bind(null, 144))
      }
      )),
      c.default.isH5 && o.a.videoOnLoad((function() {
          c.default.ready((function(e) {
              e.addTafListener("1000106", (function(e) {
                  var n = e.iNewLevel;
                  Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(68), t.e(143), t.e(144), t.e(425), t.e(426)]).then(t.t.bind(null, 121, 7)).then((function(e) {
                      (0,
                      e.mount)(n)
                  }
                  ))
              }
              ))
          }
          ))
      }
      )),
      o.a.lazyLoad((function() {
          t.e(10).then(t.bind(null, 24))
      }
      )),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(10), t.e(31), t.e(515), t.e(513), t.e(514)]).then(t.bind(null, 122)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              )),
              t.e(255).then(t.bind(null, 59))
          },
          force: function(e) {
              var n = r.default.useH5WeeklyStarRanking
                , o = "string" == typeof n ? n.split(",") : [];
              0 === o.length || -1 != o.indexOf("".concat(i.default.lp)) ? c.default.on("showWeekStarRank", (function() {
                  t.e(255).then(t.bind(null, 59)).then((function(e) {
                      (0,
                      e.default)({
                          lp: i.default.lp,
                          roomId: i.default.profileRoom,
                          nick: i.default.nick,
                          avatar: i.default.avatar
                      })
                  }
                  ))
              }
              )) : c.default.on("showWeekStarRank", (function() {
                  Promise.resolve().then(t.bind(null, 34)).then((function() {
                      e().done((function(e) {
                          e()
                      }
                      ))
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              t.e(503).then(t.bind(null, 123)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("clickSuperFansRank", (function() {
                  e().done((function(e) {
                      e(i.default.lp, a.default.id, a.default.sid, a.default.gid)
                  }
                  ))
              }
              ))
          },
          type: "VIDEO"
      }),
      o.a.videoOnLoad((function() {
          if (/^(NORMAL|STAR|MATCH)$/.test(a.default.type)) {
              Promise.all([t.e(36), t.e(484)]).then(t.bind(null, 124)),
              c.default.isH5 && Promise.all([t.e(92), t.e(126)]).then(t.t.bind(null, 37, 7)).then((function() {
                  Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(18), t.e(19), t.e(30), t.e(29), t.e(36), t.e(95), t.e(179), t.e(181), t.e(180), t.e(130), t.e(131), t.e(132), t.e(205), t.e(206)]).then(t.bind(null, 71))
              }
              )),
              Promise.all([t.e(27), t.e(28), t.e(201)]).then(t.bind(null, 94)).then((function(e) {
                  e.default.isPUGC((function(e) {
                      0 != e.iStat && Promise.all([t.e(0), t.e(1), t.e(2), t.e(27), t.e(28), t.e(36), t.e(201), t.e(487), t.e(488)]).then(t.bind(null, 125))
                  }
                  ))
              }
              ));
              var e = 2168 == a.default.gid;
              c.default.isH5 && e && t.e(208).then(t.bind(null, 95)).then((function(e) {
                  e.default.isFaceDirector(i.default.lp).then((function(e) {
                      1 == e.iType && Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(27), t.e(28), t.e(36), t.e(208), t.e(328), t.e(323), t.e(325), t.e(327), t.e(329), t.e(331), t.e(324), t.e(326), t.e(330), t.e(332)]).then(t.bind(null, 126))
                  }
                  ))
              }
              )),
              t.e(36).then(t.bind(null, 76)).then((function(e) {
                  var n = e.default;
                  n.on("update", (function() {
                      setTimeout((function() {
                          var e = n.topPanel();
                          $(".chat-wrap-panel").hide(),
                          $("#wrap-" + e).fadeIn(100, (function() {
                              n.emit("update:lockAndClearBtn"),
                              n.emit("update:roomGgChat")
                          }
                          ))
                      }
                      ), 100)
                  }
                  )),
                  n.emit("update"),
                  TT.event.on("TT_CALL", (function(e) {
                      "chatroomPanelExtSwitch" == e.reqName && (e.opt.switch ? n.online.push : n.online.pop)("ext")
                  }
                  ))
              }
              ))
          }
      }
      )),
      c.default.isH5 && o.a.videoOnLoad((function() {
          return Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(10), t.e(12), t.e(15), t.e(18), t.e(19), t.e(22), t.e(24), t.e(30), t.e(29), t.e(25), t.e(32), t.e(44), t.e(40), t.e(38), t.e(43), t.e(41), t.e(39), t.e(80), t.e(95), t.e(234), t.e(377), t.e(441), t.e(371), t.e(372), t.e(370), t.e(320), t.e(315), t.e(342), t.e(374), t.e(317), t.e(318), t.e(319), t.e(322), t.e(350), t.e(351), t.e(354), t.e(356), t.e(364), t.e(366), t.e(369), t.e(368), t.e(373), t.e(375), t.e(378), t.e(345), t.e(346), t.e(376), t.e(444), t.e(316), t.e(365), t.e(290), t.e(321), t.e(344), t.e(347), t.e(348), t.e(349), t.e(352), t.e(353), t.e(355), t.e(357), t.e(367), t.e(442), t.e(443), t.e(454)]).then(t.bind(null, 127))
      }
      )),
      o.a.lazyLoad({
          executor: function(e) {
              t.e(292).then(t.bind(null, 128)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on(c.default.isH5 ? "guessReport" : "gameGuessReport", (function() {
                  e().done((function(e) {
                      e()
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(31), t.e(249), t.e(247), t.e(248)]).then(t.bind(null, 60))
          },
          force: function(e) {
              c.default.on("clickInventIcon", (function(e) {
                  Promise.all([t.e(31), t.e(249), t.e(247), t.e(248)]).then(t.bind(null, 60)).then((function(e) {
                      e.default.initialize()
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(31), t.e(240), t.e(238), t.e(239)]).then(t.bind(null, 61))
          },
          force: function(e) {
              c.default.on("clickDeliveryIcon", (function(e) {
                  Promise.all([t.e(31), t.e(240), t.e(238), t.e(239)]).then(t.bind(null, 61)).then((function(n) {
                      n.default.initialize(e)
                  }
                  ))
              }
              ))
          }
      }),
      c.default.isH5 && o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(18), t.e(19), t.e(22), t.e(34), t.e(24), t.e(27), t.e(30), t.e(29), t.e(28), t.e(25), t.e(35), t.e(42), t.e(37), t.e(48), t.e(82), t.e(72), t.e(73), t.e(69), t.e(66), t.e(80), t.e(95), t.e(83), t.e(79), t.e(113), t.e(133), t.e(179), t.e(181), t.e(219), t.e(180), t.e(130), t.e(131), t.e(132), t.e(220), t.e(363), t.e(359), t.e(360), t.e(361), t.e(362), t.e(358), t.e(281)]).then(t.bind(null, 148)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("clickTVIcon", (function() {
                  e().done((function(e) {
                      e()
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(10), t.e(493)]).then(t.bind(null, 129)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.isH5 ? c.default.ready((function(n) {
                  n.addTafListener("7054", (function(n) {
                      e().done((function(e) {
                          e(n)
                      }
                      ))
                  }
                  ))
              }
              )) : c.default.on("showRaffleWinnerNotice", (function(n) {
                  e().done((function(e) {
                      e(n.param)
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(10), t.e(76), t.e(98)]).then(t.bind(null, 80)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("webgamepaylayer", (function(n) {
                  e().done((function(e) {
                      e(n.param ? n.param : n)
                  }
                  ))
              }
              )),
              TT.on("liveRoom_recharge", (function() {
                  e().done((function(e) {
                      e()
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(10), t.e(466)]).then(t.bind(null, 130)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              function n() {
                  TT.sudo((function() {
                      e().done((function(e) {
                          e(i.default.lp)
                      }
                      ))
                  }
                  ))
              }
              c.default.on("clickBadgeFaith", n),
              TT.on("GET_BADGE_FAITH", n)
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              t.e(10).then(t.bind(null, 24)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("paySMSConfirm", (function(n) {
                  e().done((function(e) {
                      var t = e.dialog.iframe({
                          title: "安全验证",
                          src: n.param.url,
                          width: 380,
                          height: 340
                      });
                      d.default.off("udbSafeAuth").on("udbSafeAuth", (function() {
                          t.close()
                      }
                      ))
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              t.e(311).then(t.bind(null, 131)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("topUpPayment", (function(n) {
                  e().done((function(e) {
                      e(n)
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              t.e(289).then(t.bind(null, 132)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("getFirstRecharge", (function(n) {
                  e().done((function(e) {
                      e(n)
                  }
                  ))
              }
              ))
          }
      }),
      c.default.isH5 && (o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(10), t.e(501)]).then(t.bind(null, 133)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("reportMessage", (function(n) {
                  e().done((function(e) {
                      TT.sudo((function() {
                          e(n.uid, n.nick, n.msg)
                      }
                      ))
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(12), t.e(24), t.e(25), t.e(65), t.e(49), t.e(50), t.e(77), t.e(91), t.e(78), t.e(169), t.e(170), t.e(168), t.e(171), t.e(172), t.e(173), t.e(453)]).then(t.bind(null, 134)).then((function(n) {
                  var t = n.default;
                  return e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("muteMessage", (function(n) {
                  var t = n.uid
                    , o = n.msg;
                  e().done((function(e) {
                      return e(t, o)
                  }
                  ))
              }
              ))
          }
      })),
      o.a.videoOnLoad((function() {
          t.e(314).then(t.bind(null, 135))
      }
      )),
      function() {
          var e = null;
          var n = {
              uid: i.default.lp,
              type: 2,
              channelId: a.default.id,
              gameid: a.default.gid,
              source: "web"
          };
          function t() {
              TT.sudo((function() {
                  Object(f.a)((function(t) {
                      e ? e.show() : e = new t({
                          title: "守护系统",
                          width: 670,
                          height: 450,
                          url: "".concat("//hd.huya.com/web/new-guard-open/index.html", "?").concat($.param(n)),
                          idDom: "souhuLayer",
                          idMask: "souhuMask"
                      })
                  }
                  ))
              }
              ))
          }
          $(".open-souhu").on("click", t),
          TT.event.on("GUARD_APPLY", t),
          c.default.on("openGuard", t)
      }(),
      o.a.videoOnLoad((function() {
          t.e(20).then(t.t.bind(null, 44, 7)).then((function(e) {
              var n = e.default;
              c.default.ready((function() {
                  c.default.call("msgShieldCfg", n.cfg),
                  n.on("change", (function() {
                      c.default.call("msgShieldCfg", n.cfg)
                  }
                  ))
              }
              )),
              c.default.on("msgShieldCfgSet", (function(e) {
                  var t = c.default.isH5 ? e : e.param;
                  n.set(t.type, t.val)
              }
              ))
          }
          ))
      }
      )),
      c.default.on("setGuid", (function(e) {
          var n = new Date;
          n.setTime(n.getTime() + 2592e6),
          HUYA_UTIL.writeCookie("guid", e.param.guid, TT.domainForWriteCookie, "/", n)
      }
      ), !0),
      c.default.on("webgamelivelogin", (function() {
          TT.login.login()
      }
      )),
      c.default.on("UserRegister", (function() {
          TT.login.register()
      }
      )),
      c.default.isFlash && c.default.on("setFlashCookie", (function(e) {
          var n = new Date;
          n.setTime(n.getTime() + 864e5),
          HUYA_UTIL.writeCookie(e.param.cookieKey, e.param.cookieVal, TT.domainForWriteCookie, "/", n)
      }
      ), !0),
      o.a.videoOnLoad((function() {
          t.e(21).then(t.bind(null, 18)).then((function(e) {
              var n = e.default;
              function t(e) {
                  var t = e.param ? e.param.data.total_count : e.data.total_count;
                  if (t > 0) {
                      var o = n.formatNumber2(t, "#,###");
                      $("#live-count").html(o)
                  }
              }
              c.default.isH5 ? c.default.ready((function(e) {
                  e.addTafListener("8006", (function(e) {
                      t({
                          data: {
                              total_count: e.iAttendeeCount
                          }
                      })
                  }
                  ))
              }
              )) : c.default.on("WebTotalCount", t)
          }
          ))
      }
      )),
      o.a.videoOnLoad((function() {
          c.default.isH5 ? c.default.ready((function(e) {
              e.addTafListener("8004", n)
          }
          )) : c.default.on("liveInfoChangedNotice", n);
          var e = null;
          function n(n) {
              var t = n.param ? n.param : n;
              t.sLiveDesc && (e || (e = $("#J_roomTitle")),
              e.text(HUYA_UTIL.unescape(t.sLiveDesc)))
          }
      }
      )),
      o.a.videoOnLoad((function() {
          TT.event.emit("TT_ROOM_ENTRANCE_EXPOSURE", i.default.lp)
      }
      )),
      o.a.videoOnLoad((function() {
          TT.event.on("TT_CALL", (function(e) {
              "sendGift" == e.reqName && c.default.call("giveGift", {
                  num: e.opt.amount,
                  fromType: 1,
                  type: e.opt.type,
                  iRequestId: e.opt.iRequestId
              })
          }
          ))
      }
      )),
      o.a.videoOnLoad((function() {
          t.e(203).then(t.bind(null, 88)).then((function(e) {
              var n = e.default;
              n.on("change", (function(e, n) {
                  var t = {
                      OFF: 0,
                      ON: 1
                  }[e];
                  void 0 !== t && TT.emit("liveStatusChange", t)
              }
              )),
              n.on("change", (function(e, n) {
                  "ON" == e && $("#J_noticeLive").css("display", "inline-block").on("click", (function(e) {
                      e.preventDefault(),
                      location.reload()
                  }
                  ))
              }
              ))
          }
          ))
      }
      )),
      c.default.isFlash && c.default.on("isUserOnLive", (function(e) {
          1 == e.param.isLive && $("#tipsOrchat").css("visibility", "visible").html('<div class="live-tips"><i></i><p>为保障您的直播不被中断，您暂时不能在网页上进行种豆，送礼和发言(直到您结束直播),我们将尽快解决。</p></div>')
      }
      ), !0),
      c.default.isFlash && $(window).on("focus", (function() {
          c.default.ready() && c.default.call("changeTabTarget")
      }
      )),
      o.a.lazyLoad({
          executor: function(e) {
              t.e(10).then(t.bind(null, 24)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              function n(n) {
                  0 == n.version && e().done((function(e) {
                      e.dialog.iframe({
                          title: "安全验证",
                          src: n.authUrl,
                          width: 380,
                          height: 330
                      })
                  }
                  ))
              }
              c.default.isH5 ? c.default.ready((function(e) {
                  e.addTafListener("10220054", n)
              }
              )) : c.default.on("safetyVerification", (function(e) {
                  n(e.param)
              }
              ))
          }
      }),
      c.default.ready((function(e) {
          c.default.isH5 && e.addTafListener("1130055", (function(e) {
              TT.event.emit("UserLevelTaskCompleteNotice", e)
          }
          ))
      }
      )),
      c.default.ready((function(e) {
          c.default.isFlash ? c.default.on("getUserNovieTaskCompleteRsp", (function() {
              TT.emit("userLevelTaskComplete")
          }
          )) : e.addTafListener("1000107", (function() {
              TT.emit("userLevelTaskComplete")
          }
          ))
      }
      )),
      o.a.videoOnLoad((function() {
          t.e(288).then(t.bind(null, 136)).then((function(e) {
              e.default.change((function(e) {
                  c.default.ready((function(n) {
                      c.default.call("documentVisibilityChange", e)
                  }
                  ))
              }
              ))
          }
          ))
      }
      )),
      c.default.on("displayModeChange", (function(e) {
          var n = $("body");
          n.removeClass("mode-page-full mode-page-theater"),
          0 == e || (1 == e ? n.addClass("mode-page-full") : 3 == e && n.addClass("mode-page-theater"))
      }
      )),
      o.a.videoOnLoad((function() {
          function e(e) {
              TT.on("reportReady", (function() {
                  c.default.call("tongjiReady", {
                      sessionId: YA.session_id.get(),
                      mid: YA.mid.get()
                  })
              }
              ), !0)
          }
          c.default.isFlash && c.default.on("flashTongJiInit", (function() {
              c.default.ready(e)
          }
          )),
          c.default.isH5 && c.default.ready(e)
      }
      )),
      o.a.videoOnLoad((function() {
          Promise.all([t.e(15), t.e(177), t.e(176), t.e(175), t.e(178), t.e(129)]).then(t.t.bind(null, 87, 7)).then((function(e) {
              var n = (0,
              e.createFeedbackerSingleInstance)({
                  anchorId: i.default.lp
              });
              c.default.call("feedbackSdkReady", n)
          }
          ))
      }
      )),
      o.a.videoOnLoad((function() {
          return Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(0), t.e(1), t.e(2), t.e(12), t.e(101), t.e(110), t.e(117), t.e(386)]).then(t.bind(null, 137))
      }
      )),
      o.a.videoOnLoad((function() {
          /^(NORMAL|STAR|MATCH)$/.test(a.default.type) && t.e(20).then(t.t.bind(null, 44, 7)).then((function(e) {
              e.default.cfg[3e4] || Promise.all([t.e(20), t.e(36), t.e(494)]).then(t.bind(null, 149)).then((function(e) {
                  (0,
                  e.default)()
              }
              ))
          }
          ))
      }
      )),
      a.default.isOff || (y || o.a.videoOnLoad((function() {
          Promise.all([t.e(128), t.e(499)]).then(t.bind(null, 138))
      }
      )),
      o.a.videoOnLoad((function() {
          TT.event.on("TT_CALL", (function(e) {
              switch (e.reqName) {
              case "trigger:videoStart":
                  c.default.call("shipinPlay");
                  break;
              case "trigger:videoPause":
                  c.default.call("shipinPause")
              }
          }
          )),
          c.default.on("videoStatusChange", (function(e) {
              0 == e.videoStatus && TT.event.emit("notice:videoStart")
          }
          ))
      }
      ))),
      c.default.isH5 && c.default.ready((function(e) {
          e.addTafListener("10220053", (function(e) {
              Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(49), t.e(50), t.e(424)]).then(t.t.bind(null, 139, 7)).then((function(n) {
                  return (0,
                  n.mount)(e)
              }
              ))
          }
          ))
      }
      )),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([t.e(10), t.e(477)]).then(t.bind(null, 140)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("clickMissAsia", (function() {
                  e().done((function(e) {
                      e()
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              t.e(491).then(t.bind(null, 141)).then((function(n) {
                  var t = n.default;
                  e && e(t)
              }
              ))
          },
          force: function(e) {
              var n = null;
              TT.event.on("showBarrageTip", (function(t) {
                  n && n.destory(),
                  e().done((function(e) {
                      n = new e("#J_speechGuide",t.msg)
                  }
                  ))
              }
              ))
          }
      }),
      o.a.lazyLoad({
          executor: function(e) {
              Promise.all([Promise.all([t.e(92), t.e(128), t.e(235)]).then(t.bind(null, 96)), Promise.all([t.e(92), t.e(126)]).then(t.t.bind(null, 37, 7))]).then((function(n) {
                  var t = k(n, 1)[0].default;
                  e(t)
              }
              ))
          },
          force: function(e) {
              c.default.on("clickDIYActivityIcon", (function(n, t) {
                  var o = n.iIconPage
                    , c = n.sJumpUrl
                    , a = n.sNativeUrl
                    , r = (t || {}).iIsPop;
                  if (1 == o && window.open(c),
                  2 == o) {
                      var u = JSON.stringify({
                          lp: i.default.lp,
                          roomId: i.default.profileRoom,
                          nick: i.default.nick,
                          avatar: i.default.avatar
                      })
                        , s = a;
                      -1 == a.indexOf("noWebTTProvidedData") && (s = "".concat(a).concat(-1 == a.indexOf("?") ? "?" : "&").concat($.param({
                          webTTProvidedData: u
                      }))),
                      e().done((function(e) {
                          e(p(p({}, n), {}, {
                              sNativeUrl: s
                          }), r ? $(".room-core-r")[0] : null)
                      }
                      ))
                  }
              }
              ))
          }
      }),
      c.default.one("showAccompanyTips", (function(e) {
          Promise.all([t.e(4), t.e(5), t.e(6), t.e(3), t.e(7), t.e(8), t.e(9), t.e(445), t.e(446)]).then(t.bind(null, 142)).then((function(n) {
              var t = n.mount
                , o = document.querySelector(".duya-header-bd");
              o && t({
                  text: e,
                  root: o
              })
          }
          ))
      }
      )),
      c.default.isH5 && c.default.ready((function(e) {
          TT.sudo((function(n) {
              var t = n.uid;
              e.addTafListener("1060003", (function(e) {
                  var n = e.tMTInfo
                    , o = e.tCTInfo
                    , c = t == n.lUid
                    , a = t == o.lUid
                    , i = c || a ? a ? n : o : null;
                  i && TT.event.emit("TT_HD_USER_MSG_NOTICE", {
                      uid: i.lUid,
                      userNick: i.sNickName,
                      userIcon: i.sAvatarUrl
                  })
              }
              ))
          }
          ), !1)
      }
      )),
      c.default.on("line_priority", (function() {
          t.e(204).then(t.bind(null, 97)).then((function(e) {
              e.default.addForce(i.default.lp)
          }
          ))
      }
      )),
      $((function() {
          document.body.addEventListener("click", (function(e) {
              var n = e.isTrusted
                , t = e.target || {}
                , o = t.id
                , c = void 0 === o ? "" : o
                , a = t.className
                , i = void 0 === a ? "" : a
                , r = t.nodeName
                , u = void 0 === r ? "" : r;
              !1 === n && performanceInfo._hmt.push(["reportApiMess", "eventIsNotTrusted", JSON.stringify({
                  id: c,
                  className: i,
                  nodeName: u
              }), 200])
          }
          ), !1)
      }
      ))
  },
  63: function(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
          value: !0
      }),
      n.AshBin = void 0;
      var o = function() {
          function e(e) {
              void 0 === e && (e = 200),
              this.max = e,
              this.count = 0,
              this.fragment = null
          }
          return e.prototype.add = function(e) {
              null === this.fragment && (this.fragment = document.createDocumentFragment()),
              this.fragment.appendChild(e),
              this.count += 1,
              this.count >= this.max && (this.fragment = null,
              this.count = 0)
          }
          ,
          e
      }();
      n.AshBin = o
  },
  8: function(e, n, t) {
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
});
