@include('admin.template.head')

  <!--add Custom css by yield-->
    @yield('customcss')   

</head>

<body data-topbar="dark" data-layout="horizontal">

    <!-- Begin page -->
    <div id="layout-wrapper">

        @include('admin.template.header')

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    <!-- start page  -->
               
                    @yield('content')
    
                    <!-- end page  -->

                </div>
            <!-- container-fluid -->
            </div>
        <!-- End Page-content -->



        @include('admin.template.footer')

    </div>

    <!-- modal forms -->
       @yield('modal')
    <!-- modals froms ends-->

    <!-- END layout-wrapper -->

    <!-- @include('admin.template.sidebar') -->


    <!-- Right bar overlay-->
    <!-- <div class="rightbar-overlay"></div> -->

    @include('admin.template.scripts')
  <!--add  Custom js by yieid-->
    @yield('customjs')

    @include('admin.template.closing')
