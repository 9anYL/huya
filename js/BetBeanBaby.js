// ==UserScript==
// @name         BetBeanBaby
// @namespace    9an
// @version      1.0.1
// @description  虎牙种豆
// @author       9an
// @require https://code.jquery.com/jquery-3.4.1.min.js
// @match https://www.huya.com/*
// ==/UserScript==

var $ = window.jQuery;

var div = document.createElement('div');
div.setAttribute('id', 'newDiv');
div.style.setProperty('position', 'fixed');
div.style.setProperty('width', '258px');
div.style.setProperty('background', 'rgba(155, 155, 155, 0.8)');
div.style.setProperty('right', '3%');
div.style.setProperty('top', '10%');
div.style.setProperty('border', '1px solid #96c2f1');
div.style.setProperty('z-index', '9999');
div.style.setProperty('box-shadow', '0 1px 5px 4px #888888');
div.innerHTML = '<section id="drag" readonly="value" style="background:gray">\
                   <p style="font-weight: bold;text-align: center;">\
                      BetBeanBaby\
                   </p>\
                 </section>\
                 <section id="bet" style="margin-top: 5px;margin-left: 7px;margin-right: 7px;">\
                   <section id="bet1">\
                     <textarea id="betmess" style="height:80px;width: 237px;line-height:12pt;overflow:hidden;resize:none;background-color:hsla(0,0%,100%,.4);" readonly="value"></textarea>\
                     <input type="button" id="bnt_ywconfirm_left" style="height:22px;width:75px;color:red;" value="左边">\
                     <select id="beanNum" style="height:22px;width: 75px;background-color:hsla(0,0%,100%,.4);margin-left: 5px;margin-right: 6px;">\
                       <option>200,0000</option>\
                       <option selected>ALL IN</option>\
                     </select>\
                     <input type="button" id="bnt_ywconfirm_right" style="height:22px;width:75px;color:blue;" value="右边">\
                   </section>\
                   <section id="bet2" style="margin-top: 5px; display: none;" ;="">\
                     <textarea id="betmess1" style="height:80px;width: 237px;line-height:12pt;overflow:hidden;resize:none;background-color:hsla(0,0%,100%,.4);" readonly="value"></textarea>\
                     <input type="button" id="bnt_ywconfirm_left1" style="height:22px;width:75px;color:red;" value="左边">\
                     <select id="beanNum1" style="height:22px;width: 75px;background-color:hsla(0,0%,100%,.4);margin-left: 5px;margin-right: 6px;">\
                       <option>200,0000</option>\
                       <option selected>ALL IN</option></select>\
                     <input type="button" id="bnt_ywconfirm_right1" style="height:22px;width:75px;color:blue;" value="右边">\
                   </section>\
                   <section id="bet3" style="margin-top: 5px; display: none;">\
                     <textarea id="betmess2" style="height:80px;width: 237px;line-height:12pt;overflow:hidden;resize:none;background-color:hsla(0,0%,100%,.4);" readonly="value"></textarea>\
                     <input type="button" id="bnt_ywconfirm_left2" style="height:22px;width:75px;color:red;" value="左边">\
                     <select id="beanNum2" style="height:22px;width: 75px;background-color:hsla(0,0%,100%,.4);margin-left: 5px;margin-right: 6px;">\
                       <option>200,0000</option>\
                      <option selected>ALL IN</option></select>\
                    <input type="button" id="bnt_ywconfirm_right2" style="height:22px;width:75px;color:blue;" value="右边">\
                  </section>\
                </section>';
document.body.appendChild(div);

$(document).ready(function() {
    try {
        betInfo();
        activate();
    } catch(err) {
        console.log(err);
    };
    setInterval(function() {
        betInfo();
    },
    500);
});

function betInfo() {
    var betNum = $(".guess-main-box").length;

    if (betNum == 0) {
        $('section#bet1').hide();
        $('section#bet2').hide();
        $('section#bet3').hide();
    } else if (betNum == 1) {
        $('section#bet1').show();
        $('section#bet2').hide();
        $('section#bet3').hide()
    } else if (betNum == 2) {
        $('section#bet1').show();
        $('section#bet2').show();
        $('section#bet3').hide();
    } else if (betNum == 3) {
        $('section#bet1').show();
        $('section#bet2').show();
        $('section#bet3').show();
    }

    switch (betNum) {
    case 3:
        $("input#bnt_ywconfirm_left2").val($('p.process-name:eq(4)').text());
        $("input#bnt_ywconfirm_right2").val($('p.process-name:eq(5)').text());
        $("#betmess2").val("竞猜信息：" + "\n" + $(".guess-main-box").eq(2).find(".name").text() + "\n左边：" + $('p.process-name:eq(4)').text() + "   " + $('.guess-btn:eq(4)').text() + "\n右边：" + $('p.process-name:eq(5)').text() + "   " + $('.guess-btn:eq(5)').text() + "\n" + $('.process-num:eq(4)').text() + " VS " + $('.process-num:eq(5)').text());
    case 2:
        $("input#bnt_ywconfirm_left1").val($('p.process-name:eq(2)').text());
        $("input#bnt_ywconfirm_right1").val($('p.process-name:eq(3)').text());
        $("#betmess1").val("竞猜信息：" + "\n" + $(".guess-main-box").eq(1).find(".name").text() + "\n左边：" + $('p.process-name:eq(2)').text() + "   " + $('.guess-btn:eq(2)').text() + "\n右边：" + $('p.process-name:eq(3)').text() + "   " + $('.guess-btn:eq(3)').text() + "\n" + $('.process-num:eq(2)').text() + " VS " + $('.process-num:eq(3)').text());
    case 1:
        $("input#bnt_ywconfirm_left").val($('p.process-name:eq(0)').text());
        $("input#bnt_ywconfirm_right").val($('p.process-name:eq(1)').text());
        $("#betmess").val("竞猜信息：" + "\n" + $(".guess-main-box").eq(0).find(".name").text() + "\n左边：" + $('p.process-name:eq(0)').text() + "   " + $('.guess-btn:eq(0)').text() + "\n右边：" + $('p.process-name:eq(1)').text() + "   " + $('.guess-btn:eq(1)').text() + "\n" + $('.process-num:eq(0)').text() + " VS " + $('.process-num:eq(1)').text());
        break;
    }
}

