 <!-- Modal -->
    <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="single-page">
                <div class="col-12 d-block mx-auto">
                  <div class="wrapper wrapper2">
                    <form id="login-form" class="card-body" tabindex="500">
                      <h3>Login</h3>
                      <div class="row d-none" id="error-msg-div">
                        <div class="col-12">
                          <h5 class="badge badge-danger"> Please Rectify Following to Continue </h5>
                        </div>
                        <div class="col-12 text-left text-danger">
                          <span id="response-msg" class="text-left"></span>
                        </div>
                      </div>
                      <div class="mail">
                        <input type="text" name="username" id="username-modal" required>
                        <label>Username</label>
                      </div>
                      <div class="passwd">
                        <input type="password" name="userpass" id="userpass-modal" required>
                        <label>Password</label>
                      </div>
                      <div class="submit">
                        <button type="button" class="btn btn-primary btn-block" id="btn-login-modal">Login</button>
                      </div>
                      <p class="mb-2">
                        <a href="javascript:void(0);">Forgot Password</a>
                      </p>
                      <p class="text-dark mb-0">Don't have account? <a href="#" class="text-primary ml-1">Sign UP</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="popup-msg-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body" style="border:4px dashed grey;">
            <div class="row mt-0 pt-0 mb-0 pb-0">
              <div class="col-md-11"></div>
              <div class="col-md-1">
                <a href="javascript:void(0);" class="close text-danger" data-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times" style="font-size:20px;"></i>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div id="subscription-content">
                  <p class="text-center text-success" id="sb-title" style="font-size:120px;"></p>
                </div>
                <h4 class="text-center" id="sb-text"></h4>
                <h6 class="text-center text-warning"> (This message will disappear automatically in <span id="close-counter">10</span>) </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="delete-modal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-sm">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header" style="background-color:#D30000 !important;color:#FFFFFF !important;">
            <h4 class="modal-title text-center text-white">Confirmation </h4>
            <button type="button" class="close" data-dismiss="modal" style="color:#FFFFFF !important;">&times;</button>
          </div>
          <div class="modal-body">
            <input type="hidden" id="delete-id">
            <h1 class="text-center text-danger" style="font-size:80px;">
              <i class="fas fa-warning"></i>
            </h1>
            <h2 class="text-center text-danger">Are you sure?</h2>
            <h6 class="text-center text-danger">
              <i>All the data will be lost and cannot be recovered</i>
            </h6>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">No</button>
            <button type="button" class="btn btn-danger" id="btn-delete">Yes</button>
          </div>
        </div>
      </div>
    </div>
    <div id="notify-modal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-sm">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header" id="notify-modal-type" style="color:#FFFFFF !important;">
            <h4 class="modal-title text-center text-white">Notification </h4>
            <button type="button" class="close" data-dismiss="modal" style="color:#FFFFFF !important;">&times;</button>
          </div>
          <div class="modal-body">
            <h1 class="text-center" id="notify-modal-icon" style="font-size:80px;"></h1>
            <h2 class="text-center" id="notify-modal-heading"></h2>
            <h6 class="text-center" id="notify-modal-text"></h6>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">OK</button>
            <!-- <button type="button" class="btn btn-danger">Yes</button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="contact-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="single-page">
                <div class="col-12 d-block mx-auto">
                  <div class="wrapper wrapper2">
                    <form id="add-contact-form" class="card-body" tabindex="500">
                      <h3>Please Enter Your Contact Number</h3>
                      <div class="mail">
                        <input type="text" class="isnumber text-center" id="contact-modal-info" required>
                      </div>
                      <p class="text-danger d-none" id="errors-contact"></p>
                      <div class="submit">
                        <button type="button" class="btn btn-primary btn-block" id="btn-contact-modal" data-member="">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="loading-modal"></div>
    <div class="mobile-nav-overlay"></div>
    <!--Footer Section-->
    <!-- Back to top -->
    <a href="#top" id="back-to-top">
      <i class="fa fa-rocket"></i>
    </a>
    <!-- JQuery js-->
    <script src="{{ url('frontend/js/jquery-3.2.1.min.js') }}"></script>
    <script src="{{ url('frontend/custom_js/jquery-ui.min.js') }}"></script>

    <script src="https://code.jquery.com/jquery-migrate-1.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-image-zoom/js-image-zoom.min.js"></script>

    <!-- Bootstrap js -->
    <script src="{{ url('frontend/plugins/bootstrap-4.3.1/js/popper.min.js') }}"></script>
    <script src="{{ url('frontend/plugins/bootstrap-4.3.1/js/bootstrap.min.js') }}"></script>
    <!-- <script src="{{ url('frontend/plugins/bootstrap-4.3.1/js/bootstrap-rtl.js') }}"></script> -->
    <!--JQueryVehiclerkline Js-->
    <script src="{{ url('frontend/js/jquery.sparkline.min.js') }}"></script>
    <!-- Circle Progress Js-->
    <script src="{{ url('frontend/js/circle-progress.min.js') }}"></script>
    <!-- Star Rating Js-->
    <script src="{{ url('frontend/plugins/rating/jquery.rating-stars.js') }}"></script>
    <!--Counters -->
    <script src="{{ url('frontend/plugins/counters/counterup.min.js') }}"></script>
    <script src="{{ url('frontend/plugins/counters/waypoints.min.js') }}"></script>
    <script src="{{ url('frontend/plugins/counters/numeric-counter.js') }}"></script>
    <!--Owl Carousel js -->
    <script src="{{ url('frontend/plugins/owl-carousel/owl.carousel.js') }}"></script>
    <script src="{{ url('frontend/plugins/flexslider/jquery.flexslider.js') }}"></script>
    <!--Horizontal Menu-->
    <script src="{{ url('frontend/plugins/horizontal-menu/horizontal.js') }}"></script>
    <!--JQuery TouchSwipe js-->
    <script src="{{ url('frontend/js/jquery.touchSwipe.min.js') }}"></script>
    <!--Select2 js -->
    <script src="{{ url('frontend/plugins/select2/select2.full.min.js') }}"></script>
    <script src="{{ url('frontend/js/select2.js') }}"></script>
    <!-- Sticky Js-->
    <!-- <script src="{{ url('frontend/js/sticky.js') }}"></script> -->
    <!-- Cookie js -->
    <!-- <script src="{{ url('frontend/plugins/cookie/jquery.ihavecookies.js') }}"></script> -->
    <!-- <script src="{{ url('frontend/plugins/cookie/cookie.js') }}"></script> -->
    <!--Showmore Js-->
    <script src="{{ url('frontend/js/jquery.showmore.js') }}"></script>
    <script src="{{ url('frontend/js/showmore.js') }}"></script>
    <!-- Custom scroll bar Js-->
    <script src="{{ url('frontend/plugins/scroll-bar/jquery.mCustomScrollbar.js') }}"></script>
    <!-- JQuery Toast-->
    <script src="{{ url('frontend/plugins/jquery-toast/jquery.toast.min.js') }}"></script>
    <!-- Swipe Js-->
    <script src="{{ url('frontend/js/swipe.js') }}"></script>


<!-- <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.1/js/jquery.dataTables.js"></script>
      <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.3/js/dataTables.bootstrap4.min.js"></script>
      <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/responsive/2.2.9/js/dataTables.responsive.min.js"></script>
      <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/buttons/2.2.2/js/dataTables.buttons.min.js"></script> -->

   <!-- Custom Js-->
  <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>
    <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
    <!-- Custom Js-->
    <script src="{{ url('frontend/js/custom.js') }}"></script> 

     <!-- Owl Carousel Js-->
    <script src="{{ url('frontend/js/owl-carousel.js') }}"></script>

    <!-- <script src="{{ url('frontend/js/owl-carousel-rtl.js') }}"></script> -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.21/jquery.zoom.js"></script>

    <script src="{{ url('frontend/custom_js/main_scripts.js') }}"></script>

  </body>
</html>