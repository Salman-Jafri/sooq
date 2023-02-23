@extends('frontend.template.main')
@section('maincontent')
<div class="sptb-new">
<section class="sptb">
	<div class="container customerpage">
		<div class="row">
		    <div class="single-page">
				<div class="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
					<div class="wrapper wrapper2">
					<h3 class="pb-0 mb-0">Register</h3>

						<form id="registration-form" class="card-body" method="POST" action="{{route("user.store")}}" tabindex="500">
                            @csrf
                            @if ($errors->any())
                                <div class="row" id="error-msg-div">
                                    <div class="col-12">
                                        <h5 class="badge badge-danger"> Please Rectify Following to Continue </h5>
                                    </div>
                                    <div class="col-12 text-left text-danger">
                                        <span id="response-msg" class="text-left">
                                            <ul>
                                            @foreach ($errors->all() as $error)
                                                <li>{{ $error }}</li>
                                            @endforeach
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                            @endif
							<div class="name">
								<input type="text" name="name" id="member_name" required="">
								<label>Name</label>
							</div>
							<div class="name">
								<input type="text" name="contact" id="member_contact" class="isnumber" required="">
								<label>Contact</label>
							</div>
							<div class="name">
								<input type="email" name="email" id="member_email">
								<label>Email</label>
							</div>
							<div class="mail">
								<input type="text" class="nospace" name="username" id="username" required="">
								<label>Username</label>
							</div>
							<div class="passwd">
								<input type="password" name="password" id="userpass" required="">
								<label>Password</label>
							</div>
							<div class="submit">
								<button type="submit" class="btn btn-primary btn-block" id="btn-register">Register</button>
							</div>
							<p class="text-dark mb-0">Already have an account?<a href="#" class="text-primary ml-1">Login</a></p>
						</form>
						<div class="card-body social-images">
							<p class="text-body text-left">Sign In With Social Accounts</p>
							<div class="row">
								<div class="col-6 d-none">
									<a href="#" class="btn btn-white mr-2 border px-2 btn-lg btn-block mb-0 text-left">
										<img src="{{ url('frontend/images/svgs/facebook.svg') }}" class="h-5 w-5" alt=""><span class="ml-3 d-inline-block font-weight-bold"> Facebook</span>
									</a>
								</div>
								<div class="col-12">
									<a href="#" class="btn btn-white mr-2 px-2 border btn-lg btn-block mb-0 text-left">
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