function activate() {
    $("p.process-name:eq(0)").on("DOMNodeInserted", function() {
        $("input#bnt_ywconfirm_left").val($('p.process-name:eq(0)').text());
    });

    $( "#bnt_ywconfirm_left" ).on( "click", function() {
        $(".guess-plan").find("input").val(0);
        if($(".guess-btn:eq(0)").text() !== "马上开种") {
            $("button.guess-btn").eq(0).click();
            if (Number($("p.left-bean").text().slice(5)) > 0) {
                betYw("beanNum");
            }
        }
    });

    $( "#bnt_ywconfirm_right" ).on( "click", function() {
        $(".guess-plan").find("input").val(0);
        if($(".guess-btn:eq(1)").text() !== "马上开种") {
            $("button.guess-btn").eq(1).click();
            if (Number($("p.left-bean").text().slice(5)) > 0) {
                betYw("beanNum");
            }
        }
    });

    $( "#bnt_ywconfirm_left1" ).on( "click", function() {
        $(".guess-plan").find("input").val(0);
        if($(".guess-btn:eq(2)").text() !== "马上开种") {
            $("button.guess-btn").eq(2).click();
            if (Number($("p.left-bean").text().slice(5)) > 0) {
                betYw("beanNum1");
            }
        }
    });

    $( "#bnt_ywconfirm_right1" ).on( "click", function() {
        $(".guess-plan").find("input").val(0);
        if($(".guess-btn:eq(3)").text() !== "马上开种") {
            $("button.guess-btn").eq(3).click();
            if (Number($("p.left-bean").text().slice(5)) > 0) {
                betYw("beanNum1");
            }
        }
    });

    $( "#bnt_ywconfirm_left2" ).on( "click", function() {
        $(".guess-plan").find("input").val(0);
        if($(".guess-btn:eq(4)").text() !== "马上开种") {
            $("button.guess-btn").eq(4).click();
            if (Number($("p.left-bean").text().slice(5)) > 0) {
                betYw("beanNum2");
            }
        }
    });

    $( "#bnt_ywconfirm_right2" ).on( "click", function() {
        $(".guess-plan").find("input").val(0);
        if($(".guess-btn:eq(5)").text() !== "马上开种") {
            $("button.guess-btn").eq(5).click();
            if (Number($("p.left-bean").text().slice(5)) > 0) {
                betYw("beanNum2");
            }
        }
    });
}

function betYw(beanNum) {
    var beanNumSelect = $("#" + beanNum).find("option:selected").text();
    switch (beanNumSelect) {
    case '200,0000':
        if(Number($("p.my-bean").text().slice(5,-2)) >= 2000000 && Number($("p.left-bean").text().slice(5)) >= 2000000) {
            $(".guess-plan").find("input").val(2000000);
            $('div.guess-plan').find('button').click();
        } else if (Number($("p.my-bean").text().slice(5,-2)) > Number($("p.left-bean").text().slice(5))) {
            $(".guess-plan").find("input").val(Number($("p.left-bean").text().slice(5)));
            $('div.guess-plan').find('button').click();
        } else if (Number($("p.my-bean").text().slice(5,-2)) >= 2000000 && Number($("p.left-bean").text().slice(5)) >= 2000000) {
            $('div.guess-plan').find('li').eq(3).click();
            $('div.guess-plan').find('button').click();
        }
        break;
    case 'ALL IN':
        if(Number($("p.my-bean").text().slice(5,-2)) >= 1000000 && Number($("p.left-bean").text().slice(5)) >= 1000000) {
            $(".guess-plan").find("input").val(1000000);
            $('div.guess-plan').find('button').click();
        } else if (Number($("p.my-bean").text().slice(5,-2)) > Number($("p.left-bean").text().slice(5))) {
            $(".guess-plan").find("input").val(Number($("p.left-bean").text().slice(5)));
            $('div.guess-plan').find('button').click();
        } else if (Number($("p.my-bean").text().slice(5,-2)) > 0 && Number($("p.left-bean").text().slice(5)) > 0) {
            $('div.guess-plan').find('li').eq(3).click();
            $('div.guess-plan').find('button').click();
        }
        break;
    }
}