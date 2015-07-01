"use strict";angular.module("sharoncaronflags",["ngTouch","ngSanitize","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(a,e){a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("about",{url:"/about",templateUrl:"app/about/about.html",controller:"MainCtrl"}),e.otherwise("/")}]),angular.module("sharoncaronflags").controller("NavbarCtrl",["$scope",function(a){a.date=new Date}]),angular.module("sharoncaronflags").controller("MainCtrl",function(){}),angular.module("sharoncaronflags").run(["$templateCache",function(a){a.put("app/about/about.html",'<div class="container"><section class="main-content"><div class="main-copy"><h2 class="about-flags">Meet The Team</h2><div class="col-xs-12 col-md-4"><img src="/assets/images/sharon.jpg" alt="" class="thumbnail meet-team"><p class="img-label">Sharon<br><a href="tel:5614459155">561-445-9155</a></p></div><div class="col-xs-12 col-md-4"><img src="/assets/images/caron.jpg" alt="" class="thumbnail meet-team"><p class="img-label">Caron<br><a href="tel:5612713449">561-271-3449</a></p></div><div class="col-xs-12 col-md-4"><img src="/assets/images/sweeney2.jpg" alt="" class="thumbnail meet-team"><p class="img-label">Sweeney<br><a href="tel:5613023187">561-302-3187</a></p></div></div><div class="about-copy col-xs-12"><p>We love living and working in the neighborhood! Caron & her husband have lived here since 1984 when they initially lived in Tunison Palms and she started the tradition of the 4th of July flags. They later moved to a larger home in Lake Floresta. Sharon, with her husband and family, later moved in just a block away in 1999 and became part of the tradition.</p><p>It\'s so exciting to see the streets lined with American flags every 4th of July morning. It\'s been great to have so many neighbors helping and to see everyone out the night before putting the flags out. It is so appreciated and so worth it!</p><p>We have many Veterans in our midst amongst our neighbors and hearing their stories is extra special - we honor them as well as those with family members that are currently serving in our military.</p><p>We hope you save your flags to put out throughout the year on other patriotic holidays - 9/11, Labor Day, Veteran\'s Day, Memorial Day, Flag Day and any other day that you choose to display the flag. If at anytime during the year you need a flag - just contact us as we keep extras.</p><p>Have a safe and happy Fourth of July,</p><p>Sharon & Caron<br>The Sharon & Caron Group, Keller Williams Realty</p><p>Sharon Arnett, <a href="tel:5614459155">561-445-9155</a>, <a href="mailto:SharonArnett@kw.com">SharonArnett@kw.com</a><br>Caron McGinley, <a href="tel:5612713449">561-271-3449</a>, <a href="mailto:CaronM@kw.com">CaronM@kw.com</a><br>Sweeney Arnett, <a href="tel:5613023187">561-302-3187</a>, <a href="mailto:Sweeney@kw.com">Sweeney@kw.com</a><br></p></div></section></div>'),a.put("app/main/main.html",'<div class="container"><header><div class="main-header"><h1>Get Your Flags</h1><a href="https://www.google.com/maps/place/132+NW+10th+Ct,+Boca+Raton,+FL+33486/@26.35157,-80.106916,17z/data=!3m1!4b1!4m2!3m1!1s0x88d91dfb0f2cd70b:0x69a057b41cee7908" class="find-flags btn btn-primary" target="_blank"><span class="fa fa-street-view"></span>Find Them Here</a></div><div class="main-copy"><h2 class="about-flags">Flag Pickup!</h2><h4 class="flag-pickup">&#9135;&#9135; Friday, July 3rd 3-6pm &#9135;&#9135;</h4><p class="main-copy-text">Let\'s keep up the neighborhood tradition and wake up on the 4th of July with a flag in every yard! Please join us at 132 NW 10th Court at the time above. Bring the kids - we have some holiday goodies for them! <a ui-sref="about">Call us</a> if you want to help distribute on your block or if you would not like a flag in your yard.</p></div></header></div>'),a.put("components/navbar/navbar.html",'<nav class="navbar navbar-default navbar-fixed-top"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#">Get Your Flags</a></div><div class="collapse navbar-collapse" id="main-nav"><ul class="nav navbar-nav"><li class=""><a ui-sref="home">Home</a></li><li><a ui-sref="about">About</a></li><li><a ui-sref="about">Contact</a></li></ul></div></div></nav>')}]);