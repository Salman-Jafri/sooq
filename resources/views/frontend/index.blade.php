@extends('frontend.template.main')
@section('customcss')
    <link href="{{ url('frontend/custom_css/homepage.css') }}" rel="stylesheet" />
@endsection
@section('maincontent')
    <!--Section-->
    <section>
      <input type="hidden" id="page-type" value="home">
      <input type="hidden" id="page-id" value="null">
      <!-- 			<div class="banner-2 cover-image sptb-2 sptb-tab bg-background2" data-image-src="{{ url('frontend/images/banners/banner1.jpg') }}"><div class="header-text mb-0"><div class="container"><div class="text-center text-white "><h1 class="mb-1">WELCOME TO CARS IMPORTERS</h1></div><div class="row"><div class="col-xl-10 col-lg-12 col-md-12 d-block mx-auto"><div class="item-search-tabs"><div class="tab-content index-search-select"><div class="tab-pane active" id="tab1"><div class="search-background"><div class="form row no-gutters"><div class="form-group col-xl-2 col-lg-2 col-md-12 mb-0"><select class="form-control select2-show-search border-bottom-0 border-left-0 w-100" data-placeholder="Select"><optgroup label="Categories"><option>Choose Make</option><option value="1">Champlain</option><option value="2">Caledonia</option><option value="3">Chittenden</option><option value="4">Shelburne</option><option value="5">Mercedes-Gainsboro</option><option value="6">Bennington</option><option value="7">Sangria Cerise</option><option value="8">Wisteria</option><option value="9">Monastery</option><option value="10">Sherbrooke</option></optgroup></select></div><div class="form-group col-xl-2 col-lg-2 col-md-12 mb-0"><select class="form-control select2-show-search border-bottom-0 border-left-0 w-100" data-placeholder="Select"><optgroup label="Categories"><option>Seating</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></optgroup></select></div><div class="form-group col-xl-2 col-lg-2 col-md-12 mb-0"><select class="form-control select2-show-search border-bottom-0 w-100" data-placeholder="Select"><optgroup label="Categories"><option>Max Price</option><option value="1">$10k</option><option value="2">$10k-$20K</option><option value="3">$20K-$30K</option><option value="4">$30K-$40K</option><option value="5">$40K-$50K</option><option value="6">$50K-$60K</option><option value="7">$60K-$70K</option><option value="8">$70k-$80K</option><option value="9">$80K &#60; Above</option></optgroup></select></div><div class="form-group col-xl-6 col-lg-6  col-md-12 mb-0 location"><div class="row no-gutters bg-white br-2"><div class="form-group  col-xl-8 col-lg-7 col-md-12 mb-0"><input type="text" class="form-control border" id="sale-location" placeholder="Location"><span><i class="fa fa-map-marker location-gps mr-1"></i></span></div><div class="col-xl-4 col-lg-5 col-md-12 mb-0"><a href="#" class="btn btn-block btn-primary  fs-14"><i class="fa fa-search"></i> Search</a></div></div></div></div></div></div><div class="tab-pane" id="tab2"><div class="search-background"><div class="form row no-gutters"><div class="form-group col-xl-2 col-lg-2 col-md-12 mb-0"><select class="form-control select2-show-search border-bottom-0 w-100" data-placeholder="Select"><optgroup label="Categories"><option>Choose Make</option><option value="1">Champlain</option><option value="2">Caledonia</option><option value="3">Chittenden</option><option value="4">Shelburne</option><option value="5">Mercedes-Gainsboro</option><option value="6">Bennington</option><option value="7">Sangria Cerise</option><option value="8">Wisteria</option><option value="9">Monastery</option><option value="10">Sherbrooke</option></optgroup></select></div><div class="form-group col-xl-2 col-lg-2 col-md-12 mb-0"><select class="form-control select2-show-search border-bottom-0 w-100" data-placeholder="Select"><optgroup label="Categories"><option>Seating</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></optgroup></select></div><div class="form-group col-xl-2 col-lg-2 col-md-12 mb-0"><select class="form-control select2-show-search border-bottom-0 w-100" data-placeholder="Select"><optgroup label="Categories"><option>Max Price</option><option value="1">$10k</option><option value="2">$10k-$20K</option><option value="3">$20K-$30K</option><option value="4">$30K-$40K</option><option value="5">$40K-$50K</option><option value="6">$50K-$60K</option><option value="7">$60K-$70K</option><option value="8">$70k-$80K</option><option value="9">$80K &#60; Above</option></optgroup></select></div><div class="form-group col-xl-6 col-lg-6  col-md-12 mb-0 location"><div class="row no-gutters bg-white br-2"><div class="form-group  col-xl-8 col-lg-7 col-md-12 mb-0"><input type="text" class="form-control border" placeholder="Location"><span><i class="fa fa-map-marker location-gps mr-1"></i></span></div><div class="col-xl-4 col-lg-5 col-md-12 mb-0"><a href="#" class="btn btn-block btn-primary  fs-14"><i class="fa fa-search"></i> Search</a></div></div></div></div></div></div></div></div></div></div></div></div></div> -->
      <div class="banner1 relative slider-images" height="270">
        <div class="container-fuild">
          <!-- Carousel -->
          <div class="owl-carousel slide-owl-carousel slider">
            <div class="item">
              <img alt="first slide" src="https://dev.cars-importers.com/slider_images/7876220220084743.jpeg" class="slideimage1">
            </div>
            <div class="item">
              <img alt="first slide" src="https://dev.cars-importers.com/slider_images/7876220220084743.jpeg" class="slideimage1">
            </div>
            <div class="item">
              <img alt="first slide" src="https://dev.cars-importers.com/slider_images/7876220220084743.jpeg" class="slideimage1">
            </div>
          </div>
          <div class="header-text slide-header-text pt-0 mt-0 mb-0 container">
            <div class="col-xl-10 col-lg-10 col-md-12 d-block mx-auto">
              <div class="search-background bg-transparent input-field">
                <!-- mobile type start-->
                <div class="text-center text-white ">
                  <h1 class="mb-1">WELCOME TO CARS IMPORTERS</h1>
                  <p></p>
                </div>
                <!-- mobile type end -->
                <div class="item-search-tabs">
                  <div class="item-search-menu">
                    <ul class="nav"></ul>
                  </div>
                  <div class="tab-content index-search-select">
                    <div class="tab-pane active" id="tab1">
                      <div class="search-background">
                        <div class="form row no-gutters">
                          <div class="form-group col-lg-3 col-md-6 col-sm-6 mb-0">
                            <select class="form-control select2-show-search-make border-bottom-0 border-left-0 w-100" data-placeholder="Select" name="search_make" id="make-id" required>
                              <option value="" selected></option>
                              <option value="all" style="background-color:#f0eef7!important;">All</option>
                              <option>Choose Make</option>
                              <option value="1">Champlain</option>
                              <option value="2">Caledonia</option>
                              <option value="3">Chittenden</option>
                              <option value="4">Shelburne</option>
                              <option value="5">Mercedes-Gainsboro</option>
                              <option value="6">Bennington</option>
                              <option value="7">Sangria Cerise</option>
                              <option value="8">Wisteria</option>
                              <option value="9">Monastery</option>
                              <option value="10">Sherbrooke</option>
                            </select>
                          </div>
                          <div class="form-group col-lg-3 col-md-6 col-sm-6 mb-0">
                            <select class="form-control select2-show-search-model border-bottom-0 border-left-0 w-100" data-placeholder="Select" name="search_model" id="model-id">
                              <option></option>
                            </select>
                          </div>
                          <div class="form-group col-lg-2 col-md-6 col-sm-6 mb-0">
                            <select class="form-control select2-show-search-yf border-bottom-0 border-left-0 w-100" data-placeholder="Select" name="search_year_from" id="search-year-from">
                              <option></option>
                              <option>Seating</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                            </select>
                          </div>
                          <div class="form-group col-lg-2 col-md-6 col-sm-6 mb-0">
                            <select class="form-control select2-show-search-yt border-bottom-0 border-left-0 w-100" data-placeholder="Slect" name="search_year_to" id="search-year-to">
                              <option></option>
                              <option>Seating</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                            </select>
                          </div>
                          <div class="col-lg-2 col-md-12 col-sm-6 mb-0">
                            <a href="javascript:void(0);" class="btn btn-block btn-primary fs-14" id="btn-search-cars">
                              <i class="fa fa-search"></i> Search </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Section-->
    <!--Section-->
    <!-- 		<section class="categories"><div class="container"><div id="small-categories" class="owl-carousel owl-carousel-icons2"><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/1.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Instinct</h5><small class="badge badge-pill badge-primary mr-2">45</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/2.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Roamer</h5><small class="badge badge-pill badge-primary mr-2">32</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/3.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Enigma</h5><small class="badge badge-pill badge-primary mr-2">19</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/4.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Storm</h5><small class="badge badge-pill badge-primary mr-2">25</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/5.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Prodigy</h5><small class="badge badge-pill badge-primary mr-2">23</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/6.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Prospect</h5><small class="badge badge-pill badge-primary mr-2">52</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/7.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Viper</h5><small class="badge badge-pill badge-primary mr-2">46</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/8.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Behemoth</h5><small class="badge badge-pill badge-primary mr-2">22</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/9.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Marvel</h5><small class="badge badge-pill badge-primary mr-2">31</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/10.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Encounter</h5><small class="badge badge-pill badge-primary mr-2">12</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/11.jpg') }}" alt="img"  class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Resolve</h5><small class="badge badge-pill badge-primary mr-2">21</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div><div class="item"><div class="card mb-0"><div class="card-body"><div class="cat-item text-center"><a href="cars-list.html"></a><div class="cat-img1"><img src="{{ url('frontend/images/media/logos/12.jpg') }}" alt="img" class="mx-auto"></div><div class="cat-desc"><h5 class="mb-1">Inquiry</h5><small class="badge badge-pill badge-primary mr-2">24</small><span class="text-muted">Ads are Posted</span></div></div></div></div></div></div></div></section> -->
    <section class="categories pb-2 mb-3 brand-logo-mtop">
      <div class="container main-container-wd">
        <div id="small-categories" class="owl-carousel owl-carousel-col-5">
          <div class="item">
            <div class="card mb-0">
              <div class="card-body">
                <div class="cat-item text-center">
                  <a href="#"></a>
                  <div class="mx-auto">
                    <center>
                    <img src="https://dev.cars-importers.com/make_logos/make_logo_447983_034911_21022022.png" alt="img" style="width:100px !important;height:80px !important;">
                  </center>
                  </div>
                  <div class="cat-desc">
                    <h5 class="mb-1" >TOYOTA<br><span class="smallspan">(104)</span></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 class="text-center">
          <a href="#" class="btn">View All</a>
        </h4>
      </div>
    </section>
    <!--Section-->
    <!--Section-->
    <section class="sptb bg-white" id="mainpage-inner-one">
      <div class="container latest-cars-wd">
        <div class="section-title center-block text-center">
          <h2>Newest Car</h2>
          <!-- <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p> -->
        </div>
        <!-- <div id="myCarousel1" class="owl-carousel owl-carousel-icons2"> -->
        <div class="row">
          <div class="col-lg-3 col-md-4 col-xl-3 col-sm-12 col-xs-6">
            <div class="item">
              <div class="card mb-0">
                <div class="card-body pb-0">
                  <div class="arrow-ribbon bg-primary">2,550 OMR</div>
                  <div class="custom-section-one">
                    <img src="https://dev-sooq-cars.com/member_profile_images/115-547621_110013_22022022.jpeg" alt="img" class="cover-image">
                  </div>
                  <div class="item-card2">
                    <div class="item-card2-desc">
                      <div class="item-card2-text">
                        <div class="small-one">
                          <p class="">Union <a href="#" class="image-prop1">
                              <img src="https://dev-sooq-cars.com/member_profile_images/115-547621_110013_22022022.jpeg" class="image-prop1">
                            </a>
                          </p>
                        </div>
                        <div class="small-two">
                          <p class="span-price">
                            <span>19,000</span>
                          </p>
                          <p>
                            <span class="days-span">+14 days</span>
                            <a href="javascript:void(0);" class="btn-wishlist">
                              <i class="far fa-heart  mt-1"></i>
                            </a>
                          </p>
                        </div>
                        <div class="small-three">
                          <p class="">
                            <span class="whatsapp-span1 text-success">
                              <i class="fab fa-whatsapp"></i> Whatsapp </span>
                            <span class="call-span1">
                              <i class="fas fa-phone"></i> Call </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="Automatic">
                  <i class="fa fa-car text-muted"></i>
                  <span class="text-muted">Auto</span>
                </a>
                <a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="2300 Kilometrs">
                  <i class="fa fa-road text-muted"></i>
                  <span class="text-muted">2300</span>
                </a>
                <a href="#" class="" data-toggle="tooltip" data-placement="bottom" data-original-title="FuelType">
                  <i class="fa fa-tachometer text-muted"></i>
                  <span class="text-muted">Petrol</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-xl-3 col-sm-12 col-xs-6">
            <div class="item">
              <div class="card mb-0">
                <div class="card-body pb-0">
                  <div class="arrow-ribbon bg-primary">2,550 OMR</div>
                  <div class="custom-section-one">
                    <img src="https://dev-sooq-cars.com/member_profile_images/115-547621_110013_22022022.jpeg" alt="img" class="cover-image">
                  </div>
                  <div class="item-card2">
                    <div class="item-card2-desc">
                      <div class="item-card2-text">
                        <div class="small-one">
                          <p class="">Union <a href="#" class="image-prop1">
                              <img src="https://dev-sooq-cars.com/member_profile_images/115-547621_110013_22022022.jpeg" class="image-prop1">
                            </a>
                          </p>
                        </div>
                        <div class="small-two">
                          <p class="span-price">
                            <span>19,000</span>
                          </p>
                          <p>
                            <span class="days-span">+14 days</span>
                            <a href="javascript:void(0);" class="btn-wishlist">
                              <i class="far fa-heart  mt-1"></i>
                            </a>
                          </p>
                        </div>
                        <div class="small-three">
                          <p class="">
                            <span class="whatsapp-span1 text-success">
                              <i class="fab fa-whatsapp"></i> Whatsapp </span>
                            <span class="call-span1">
                              <i class="fas fa-phone"></i> Call </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="Automatic">
                  <i class="fa fa-car text-muted"></i>
                  <span class="text-muted">Auto</span>
                </a>
                <a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="2300 Kilometrs">
                  <i class="fa fa-road text-muted"></i>
                  <span class="text-muted">2300</span>
                </a>
                <a href="#" class="" data-toggle="tooltip" data-placement="bottom" data-original-title="FuelType">
                  <i class="fa fa-tachometer text-muted"></i>
                  <span class="text-muted">Petrol</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-xl-3 col-sm-12 col-xs-6">
            <div class="item">
              <div class="card mb-0">
                <div class="card-body pr-0 pl-0 pt-0">
                  <div class="arrow-ribbon bg-primary">2,550 OMR</div>
                  <div class="custom-section-one">
                    <img src="https://dev-sooq-cars.com/member_profile_images/115-547621_110013_22022022.jpeg" alt="img" class="cover-image">
                  </div>
                  <div class="item-card2">
                    <div class="item-card2-desc">
                      <div class="item-card2-text">
                        <div class="small-one">
                          <p class="">Union <a href="#" class="image-prop1">
                              <img src="https://dev-sooq-cars.com/member_profile_images/115-547621_110013_22022022.jpeg" class="image-prop1">
                            </a>
                          </p>
                        </div>
                        <div class="small-two">
                          <p class="span-price">
                            <span>19,000</span>
                          </p>
                          <p>
                            <span class="days-span">+14 days</span>
                            <a href="javascript:void(0);" class="btn-wishlist">
                              <i class="far fa-heart  mt-1"></i>
                            </a>
                          </p>
                        </div>
                        <div class="small-three">
                          <p class="">
                            <span class="whatsapp-span1 text-success">
                              <i class="fab fa-whatsapp"></i> Whatsapp </span>
                            <span class="call-span1">
                              <i class="fas fa-phone"></i> Call </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="Automatic">
                  <i class="fa fa-car text-muted"></i>
                  <span class="text-muted">Auto</span>
                </a>
                <a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="2300 Kilometrs">
                  <i class="fa fa-road text-muted"></i>
                  <span class="text-muted">2300</span>
                </a>
                <a href="#" class="" data-toggle="tooltip" data-placement="bottom" data-original-title="FuelType">
                  <i class="fa fa-tachometer text-muted"></i>
                  <span class="text-muted">Petrol</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-xl-3 col-sm-12 col-xs-6">
            <div class="item">
              <div class="card mb-0">
                <div class="card-body pb-0">
                  <div class="arrow-ribbon bg-primary">2,550 OMR</div>
                  <div class="custom-section-one">
                    <img src="https://dev-sooq-cars.com/member_profile_images/115-547621_110013_22022022.jpeg" alt="img" class="cover-image">
                  </div>
                  <div class="item-card2">
                    <div class="item-card2-desc">
                      <div class="item-card2-text">
                        <div class="small-one">
                          <p class="">Union <a href="#" class="image-prop1">
                              <img src="https://dev-sooq-cars.com/member_profile_images/115-547621_110013_22022022.jpeg" class="image-prop1">
                            </a>
                          </p>
                        </div>
                        <div class="small-two">
                          <p class="span-price">
                            <span>19,000</span>
                          </p>
                          <p>
                            <span class="days-span">+14 days</span>
                            <a href="javascript:void(0);" class="btn-wishlist">
                              <i class="far fa-heart  mt-1"></i>
                            </a>
                          </p>
                        </div>
                        <div class="small-three">
                          <p class="">
                            <span class="whatsapp-span1 text-success">
                              <i class="fab fa-whatsapp"></i> Whatsapp </span>
                            <span class="call-span1">
                              <i class="fas fa-phone"></i> Call </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="Automatic">
                  <i class="fa fa-car text-muted"></i>
                  <span class="text-muted">Auto</span>
                </a>
                <a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="2300 Kilometrs">
                  <i class="fa fa-road text-muted"></i>
                  <span class="text-muted">2300</span>
                </a>
                <a href="#" class="" data-toggle="tooltip" data-placement="bottom" data-original-title="FuelType">
                  <i class="fa fa-tachometer text-muted"></i>
                  <span class="text-muted">Petrol</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="item"><div class="card mb-0"><div class="power-ribbon power-ribbon-top-left text-warning"><span class="bg-warning"><i class="fa fa-bolt"></i></span></div><div class="item-card2-img"><a class="link" href="cars.html"></a><img src="{{ url('frontend/images/media/others/v5.jpg') }}" alt="img" class="cover-image"><div class="item-tag-overlaytext"><span class="text-white bg-success"> New</span><span class="text-white bg-danger"> Rent</span></div><div class="item-card2-icons"><a href="cars.html" class="item-card2-icons-l bg-primary"><i class="car car-honda"></i></a><a href="#" class="item-card2-icons-r wishlist active"><i class="fa fa fa-heart-o"></i></a></div></div><div class="card-body pb-0"><div class="item-card2"><div class="item-card2-desc"><div class="item-card2-text"><a href="cars.html" class="text-dark"><h4 class="mb-0">Union</h4></a></div><div class="d-flex"><a href=""><p class="pb-0 pt-0 mb-2 mt-2"><i class="fa fa-map-marker text-danger mr-2"></i>Florida, USA</p></a><span class="ml-3 pb-0 pt-0 mb-2 mt-2 font-weight-bold">$789.00</span></div><p class="">Lorem Ipsum available, quis int nostrum exercitationem </p></div></div><div class="item-card2-footer mt-4 mb-4"><div class="item-card2-footer-u"><div class="d-md-flex"><span class="review_score mr-2 badge badge-primary">4.0/5</span><div class="rating-stars d-inline-flex ml-auto"><input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="3"><div class="rating-stars-container"><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm"><i class="fa fa-star"></i></div><div class="rating-star sm"><i class="fa fa-star"></i></div></div> (5 Reviews)
											</div></div></div></div></div><div class="card-footer"><a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="Automatic"><i class="fa fa-car text-muted"></i><span class="text-default">Auto</span></a><a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="2300 Kilometrs"><i class="fa fa-road text-muted"></i><span class="text-default">2300</span></a><a href="#" class="" data-toggle="tooltip" data-placement="bottom" data-original-title="FuelType"><i class="fa fa-tachometer text-muted"></i><span class="text-default">Petrol</span></a></div></div></div><div class="item"><div class="card mb-0"><div class="power-ribbon power-ribbon-top-left text-warning"><span class="bg-warning"><i class="fa fa-bolt"></i></span></div><div class="item-card2-img"><a class="link" href="cars.html"></a><img src="{{ url('frontend/images/media/others/dummy.jpg') }}" alt="img" class="cover-image"><div class="item-tag-overlaytext"><span class="text-white bg-gray"> Used</span></div><div class="item-card2-icons"><a href="#" class="item-card2-icons-l bg-primary"><i class="car car-toyota"></i></a><a href="#" class="item-card2-icons-r wishlist active"><i class="fa fa fa-heart"></i></a></div></div><div class="card-body pb-0"><div class="item-card2"><div class="item-card2-desc"><div class="item-card2-text"><a href="cars.html" class="text-dark"><h4 class="mb-0">Lioness</h4></a></div><div class="d-flex pb-0 pt-0"><a href=""><p class="pb-0 pt-0 mb-2 mt-2"><i class="fa fa-map-marker text-danger mr-2"></i>Florida, Uk</p></a><span class="ml-3 pb-0 pt-0 mb-2 mt-2 font-weight-bold">$200.00</span></div><p class="">Lorem Ipsum available, quis int nostrum exercitationem </p></div></div><div class="item-card2-footer mt-4 mb-4"><div class="item-card2-footer-u"><div class="d-md-flex"><span class="review_score mr-2 badge badge-primary">4.0/5</span><div class="rating-stars d-inline-flex ml-auto"><input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="3"><div class="rating-stars-container"><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm"><i class="fa fa-star"></i></div><div class="rating-star sm"><i class="fa fa-star"></i></div></div> (5 Reviews)
											</div></div></div></div></div><div class="card-footer"><a href="#" class="mr-2" data-toggle="tooltip" data-placement="bottom" data-original-title="Manual"><i class="fa fa-car text-muted"></i><span class="text-default">Manual</span></a><a href="#" class="mr-2" data-toggle="tooltip" data-placement="bottom" data-original-title="2300 Kilometrs"><i class="fa fa-road text-muted"></i><span class="text-default">3000</span></a><a href="#" class="" data-toggle="tooltip" data-placement="bottom" data-original-title="FuelType"><i class="fa fa-tachometer text-muted"></i><span class="text-default">Petrol</span></a></div></div></div><div class="item"><div class="card mb-0"><div class="item-card2-img"><a class="link" href="cars.html"></a><img src="{{ url('frontend/images/media/others/b1.jpg') }}" alt="img" class="cover-image"><div class="item-tag-overlaytext"><span class="text-white bg-success"> New</span></div><div class="item-card2-icons"><a href="#" class="item-card2-icons-l bg-primary"><i class="car car-volkswagen"></i></a><a href="#" class="item-card2-icons-r wishlist active"><i class="fa fa fa-heart"></i></a></div></div><div class="card-body pb-0"><div class="item-card2"><div class="item-card2-desc"><div class="item-card2-text"><a href="cars.html" class="text-dark"><h4 class="mb-0">Millenium</h4></a></div><div class="d-flex pb-0 pt-0"><a href=""><p class="pb-0 pt-0 mb-2 mt-2"><i class="fa fa-map-marker text-danger mr-2"></i>Florida, Uk</p></a><span class="ml-3 pb-0 pt-0 mb-2 mt-2 font-weight-bold">$200.00</span></div><p class="">Lorem Ipsum available, quis int nostrum exercitationem </p></div></div><div class="item-card2-footer mt-4 mb-4"><div class="item-card2-footer-u"><div class="d-md-flex"><span class="review_score mr-2 badge badge-primary">4.0/5</span><div class="rating-stars d-inline-flex ml-auto"><input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="3"><div class="rating-stars-container"><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm"><i class="fa fa-star"></i></div><div class="rating-star sm"><i class="fa fa-star"></i></div></div> (5 Reviews)
											</div></div></div></div></div><div class="card-footer"><a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="Automatic"><i class="fa fa-car text-muted"></i><span class="text-default">Auto</span></a><a href="#" class="mr-3" data-toggle="tooltip" data-placement="bottom" data-original-title="2300 Kilometrs"><i class="fa fa-road text-muted"></i><span class="text-default">4000</span></a><a href="#" class="" data-toggle="tooltip" data-placement="bottom" data-original-title="FuelType"><i class="fa fa-tachometer text-muted"></i><span class="text-default">Petrol</span></a></div></div></div><div class="item"><div class="card mb-0 sold-out"><div class="ribbon ribbon-top-left text-danger"><span class="bg-danger">sold out</span></div><div class="item-card2-img"><a class="link" href="cars.html"></a><img src="{{ url('frontend/images/media/others/v1.jpg') }}" alt="img" class="cover-image"><div class="item-tag-overlaytext"><span class="text-white bg-success"> New</span></div><div class="item-card2-icons"><a href="#" class="item-card2-icons-l bg-primary"><i class="car car-ferrari"></i></a><a href="#" class="item-card2-icons-r wishlist"><i class="fa fa fa-heart-o"></i></a></div></div><div class="card-body pb-0"><div class="item-card2"><div class="item-card2-desc"><div class="item-card2-text"><a href="cars.html" class="text-dark"><h4 class="mb-0">Roamer</h4></a></div><div class="d-flex pb-0 pt-0"><a href=""><p class="pb-0 pt-0 mb-2 mt-2"><i class="fa fa-map-marker text-danger mr-2"></i>Florida, Uk</p></a><span class="ml-3 pb-0 pt-0 mb-2 mt-2 font-weight-bold">$200.00</span></div><p class="">Lorem Ipsum available, quis int nostrum exercitationem </p></div></div><div class="item-card2-footer mt-4 mb-4"><div class="item-card2-footer-u"><div class="d-md-flex"><span class="review_score mr-2 badge badge-primary">4.0/5</span><div class="rating-stars d-inline-flex ml-auto"><input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="3"><div class="rating-stars-container"><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm"><i class="fa fa-star"></i></div><div class="rating-star sm"><i class="fa fa-star"></i></div></div> (5 Reviews)
											</div></div></div></div></div><div class="card-footer"><a href="#" class="mr-2" data-toggle="tooltip" data-placement="bottom" data-original-title="Manual"><i class="fa fa-car text-muted"></i><span class="text-default">Manual</span></a><a href="#" class="mr-2" data-toggle="tooltip" data-placement="bottom" data-original-title="2300 Kilometrs"><i class="fa fa-road text-muted"></i><span class="text-default">2000</span></a><a href="#" class="" data-toggle="tooltip" data-placement="bottom" data-original-title="FuelType"><i class="fa fa-tachometer text-muted"></i><span class="text-default">Petrol</span></a></div></div></div><div class="item"><div class="card mb-0"><div class="power-ribbon power-ribbon-top-left text-warning"><span class="bg-warning"><i class="fa fa-bolt"></i></span></div><div class="item-card2-img"><a class="link" href="cars.html"></a><img src="{{ url('frontend/images/media/others/f3.jpg') }}" alt="img" class="cover-image"><div class="item-tag-overlaytext"><span class="text-white bg-success"> New</span></div><div class="item-card2-icons"><a href="#" class="item-card2-icons-l bg-primary"><i class="car car-honda"></i></a><a href="#" class="item-card2-icons-r wishlist active"><i class="fa fa fa-heart-o"></i></a></div></div><div class="card-body pb-0"><div class="item-card2"><div class="item-card2-desc"><div class="item-card2-text"><a href="cars.html" class="text-dark"><h4 class="mb-0">Union</h4></a></div><div class="d-flex pb-0 pt-0"><a href=""><p class="pb-0 pt-0 mb-2 mt-2"><i class="fa fa-map-marker text-danger mr-2"></i>Florida, Uk</p></a><span class="ml-3 pb-0 pt-0 mb-2 mt-2 font-weight-bold">$200.00</span></div><p class="">Lorem Ipsum available, quis int nostrum exercitationem </p></div></div><div class="item-card2-footer mt-4 mb-4"><div class="item-card2-footer-u"><div class="d-md-flex"><span class="review_score mr-2 badge badge-primary">4.0/5</span><div class="rating-stars d-inline-flex ml-auto"><input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="3"><div class="rating-stars-container"><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm is--active"><i class="fa fa-star"></i></div><div class="rating-star sm"><i class="fa fa-star"></i></div><div class="rating-star sm"><i class="fa fa-star"></i></div></div> (5 Reviews)
											</div></div></div></div></div><div class="card-footer"><a href="#" class="mr-2" data-toggle="tooltip" data-placement="bottom" data-original-title="Manual"><i class="fa fa-car text-muted"></i><span class="text-default">Manual</span></a><a href="#" class="mr-2" data-toggle="tooltip" data-placement="bottom" data-original-title="2300 Kilometrs"><i class="fa fa-road text-muted"></i><span class="text-default">2000</span></a><a href="#" class="" data-toggle="tooltip" data-placement="bottom" data-original-title="FuelType"><i class="fa fa-tachometer text-muted"></i><span class="text-default">Petrol</span></a></div></div></div> -->
        <!-- </div> -->
      </div>
      <div class="center-block text-center">
        <a href="#" class="page-link btn btn-primary btn-small" id="show_more_btn">Show All <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
        </a>
        <br>
      </div>
    </section>
@endsection
   