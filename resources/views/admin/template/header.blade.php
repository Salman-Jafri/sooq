<header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="#" class="logo logo-dark">
            <span class="logo-sm">
              <img src="{{ url('admin/images/logo.svg') }}" alt="" height="22">
            </span>
            <span class="logo-lg">
              <img src="{{ url('admin/images/logo-dark.png') }}" alt="" height="17">
            </span>
          </a>
          <a href="{{ url('/')}}" class="logo logo-light">
            <span class="logo-sm">
              <img src="{{ url('admin/images/logo.png') }}" alt="" height="22">
            </span>
            <span class="logo-lg">
              <img src="{{ url('admin/images/logo.png') }}" alt="" height="19">
            </span>
          </a>
        </div>
        <button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>
      <div class="d-flex">
<!--         <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item waves-effect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="" src="{{ url('admin/images/flags/oman.png') }}" alt="Header Language" height="16">
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <img src="{{ url('admin/images/flags/oman.png') }}" alt="user-image" class="mr-1" height="12">
              <span class="align-middle">oman</span>
            </a>
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <img src="{{ url('admin/images/flags/Qatar.png') }}" alt="user-image" class="mr-1" height="12">
              <span class="align-middle">Qatar</span>
            </a>
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <img src="{{ url('admin/images/flags/UAE.png') }}" alt="user-image" class="mr-1" height="12">
              <span class="align-middle">UAE</span>
            </a>
          </div>
        </div> -->
        <div class="dropdown d-none d-lg-inline-block ml-1">
          <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
            <i class="bx bx-fullscreen"></i>
          </button>
        </div>
        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="rounded-circle header-profile-user" src="{{ url('admin/images/users/avatar-1.jpg') }}" alt="Header Avatar">
            <span class="d-none d-xl-inline-block ml-1">admin</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <!-- item-->
            <a class="dropdown-item" href="#">
              <i class="bx bx-user font-size-16 align-middle mr-1"></i> Profile </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-danger" href="#">
              <i class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> Logout </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="topnav">
    <div class="container-fluid">
      <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
        <div class="collapse navbar-collapse" id="topnav-menu-content">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="bx bx-customize mr-2"></i>Dashboard <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-pages">
                <a href="{{url('dashboard')}}" class="dropdown-item">Dashboard</a>
                <a href="{{url('dashboard1')}}" class="dropdown-item">Dashboard 1</a>
                <a href="{{url('dashboard2')}}" class="dropdown-item">Dashboard 2</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="bx bx-customize mr-2"></i>Members <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-pages">
                <a href="{{url('memberCategory')}}" class="dropdown-item">Category</a>
                <a href="{{url('members')}}" class="dropdown-item">All Members</a>
                <a href="{{url('waMessage')}}" class="dropdown-item">WhatsApp Message</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="bx bx-customize mr-2"></i>Auto Management <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-pages">
                <a href="{{url('cars')}}" class="dropdown-item">All Cars</a>
                <a href="{{url('carsOrigin')}}" class="dropdown-item">Cars Origin</a>
                <a href="{{url('carsMake')}}" class="dropdown-item">Cars Make</a>
                <a href="{{url('carsModel')}}" class="dropdown-item">Cars Model</a>
                <a href="{{url('carsCylinders')}}" class="dropdown-item">Cylinders</a>
                <a href="{{url('carsTransmission')}}" class="dropdown-item">Transmission</a>
                <a href="{{url('carsKeys')}}" class="dropdown-item">Keys</a>
                <a href="{{url('carsInteriorColor')}}" class="dropdown-item">Interior Color</a>
                <a href="{{url('carsExteriorColor')}}" class="dropdown-item">Exterior Color</a>
                <a href="{{url('carsOptions')}}" class="dropdown-item">Options</a>
                <a href="{{url('carsFuelType')}}" class="dropdown-item">Fuel Type</a>
                <a href="{{url('carsDriveLine')}}" class="dropdown-item">Drive Line</a>
                <a href="{{url('carsOdometer')}}" class="dropdown-item">Odometer</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="bx bx-customize mr-2"></i>Expenses <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-pages">
                <a href="{{url('expenseCategory')}}" class="dropdown-item">Category</a>
                <a href="{{url('expenses')}}" class="dropdown-item">Expenses</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="bx bx-customize mr-2"></i>Web Management <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-pages">
                <a href="{{url('webHome')}}" class="dropdown-item">Home Page</a>
                <a href="{{url('webSliders')}}" class="dropdown-item">Sliders</a>
                <a href="{{url('webFooter')}}" class="dropdown-item">Footer</a>
                <a href="{{url('webLearning')}}" class="dropdown-item">Learning</a>
                <a href="{{url('subscribers')}}" class="dropdown-item">Subscribers</a>
                <a href="{{url('translation')}}" class="dropdown-item">Translation</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Users">
                <i class="bx bx-customize mr-2"></i>Users </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>