<!-- Topbar -->
<div class="header-main" id="mainpage">
  <div id="sticky-wrapper" class="sticky-wrapper">
   <!-- Horizontal Header -->
   <div class="horizontal-header bg-dark-transparent clearfix">
      <div class="container" id="mobile-min">
         <a id="" class="animated-arrow pt-2 mt-0 pr-2 main-logo-mob" href="#">
         <img src="{{ url('frontend/images/brand/logo.png') }}" width="120" alt=""/>
         </a>
         <!--             <a href="#"  class="globle-a">
            <i class="fa fa-globe fa-2x"></i>
            </a>
            <a href="#"  class="postbtn btn btn-success text-uppercase">
            <i class="fa fa-plus"></i> Post Ad
            </a>

            <div class="dropdown" class="menu-mmdown" >
            <button class="btn show btn-test" type="button" data-toggle="dropdown" style="" id="btn-test">
            <i class="fa fa-bars" id="menu-bars" style="color:#fff;"></i> Menu
            </button>
            </div>  -->
         <a href="#" class="globe-aa">
         <i class="fa fa-globe fa-2x" style="color:#fff !important;"></i>
         </a>
         <a href="#" class="globe-b">
         <i class="fa fa-user-circle fa-2x" style="color:#fff !important;"></i>
         </a>
         <a href="#"  class="postbtn2 btn btn-success text-uppercase">
         <i class="fa fa-plus" style="color:#fff;"></i> {Post Ad}
         </a>
      </div>
   </div>
   <!-- /Horizontal Header -->
   <div class="horizontal-main bg-dark-transparent clearfix">
      <div class="horizontal-mainwrapper container clearfix">
         <div class="row">
            <div class="col-6 mt-5">
               <span class="logoa1">
               <a href="{{ url('/') }}">
               <img src="{{ url('frontend/images/brand/logo.png') }}" alt="">
               </a>
               </span>
               <span class="lang_en">
               <a href="#">en</a>
               </span>
               <span class="num_span1">
               <a href="tel:" class="">
               <i class="fa fa-phone"></i> 72777222 </a>
               </span>
            </div>
            <div class="col-6">
               <nav class="horizontalMenu " style="z-index:90000 !important;">
                  <ul class="horizontalMenu-list">
                  <!--            <li aria-haspopup="true"><span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#" class="btn btn-secondary" style="color:#ffffff;"><i class="fas fa-user" style="color:#ffffff;"></i>
                     My Account
                     <span class="fas fa-caret-down m-0"></span></a><ul class="sub-menu"> -->
                  <!-- if user login start here -->
                  <!--                          <p class="text-danger text-left mt-1 pb-0 mb-0 pl-2">Welcome Admin</p><li aria-haspopup="true"><a href="#">My Ads</a></li><li aria-haspopup="true"><a href="#">Watchlist</a></li><li aria-haspopup="true"><a href="#">Following</a></li><li aria-haspopup="true"><a href="#">Followers</a></li><li aria-haspopup="true"><a href="#">My Profile</a></li><li aria-haspopup="true"><a href="#">My Office</a></li><li aria-haspopup="true"><a href="#">LogOut</a></li> -->
                  <!-- else -->
                  <!--        <li aria-haspopup="true"><a href="#">My Office</a></li><li aria-haspopup="true"><a href="#">LogOut</a></li> -->
                  <!-- if user login end here -->
                  <!--  </ul></li> -->
                  <!-- if role member -->
                  <!--          <li aria-haspopup="true"><a href="#" class="btn btn-success" style="color:#ffffff;"><i class="fas fa-plus" style="color:#ffffff;"></i> POST AD NOW
                     </a></li> -->
                  <!-- end if role member -->
                  <!-- else start here -->
                  @guest
                    <li aria-haspopup="true">
                        <a href="{{route("user.login")}}" class="btn btn-secondary" style="color:#ffffff;">
                        <i class="fa fa-user"  style="color:#ffffff;"></i> Login </a>
                    </li>
                  @else
                    <li aria-haspopup="true">
                        <span class="horizontalMenu-click">
                            <i class="horizontalMenu-arrow fa fa-angle-down"></i>
                        </span>
                        <a href="#" class="btn btn-secondary" style="color:#ffffff;">
                            <i class="fas fa-user" style="color:#ffffff;"></i>
                            My Account
                            <span class="fas fa-caret-down m-0"></span>
                        </a>
                        <ul class="sub-menu">

                            <p class="text-danger text-left mt-1 pb-0 mb-0 pl-2">Welcome <?= Auth::user()->name;?></p>
                            <li aria-haspopup="true"><a href="">My Ads</a></li>
                            <li aria-haspopup="true"><a href="">Watchlist</a></li>
                            <!--<li aria-haspopup="true"><a href="javascript:void(0);">My Purchases</a></li>-->
                            <li aria-haspopup="true"><a href="">Following</a></li>
                            <li aria-haspopup="true"><a href="">Followers</a></li>
                            <li aria-haspopup="true"><a href="">My Profile</a></li>
                            <li aria-haspopup="true"><a href="">My Office</a></li>
                            <li aria-haspopup="true"><a href="{{route("user.logout")}}" onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">Log Out</a></li>

                            <form id="logout-form" action="{{ route('user.logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                            {{-- <li aria-haspopup="true"><a href="">My Office</a></li>
                            <li aria-haspopup="true"><a href="">LogOut</a></li> --}}

                        </ul>
                    </li>
                  @endguest
                  <li aria-haspopup="true">
                     <a href="#" class="btn btn-success" style="color:#ffffff;">
                     <i class="fa fa-plus" style="color:#ffffff;"></i>POST AD NOW </a>
                  </li>
                  <!-- if end here role member -->
                   </ul>
                     <!-- <ul class="mb-0">  -->
                  <!--              <li aria-haspopup="true" class="mt-5 d-none d-lg-block "><span><a class="btn btn-green ad-post " href="ad-posts.html"><i class="fa fa-car text-white mr-1"></i> Sell Your Car</a></span></li> -->
                  <!-- </ul> -->
               </nav>
               <!--Nav-->
            </div>
         </div>
      </div>
   </div>
   <!-- /Horizontal Main -->
 </div>
