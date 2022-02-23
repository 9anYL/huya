// ==UserScript==
// @name         种豆得W
// @namespace    9an
// @version      1.0.1
// @description  虎牙种豆子喽
// @author       9an
// @resource customCSS https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css
// @require https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js
// @require https://code.jquery.com/jquery-3.4.1.min.js
// @match https://www.huya.com/*
// @grant GM_getResourceText
// @grant GM_addStyle
// @run-at document-end
// ==/UserScript==

var $ = window.jQuery;
var css = GM_getResourceText("customCSS");
GM_addStyle(css);

var html = '<div class="accordion" id="accordionPanelsStayOpenExample"><div class="accordion-item"><h2 class="accordion-header" id="panelsStayOpen-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne">2022年KPL春季赛常规赛第一轮第三周</button></h2><div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse"><div class="accordion-body"><div class="row"><div class="col-sm-4"><div class="card border-dark text-center"><div class="card-header bg-transparent border-dark">标题1</div><div class="card-body"><div class="card-group"><div class="input-group"><div class="input-group-text"><input class="form-check form-switch" type="checkbox" value=""></div><input type="text" class="form-control" disabled></div><div class="input-group"><div class="input-group-text"><input class="form-check form-switch" type="checkbox" value=""></div><input type="text" class="form-control" disabled></div></div></div></div></div><div class="col-sm-4"><div class="card border-dark text-center"><div class="card-header bg-transparent border-dark">标题1</div><div class="card-body"><div class="card-group"><div class="input-group"><div class="input-group-text"><input class="form-check form-switch" type="checkbox" value=""></div><input type="text" class="form-control" disabled></div><div class="input-group"><div class="input-group-text"><input class="form-check form-switch" type="checkbox" value=""></div><input type="text" class="form-control" disabled></div></div></div></div></div><div class="col-sm-4"><div class="card border-dark text-center"><div class="card-header bg-transparent border-dark">标题1</div><div class="card-body"><div class="card-group"><div class="input-group"><div class="input-group-text"><input class="form-check form-switch" type="checkbox" value=""></div><input type="text" class="form-control" disabled></div><div class="input-group"><div class="input-group-text"><input class="form-check form-switch" type="checkbox" value=""></div><input type="text" class="form-control" disabled></div></div></div></div></div></div></div></div></div></div>';

var position =document.querySelector(".room-player-wrap");
position.insertAdjacentHTML('afterend',html);

var guessMainBoxLength, cardLength;

var ready = !1;
var timer;
var funcArray = [];

(function domReady( f ) {
     if ( ready ) {
         return f();
     } else {
         timer = setInterval( isDOMReady, 13 );
     }
})()

function isDOMReady() {
  if ($(".guess-main-box").length > 0) {
      clearInterval( timer );
      timer = null;
      ready = !0;

      guessMainBoxLength = $(".guess-main-box").length;
      cardLength = $(".card").length;
      for (let index = 0; index < guessMainBoxLength; index++) {
        funcArray[index] = function (event) {
          $(".card").eq(index).find(".card-header").html($(event.currentTarget).find(".name").text())
          $(".card").eq(index).find(".form-control").eq(0).val("【"+$(event.currentTarget).find(".guess-unit.red").find(".process-name").text()+"】【"+$(event.currentTarget).find(".guess-unit.red").find(".process-num").text()+"】【"+$(event.currentTarget).find(".guess-unit.red").find(".guess-btn").text()+"】")
          $(".card").eq(index).find(".form-control").eq(1).val("【"+$(event.currentTarget).find(".guess-unit.blue").find(".process-name").text()+"】【"+$(event.currentTarget).find(".guess-unit.blue").find(".process-num").text()+"】【"+$(event.currentTarget).find(".guess-unit.blue").find(".guess-btn").text()+"】")
        }
      }
      $(".guess-main-box").each(function(index, element){
        $(".card").eq(index).find(".card-header").html($(element).find(".name").text())
        $(".card").eq(index).find(".form-control").eq(0).val("【"+$(element).find(".guess-unit.red").find(".process-name").text()+"】【"+$(element).find(".guess-unit.red").find(".process-num").text()+"】【"+$(element).find(".guess-unit.red").find(".guess-btn").text()+"】")
        $(".card").eq(index).find(".form-control").eq(1).val("【"+$(element).find(".guess-unit.blue").find(".process-name").text()+"】【"+$(element).find(".guess-unit.blue").find(".process-num").text()+"】【"+$(element).find(".guess-unit.blue").find(".guess-btn").text()+"】")
        $(element).on('DOMNodeInserted',funcArray[index])
      })
      

      $("input.form-check:checkbox").on("click", function(){
        if($(this).prop("checked")){
          $(this).prop("checked", true)
        }else{
          $(this).prop("checked", false)
        }
        $(this).siblings().prop("checked",false)
      })
  }
}

