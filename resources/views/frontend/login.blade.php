@extends('frontend.template.main')
@section('maincontent')
<div class="sptb-new">
<section class="sptb">
	<div class="container customerpage">
		<div class="row">
			<div class="single-page">
				<div class="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
					<div class="wrapper wrapper2">
						<h3>Login</h3>


					<form id="login-form" action="{{ route('user.auth') }}" method="POST" class="card-body" tabindex="500">
                        @csrf

							<div class="row d-none" id="error-msg-div">
								<div class="col-12">
									<h5 class="badge badge-danger"> Please Rectify Following to Continue </h5>
								</div>
								<div class="col-12 text-left text-danger">
									<span id="response-msg" class="text-left"></span>
								</div>
							</div>
                            <div class="mail">
								<input type="email" name="email" id="email" required="">
								<label>Email</label>
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
							</div>
							<div class="password">
								<input type="password" name="password" id="password" required="">
								<label>Password</label>
							</div>
							<div class="submit">
								<button type="submit" class="btn btn-primary btn-block" id="btn-login">Login</button>
							</div>
							<p class="mb-2"><a href="#" data-toggle="modal" data-target="#password-reset-modal">Forgot Password</a></p>
							<p class="text-dark mb-0">Don't have account?<a href="{{route("user.create")}}" class="text-primary ml-1">Sign Up</a></p>
						</form>
								<!-- <span class="main-or">Or</span> -->

						<div class="card-body social-images">
							<p class="text-body text-center">Sign In With Social Accounts</p>
							<div class="row">
								<div class="col-6 d-none">
									<a href="#" class="btn btn-white mr-2 border px-2 btn-lg btn-block text-left">
										<img src="{{ url('frontend/images/svgs/facebook.svg') }}" class="h-5 w-5" alt=""><span class="ml-3 d-inline-block font-weight-bold"> Facebook</span>
									</a>
								</div>
								<div class="col-12">
									<a href="#" class="btn btn-white mr-2 px-2 border btn-lg btn-block text-left">
										<img src="{{ url('frontend/images/svgs/search.svg') }}" class="h-5 w-5" alt=""><span class="ml-3 d-inline-block font-weight-bold"> Google</span>
									</a>
								</div>

							</div>
						</div>



					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="sptb2 bg-white border-top">
	<div class="container">
		<div class="row">
			<div class="col-lg-7 col-xl-6 col-md-12">
				<div class="sub-newsletter">
					<h3 class="mb-2"><i class="fab fa-whatsapp mr-2"></i> Subscribe To Our WhatsApp</h3>
					<p class="mb-0">We will not share your number to any third party companies</p>
				</div>
			</div>
			<div class="col-lg-5 col-xl-6 col-md-12">
				<div class="input-group sub-input mt-1">
					<input type="text" class="form-control input-lg " placeholder="Enter your Phone Number">
					<div class="input-group-append ">
						<button type="button" class="btn btn-primary btn-lg br-tr-3  br-br-3">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
</div>
@endsection