</div>
<!--       <div style="position: absolute;z-index:1000;top:60px;background-color: #010408;width:100%;display: none;" class="" id="if-main-menu">
   <div class="row">
     <div class="col-12 text-white">

         <a href="#" class="text-white">
           <h5 class="p-3" style="border-bottom:1px dotted grey;">{My Ads}</h5>
         </a>
         <a href="#" class="text-white">
           <h5 class="p-3" style="border-bottom:1px dotted grey;">
             {Watchlist}
           </h5>
         </a>
         <a href="#" class="text-white">
           <h5 class="p-3" style="border-bottom:1px dotted grey;">
             {Following}
           </h5>
         </a>
         <a href="#" class="text-white">
           <h5 class="p-3" style="border-bottom:1px dotted grey;">
             {Followers}
           </h5>
         </a>
         <a href="#" class="text-white">
           <h5 class="p-3" style="border-bottom:1px dotted grey;">
             {My Profile}
              </h5>
         </a>
         <a href="#" class="text-white">
           <h5 class="p-3" style="border-bottom:1px dotted grey;">
             {My Office}
              </h5>
         </a>
         <a href="#" class="text-white">
           <h5 class="p-3" style="border-bottom:1px dotted grey;">
             {LogOut}
           </h5>
         </a>

         <a href="" class="text-white">
           <h5 class="p-3" style="border-bottom:1px dotted grey;">
             {My Office}
              </h5>
         </a>
         <a href="" class="text-white">
           <h5 class="p-3" style="border-bottom:1px dotted grey;">
             {LogOut}
           </h5>
         </a>
     </div>
   </div>
   </div> -->
<!-- Topbar -->
